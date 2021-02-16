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
import Spacer from '../components/Spacer'
import ButtonIcon from '../components/ButtonIcon'
import { Title, Paragraph, Card, Button, TextInput } from 'react-native-paper'
import { FontAwesome as Icon } from '@expo/vector-icons'

//Redux and React Redux Dependencies
import { connect } from 'react-redux'
import { addStock, deleteStock } from '../redux/actions'

//Custom Alert using React Native Dialog
import Dialog from "react-native-dialog";

const StockApp = ({ stock_list, addStock, deleteStock }) => {

  //Set variables through React.useState and Redux for use in code below
  const [stock, setStockName, stockName] = React.useState('')
  const [price, setPrice ] = React.useState('')
  const [targetPrice, setTargetPrice] = React.useState('')
  const [interval, setInterval] = React.useState('')

  //Custom Alert variables
  const [visible, setVisible] = React.useState(false);
  //Method to show custom alert
  const showDialog = () => {
    setVisible(true);
  };
  //Method for adding stock to list through the custom alert
  const handleAdd = () => {
    
    console.log('Choice: Add ' + stock + ' to the list.') 
    addStock(stock, price, targetPrice)
    //Return state variables to empty for future stocks to the list
    setStockName('')
    setPrice('')
    setTargetPrice('')
    //set our custom alert box to non-visible again for further usage of the app
    setVisible(false);
  };
  //Method for if custom alert's "cancel" button is clicked; hides custom alert
  const handleCancel = () => {
    console.log('Choice: Cancel')
    setVisible(false);
  };


    // try {
    //   //input function to be called then time of interval:
    //   setInterval( () => {
    //     console.log("Inside async function")
    //     //For loop to iterate over stockList stocks and call the update function for them.
    //     for(var i=0; i < stock_list.maxLength; i++) {
          
    //       stock_list[i].price = fetch(
    //         `https://finnhub.io/api/v1/quote?symbol=${stock}&token=bthu09n48v6rsb74jp9g`
    //       ).then(response => response.json()).then(json => { return json.c })
            
    //       console.log("Inside for loop")
    //     }
    //   }, 500000); //Should be in milliseconds, so that would be 10 seconds, right?
    // } catch(e) {
    //   console.log(e);
    // }

  

  //Add Stock Method/Function
  const handleAddStock = () => {
    let price = '0.00'
    //Utilizes the finnhub API to retrieve data syncronously relevant to the User
    fetch(
      `https://finnhub.io/api/v1/quote?symbol=${stock}&token=bthu09n48v6rsb74jp9g`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setPrice(json.c)
        console.log(price)
        console.log(stock)

      })
      showDialog();
  }

  //Handles removing a stock from the list calling the deleteStock() function through Redux
  const handleDeleteStock = id => {
    deleteStock(id)
  }


  return (
    
    <View style={styles.container}>


      {/* <Button title="Show dialog" onPress={showDialog} style={{fontSize:24}} /> */}
      <Dialog.Container visible={visible}>
        <Dialog.Title>Current Price for {stock} is {price} </Dialog.Title>
        <Dialog.Description>
          Set a target price:
        </Dialog.Description>
        <Dialog.Input 
          mode='outlined'
          keyboardType = 'decimal-pad'
          maxLength={6}
          label='Target Price'
          value={targetPrice} 
          onChangeText={targetPrice => setTargetPrice(targetPrice)} 
          numberOfLines={2} />
        <Dialog.Button label="Add" onPress={handleAdd} />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
      </Dialog.Container>

      <Card title='Card Title'>
        <Text style={styles.paragraph}>StockTrack</Text>
      </Card>
      <Spacer />
      <Card>
        <Card.Content>
          <Title>Add Stock Here:</Title>
          <Text style={{position: 'absolute', right: 110, bottom: 175}}>Refresh </Text>
          <Text style={{position: 'absolute', right: 110, bottom: 155}}>Interval </Text>

          <TextInput 
            style={{position: 'absolute', right: 40, height: 55, width: 60}}

            keyboardType = 'numeric'
            value={interval}
            maxLength={2}
            onChangeText={interval => setInterval(interval)}
          />
          <TextInput
            mode='outlined'
            keyboardType = 'name-phone-pad'
            maxLength={4}
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

//Custom CSS styles called as a StyleSheet through React built-in components
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
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
    stock_list: state.stocks.stock_list
  }
}

const mapDispatchToProps = { addStock, deleteStock }

export default connect(mapStateToProps, mapDispatchToProps)(StockApp)
