import React from 'react';
import NavLinks from './NavLinks';

function DesktopNav() {
  return (
    <ul className="hidden md:flex space-x-8">
      <NavLinks />
    </ul>
  );
}

export default DesktopNav;