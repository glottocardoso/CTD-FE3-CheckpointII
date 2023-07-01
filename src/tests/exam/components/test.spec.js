import { renderContext, screen } from "../../test-utils"
import Login from '../../../Routes/Login';

test('should show login form', () => {
  renderContext(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});