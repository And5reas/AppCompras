import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";

const Stack = createStackNavigator();

export default function AppStack() {

    const config = {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
    };

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}
            />
        </Stack.Navigator>
    )
}