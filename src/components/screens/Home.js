import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchPokemons from "../../api/";

const Home = () =>{
    const pokemon = fetchPokemons();
    return (
        <View>
            <Text> Pokedex con React Native y PokeAPi.</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({});

export default Home;