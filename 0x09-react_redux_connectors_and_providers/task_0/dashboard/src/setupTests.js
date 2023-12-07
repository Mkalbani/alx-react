// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// looks like I cant use enzyme with react 18 (react 17 is the last with a supported adapter - more like react 16)
// RTL (react testing library is the new testing bae in the block)
// this' how the setup'd look like were I to use enzyme though...
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure({ adapter: new Adapter() });