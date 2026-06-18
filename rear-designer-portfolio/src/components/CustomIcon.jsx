import React, { useEffect, useState } from 'react';

const CustomIcon = ({ name, className }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    if (!name) return;
    
    // Fetch the SVG content from public folder
    fetch(`/assets/icons/${name}.svg`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load SVG icon: ${name}`);
        }
        return res.text();
      })
      .then((data) => {
        setSvgContent(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [name]);

  if (!svgContent) {
    // Return empty placeholder placeholder matching the parent dimensions to avoid layout shifts
    return <span className={className} style={{ display: 'inline-flex' }} />;
  }

  // Inject the raw SVG content inside a wrapper to style it
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    />
  );
};

export default CustomIcon;
