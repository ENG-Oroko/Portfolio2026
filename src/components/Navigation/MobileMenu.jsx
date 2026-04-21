import React from 'react';
import NavLinks from './NavLinks';

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <ul className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
        <NavLinks onClick={onClose} isMobile={true} />
      </ul>
    </div>
  );
}

export default MobileMenu;