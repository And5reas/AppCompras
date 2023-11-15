import { useState } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { images } from "../../constants";
import { SimpleButton, SimpleInput } from "../../components";
import { cadastrarAPI } from "../../hooks";
import { AndroidToasts } from "../../helpers";
import styles from "../Login/styles";


export default function CadastroScreen(props){
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirSenha, setConfirSenha] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const API = new cadastrarAPI;
    const androidToasts = new AndroidToasts;

    const register = async() => {
        setIsLoading(true);
        await API.cadastrarAPI(
            user,
            email,
            senha,
            confirSenha
        );
        setIsLoading(API.isLoading)
        androidToasts.simpleToast(API.info)
        if (API.status)
            props.navigation.navigate("Login");
    };

    return (
        <ImageBackground source={images.backGroundCadastro} style={styles.container}>
            <StatusBar backgroundColor="#000" />
            <View style={styles.viewCampos}>
                <View style={styles.rowView}>
                    <SimpleInput 
                        nmFieldStyle={styles.text}
                        nmField="Usuário: "
                        fieldStyle={[styles.textInput, {width: 235}]}
                        value={user}
                        changeText={char => setUser(char)}
                    />
                </View>

                <View style={styles.rowView}>
                    <SimpleInput 
                        nmFieldStyle={styles.text}
                        nmField="E-mail: "
                        fieldStyle={[styles.textInput, {width: 245}]}
                        value={email}
                        changeText={char => setEmail(char)}
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.rowView}>
                    <SimpleInput 
                        nmFieldStyle={styles.text}
                        nmField="Senha: "
                        fieldStyle={[styles.textInput, {width: 245}]}
                        value={senha}
                        changeText={char => setSenha(char)}
                    />
                </View>

                <View style={styles.rowView}>
                    <SimpleInput 
                        nmFieldStyle={styles.text}
                        nmField="Confirmar Senha: "
                        fieldStyle={[styles.textInput, {width: 150}]}
                        value={confirSenha}
                        changeText={char => setConfirSenha(char)}
                    />
                </View>

                <SimpleButton
                    title="Cadastrar"
                    styles={{marginTop: 25}}
                    action={async() => register()}
                    isLoading={isLoading}
                />
            </View>
        </ImageBackground>
    );
}