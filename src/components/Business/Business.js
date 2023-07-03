import React from 'react';
import './Business.css';

const Business = ({ business }) => {
  return (
    <div className='Business'>
      <div className='image-container'>
        <a
          href={business.url ? business.url : '#'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={business.image_url} alt='' />
        </a>
      </div>
      <h2>{business.name}</h2>
      <div className='Business-information'>
        <div className='Business-address'>
          <a
            href={`http://maps.google.com/?q=${business.location.address1}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>{business.location.address1}</p>
            <p>{business.location.city}</p>
            <p>
              {business.location.state} {business.location.zip_code}
            </p>
          </a>
        </div>
        <div className='Business-reviews'>
          <h3>{business.categories[0].title.toUpperCase()}</h3>
          <h3 className='rating'>{business.rating} stars</h3>
          <p>{business.review_count} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
