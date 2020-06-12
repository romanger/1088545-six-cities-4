import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const init = () => {
  const settings = {
    placesCount: 50,
  };

  const places = [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ];

  ReactDOM.render(
      <App placesCount = {settings.placesCount} places = {places} />,
      document.querySelector(`#root`)
  );
};

init();
