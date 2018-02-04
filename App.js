import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';

export default class App extends React.Component {
  state = { comic: 'Tap here for a comic' }
  fetchComic() {
    fetch(`https://xkcd.com/${ getRandomInt() }/info.0.json`)
      .then(response => response.json())
      .then(comic => this.setState({ comic: comic.img }));
    this.setState({ comic: `https://xkcd.com/${ getRandomInt() }/info.0.json` });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=> this.fetchComic()}>
          <Image
            source={{uri: `${this.state.comic}`}}
            style={{flex: 1, height: 800, width: 400}}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

// ADD A LABEL THAT SAYS CLICK FOR ANOTHER COMIC

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(1900));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
