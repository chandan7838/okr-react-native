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
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {actions as issueActions} from '../store/issues/actions';

const DetailScreen = (props) => {
  const {getIssueDetail, issuesDetail, route} = props;

  useEffect(() => {
    getIssueDetail(route?.params?.id);
  }, []);

  const getDays = (item) => {
    let date1 = new Date(item?.created_at);
    let date2 = new Date();
    var difference_In_Time = date2.getTime() - date1.getTime();
    let difference_In_Days = difference_In_Time / (1000 * 3600 * 24);
    return `opened ${
      Math.floor(difference_In_Days) === 0
        ? `today by ${item?.user?.login}`
        : `${Math.floor(difference_In_Days)} ${
            Math.floor(difference_In_Days) === 1 ? 'day' : 'days'
          } ago by ${item?.user?.login}`
    }`;
  };
  const renderLabelItem = ({item}) => {
    return (
      <View key={item.name} style={styles.item}>
        <Text
          style={[
            styles.label,
            {
              color: item.color,
              borderColor: item.color,
              borderWidth: 1,
              borderRadius: 9999,
            },
          ]}>
          {item.name}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{issuesDetail?.data?.title}</Text>
        <Text style={styles.title}>
          {'Status: ' + issuesDetail?.data?.state}
        </Text>
        <FlatList
          data={issuesDetail?.data?.labels}
          renderItem={renderLabelItem}
          keyExtractor={(item, index) => index}></FlatList>
        <Text style={styles.title}>{getDays(issuesDetail?.data)}</Text>
        <Text style={styles.title}>{issuesDetail?.data?.body}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    margin: 8,
    backgroundColor: '#ffffff',
  },
  item: {
    flexDirection: 'row',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    padding: 8,
    marginBottom: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    issuesDetail: state.issues.issuesDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIssueDetail: (data) => dispatch(issueActions.getIssueDetail(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
