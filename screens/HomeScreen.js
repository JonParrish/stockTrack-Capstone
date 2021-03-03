import * as React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import Constants from 'expo-constants'

import { Button, TextInput } from 'react-native-paper'

//Custom Alert using React Native Dialog
import  Dialog  from 'react-native-dialog';

//React Dropdown
import  DropDownPicker  from 'react-native-dropdown-picker';


var bs = require("black-scholes");

const HomeScreen = () => {


  const handleCalculate = () => {

    setAnswer(bs.blackScholes(currentPrice, strikePrice, timeToExpiration, volatility, interest, choice));
    console.log(answer);
    showDialog();
  }

  //Custom Alert variables - DEFAULTS visible to false so it does not show on page load
  const [visible, setVisible] = React.useState(false);
  //Method to show custom alert
  const showDialog = () => {
    setVisible(true);
  };  
  //Method for if custom alert's "cancel" button is clicked; hides custom alert
  const handleCancel = () => {
    console.log('Choice: Cancel')
    setVisible(false);
  };


  const [answer, setAnswer] = React.useState('')
  const [currentPrice, setCurrentPrice] = React.useState('')
  const [strikePrice, setStrikePrice] = React.useState('')
  const [timeToExpiration, setTimeToExpiration] = React.useState('')
  const [volatility, setVolatility] = React.useState('')
  const [interest, setInterest] = React.useState('')
  const [choice, setChoice] = React.useState('')
  const options = [('put', 'call')]
  
  this.state = {
    choice: ''
  }
    
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>Options Calculator</Text>

      <Dialog.Container visible={visible}>
        <Dialog.Title value="Results"></Dialog.Title>
        <Dialog.Description>
          Option Price is: {answer}
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
      </Dialog.Container>

      <TextInput 
      mode='outlined'
          keyboardType = 'decimal-pad'
          maxLength={6}
          label='Current Price of the Underlying'
          value={currentPrice} 
          onChangeText={currentPrice => setCurrentPrice(currentPrice)} 
          numberOfLines={2} />

      <TextInput 
        mode='outlined'
        keyboardType = 'decimal-pad'
        maxLength={6}
        label='Strike Price'
        value={strikePrice} 
        onChangeText={strikePrice => setStrikePrice(strikePrice)} 
        numberOfLines={2} />
          
      <TextInput 
        mode='outlined'
        keyboardType = 'decimal-pad'
        maxLength={6}
        label='Time to Expiration (in years)'
        value={timeToExpiration} 
        onChangeText={timeToExpiration => setTimeToExpiration(timeToExpiration)} 
        numberOfLines={2} />
      
      <TextInput 
        mode='outlined'
        keyboardType = 'decimal-pad'
        maxLength={6}
        label='Volatility'
        value={volatility} 
        onChangeText={volatility => setVolatility(volatility)} 
        numberOfLines={2} />
      
      <TextInput 
        mode='outlined'
        keyboardType = 'decimal-pad'
        maxLength={6}
        label='Annual Risk-free Interest Rate as a Decimal'
        value={interest} 
        onChangeText={interest => setInterest(interest)} 
        numberOfLines={2} />
      

      <DropDownPicker
        items={[
            {label: 'Put', value: 'put'},
            {label: 'Call', value: 'call'},
        ]}
        defaultValue={this.state.country}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => setChoice(item)}
        
    />

      <Button mode='contained' onPress={handleCalculate}>
            Calculate
      </Button>
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

export default HomeScreen
