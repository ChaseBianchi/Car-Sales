import React from 'react';
import {connect} from 'react-redux'
import {removeFeature} from '../actions/AddedFeatureActions'
// import {initialState} from '../reducers/testReducer'

const AddedFeature = props => {
  return (
    <li>
      {console.log('props AF', props)}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {return({
  ...state
})}
export default connect(mapStateToProps, {removeFeature})(AddedFeature);
