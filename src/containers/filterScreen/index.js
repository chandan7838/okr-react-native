import FilterScreen from './filterScreen';
import {connect} from 'react-redux';
import {actions as okrActions} from '../../store/okr/actions';

const mapStateToProps = (state) => {
  return {
    okrList: state.okr.okrList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOkrList: () => dispatch(okrActions.getOkrList()),
    getFilteredList: (data) => dispatch(okrActions.getFilteredList(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen);
