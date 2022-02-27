import React, {useEffect, useState} from 'react';
import {Modal, Pressable} from 'react-native';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import OkrListItem from '../../components/okrListItem/okrListItem';
import {styles} from './okrListScreen.styles';

const OkrListScreen = (props) => {
  const {getOkrList, okrList, filteredList} = props;
  const [okrListData, setOkrList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    getOkrList();
  }, []);

  useEffect(() => {
    setOkrList(filteredList);
  }, [filteredList]);

  useEffect(() => {
    setOkrList(okrList);
  }, [okrList]);

  const setModal = (item) => {
    setModalVisible(true);
    setItem(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      {props.isLoading ? (
        <ActivityIndicator color="#0000ff" size={'large'} />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={okrListData}
            renderItem={(item) => {
              return <OkrListItem {...item} setModalVisible={setModal} />;
            }}
            keyExtractor={(item) => item?.id}></FlatList>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{item.title}</Text>
            <Text style={styles.modalText}>
              {item.metric_name +
                ' : ' +
                item.metric_start +
                ' - ' +
                item.metric_target}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OkrListScreen;
