import React, { useState } from 'react';
import { Vec } from './Vec'; 

export const VectorVisualizer = () => {
  const [pos, setPos] = useState(new Vec(50, 50));
  const origin = new Vec(0, 0);

  const currentLength = pos.length.toFixed(2);

  const move = (direction: 'up' | 'down' | 'left' | 'right') => {
    const step = 10;
    const moves = {
      up: new Vec(0, -step),
      down: new Vec(0, step),
      left: new Vec(-step, 0),
      right: new Vec(step, 0),
    };

    setPos(prev => prev.plus(moves[direction]));
  };

  return (
    <div className="p-4 border rounded-lg bg-light shadow-sm">
      <h3 className="mb-3">Vector Tracker</h3>
      
      <div 
        className="position-relative bg-white border mb-3" 
        style={{ width: '300px', height: '200px', overflow: 'hidden' }}
      >
        <div 
          className="position-absolute bg-primary rounded-circle"
          style={{
            width: '12px',
            height: '12px',
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transition: 'all 0.2s'
          }}
        />
        
        <div 
          className="position-absolute border-top border-secondary opacity-50"
          style={{
            width: `${pos.length}px`,
            left: '0',
            top: '0',
            transformOrigin: '0 0',
            transform: `rotate(${Math.atan2(pos.y, pos.x)}rad)`,
          }}
        />
      </div>

      <div className="d-flex flex-column gap-2">
        <p className="small mb-1">
          <strong>Coordinates:</strong> ({pos.x}, {pos.y}) <br />
          <strong>Magnitude (length):</strong> {currentLength}px
        </p>
        
        <div className="btn-group shadow-sm">
          <button className="btn btn-outline-secondary btn-sm" onClick={() => move('up')}>↑</button>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => move('down')}>↓</button>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => move('left')}>←</button>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => move('right')}>→</button>
        </div>

        <button 
          className="btn btn-danger btn-sm mt-2"
          onClick={() => setPos(new Vec(50, 50))}
        >
          Reset Vector
        </button>
      </div>
    </div>
  );
};