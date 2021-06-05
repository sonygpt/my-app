// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import Main from './Main';
import { NavLink } from "react-router-dom";
import { shallow } from '../.././enzyme';
import '@testing-library/jest-dom';

test('full app rendering/navigating', () => {
	const app = shallow(<Main/>);

	expect(app.containsAnyMatchingElements([
		<li><NavLink to="/my_pokemon">My Pokemon</NavLink></li>
	])
  ).toBe(true);

	expect(app.containsAnyMatchingElements([
		<li><NavLink to="/">Pokemon List</NavLink></li>
	])
  ).toBe(true);
});
