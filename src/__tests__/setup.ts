// Test setup file
// Add any global test configuration here

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  // Uncomment to suppress console.log in tests
  // log: () => {},
  // debug: () => {},
  // info: () => {},
  warn: () => {},
  error: () => {},
} as Console;

// Set test environment variables
process.env.NODE_ENV = 'test';

// Make this file a module
export {};
