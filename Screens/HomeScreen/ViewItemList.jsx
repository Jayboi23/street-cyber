import React from "react";
import { Button, Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const ViewItemList = ({item}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginVertical: 8}}>{item.title}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{alignSelf: 'center', color: 'white', fontWeight: 'bold'}}>View</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default ViewItemList;
