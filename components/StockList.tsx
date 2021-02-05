import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');

class StockList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
        isEditing: false,
        stockValue: props.textValue
        };
    }
    static propTypes = {
        textValue: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
    };
    
    state = {
    isEditing: false,
    // isCompleted: false,  // remove this
    stockValue: ''
    };

    toggleItem = () => {
        this.setState(prevState => {
            return{
               // isCompleted: !prevState.isCompleted
            }
        })
    };

    startEditing = () => {
        const textValue  = this.props;
        this.setState({
            isEditing: true,
            stockValue: textValue
        });
    };

    finishEditing = () => {
        this.setState({
            isEditing: false
        });
    };

    controlInput = textValue => {
        this.setState({ stockValue: textValue });
    };
    render() {

    const {isEditing, stockValue} = this.state;

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={[styles.text]}>
                    { stockValue }
                </Text>
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        marginVertical: 15,
        width: width / 2,
        paddingBottom: 5
    },
    rowContainer: {
        flexDirection: 'row',
        width: width / 2,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttons: {
        flexDirection: 'row',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
    },
    text: {
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        // remove borderColor property from here
        borderWidth: 3,
        marginRight: 20,
    },
    completeCircle: {
        borderColor: '#bbb',
    },
    incompleteCircle: {
        borderColor: '#DA4453',
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: "#29323c",
    },
});

export default StockList