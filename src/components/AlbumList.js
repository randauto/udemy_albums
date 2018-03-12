import  React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {    
    state = {
        albums :[],
      }
    
    
      componentDidMount() {
        console.log("Did mount called ok")
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => {  
            console.log(response)      
            this.setState({
              albums:response.data,
            })
    
        })
        .catch(error => {
            console.log(error.message)
        });
    
      }
    
      renderAlbums() {
        return this.state.albums.map(album => {
           <AlbumDetail key ={album.title} album = {album}/>
        })    
      }
    
      render() {
        console.log(this.state.albums)
        return (
          <View style={styles.red}>
            {this.renderAlbums()}
          </View>
        );
      }
}

const styles = StyleSheet.create({
  bigblue: {
    backgroundColor: 'blue'
  },
  red: {
    color: 'red',
  },
});

export default AlbumList