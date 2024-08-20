

import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { saveAs } from 'file-saver';
// import './VideoEditor.css';

const Videoedit = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [filter, setFilter] = useState('');
  const videoRef = useRef(null);

  const handleVideoLoad = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
  };

  const handleTrim = () => {
    if (videoRef.current) {
      const duration = videoRef.current.getDuration();
      setEndTime(endTime || duration);
    }
  };

  const applyFilter = (filter) => {
    setFilter(filter);
  };

  const handleDownload = () => {
    saveAs(videoUrl, 'edited_video.mp4');
  };

  const onReady = () => {
    if (videoRef.current) {
      const duration = videoRef.current.getDuration();
      setEndTime(duration); // Set the end time to the video duration when video is ready
    }
  };

  return (
    <div className="video-editor">
      <h1>Video Editing App</h1>
      <input type="file" accept="video/*" onChange={handleVideoLoad} />
      
      {videoUrl && (
        <div className="editor-section">
          <ReactPlayer
            ref={videoRef}
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            style={{ filter }}
            onReady={onReady}
          />
          
          <div className="controls">
            <div className="time-controls">
              <label>
                Start Time (seconds):
                <input
                  type="number"
                  value={startTime}
                  onChange={(e) => setStartTime(parseFloat(e.target.value))}
                  min="0"
                  max={endTime}
                />
              </label>

              <label>
                End Time (seconds):
                <input
                  type="number"
                  value={endTime}
                  onChange={(e) => setEndTime(parseFloat(e.target.value))}
                  min="0"
                  max={videoRef.current ? videoRef.current.getDuration() : 0}
                />
              </label>

              <button onClick={handleTrim}>Trim Video</button>
            </div>
            
            <div className="filter-controls">
              <h3>Filters</h3>
              <button onClick={() => applyFilter('grayscale(100%)')}>Grayscale</button>
              <button onClick={() => applyFilter('sepia(100%)')}>Sepia</button>
              <button onClick={() => applyFilter('blur(5px)')}>Blur</button>
              <button onClick={() => applyFilter('')}>Reset</button>
            </div>

            <button className="download-btn" onClick={handleDownload}>Download Video</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videoedit;
