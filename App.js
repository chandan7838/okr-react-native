import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import DetailsScreen from './src/screens/detailsScreen';
import HomeScreen from './src/screens/homeScreen';
import {store} from './src/store/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
