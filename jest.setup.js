// Mock the IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    // Nothing to unobserve in the tests
  }

  unobserve() {
    // Nothing to unobserve in the tests
  }

  disconnect() {
    // Nothing to disconnect in the tests
  }
};
