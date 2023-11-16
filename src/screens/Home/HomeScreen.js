import { useState, useEffect, useRef } from "react";
import { View, Text, Button } from "react-native";
import { TabBarBottom, PlusButton, Header } from "../../components";
import styles from "./styles";

import { useCameraPermission } from "expo";
import { Camera, CameraType } from "expo-camera";
import * as MediaLabrary from "expo-media-library";

export default function HomeScreen() {

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async() => {
            MediaLabrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const takePicture = async() => {
        if(cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    }

    return(
        <View style={styles.container}>
            <Text>Batata</Text>
            <Header />
            <Camera
                style={{width: 100, height: 100}}
                type={type}
                flashMode={flash}
                ref={cameraRef}
            ><Text>oi</Text></Camera>
            <Button title="BATATAAAAA" onPress={takePicture}></Button>
            <PlusButton />
            <TabBarBottom />
        </View>
    );
}