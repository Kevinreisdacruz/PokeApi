import { NavigationContainer } from "@react-navigation/native";
import { StackTipos } from "../tipos/StackTipos";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Login } from "../telas/Login";

export type stackProp = NativeStackNavigationProp<StackTipos>

const StackNav = createNativeStackNavigator<StackTipos>();

export const Stack: React.FC = () => {
    return(
        <NavigationContainer children={
            <StackNav.Navigator initialRouteName="Autenticacao" screenOptions={{headerShown: false}}>
                <StackNav.Screen name="Autenticacao" component={Login} />
            </StackNav.Navigator>
        } />
            

    );
}
