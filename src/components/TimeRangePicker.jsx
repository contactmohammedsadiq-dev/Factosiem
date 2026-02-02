import { useState } from 'react';
import './TimeRangePicker.css';

export default function TimeRangePicker() {
  const [selectedRange, setSelectedRange] = useState('24h');
  const [isCustom, setIsCustom] = useState(false);

  const timeRanges = [
    { label: '5m', value: '5m' },
    { label: '15m', value: '15m' },
    { label: '1h', value: '1h' },
    { label: '4h', value: '4h' },
    { label: '24h', value: '24h' },
    { label: '7d', value: '7d' },
  ];

  return (
    <div className="time-range-picker">
      <div className="range-buttons">
        {timeRanges.map((range) => (
          <button
            key={range.value}
            className={`range-btn ${selectedRange === range.value ? 'active' : ''}`}
            onClick={() => setSelectedRange(range.value)}
          >
            {range.label}
          </button>
        ))}
        <button
          className={`range-btn ${isCustom ? 'active' : ''}`}
          onClick={() => setIsCustom(!isCustom)}
        >
          Custom
        </button>
      </div>

      {isCustom && (
        <div className="custom-range">
          <input type="datetime-local" className="date-input" />
          <span className="range-separator">to</span>
          <input type="datetime-local" className="date-input" />
          <button className="apply-btn">Apply</button>
        </div>
      )}

      <div className="timeline-preview">
        <div className="timeline-track">
          <div className="timeline-fill"></div>
          <div className="timeline-handle"></div>
        </div>
        <span className="timeline-label">Last 24 hours</span>
      </div>
    </div>
  );
}
