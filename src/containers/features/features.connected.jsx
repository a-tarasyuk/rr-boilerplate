import { connect } from 'react-redux';
import Container from './features';

export const Features = connect(
  ({ features }) => ({ features }),
)(Container);

export default Features;
