import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

const SelectedPhoto = (props) => {
  const { uri } = props;
  var photo = {
   uri: uri,
   type: 'image/jpeg',
   name: 'photo.jpg',
   //size: this.state.uri[0].size,
 };
 var form = new FormData();
 form.append("imageLink", photo);

 const config = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  body: form,
 }

 fetch("http://192.168.1.104/api/creations", config)
  .then((responseData) => {
      // Log the response form the server
      // Here we get what we sent to Postman back
      console.log(responseData);
  })
  .catch(err => {
    console.log(err);
  })
  return (
    <View style={styles.container}>
      <Image
        source={{uri: uri}}
        style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 300,
    width: 200
  }
});

export default SelectedPhoto;