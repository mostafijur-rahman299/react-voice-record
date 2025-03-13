import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.5rem',
    borderRadius: '25px',
    background: '#f5f5f5',
    width: 'fit-content'
  },
  timer: {
    fontSize: '0.9rem',
    color: '#666',
    minWidth: '50px'
  },
  button: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    background: '#4d79ff',
    color: '#fff',
    '&:hover': {
      transform: 'scale(1.05)',
      background: '#3d69ff'
    }
  },
  recordingButton: {
    background: '#ff4d4d',
    '&:hover': {
      background: '#ff3d3d'
    }
  },
  pausedButton: {
    background: '#ffa500',
    '&:hover': {
      background: '#ff9500'
    }
  }
};

const VoiceRecorder = ({
  onRecordingStart,
  onRecordingStop,
  onRecordingUpdate,
  onRecordingPause,
  onRecordingResume,
  styles = {},
  startIcon = '●',
  stopIcon = '■',
  pauseIcon = '⏸',
  resumeIcon = '▶'
}) => {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [recordedTime, setRecordedTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  const mergedStyles = {
    container: { ...defaultStyles.container, ...styles.container },
    timer: { ...defaultStyles.timer, ...styles.timer },
    button: { ...defaultStyles.button, ...styles.button },
    recordingButton: { ...defaultStyles.recordingButton, ...styles.recordingButton },
    pausedButton: { ...defaultStyles.pausedButton, ...styles.pausedButton }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        console.log('Recording stopped, blob:', audioBlob);
        onRecordingStop?.(audioBlob);
        audioChunksRef.current = [];
      };

      mediaRecorder.start();
      setRecording(true);
      setPaused(false);
      onRecordingStart?.();

      timerRef.current = setInterval(() => {
        setRecordedTime(prev => {
          const newTime = prev + 1;
          onRecordingUpdate?.(newTime);
          return newTime;
        });
      }, 1000);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setRecording(false);
      setPaused(false);
      setRecordedTime(0);
      clearInterval(timerRef.current);
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.pause();
      clearInterval(timerRef.current);
      setPaused(true);
      onRecordingPause?.();
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.resume();
      setPaused(false);
      onRecordingResume?.();
      
      timerRef.current = setInterval(() => {
        setRecordedTime(prev => {
          const newTime = prev + 1;
          onRecordingUpdate?.(newTime);
          return newTime;
        });
      }, 1000);
    }
  };

  const handleClick = () => {
    if (!recording) {
      startRecording();
    } else if (paused) {
      resumeRecording();
    } else if (recording) {
      pauseRecording();
    }
  };

  return (
    <div style={mergedStyles.container}>
      {recording && (
        <>
          <span style={mergedStyles.timer}>
            {formatTime(recordedTime)}
          </span>
          <button
            style={{
              ...mergedStyles.button,
              ...mergedStyles.recordingButton
            }}
            onClick={stopRecording}
            title="Stop Recording"
          >
            {stopIcon}
          </button>
        </>
      )}
      <button
        style={{
          ...mergedStyles.button,
          ...(paused ? mergedStyles.pausedButton : {})
        }}
        onClick={handleClick}
        title={!recording ? 'Start Recording' : (paused ? 'Resume Recording' : 'Pause Recording')}
      >
        {!recording ? startIcon : (paused ? resumeIcon : pauseIcon)}
      </button>
    </div>
  );
};

VoiceRecorder.propTypes = {
  onRecordingStart: PropTypes.func,
  onRecordingStop: PropTypes.func,
  onRecordingUpdate: PropTypes.func,
  onRecordingPause: PropTypes.func,
  onRecordingResume: PropTypes.func,
  styles: PropTypes.shape({
    container: PropTypes.object,
    timer: PropTypes.object,
    button: PropTypes.object,
    recordingButton: PropTypes.object,
    pausedButton: PropTypes.object
  }),
  startIcon: PropTypes.node,
  stopIcon: PropTypes.node,
  pauseIcon: PropTypes.node,
  resumeIcon: PropTypes.node
};

export default VoiceRecorder;
