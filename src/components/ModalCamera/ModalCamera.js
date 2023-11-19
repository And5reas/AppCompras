import { useState, useEffect, useRef } from "react";
import { View, Modal } from "react-native"
import { SimpleButton } from "../../components";
import { Camera } from "expo-camera";
import { icons } from "../../constants";
import { sendImageAPI } from "../../hooks";
import { manipulateAsync } from "expo-image-manipulator";
import * as MediaLabrary from "expo-media-library";
import styles from "./styles";

export default function ModalCamera({ exibirModal, setStateModal }) {

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);
    const sendImage = new sendImageAPI();
    
    useEffect(() => {
        (async() => {
            MediaLabrary.requestPermissionsAsync();
            // MediaLabrary.createAlbumAsync("AppCompras");
            // console.log( await MediaLabrary.getAlbumAsync("AppCompras"))
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const takePicture = async() => {
        if(cameraRef) {
            try {
                const picture = await cameraRef.current.takePictureAsync();
                const pictureResized = await manipulateAsync(picture.uri, [{resize: { width: 1020, height: 920} }])
                const asset = await MediaLabrary.createAssetAsync(pictureResized.uri)
                console.log(asset.filename)
            } catch (e) {
                console.log(e);
            }
        }
    }

    return(
        <Modal 
            visible={exibirModal} 
            transparent={true}
            animationType="slide"
        >
            <View style={styles.modal}>
                <View style={styles.container}>
                    <Camera
                        style={styles.camera}
                        type={type}
                        flashMode={flash}
                        ref={cameraRef}
                    >
                        <View style={styles.cameraView} />
                    </Camera>

                    <SimpleButton 
                        style={styles.buttonCamera} 
                        icon={icons.camera} 
                        styleIcon={styles.iconSizeCamera}
                        action={takePicture}
                    />

                    <SimpleButton 
                        style={styles.buttonClose} 
                        icon={icons.close} 
                        styleIcon={styles.iconClose}
                        action={() => setStateModal(false)}
                    />
                </View>
            </View>
        </Modal>
    );
}



