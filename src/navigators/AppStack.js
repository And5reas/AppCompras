import { View, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, AddItem, ItensCadastrados } from "../screens";
import { COLORS, icons } from "../constants";
import styles from "./styles";

const TabNavigator = createBottomTabNavigator();

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
        <TabNavigator.Navigator initialRouteName="Home">
            <TabNavigator.Screen 
                name="getItem"
                component={ItensCadastrados}
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    tabBarStyle: styles.containerTabBar,
                    tabBarIcon: () => (
                        <View style={styles.selectArea}>
                            <Image 
                                style={[styles.itens, {height: 50, width: 45}]}
                                source={icons.addingItem}
                            />
                        </View>
                    ),
                    tabBarIconStyle: styles.icon,
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: COLORS.LavanderPink,
                }}
            />
            <TabNavigator.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    tabBarStyle: styles.containerTabBar,
                    tabBarIcon: () => (
                        <View style={styles.selectArea}>
                            <Image 
                                style={styles.itens}
                                source={icons.tapHome}
                            />
                        </View>
                    ),
                    tabBarIconStyle: styles.icon,
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: COLORS.LavanderPink,
                }}
            />
            <TabNavigator.Screen
                name="AddItem"
                component={AddItem}
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    tabBarStyle: styles.containerTabBar,
                    tabBarIcon: () => (
                        <View style={styles.selectArea}>
                            <Image 
                                style={[styles.itens, {height: 40, width: 45}]}
                                source={icons.addingItemToList}
                            />
                        </View>
                    ),
                    tabBarIconStyle: styles.icon,
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: COLORS.LavanderPink,
                }}
            
            />
        </TabNavigator.Navigator>
    )
}