import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './Main';
import { NavLink } from "react-router-dom";
import { shallow } from '../.././enzyme';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

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
