import * as React from 'react'
import { StyleSheet, StatusBar, Text } from 'react-native'
import StockApp from './screens/StockApp'

// Import Redux
import store from './redux/store'
import { Provider } from 'react-redux'
import { LinearGradient } from 'react-native-linear-gradient'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function HomeScreen () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}

function StockApp () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
        <Provider store={store}>
          <StockApp />
        </Provider>
      </LinearGradient>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='StockApp' component={StockApp} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
    // justifyContent: 'center'
  }
})
export default App
