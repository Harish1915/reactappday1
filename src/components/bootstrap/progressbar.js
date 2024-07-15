import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample(prop) {
  const{scale}=prop
  return <ProgressBar now={scale} />;
}

export default BasicExample;