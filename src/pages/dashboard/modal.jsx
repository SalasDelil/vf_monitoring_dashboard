import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <div
      className={`fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black bg-opacity-60 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className="relative mx-auto w-full max-w-lg bg-white rounded-xl shadow-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-2xl font-semibold text-blue-gray-900">{title}</h4>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
