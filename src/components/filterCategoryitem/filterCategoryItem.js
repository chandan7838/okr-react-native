import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './filterCategoryItem.styles';
import {CheckBox} from 'react-native-elements';

const FilterCategoryItem = (props) => {
  const {item, selectCategory} = props;
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    selectCategory(item.category, checked);
  };

  return (
    <View style={styles.listItem}>
      <Text style={styles.title}>{item.category}</Text>
      <CheckBox checked={checked} onPress={() => handleCheck()} />
    </View>
  );
};

export default FilterCategoryItem;
