import React from 'react';

export default function Listing({ data }) {
  return (
    <div>
      {data?.meals?.map((item) => (
        <>
          <div style={{ fontSize: 14, marginBottom: 10 }}>
            {item.strInstructions.substring(0, 100)}
            <img src={item.strMealThumb} alt="" />
          </div>
        </>
      ))}
    </div>
  );
}
