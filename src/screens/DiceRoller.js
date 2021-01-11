import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

import styles from '../config/styles';

import diceOne from '../assets/dice1.png';
import diceTwo from '../assets/dice2.png';
import diceThree from '../assets/dice3.png';
import diceFour from '../assets/dice4.png';
import diceFive from '../assets/dice5.png';
import diceSix from '../assets/dice6.png';

export default class DiceRoller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceNumberOne: diceOne,
      diceNumberTwo: diceTwo,
    };
  }

  rollerOne = () => {
    const diceRollOne = Math.floor(Math.random() * 6) + 1;

    switch (diceRollOne) {
      case 1:
        this.setState({diceNumberOne: diceOne});
        break;
      case 2:
        this.setState({diceNumberOne: diceTwo});
        break;
      case 3:
        this.setState({diceNumberOne: diceThree});
        break;
      case 4:
        this.setState({diceNumberOne: diceFour});
        break;
      case 5:
        this.setState({diceNumberOne: diceFive});
        break;
      case 6:
        this.setState({diceNumberOne: diceSix});
        break;
      default:
        this.setState({diceNumberOne: diceOne});
        break;
    }
  };

  rollerTwo = () => {
    const diceRollTwo = Math.floor(Math.random() * 6) + 1;

    switch (diceRollTwo) {
      case 1:
        this.setState({diceNumberTwo: diceOne});
        break;
      case 2:
        this.setState({diceNumberTwo: diceTwo});
        break;
      case 3:
        this.setState({diceNumberTwo: diceThree});
        break;
      case 4:
        this.setState({diceNumberTwo: diceFour});
        break;
      case 5:
        this.setState({diceNumberTwo: diceFive});
        break;
      case 6:
        this.setState({diceNumberTwo: diceSix});
        break;
      default:
        this.setState({diceNumberTwo: diceOne});
        break;
    }
  };

  rollBoth = () => {
    const diceRollOne = Math.floor(Math.random() * 6) + 1;
    const diceRollTwo = Math.floor(Math.random() * 6) + 1;

    switch (diceRollOne) {
      case 1:
        this.setState({diceNumberOne: diceOne});
        break;
      case 2:
        this.setState({diceNumberOne: diceTwo});
        break;
      case 3:
        this.setState({diceNumberOne: diceThree});
        break;
      case 4:
        this.setState({diceNumberOne: diceFour});
        break;
      case 5:
        this.setState({diceNumberOne: diceFive});
        break;
      case 6:
        this.setState({diceNumberOne: diceSix});
        break;
      default:
        this.setState({diceNumberOne: diceOne});
        break;
    }

    switch (diceRollTwo) {
      case 1:
        this.setState({diceNumberTwo: diceOne});
        break;
      case 2:
        this.setState({diceNumberTwo: diceTwo});
        break;
      case 3:
        this.setState({diceNumberTwo: diceThree});
        break;
      case 4:
        this.setState({diceNumberTwo: diceFour});
        break;
      case 5:
        this.setState({diceNumberTwo: diceFive});
        break;
      case 6:
        this.setState({diceNumberTwo: diceSix});
        break;
      default:
        this.setState({diceNumberTwo: diceOne});
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Click on the dice to Roll</Text>
          <Text style={styles.text}>Click on the button to roll both</Text>
        </View>

        <TouchableOpacity onPress={this.rollerOne}>
          <Image source={this.state.diceNumberOne} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.rollerTwo}>
          <Image source={this.state.diceNumberTwo} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.rollBoth}>
          <Text style={styles.button}>Roll Both</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
