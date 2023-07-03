import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import yelp from '../../utils/utils';

// const business = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// Make addresses clickable and have them open the address in Google Maps in a new tab.
// Make images clickable and have them open the business’ website in a new tab.
// Clicking on a different sorting option automatically re-queries the Yelp API, rather than having to manually click “Let’s Go” again.
// Implement your own type of sort (for example, by entering a distance or radius from a central location).
// Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking.
// Add autocompletion of addresses to the “Location” input.

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businessResults = await yelp.search(term, location, sortBy);
    setBusinesses(businessResults);
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  )
}

export default App;
