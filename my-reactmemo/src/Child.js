import React from 'react';

const Child = ({params}) => {
  console.log('Child rendered');

  return (
    <div style={{
      margin: '5px',
      width: 100,
      height: 70,
      background: params.color
    }}></div>
  );
};

export default React.memo(Child);