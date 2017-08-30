import React, { Component } from 'react';

const LocationContainer = ({place, time}) => (
  <div className={ place }>
    <div>
        { place }
    </div>
    <div>
        { time }
    </div>
  </div>
);

export default LocationContainer;