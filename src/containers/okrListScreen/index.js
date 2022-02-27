import OkrListScreen from './okrListScreen';
import {connect} from 'react-redux';
import {actions as okrActions} from '../../store/okr/actions';

const mapStateToProps = (state) => {
  return {
    okrList: state.okr.okrList,
    isLoading: state.loader.isLoading,
    filteredList: state.okr.filteredList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOkrList: () => dispatch(okrActions.getOkrList()),
    setOkrList: () => dispatch(okrActions.setOkrList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OkrListScreen);
