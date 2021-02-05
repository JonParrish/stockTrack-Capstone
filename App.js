import * as React from 'react'
import { StyleSheet, StatusBar, Text } from 'react-native'
import StockApp from './screens/StockApp'

// Import Redux
import store from './redux/store'
import { Provider } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'

const App = () => {
  return (
    <Provider store={store}>
      <StockApp />
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
export default App
