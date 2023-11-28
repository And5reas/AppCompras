import { View, Text, TouchableNativeFeedback } from "react-native";
import { useFonts } from 'expo-font';
import styles from "./styles";

export default function Header({ title, exit=false, onLeave }){
    const [fontsLoaded] = useFonts({
        'Chewy-Regular': require('../../assets/font/Chewy-Regular/Chewy-Regular.ttf'),
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={[styles.text, {fontFamily: "Chewy-Regular"}]}>{title}</Text>
            {exit
            ? <TouchableNativeFeedback onPress={onLeave}>
                <View style={styles.buttonSair}>
                    <Text>Sair</Text>
                </View>
            </TouchableNativeFeedback>
            : <></>
            }
        </View>
    );
}