import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h1> Error! Please go back to the homepage</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
