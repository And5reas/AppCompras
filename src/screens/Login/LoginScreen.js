import { useState } from 'react';
import { 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { SimpleButton, SimpleInput } from '../../components'; 
import styles from './styles';
import { images, icons } from '../../constants';
import { loginAPI } from '../../hooks';
import { AndroidToasts } from '../../helpers';
import ApiPythonReactNative from '../../../test/ApiPythonReactNative';

export default function LoginScreen(props){
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const API = new loginAPI;
    const androidToasts = new AndroidToasts;

    const logar = async() => {
        setIsLoading(true);
        await API.loginAPI(user, senha);
        androidToasts.simpleToast(API.msg);
        setIsLoading(API.isLoading);
        if (API.status)
            props.navigation.navigate('Main')
    }

    return (
        <ImageBackground
            source={images.backGroundLogin} 
            style={styles.container}
        >
            <StatusBar backgroundColor="#000" />
            <Image source={icons.appIcon} style={styles.icon} />
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
                    styles={{marginTop: 25}} 
                    isLoading={isLoading}
                />

                <SimpleButton 
                    title="Cadastro" 
                    action={() => props.navigation.navigate("Cadastro")} 
                    styles={{marginTop: 0}} 
                />

            </View>
        </ImageBackground>
    );
}