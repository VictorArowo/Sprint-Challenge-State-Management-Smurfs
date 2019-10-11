import React from 'react';
import { connect } from 'react-redux';
import { editSmurf } from '../redux/actions/actionCreators';

const Smurf = ({ data, editSmurf }) => {
  const handleClick = () => {
    editSmurf(data.id);
  };

  return (
    <div>
      {data.name}
      <button onClick={handleClick}>Edit</button>
    </div>
  );
};

const mapActionToProps = {
  editSmurf
};

export default connect(
  state => state,
  mapActionToProps
)(Smurf);
