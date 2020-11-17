import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
    </div>
  );
}
