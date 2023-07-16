import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapBack = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Back = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  background-color: red;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;