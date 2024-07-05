import React from 'react'


const Pricing = () => {
  return (
    <div className=" container items-center place-content-center">
      <div><h1 className=" flex place-content-center items-center">TICKET PRICING</h1>
      <div className="flex flex-row px-[74px] py-[75px] justify-evenly ">
        <Plan
          type="BASIC"
          price="£39/mo"
          location="National Theatre"
        />

        <Plan
          type="STARTER"
          price="£59/mo"
          location="Aqua Safari"
        />

        <Plan
          type="BUSINESS"
          price="£79/mo"
          location="Kempinski Hotel"
        />

        <Plan
          type="ENTERPRISE"
          price="£99/mo"
          location="Marriot Hotel"
        />
      </div>
      <TopProducts />
      <Newsletter />
      </div>
      
    </div>
  );
};

const Plan = ({ type, price, location }) => {
  return (
    <div className="plan">
      <h2>{type}</h2>
      <p>{price}</p>
      <ul>
        <li>Location {location}</li>

      </ul>
      <button onClick={alert}>Get Ticket</button>
    </div>
  );
};

const TopProducts = () => {
  return (
    <div className="flex " >
      <h2>TOP Events</h2>
      <ul>
        <li>Telecel Music Awards</li>
        <li>Valentine's Day Dinner</li>
        <li>AfroNation</li>
        <li>Rave</li>
      </ul>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>NEWSLETTER</h2>
      <p>You can trust us. we only send promo offers, not a single spam.</p>
      <input type="email" placeholder="Your email address" />
      <button>Subscribe</button>
    </div>
  );
};

export default Pricing;
