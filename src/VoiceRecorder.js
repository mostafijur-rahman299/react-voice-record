import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
  container: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    width: 'fit-content',
    gap: '12px',
    padding: '8px 16px',
    borderRadius: '40px',
    transition: 'all 0.3s ease',
  },
  timer: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    fontFamily: 'system-ui, sans-serif',
    minWidth: '72px',
    textAlign: 'center',
  },
  button: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    color: '#374151',
    '&:hover:not(:disabled)': {
      transform: 'scale(1.05)',
      boxShadow: '0 2px 6px rgba(59, 130, 246, 0.3)',
    },
    '&:active:not(:disabled)': {
      transform: 'scale(0.95)',
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
  recording: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
  },
  paused: {
    backgroundColor: '#f59e0b', 
    color: '#ffffff',
  },
  recordingContainer: {
    backgroundColor: '#ffffff',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px',
    paddingLeft: '10px',
    paddingRight: '12px',
    borderRadius: '24px',
    backgroundColor: '#f3f4f6',
  },
  controlButton: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    '&:hover:not(:disabled)': {
      transform: 'scale(1.05)',
      boxShadow: '0 2px 6px rgba(59, 130, 246, 0.3)',
    },
    '&:active:not(:disabled)': {
      transform: 'scale(0.95)',
    },
  },
  stopButton: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
  }
};

const VoiceRecorder = ({
  onRecordingStart,
  onRecordingStop,
  onRecordingPause,
  onRecordingResume,
  onError,
  onMaxDuration,
  styles = {},
  classNames = {},
  startIcon = '🎤',
  stopIcon = '⏹',
  pauseIcon = '⏸',
  resumeIcon = '▶',
  maxDuration = null,
  timerFormat = 'mm:ss',
  showTimer = true,
  disabled = false,
  audioConstraints = {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true
  },
  mediaRecorderOptions = { mimeType: 'audio/webm;codecs=opus' },
  chunkDuration = 1000,
}) => {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [time, setTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const streamRef = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stream?.getTracks().forEach(track => track.stop());
      }
      clearInterval(timerRef.current);
    };
  }, []);

  const mergeStyles = (base, custom, states = {}) => ({
    ...base,
    ...custom,
    ...Object.keys(states).reduce((acc, key) => {
      if (states[key]) acc = { ...acc, ...custom?.[key] };
      return acc;
    }, {}),
  });

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (timerFormat === 'hh:mm:ss') {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    if (timerFormat === 'mm:ss') {
      return `${String(hrs * 60 + mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return String(seconds).padStart(2, '0');
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime(prev => {
        const newTime = prev + 1;
        if (maxDuration && newTime >= maxDuration) {
          clearInterval(timerRef.current);
          onMaxDuration?.();
          stopRecording();
        }
        return newTime;
      });
    }, 1000);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraints });
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream, mediaRecorderOptions);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = ({ data }) => {
        audioChunksRef.current.push(data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: mediaRecorderOptions.mimeType });
        onRecordingStop?.(blob);
        audioChunksRef.current = [];
      };

      mediaRecorder.start(chunkDuration);
      setRecording(true);
      setPaused(false);
      startTimer();
      onRecordingStart?.();
    } catch (error) {
      onError?.(error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === 'recording' || mediaRecorderRef.current?.state === 'paused') {
      mediaRecorderRef.current.stop();
      streamRef.current?.getTracks().forEach(track => track.stop());
      clearInterval(timerRef.current);
      setRecording(false);
      setPaused(false);
      setTime(0);
    }
  };

  const togglePause = async () => {
    try {
      if (paused) {
        // If paused, start a new recording session
        await startRecording();
        onRecordingResume?.();
      } else {
        if (mediaRecorderRef.current?.state === 'recording') {
          mediaRecorderRef.current.pause();
          onRecordingPause?.();
          clearInterval(timerRef.current);
          setPaused(true);
        }
      }
    } catch (error) {
      onError?.(error);
    }
  };

  const buttonStyle = mergeStyles(
    defaultStyles.button,
    styles.button,
    { recording, paused }
  );

  return (
    <div
      style={mergeStyles(defaultStyles.container, styles.container, { recording: recording && defaultStyles.recordingContainer })}
      className={`voice-recorder-container ${classNames.container || ''}`}
      role="region"
      aria-label="Voice Recorder"
    >

      {recording ? (
        <div 
          style={mergeStyles(defaultStyles.controls, styles.controls)}
          className='voice-recorder-controls'
        >
          {showTimer && (
            <div
              style={mergeStyles(defaultStyles.timer, styles.timer)}
              className={`voice-recorder-timer ${classNames.timer || ''}`}
              aria-live="polite"
            > 
              {formatTime(time)}
            </div>
          )}
          
          <button
            onClick={togglePause}
            style={mergeStyles(
              defaultStyles.controlButton,
              styles.button,
              { recording: !paused && defaultStyles.recording, paused: paused && defaultStyles.paused }
            )}
            className={`voice-recorder-control ${paused ? 'paused' : 'recording'} ${classNames.button || ''}`}
            disabled={disabled}
            aria-label={paused ? 'Resume recording' : 'Pause recording'}
          >
            {paused ? resumeIcon : pauseIcon}
          </button>
          <button
            onClick={stopRecording}
            style={mergeStyles(defaultStyles.controlButton, defaultStyles.stopButton, styles.stopButton)}
            className={`voice-recorder-stop ${classNames.stopButton || ''}`}
            disabled={disabled}
            aria-label="Stop recording"
          >
            {stopIcon}
          </button>
        </div>
      ) : (
        <button
          onClick={startRecording}
          style={{
            ...buttonStyle,
            ...(disabled && defaultStyles.button['&:disabled']),
          }}
          className={`voice-recorder-start ${classNames.button || ''}`}
          disabled={disabled}
          aria-label="Start recording"
        >
          {startIcon}
        </button>
      )}
    </div>
  );
};

VoiceRecorder.propTypes = {
  onRecordingStart: PropTypes.func,
  onRecordingStop: PropTypes.func,
  onRecordingPause: PropTypes.func,
  onRecordingResume: PropTypes.func,
  onError: PropTypes.func,
  onMaxDuration: PropTypes.func,
  styles: PropTypes.shape({
    container: PropTypes.object,
    timer: PropTypes.object,
    button: PropTypes.object,
    stopButton: PropTypes.object,
    recording: PropTypes.object,
    paused: PropTypes.object,
  }),
  classNames: PropTypes.shape({
    container: PropTypes.string,
    timer: PropTypes.string,
    button: PropTypes.string,
    stopButton: PropTypes.string,
    paused: PropTypes.string,
    controls: PropTypes.string,
    controlButton: PropTypes.string,
  }),
  startIcon: PropTypes.node,
  stopIcon: PropTypes.node,
  pauseIcon: PropTypes.node,
  resumeIcon: PropTypes.node,
  maxDuration: PropTypes.number,
  timerFormat: PropTypes.oneOf(['hh:mm:ss', 'mm:ss', 'ss']),
  showTimer: PropTypes.bool,
  disabled: PropTypes.bool,
  audioConstraints: PropTypes.object,
  mediaRecorderOptions: PropTypes.object,
  chunkDuration: PropTypes.number,
};

export default VoiceRecorder;