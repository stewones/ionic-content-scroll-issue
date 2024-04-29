/* eslint-disable */
const dependencies = ['@angular', '@ionic', '@stencil', 'ionicons'];
export default {
  displayName: 'app',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  coverageDirectory: '../../coverage/apps/app',
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/src/assets'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        isolatedModules: true,
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [`node_modules/(?!${dependencies.join('|')})`],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testEnvironment: '@happy-dom/jest-environment',
  testEnvironmentOptions: {
    url: 'http://localhost',
    width: 1920,
    height: 1080,
    settings: {
      navigator: {
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
      },
    },
  },
};
