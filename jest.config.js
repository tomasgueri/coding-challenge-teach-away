module.exports = {
  //setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/components/$1',
  },
  testEnvironment: 'jsdom', // Use jsdom environment for testing React components
};
