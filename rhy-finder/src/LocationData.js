import axios from 'axios';

export const getArcades = async((lat = 40.730610, long = -73.935242) => {
  const response = await axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=-${long}&term=arcade`,
    {
    headers: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
    })
  return response.data.businesses
})