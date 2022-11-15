import React,{ useEffect, useState }  from "react";
import { View, Text, StyleSheet, Alert, Image, SafeAreaView, Button } from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'


const SwipeableImage = (props) => {
  return(
      <SafeAreaView style={styles.container}>
          <Text style={styles.textRow}>{props.memes.title}</Text>
          <Image source={{ uri: props.memes.url}} style={styles.photo} /> 
          <Button
            onPress={props.nextImage}
            title="Next"
            color="#007bff"
            style={{borderRadius: '20px!important'}}
          />
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
      padding:10,
      flex:1,
    },
    photo:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    textRow:{
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
      fontSize:20,
    }
});
export default SwipeableImage;