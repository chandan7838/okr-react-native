import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './okrListItem.styles';

const OkrListItem = (props) => {
  const {item, setModalVisible} = props;
  const [collapseSubOkr, setCollapseSubOkr] = useState(false);
  const renderSubOkrItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback onPress={() => setModalVisible(item)}>
        <Text style={styles.subOkrTitle}>{index + 1 + '. ' + item?.title}</Text>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => setCollapseSubOkr(!collapseSubOkr)}>
        <View style={styles.listTitleContainer}>
          <View>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.category}>
              {'Category - ' + item?.category}
            </Text>
          </View>
          {item?.subOkr.length > 0 &&
            (collapseSubOkr ? (
              <Icon
                name="arrow-down-drop-circle-outline"
                size={30}
                color="#000"
              />
            ) : (
              <Icon
                name="arrow-up-drop-circle-outline"
                size={30}
                color="#000"
              />
            ))}
        </View>
      </TouchableOpacity>
      <View>
        {!collapseSubOkr && (
          <FlatList
            data={item?.subOkr}
            renderItem={renderSubOkrItem}
            keyExtractor={(item) => item?.id}></FlatList>
        )}
      </View>
    </View>
  );
};

export default OkrListItem;
