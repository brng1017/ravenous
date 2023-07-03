const api_key =
  '5peg6_9VOM4R3QLLUz6Q5kw0fdbl6Fd_k3hW-m-mUXSKzZ9D6iCqU-AU-U0s7deG3U52BSAvDwdr4diuWnDNltp2kB9iSTqDp2Ql-zfVgJHQTrk3U8-qxXRrMxBHZHYx';
const url = 'https://api.yelp.com/v3';

const yelp = {
  search: async function (term, location, sortBy) {
    const requestParams = `?term=${term}&location=${location}&sort_by=${sortBy}`;
    const requestEndpoint = '/businesses/search';
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const urlToFetch = cors + url + requestEndpoint + requestParams;

    try {
      const response = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer ${api_key}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.businesses;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default yelp;
