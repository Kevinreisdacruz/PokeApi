import { NavigationContainer } from "@react-navigation/native";
import { BottomTabTipos } from "../tipos/BottomTabTipos";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../telas/Home";
import Icon from "@react-native-vector-icons/ionicons";
import { Image } from "react-native";
import { Favoritos } from "../telas/Favoritos";
import { InfosUsuario } from "../telas/InfosUsuario";


export type bottomProps = BottomTabNavigationProp<BottomTabTipos>

const bottomBar = createBottomTabNavigator<BottomTabTipos>()

export const Menu: React.FC = () => {

    return (


        <bottomBar.Navigator screenOptions={{ headerShown: false }}>

            <bottomBar.Screen name="Home" component={Home} options={{
                title: 'Pokémons', tabBarIcon: ({ color, size, focused }) => {
                    let sizeIcon = size * 1.3;

                    return (
                        <Image style={{ width: sizeIcon, height: sizeIcon }} source={require('../../assets/image/Charizard.webp')} />
                    );
                }
            }} />

            <bottomBar.Screen name="Favoritos" component={Favoritos} options={{
                title: 'Favoritos', tabBarIcon: ({ color, size, focused }) => {

                    let sizeIcon = size * 1.3;
                    return (
                        <Image style={{ width: sizeIcon, height: sizeIcon }} source={require('../../assets/image/coracao.png')} />
                    )
                }
            }} />
            
            <bottomBar.Screen name="InfosUsuario" component={InfosUsuario} options={{
                title: 'Usuario', tabBarIcon: ({ color, size, focused }) => {

                    let sizeIcon = size * 1.6;
                    return (
                        <Image style={{ width: sizeIcon, height: sizeIcon }} source={require('../../assets/image/ash.png')} />
                    )
                }
            }} />
        </bottomBar.Navigator>

    )
}