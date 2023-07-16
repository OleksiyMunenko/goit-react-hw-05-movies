import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const WrappPage = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Img = styled.img`
  margin-top: 20px;
`;

export const WrapMovie = styled.div`
  display: flex;
  alight-items: center;
`;

export const Content = styled.div`
  margin-left: 20px;
`;
export const ListItem = styled.ul`
  display: flex;
`;
export const Item = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  margin-right: 10px;
  font-weight: bold;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: red;
  text-transform: uppercase;
  &:hover {
    opacity: 0.7;
  }
`;
export const Btn = styled.button`
  text-decoration: none;
  font-size: 18px;
  margin-right: 10px;
  font-weight: bold;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: red;
  text-transform: uppercase;
  border: none;
  &:hover {
    opacity: 0.7;
  }
`;