import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function UserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);
  const [statename, setStatename] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setLocation(position),
      (error) => setError(error)
    );
  }, []);

  useEffect(() => {
    if (location) {
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.coords.latitude}&lon=${location.coords.longitude}&zoom=10`)
        .then(response => response.json())
        .then(data => setAddress(data.display_name))
        .catch(error => setError(error));

        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.coords.latitude}&lon=${location.coords.longitude}&zoom=5`)
        .then(response => response.json())
        .then(data => setStatename(data.display_name))
        .catch(error => setError(error));

    }
  }, [location]);

  if (address) {
    return <p>Address: {address.split(",")[0] + ", "+ statename}</p>;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    return <p>Loading...</p>;
  }
}

export default UserLocation;
