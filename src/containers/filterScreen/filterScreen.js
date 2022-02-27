import React, {useEffect, useState} from 'react';
import {Text, FlatList, TouchableOpacity, View} from 'react-native';
import FilterCategoryItem from '../../components/filterCategoryitem/filterCategoryItem';
import {styles} from './filterScreen.styles';

const FilterScreen = (props) => {
  const {navigation, okrList, getFilteredList} = props;
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategoryList, setSelectedCategoryList] = useState([]);

  useEffect(() => {
    let categoryList = okrList?.filter(
      (data, i, arr) =>
        arr.findIndex((arrData) => arrData.category === data.category) === i
    );
    setCategoryList(categoryList);
  }, [okrList]);

  const selectCategory = (category, value) => {
    if (!value) {
      selectedCategoryList.push(category);
      setSelectedCategoryList([...selectedCategoryList]);
    } else {
      let index = selectedCategoryList.indexOf(category);
      if (index > -1) {
        selectedCategoryList.splice(index, 1);
      }
      setSelectedCategoryList([...selectedCategoryList]);
    }
  };

  const onPress = () => {
    if (selectedCategoryList.length > 0) {
      let filteredList = okrList.filter((data) =>
        selectedCategoryList.includes(data.category)
      );
      getFilteredList(filteredList);
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryList}
        renderItem={(item) => {
          return (
            <FilterCategoryItem {...item} selectCategory={selectCategory} />
          );
        }}
        keyExtractor={(item, index) => item?.category + index}></FlatList>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.submit,
            {
              backgroundColor:
                selectedCategoryList.length > 0 ? '#2E9298' : '#A9A9A9',
            },
          ]}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterScreen;
