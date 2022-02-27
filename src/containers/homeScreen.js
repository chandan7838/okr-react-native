import React, {Component, useEffect} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import {actions as issueActions} from '../store/issues/actions';

const HomeScreen = (props) => {
  const {navigation, getIssuesList, issuesList} = props;
  useEffect(() => {
    getIssuesList();
  }, []);

  const getIssueDetail = (item) => {
    let date1 = new Date(item.created_at);
    let date2 = new Date();
    var difference_In_Time = date2.getTime() - date1.getTime();
    let difference_In_Days = difference_In_Time / (1000 * 3600 * 24);
    return `opened ${
      Math.floor(difference_In_Days) === 0
        ? `today by ${item.user.login}`
        : `${Math.floor(difference_In_Days)} ${
            Math.floor(difference_In_Days) === 1 ? 'day' : 'days'
          } ago by ${item.user.login}`
    }`;
  };

  const renderIssueItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.push('DetailsScreen', {id: item.number})}>
        <View key={item.title} style={styles.listItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{'#' + item.number}</Text>
          <Text>{getIssueDetail(item)}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={issuesList.data}
          renderItem={renderIssueItem}
          keyExtractor={(item, index) => index}></FlatList>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    elevation: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 16,
    margin: 8,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    issuesList: state.issues.issuesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIssuesList: () => dispatch(issueActions.getIssuesList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
