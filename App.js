import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Provider} from 'react-redux';
import FilterScreen from './src/containers/filterScreen';
import OkrListScreen from './src/containers/okrListScreen';
import {store} from './src/store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              title={'Objectove Key & Results'}
              name={'OkrListScreen'}
              component={OkrListScreen}
              options={({navigation}) => ({
                headerTitle: 'Objectove Key & Results',
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('FilterScreen')}>
                    <Icon
                      name="filter"
                      size={30}
                      color="#000"
                      style={{marginRight: 16}}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name={'FilterScreen'}
              component={FilterScreen}
              options={({navigation}) => ({
                headerTitle: 'Filter by category',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconEntypo
                      name="cross"
                      size={30}
                      color="#000"
                      style={{marginLeft: 16}}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
