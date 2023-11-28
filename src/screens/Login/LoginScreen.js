import { useState } from 'react';
import { 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';
import { SimpleButton, SimpleInput } from '../../components'; 
import { images, icons } from '../../constants';
import { loginAPI } from '../../apis';
import { AndroidToasts } from '../../helpers';
import styles from './styles';

let debugCount = 0;
const API = new loginAPI;
const androidToasts = new AndroidToasts;

export default function LoginScreen(props){
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const logar = async() => {
        setIsLoading(true);
        await API.loginAPI(user, senha);
        androidToasts.simpleToast(API.msg);
        setIsLoading(API.isLoading);
        if (API.status)
            props.navigation.navigate('Main');
    }

    return (
        <ImageBackground
            source={images.backGroundLogin} 
            style={styles.container}
        >
            <StatusBar backgroundColor="#000" />
            <TouchableWithoutFeedback onPress={() => {
                debugCount += 1;
                androidToasts.simpleToast(`${debugCount} click to Degub API_URL`)
            }}>
                <Image source={icons.appIcon} style={styles.icon} />
            </TouchableWithoutFeedback>
            <View style={styles.viewCampos}>
                <View style={styles.rowView}>
                    <SimpleInput 
                        nmField="Usuário: "
                        nmFieldStyle={styles.text}
                        fieldStyle={styles.textInput}
                        value={user}
                        changeText={char => setUser(char)}
                    />
                </View>

                <View style={styles.rowView}>
                    <SimpleInput 
                        nmField="Senha: "
                        nmFieldStyle={styles.text}
                        fieldStyle={[styles.textInput, {width: 180}]}
                        value={senha}
                        changeText={char => setSenha(char)}
                        secureState={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={
                                showPassword? icons.openEye : icons.closeEye
                                } 
                                tintColor={'#fff'}
                                style={styles.imgShowPass}
                        />
                    </TouchableOpacity>
                </View>

                <SimpleButton 
                    title="Entrar" 
                    action={async() => logar()}
                    style={{marginTop: 25}} 
                    isLoading={isLoading}
                />

                <SimpleButton 
                    title="Cadastro" 
                    action={() => props.navigation.navigate("Cadastro")} 
                    style={{marginTop: 0}} 
                />

            </View>
        </ImageBackground>
    );
}