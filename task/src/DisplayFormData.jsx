import React from 'react';
import { useLocation } from 'react-router-dom';

function DisplayFormData() {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Submitted Form Details</h2>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-2">
          <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}: </strong>
          {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value.toString()}
        </div>
      ))}
    </div>
  );
}

export default DisplayFormData; 