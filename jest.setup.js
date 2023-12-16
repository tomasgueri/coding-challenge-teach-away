//import NextImage from './src/components/__mocks__/next/image';
import React from "react";

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: (props) => {
    // Return a standard img element with all passed props
    return React.createElement('img', {...props, role: 'img'});
  },
  //default: NextImage, // Use the manual mock implementation of Image
}));

// Mock the IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target) {
    // Simulate the intersection
    this.callback([{ isIntersecting: true, target: target }]);
  }

  unobserve() {
    // Nothing to unobserve in the tests
  }

  disconnect() {
    // Nothing to disconnect in the tests
  }
};
