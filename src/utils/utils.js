const api_key = process.env.REACT_APP_YELP_API;
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
