import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen, CadastroScreen } from "../screens";
import { COLORS } from "../constants";
import AppStack from "./AppStack";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();

export default function WelcomeStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="Cadastro" 
                    component={CadastroScreen}
                    options={{
                        headerTintColor: COLORS.TeaRose,
                        headerTitleAlign: "center",
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen 
                    name="Main"
                    component={AppStack}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}