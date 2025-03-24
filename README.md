# React Voice Record

A customizable voice recording component for React applications with pause/resume functionality, timer, and style customization.

![Voice Recorder Demo](https://github.com/mostafijur-rahman299/react-voice-record/blob/master/assets/demo.gif)

## Features

- 🎙 Start/stop recording with media constraints
- ⏯ Pause/resume recording functionality
- ⏲ Customizable timer with multiple formats
- 🎨 Style customization via CSS-in-JS or CSS classes
- 📁 Audio chunking configuration
- ⏰ Max duration limit
- ♿ Accessible ARIA labels
- 🔧 Custom icon support
- 🛠 Error handling callbacks
- 📦 Zero dependencies

## Installation

```bash
npm install react-voice-record
or 
yarn add react-voice-record
```


## Basic Usage
```js
import React from 'react';
import VoiceRecorder from 'react-voice-record';

const App = () => {
  const handleRecordingStart = () => {
    console.log('Recording started');
  };

  const handleRecordingStop = (audioBlob) => {
    console.log('Recording stopped', audioBlob);
    // You can use the audioBlob to play or upload the recorded audio
  };

  const handleRecordingPause = () => {
    console.log('Recording paused');
  };

  const handleRecordingResume = () => {
    console.log('Recording resumed');
  };

  const handleError = (error) => {
    console.error('An error occurred during recording', error);
  };

  const handleMaxDuration = () => {
    console.log('Maximum recording duration reached');
  };

  return (
    <div>
      <h1>Voice Recorder Demo</h1>
      <VoiceRecorder
        onRecordingStart={handleRecordingStart}
        onRecordingStop={handleRecordingStop}
        onRecordingPause={handleRecordingPause}
        onRecordingResume={handleRecordingResume}
        onError={handleError}
        onMaxDuration={handleMaxDuration}
        maxDuration={300} // Maximum recording duration in seconds (e.g., 5 minutes)
        timerFormat="mm:ss"
        showTimer={true}
      />
    </div>
  );
};

export default App;

```
## Props References

| Prop                   | Type       | Default  | Description |
|------------------------|-----------|----------|-------------|
| **`onRecordingStart`**  | function  | -        | Called when recording starts |
| **`onRecordingStop`**   | function  | -        | Receives audio blob when recording stops |
| **`onRecordingPause`**  | function  | -        | Called when recording pauses |
| **`onRecordingResume`** | function  | -        | Called when recording resumes |
| **`onError`**          | function  | -        | Error handler callback |
| **`onMaxDuration`**    | function  | -        | Triggered when max duration is reached |
| **`styles`**           | object    | `{}`     | Custom CSS-in-JS styles |
| **`classNames`**       | object    | `{}`     | Custom CSS classNames |
| **`startIcon`**        | ReactNode | 🎤       | Start button icon |
| **`stopIcon`**         | ReactNode | ⏹       | Stop button icon |
| **`pauseIcon`**        | ReactNode | ⏸       | Pause button icon |
| **`resumeIcon`**       | ReactNode | ▶        | Resume button icon |
| **`maxDuration`**      | number    | `null`   | Max recording duration (seconds) |
| **`timerFormat`**      | string    | `'mm:ss'` | Time format (`hh:mm:ss`, `mm:ss`, `ss`) |
| **`showTimer`**        | boolean   | `true`   | Show/hide timer display |
| **`disabled`**         | boolean   | `false`  | Disable all controls |
| **`audioConstraints`** | object    | `{ echoCancellation: true, noiseSuppression: true, autoGainControl: true }` | Audio constraints |
| **`mediaRecorderOptions`** | object | `{ mimeType: 'audio/webm;codecs=opus' }` | MediaRecorder options |
| **`chunkDuration`**    | number    | `1000`   | Data chunking interval (ms) |
| **``**    | number    | `1000`   | Data chunking interval (ms) |


## Styling Guide
1. CSS-in-JS Styling
```jsx
<VoiceRecorder 
  styles={{
    container: {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    button: {
      backgroundColor: '#3b82f6',
      '&:hover:not(:disabled)': {
        transform: 'scale(1.15)'
      }
    },
    stopButton: {
      backgroundColor: '#ef4444'
    }
  }}
/>
```
## 2. CSS Classes
```jsx
<VoiceRecorder
  classNames={{
    container: 'custom-container',
    button: 'primary-button',
    stopButton: 'danger-button',
    timer: 'custom-timer'
  }}
/>
```
## Custom Icons
```jsx
import { Mic, StopCircle, PauseCircle, PlayCircle } from 'react-feather';

<VoiceRecorder
  startIcon={<Mic size={20} />}
  stopIcon={<StopCircle size={20} />}
  pauseIcon={<PauseCircle size={20} />}
  resumeIcon={<PlayCircle size={20} />}
/>
```
## Timer Formats
```jsx
<VoiceRecorder
  timerFormat="hh:mm:ss"  // 00:05:23
  timerFormat="mm:ss"     // 05:23 (default)
  timerFormat="ss"        // 323 seconds
/>
```
## Audio Configuration
```jsx
<VoiceRecorder
  audioConstraints={{
    sampleRate: 44100,
    channelCount: 1,
    noiseSuppression: false
  }}
  mediaRecorderOptions={{
    mimeType: 'audio/mp3',
    audioBitsPerSecond: 128000
  }}
  chunkDuration={2000}
/>
```

## Error Handling
```jsx
<VoiceRecorder
  onError={(error) => {
    console.error('Recording error:', error);
    alert('Microphone access required!');
  }}
/>
```
## License
MIT © Mostafijur Rahman. Free for commercial and personal use.

