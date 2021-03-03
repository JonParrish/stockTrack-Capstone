import * as React from 'react'
import { StyleSheet, StatusBar, Text } from 'react-native'
import StockApp from './screens/StockApp'
import HomeScreen from './screens/HomeScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import calcIcon from './components/calcIcon.png';
import stockIcon from './components/stockIcon.png';

// Import Redux
import store from './redux/store'
import { Provider } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => (
          <AnimatedTabBar tabs={tabs} {...props} />
        )}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Profile"
          component={StockApp}>   
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
    // justifyContent: 'center'
  }
})

const Tab = createBottomTabNavigator();

const tabs = {
  Home: { // < Screen name
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: (props) => {stockIcon},
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Profile: { // < Screen name
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: (props) => {calcIcon},
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
}

export default App
