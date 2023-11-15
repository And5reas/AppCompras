import React from "react";
import { Text, TextInput } from "react-native"


export default function SimpleInput(props){
    return(
        <React.Fragment>
            <Text style={props.nmFieldStyle}>{props.nmField}</Text>
            <TextInput 
                style={props.fieldStyle} 
                value={props.value}
                onChangeText={props.changeText}
                secureTextEntry={props.secureState}
                keyboardType={props.keyboardType}
            />
        </React.Fragment>
    )
}