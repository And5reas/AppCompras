import { useState } from "react";
import { View, Modal, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import config from "../../config/config.json"
import styles from "./styles";

export default function DegubAPIURL({ visible, closeDegub }){
    const [url, setUrl] = useState("")

    return(
        <Modal visible={visible} transparent={true}>
            <View style={styles.container}>
                <View style={[styles.container, {backgroundColor: "#000", height: 100, position: "absolute"}]}>
                    <TextInput
                        style={styles.textInput} 
                        placeholder="Helow world, Paste API URL HERE" 
                        placeholderTextColor="#FF0"
                        value={url}
                        onChangeText={char => setUrl(char)}
                    />
                    <TouchableWithoutFeedback onPress={() => {
                            closeDegub(false);
                            config['ApiPython'] = url;
                        }}>
                        <Text style={styles.textInput}>Close</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </Modal>
    )
}