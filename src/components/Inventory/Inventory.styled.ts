import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 32px;
  grid-gap: 32px;
  background: rgba(194, 210, 189, 0.3);
`;

export const Item = styled.div`
  position: relative;
  display: grid;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: box-shadow 500ms;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Details = styled.div`
  position: relative;
  display: grid;
  grid-gap: 4px;
  padding: 16px;
  font-size: 14px;
`;

export const Promotion = styled.div`
  position: absolute;
  line-height: 32px;
  top: -32px;
  width: 100%;
  text-align: center;
  background: rgba(209, 173, 204, 0.6);
  color: white;
  font-weight: bold;
`;

export const Name = styled.span``;

export const Prices = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  grid-gap: 4px;
  margin: 2px 0;
`;

export const Price = styled.span`
  font-weight: bold;
`;

export const PriceWas = styled.span`
  color: ${props => props.theme.error};
  text-decoration: line-through;
`;

export const Quantity = styled.span`
  color: ${props => props.theme.success};
`;

export const ErrorText = styled.span`
  color: ${props => props.theme.error};
`;

export const WarningText = styled.span`
  color: ${props => props.theme.warning};
`;
