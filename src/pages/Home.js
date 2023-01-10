import React, { useEffect, useState } from 'react';
import { getData } from '../utilities/utils';

import Listing from './Listing';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(
      'http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772',
      setData
    );
  }, []);

  return (
    <div>
      <Listing data={data} />
    </div>
  );
}
