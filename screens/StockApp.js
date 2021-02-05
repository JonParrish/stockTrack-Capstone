import * as React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native'
import Constants from 'expo-constants'

// You can import from local files
import Spacer from '../components/Spacer'
import ButtonIcon from '../components/ButtonIcon'

// or any pure javascript modules available in npm
import { Title, Paragraph, Card, Button, TextInput } from 'react-native-paper'
import { FontAwesome as Icon } from '@expo/vector-icons'

// Import Redux and React Redux Dependencies
import { connect } from 'react-redux'
import { addStock, deleteStock } from '../redux/actions'

// Test Data
// const data = [
//   {id: 1, stock: "Do this stuff"},
//   {id: 2, stock: "Do another stuff"},
// ]

const StockApp = ({ stock_list, addStock, deleteStock }) => {
  const [stock, setStockName, stockName, price, setPrice] = React.useState('')

  const handleAddStock = () => {
    let price = '0.00'

    fetch(
      `https://finnhub.io/api/v1/quote?symbol=${stock}&token=bthu09n48v6rsb74jp9g`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json)
        price = json.c
        console.log(price)
        console.log(stockName + '   -   ' + stock)

        Alert.alert(
          'Stock Lookup',
          'Current Price of ' + stock + ' is: ' + price,
          [
            {
              text: 'Add to List',
              onPress: () => {
                console.log('Choice: Add ' + stock + ' to the list.')
                addStock(stock, price, 50)
                setStockName('')
              }
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Choice: Cancel'),
              style: 'cancel'
            }
          ],
          { cancelable: false }
        )
      })
  }

  const handleDeleteStock = id => {
    deleteStock(id)
  }
  // const StockSearchTextInput = () => {

  //   }
  // }

  return (
    <View style={styles.container}>
      <Card title='Card Title'>
        <Text style={styles.paragraph}>StockTrack</Text>
      </Card>
      <Spacer />
      <Card>
        <Card.Content>
          <Title>Add Stock Here:</Title>

          <TextInput
            mode='outlined'
            label='Stock'
            value={stockName}
            autocapitalize='characters'
            onChangeText={stockName => setStockName(stockName)}
          />
          <Spacer />
          <Button mode='contained' onPress={handleAddStock}>
            Add Stock
          </Button>
        </Card.Content>
      </Card>
      <Spacer />
      <FlatList
        data={stock_list}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <>
              <Card>
                <Card.Title
                  title={stock_list[index].stock}
                  left={props => <Icon name='stocks' size={24} color='black' />}
                  right={props => (
                    <ButtonIcon
                      iconName='close'
                      color='red'
                      onPress={() => handleDeleteStock(item.id)}
                    />
                  )}
                />
                <Card.Content>
                  <Paragraph>{stock_list[index].price}</Paragraph>
                  <Paragraph>{stock_list[index].targetPrice}</Paragraph>
                </Card.Content>
              </Card>
              <Spacer />
            </>
          )
        }}
      />
      <Spacer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    stock_list: state.stocks.stock_list
  }
}

const mapDispatchToProps = { addStock, deleteStock }

export default connect(mapStateToProps, mapDispatchToProps)(StockApp)
