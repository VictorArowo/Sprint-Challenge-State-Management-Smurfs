import React from 'react';
import { connect } from 'react-redux';
import { editSmurf, deleteSmurf } from '../redux/actions/actionCreators';

const Smurf = ({ data, editSmurf, deleteSmurf }) => {
  const handleClick = () => {
    editSmurf(data.id);
  };

  const handleDelete = () => {
    deleteSmurf(data.id);
  };

  return (
    <div>
      {data.name}
      <button onClick={handleClick}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const mapActionToProps = {
  editSmurf,
  deleteSmurf
};

export default connect(
  state => state,
  mapActionToProps
)(Smurf);
