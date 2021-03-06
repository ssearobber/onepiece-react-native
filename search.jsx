import React, { Component } from "react";
import { View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default class Test extends Component {

    render() {
        return (
            <View>
                <SearchBar
                    placeholder="Search here"
                    onPress={() => alert("onPress")}
                    onChangeText={(text) => console.log(text)}
                />
            </View>
        );
    }
}