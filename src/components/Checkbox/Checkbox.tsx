import styled from 'styled-components';
import ReactCheckbox from 'react-simple-checkbox';

const Checkbox = styled(ReactCheckbox).attrs(props => ({
  color: props.theme.primary,
  size: 2,
}))`
  position: absolute;
  top: 6px;
  left: 8px;
`;

export default Checkbox;
