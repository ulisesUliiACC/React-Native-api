import React from  'react';	
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";



const Drawer= createDrawerNavigator()

export function DrawerNavigation(){

    return (
        <Drawer.Navigator>
            <Drawer.Screen name ="Perfil " component= {ProfileScreen} />
            <Drawer.Screen name ="configuraciones " component= {SettingScreen} />
        </Drawer.Navigator>
    )   
}