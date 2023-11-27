import { View, Text, ActivityIndicator, Image } from "react-native";
import { useState, useEffect, useRef } from "react";

import { Camera } from "expo-camera";
import { manipulateAsync } from "expo-image-manipulator";
import * as MediaLabrary from "expo-media-library";

import { SimpleButton } from "..";
import { COLORS, icons } from "../../constants";
import styles from "./styles";

export default function CameraProduto({ image, setImage, hideImage, pictureNotTaken, setPictureNotTaken }){
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const type = Camera.Constants.Type.back;
    const flash = Camera.Constants.FlashMode.off;
    const cameraRef = useRef(null);

    useEffect(() => {
        (async() => {
            MediaLabrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })(cameraRef);
    }, [])

    const takeThumb = async() => {
        if(cameraRef) {
            try {
                const picture = await cameraRef.current.takePictureAsync();
                setIsLoading(true);
                const pictureResized = await manipulateAsync(picture.uri, [{resize: { width: 1020, height: 920 } }])
                setImage(pictureResized.uri);
                setIsLoading(false);
                setPictureNotTaken(false);
            } catch {
                setPictureNotTaken(false);
                setPictureNotTaken(true);
            }
        }
    }

    return(
        <View style={styles.container}>
            {hasCameraPermission
            ? pictureNotTaken
            ? <Camera
                    style={styles.camera}
                    type={type}
                    flashMode={flash}
                    ref={cameraRef}
                >
                    {isLoading
                    ? ( <View style={[styles.cameraView, {backgroundColor: "black"}]} >
                            <ActivityIndicator size="large" color={COLORS.Eggplant} />
                        </View> )
                    : ( <View style={styles.cameraView}>
                            <SimpleButton 
                                title="Tirar foto do produto"
                                style={styles.button}
                                action={takeThumb}
                            />
                        </View> )
                    }
                </Camera>
            :   !hideImage
            ?   <View>
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />
                    <SimpleButton 
                        style={styles.resetImage}
                        icon={icons.backImage}
                        styleIcon={styles.icon}
                        action={() => {
                            setImage("a")
                            setPictureNotTaken(true)
                        }}
                    />
                </View>
            :   <></>
            : <Text>Erro: Câmera necessita de permissão para funcionar</Text>
            }
        </View>
    );
};