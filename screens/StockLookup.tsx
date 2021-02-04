import React, {useState} from "react";
import { StyleSheet, Button, Alert, TextInput,} from "react-native";
import { Text, View } from "../components/Themed";


const StockTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={5} // I don't believe any ticker symbols are over 5 alphanumeric characters
    />
  );
};

const SubmitButton = (props) => {
  return (
    <Button
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
    />
  );
};

const StockSearchTextInput = () => {

  //Updates prices of all stocks in list but page will not update automatically; split up this file into actual components and such!!!
  // - also it will use up all of your per-second/minute calls on the API . . . that's fun lmao
  // try {
  //     //input function to be called then time of interval:
  //     setInterval(async () => {
  //       //For loop to iterate over stockList stocks and call the update function for them.
  //       for(var i=0; i < stockList.length; i++) {
  //         searchStockByName(stockList[i].name);
  //       }
  //     }, 100000); //Should be in milliseconds, so that would be 10 seconds, right?
  //   } catch(e) {
  //     console.log(e);
  // }

  const [value, onChangeText] = React.useState("");
  let price = "0.00";
  function searchForStockPrice(e) {
    fetch(
      `https://finnhub.io/api/v1/quote?symbol=${value}&token=bthu09n48v6rsb74jp9g`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log(json.c);
        price = json.c;
        console.log(price);
        Alert.alert(
          'Stock Lookup',
          'Current Price of ' +value+ ' is: ' +price,
          [
            {
              //Around here give the User the ability to input a target price for the stock since they can now see the price, then they can add it to the list.
              //Maybe have that be an Alert above this one and this Alert below is triggered once they input and submit a price target(?).
              text: 'Add to List',
              onPress: () => { console.log('Choice: Add ' +value+ ' to the list.'); addStockToList(value); }
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Choice: Cancel'),
              style: 'cancel'
            },
          ],
          { cancelable: false }
        );
      });
  }

  const [stockList, setStockList] = useState([
    { name: 'GME', price: '', key: '1' },
    { name: 'KO', price: '', key: '2'},
  ]);

  function searchStockByName(name) {
    let price = "0.00";
    fetch(
      `https://finnhub.io/api/v1/quote?symbol=${name}&token=bthu09n48v6rsb74jp9g`
    )
      .then((response) => response.json())
      .then((json) => {
        //console.log("Price for " +name+ " is " +json.c);
        price = json.c;
        console.log("Price for " +name+ " is " +price);

        var tempList = stockList;
        for(var i=0; i < stockList.length; i++) {
          //console.log("inside the for loop : " +stockList[i].name);
          tempList[i] == stockList[i];
          if (tempList[i].name === name) {
            
            //console.log("var price is : " +price)
            tempList[i].price = price;

            //console.log("templist price is : " +tempList[i].price)
            setStockList(tempList);
            console.log(stockList)
          }
        }
        //return price;
    });

    


  }

  const addStockToList = (newStockName) => {
    console.log("in addStockToList : " +newStockName)
    var tempList = stockList;
    var index = tempList.length+1;
    // var stockPrice = JSON.stringify(searchStockByName(newStockName));
    //const tempList[index] = stockList.concat({ name: newStockName});
 
    
    tempList.push({name: newStockName, price: JSON.stringify(searchStockByName(newStockName)), key: JSON.stringify(index)});
    console.log(tempList);
    setStockList(tempList);
    
  }

  // async function updateStocks() {
  //   try {
  //     //input function to be called then time of interval:
  //     setInterval(async () => {
  //       //For loop to iterate over stockList stocks and call the update function for them.
  //       for(var i=0; i < stockList.length; i++) {
  //         searchStockByName(stockList[i].name);
  //       }
  //     }, 3000); //Should be in milliseconds, so that would be 3 seconds, right?
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }


  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
      }}
    >
      <StockTextInput
        style={{
          height: 90,
          borderColor: "white",
          borderWidth: 0,
          color: "#595959",
          fontSize: 50,
          marginHorizontal: 5,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        autoCapitalize="characters"
      />
      <SubmitButton
        style={{    
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="Get Stock Price"
        onPress={searchForStockPrice}
      />

        { stockList.map((stock) => { 
          return (
            <View key={stock.key}>
              <Text style={styles.stock}>{stock.name}  {searchStockByName(stock.name)} {stock.price}</Text> 
            </View>
          )
        })}
    </View>
  );
};

export default StockSearchTextInput;


const styles = StyleSheet.create({

  stock: {
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  },
  stockPrice: {
    //margin: 'right',
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
})



// const styles = StyleSheet.create({
//   Button: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// })


// const UselessTextInput = (props) => {
//   return (
//     <TextInput
//       {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//       editable
//       maxLength={40}
//     />
//   );
// };
// const UselessTextInputMultiline = () => {
//   const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
// };






// export default function TabTwoScreen() {
//   return (
//     <View>
//     <Text style={styles.title}>
//       Enter a valid Stock Ticker Symbol. (Ex. QQQ, SPY, APPL, etc.)
//     </Text>
//     <TextInput
//       style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//       onChangeText={text => onChangeText(text)}
//       value={""}
//     />
//     <Button
//       title="Press me"
//       onPress={() => Alert.alert(value)}
//     />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
