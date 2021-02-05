import * as React from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AppLoading from 'expo-app-loading'
import StockList from './components/StockList'
import uuidv1 from 'uuid/v1'

const { heigh, width } = Dimensions.get('window')
export default class App extends React.Component {
  state = {
    newListItem: '',
    dataIsReady: false,
    stocks: {} // add this
  }

  newListItemController = textValue => {
    this.setState({
      newListItem: textValue
    })
  }

  componentDidMount = () => {
    this.loadStocks()
  }

  loadStocks = () => {
    this.setState({ dataIsReady: true })
  }

  deleteStock = id => {
    this.setState(prevState => {
      const stocks = prevState.stocks
      delete stocks[id]
      const newSate = {
        ...prevState,
        ...stocks
      }
      return { ...newState }
    })
  }

  addStock = () => {
    const { newStockItem } = this.state

    if (newStockItem !== '') {
      this.setState(prevState => {
        const ID = uuidv1()
        const newStockObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            textValue: newStockItem,
            createdAt: Date.now()
          }
        }
        const newState = {
          ...prevState,
          newStockItem: '',
          stocks: {
            ...prevState.stocks,
            ...newStockObject
          }
        }

        return { ...newState }
      })
    }
  }
  render () {
    const { newListItem, dataIsReady, stocks } = this.state

    if (!dataIsReady) {
      return <AppLoading />
    }
    return (
      <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
        <StatusBar barStyle='light-content' />
        <Text style={styles.appTitle}>StockTrack</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={'Add a stock!'}
            value={newListItem}
            onChangeText={this.newListItemController}
            placeholderTextColor={'#999'}
            returnKeyType={'done'}
            autoCorrect={false}
            addStock={() => {
              if (this.state.newStockItem !== '') {
                this.setState({
                  newStockItem: ''
                })
              }
            }}
          />
          <ScrollView contentContainerStyle={styles.listContainer}>
            {Object.values(stocks).map(stock => (
              <StockList key={stock.id} {...stock} />
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
    // justifyContent: 'center'
  },
  listContainer: {
    alignItems: 'center'
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  }
})
