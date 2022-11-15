import React,{ useEffect, useState }  from "react";
import axios from "axios";
import { View, StyleSheet, Alert } from 'react-native'
import SwipeableImage from "./SwipeableImage";

const Tile = () => {
    const fetchMemes = async () => {
        try {
            const { data } = await axios.get('https://meme-api.herokuapp.com/gimme/10');
            setMemes(data.memes);
        } catch (err){
            Alert.alert("Error", "Couldn't get memes", {
                text: "Retry", 
                onPress: () => {
                  fetchMemes();
               } 
           })
        }
    }
    
    const [memes, setMemes] = useState([]);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        fetchMemes();
    },[])

    const nextImage = () => {
        if (index >= 9) {
            fetchMemes();
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    if(!memes.length){
        return <View/>;
    }
    return(
        <SwipeableImage memes = {memes[index]} nextImage={nextImage}/>
    )
}
export default Tile;