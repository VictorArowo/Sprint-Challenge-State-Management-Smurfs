import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions/actionCreators';
import Smurf from './Smurf';

const SmurfList = ({ getData, data }) => {
  useEffect(() => {
    getData();
  }, []);

  return data.map(smurf => <Smurf data={smurf} />);
};

const mapStateToProps = state => state.smurfs;
const mapActionToProps = {
  getData
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(SmurfList);
