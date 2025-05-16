import { NavigationContainer } from "@react-navigation/native";
import { StackTipos } from "../tipos/StackTipos";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Login } from "../telas/Login";
import { Home } from "../telas/Home";

import { HomeScreen } from "../telas/HomeScreen";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { autenticacao } from "../firebasecConexao";
import { useEffect, useState } from "react";

export type stackProp = NativeStackNavigationProp<StackTipos>

const StackNav = createNativeStackNavigator<StackTipos>();


export const Stack: React.FC = () => {

    const [verifyUser, setVerify] = useState<boolean | null>(null)
    useEffect(() => {

        onAuthStateChanged(autenticacao, (usuario) => {
            if (usuario !== null) {
                setVerify(true);
            } else {
                setVerify(false);
            }

        });

    }, [])


    return (

        <NavigationContainer children={
            <StackNav.Navigator initialRouteName="Autenticacao" screenOptions={{ headerShown: false }}>
                {verifyUser ? (

                    <StackNav.Screen name="Home" component={HomeScreen} />
                ) :
                    <StackNav.Screen name="Autenticacao" component={Login} />

                }
            </StackNav.Navigator>
        } />


    );
}
