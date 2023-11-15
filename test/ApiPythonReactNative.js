import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function ApiPythonReactNative (){
    async function getText(){
        fetch("http://a0ff-187-92-211-162.ngrok.io/teste", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
        }).then(
            res => res.json()
        ).then(
            (result) => {
              console.log(result)
        }).catch((error) => {
            console.error(error);
        });
    }

    return(
        <View>
            <Text style={{fontSize: 15, color: "#EFC90B"}}>Um teste para ver como integrar o python com o React-Native</Text>
            <Button title="ApiTest" onPress={() => { getText() }}/>
        </View>
    );
}



