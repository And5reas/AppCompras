import React from "react";
import { Text, TextInput } from "react-native"


export default function SimpleInput({ 
    nmFieldStyle, 
    nmField, 
    fieldStyle, 
    value, 
    changeText, 
    secureState, 
    keyboardType, 
    textAlign,
}){
    return(
        <React.Fragment>
            <Text style={nmFieldStyle}>{nmField}</Text>
            <TextInput 
                style={fieldStyle} 
                value={value}
                onChangeText={changeText}
                secureTextEntry={secureState}
                keyboardType={keyboardType}
                textAlign={textAlign}
            />
        </React.Fragment>
    )
}