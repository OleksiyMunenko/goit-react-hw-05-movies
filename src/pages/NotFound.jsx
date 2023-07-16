import { Back, WrapBack } from './NotFound.styled';

export default function NotFound() {
  return (
    <WrapBack>
      <h1>Page not found</h1>
      <Back to="/">Home page</Back>
    </WrapBack>
  );
}