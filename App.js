import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      button: 'GO',
      last: null
    };

    // variável do timer do relogio
    this.timer = null;
    this.go = this.go.bind(this);
    this.reset = this.reset.bind(this);
  }

  go () {

    if (this.timer != null) {
      // aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({button: 'GO'});

    } else {
      //começa girar o timer
      this. timer = setInterval( () => {
        this.setState({number: this.state.number + 0.1})
      }, 100);

      this.setState({button: 'STOP'});
    }

    
  }

  reset () {
    if (this.timer != null) {
      // aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      last: this.state.number,
      number: 0,
      button: 'GO'
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require('./src/stopwatch.png')}
          style={StyleSheet.stopwatch}
        />

        <Text style={styles.timer}> {this.state.number.toFixed(1)} </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.btnText}>{this.state.button}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.reset}>
            <Text style={styles.btnText}>RESET</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastArea}>
          <Text style={styles.runText}> 
            {this.state.last > 0 ? 'Last record: ' + this.state.last.toFixed(2) + 's' : ''} 
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  lastArea: {
    marginTop: 40,

  },
  runText:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }

});

export default App;