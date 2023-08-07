import React from "react";
import { View, Text, Image, TextInput, FlatList } from "react-native";
import styles from "./styles"
import { Feather } from '@expo/vector-icons';
import ViewItemList from './ViewItemList'
import data from '../../assets/slides.json'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Feather name="search" size={20} color="black" />
            <TextInput style={styles.input} placeholder="Search"/>
            </View>
            <View style={styles.header}>
            <Image style={styles.avatar} source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png?f=webp'}}/>
            <Text style={{fontWeight: '600', fontSize: 25, marginHorizontal: 10}}>Hello, User</Text>
            </View>
            <Text style={styles.mostlyViewed}>Most Viewed By Users</Text>
            <FlatList
            data={data}
            renderItem={({item}) => <ViewItemList item={item}/>}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{maxHeight: '24%'}}
            />
            <Text style={styles.categories}>Categories</Text>
        </View>
    );
};

export default HomeScreen;
