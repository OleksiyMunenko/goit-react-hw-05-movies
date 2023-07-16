import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  display: flex;
`;

export const Img = styled.img`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Title = styled.p`
  margin-left: 10px;
`;