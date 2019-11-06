import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { swearFilter } from './utils/swear-filter'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe.only('swearFilter', () => {
  it('removes a single profanity when sent a single profanity', () => {
    const input = 'fuck';
    const expected = 'xxxx';
    expect(swearFilter(input)).toBe(expected);
  });
  it('removes ONLY the profanity when sent a message containing a profanity', () => {
    const input = 'you are a wanker';
    const expected = 'you are a xxxxxx';
    expect(swearFilter(input)).toBe(expected);
  });
  it('removes ONLY the profanities when sent a message containing mulitple profanities', () => {
    const input = 'Oh fuck this is a pile of shit!';
    const expected = 'Oh xxxx this is a pile of xxxx!';
    expect(swearFilter(input)).toBe(expected);
  });
});
