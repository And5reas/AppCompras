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
    placeholder,
    placeholderTextColor,
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
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
            />
        </React.Fragment>
    )
}