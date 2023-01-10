import axios from 'axios';

export const getData = async (url, setData) => {
  const request = await axios.get(url);

  if (request.data) {
    setData(request.data);
  }
};
