// src/components/LeftDisplay.tsx

import React from 'react';
import { JSONData, Sticky, Concept } from '../types';
import './LeftDisplay.css'; // Import the CSS file


interface DataDisplayProps {
  data: JSONData | null; // Define the prop type
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div style={{position: 'relative'}}>
      <div className="concept-container">
        {data.generated_concepts.map((concept: Concept, index: number) => (
          <div key={`${concept.title}-${index}`} className="conceptcard">
            <h4>{concept.title}</h4>
            <p>{concept.details}</p>
          </div>
        ))}
      </div>
    <div className="sticky-container">
      {data.stickies.map((sticky: Sticky, index: number) => (
        <React.Fragment key={`${index}-${sticky.x}-${sticky.y}`}> {/* Composite key */}
          <div
            className={`sticky-box ${sticky.isTheme ? 'theme' : 'nottheme'}`}
            style={{
              position: 'absolute',
              left: `${sticky.x-sticky.w/2}px`,
              top: `${sticky.y-sticky.h/2}px`,
              width: `${sticky.w}px`,
              height: `${sticky.h}px`,
            }}
          />

          <div
            className="sticky-label"
            style={{
              position: 'absolute',
              left: `${sticky.x}px`, // Centering horizontally with respect to the box
              top: `${sticky.y-sticky.h/2 + sticky.h}px`, // Position 10px below the box
              transform: 'translateX(-50%)', // Center the text by shifting it left by half its own width
            }}
          >
            {sticky.text}
          </div>
        </React.Fragment>
      ))}
      </div>
    </div>
  );




};

export default DataDisplay;
