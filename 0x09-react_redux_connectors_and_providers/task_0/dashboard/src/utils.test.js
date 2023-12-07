/*
Check that the function getFullYear returns the correct year (be careful to not create a time
bomb)
Check that getFooterCopy returns the correct string when the argument is true or false
Check the returned string for getLatestNotification
*/
// import { render } from '@testing-library/react';
import { getFullYear, getLatestNotification, getFooterCopy } from './utils';

test('getFullYear returns 2023', () => {
    expect(getFullYear()).toEqual(2023)
})
test('getFooterCopy returns "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy()).toEqual("Holberton School main dashboard")
})
test('getFooterCopy returns "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toEqual("Holberton School")
})
test('getLatestNotification returns a string', () => {
    expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD")
})