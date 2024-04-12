module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '<assets>': ['./src/assets'],
          '<utils>': ['./src/utils'],
          '<screens>': ['./src/screens'],
          '<type>': ['./src/type'],
          '<module>': ['./src/module'],
          '<components>': ['./src/components'],
          '<src>': ['./src'],
        },
      },
    ],
  ],
};
