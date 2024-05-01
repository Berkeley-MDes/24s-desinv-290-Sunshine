// src/components/RightDisplay.tsx

import { JSONData } from '../types';

interface DataDisplayProps {
  data: JSONData | null; // Define the prop type
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.generated_summary.title}</h1>
      <p>{data.generated_summary.title}</p>            
      <img src={data.generated_image.url} alt="Dynamic Content" />
    </div>
  );
};

export default DataDisplay;
