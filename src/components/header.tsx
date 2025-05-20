import LoginButton from './loginButton';
import Logo from './logo';
import Navbar from './navbar';
import SignUpButton from './signUpButton';

export default function Header() {
  return (
    <header>
      <Logo />
      <Navbar />
      <LoginButton />
      <SignUpButton />
    </header>
  );
}
