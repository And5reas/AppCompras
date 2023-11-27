// React Imports
import { useState, useEffect, useRef } from "react";
import { View, Modal, ActivityIndicator, Text } from "react-native"

// Expo Imports
import { Camera } from "expo-camera";
import { manipulateAsync } from "expo-image-manipulator";
import * as MediaLabrary from "expo-media-library";

// Project Imports
import { SimpleButton } from "../../components";
import { icons, COLORS } from "../../constants";
import { sendImageAPI } from "../../hooks";
import styles from "./styles";

export default function ModalCamera({ exibirModal, setStateModal }) {

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const type = Camera.Constants.Type.back;
    const flash = Camera.Constants.FlashMode.off;
    const [isLoading, setIsLoading] = useState(false);
    const cameraRef = useRef(null);
    const sendImage = new sendImageAPI();
    
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
                const picture = await cameraRef.current.takePictureAsync();
                setIsLoading(true);
                const pictureResized = await manipulateAsync(picture.uri, [{resize: { width: 1020, height: 920 } }])
                await sendImage.sendImageAPI(pictureResized.uri); 
                setIsLoading(false);
            } catch (error) {
                console.log(`src/components/ModalCamera: ${error}`);
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
                    {hasCameraPermission
                    ?   <Camera
                            style={styles.camera}
                            type={type}
                            flashMode={flash}
                            ref={cameraRef}
                        >

                            {isLoading
                            ? ( <View style={[styles.cameraView, {backgroundColor: "black"}]} >
                                    <ActivityIndicator size="large" color={COLORS.Eggplant} />
                                </View> )
                            : ( <View style={styles.cameraView} /> )
                            }
                        </Camera>
                    : <Text>Erro: Câmera necessita de permissão para funcionar</Text>
                    }

                    <Text style={styles.textDica}>Centralizar etiqueta no retangulo a cima</Text>

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



