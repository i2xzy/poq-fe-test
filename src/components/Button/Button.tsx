import styled from 'styled-components';

const Button = styled.button`
  font-family: unset;
  font-size: 14px;
  line-height: 16px;
  background: ${props => props.theme.primary};
  color: white;
  border: 0;
  border-radius: 3px;
  padding: 8px 16px;
  cursor: pointer;
  transition: box-shadow 500ms;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  ${props =>
    props.disabled &&
    `opacity: 0.5;
    cursor: default`}
`;

export default Button;
