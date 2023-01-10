import React, { useEffect, useState } from 'react';
import Listing from './Listing';
import { getData } from '../utilities/utils';

export default function Meal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('http://www.themealdb.com/api/json/v1/1/random.php', setData);
  }, []);

  return (
    <div>
      <Listing data={data} />
    </div>
  );
}
