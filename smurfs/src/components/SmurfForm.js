import React from 'react';
import { connect } from 'react-redux';
import { formInputChange, addSmurf } from '../redux/actions/actionCreators';

const SmurfForm = ({ smurfForm, formInputChange, addSmurf }) => {

  const handleChange = e => {
    formInputChange(e.target.name, e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault();
      addSmurf()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={smurfForm.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          value={smurfForm.age}
          name="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Height"
          value={smurfForm.height}
          name="height"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => state.smurfs;
const mapActionToProps = {
  formInputChange, 
  addSmurf
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(SmurfForm);
