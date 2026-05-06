// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// test isPhoneNumber
test('isPhoneNumber returns true for valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber returns true for phone number written with parenthesis and dash', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});
test('isPhoneNumber returns false for less than 10 digits', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});
test('isPhoneNumber returns false for letters in phone number', () => {
  expect(isPhoneNumber('123-CSE-TEST')).toBe(false);
});

// test isEmail
test('isEmail returns true for standard email', () => {
  expect(isEmail('abillawala@ucsd.edu')).toBe(true);
});
test('isEmail returns true for different top-level domain', () => {
  expect(isEmail('a_billawala@gmail.com')).toBe(true);
})
test('isEmail returns false for missing @ symbol', () => {
  expect(isEmail('abillawalaucsd.edu')).toBe(false);
});
test('isEmail returns false for missing top-level domain', () => {
  expect(isEmail('abillawala@ucsd')).toBe(false);
});

// test isStrongPassword
test('isStrongPassword returns true for valid password starting with letter', () => {
  expect(isStrongPassword('A_1BDE29cat')).toBe(true);
});
test('isStrongPassword returns true for 15 character password', () => {
  expect(isStrongPassword('w920JDI8NHGEds7')).toBe(true);
});
test('isStrongPassword returns false for password starting with number', () => {
  expect(isStrongPassword('1_1BDE29cat')).toBe(false);
});
test('isStrongPassword returns false for too short password', () => {
  expect(isStrongPassword('A_1')).toBe(false);
});

// test isDate
test('isDate returns true for standard date', () => {
  expect(isDate('05/05/2026')).toBe(true);
});
test('isDate returns true for single digit day and month', () => {
  expect(isDate('5/5/2026')).toBe(true);
});
test('isDate returns false for 2 digit year', () => {
  expect(isDate('05/05/26')).toBe(false);
});
test('isDate returns false for missing year', () => {
  expect(isDate('05/05')).toBe(false);
});

// test isHexColor
test('isHexColor returns true for 3 digit hex', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('isHexColor returns true for 6 digit hex', () => {
  expect(isHexColor('#000000')).toBe(true);
});
test('isHexColor returns false for 5 digit hex', () => {
  expect(isHexColor('#FFFFF')).toBe(false);
});
test('isHexColor returns false for invalid hex code', () => {
  expect(isHexColor('#GG9')).toBe(false);
});