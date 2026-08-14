/* eslint-disable no-undef */
// Jest ortamında native AsyncStorage yoktur; paketin resmi mock'u kullanılır.
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
