import { NavigationContainer } from "@react-navigation/native";
import { BottomTabTipos } from "../tipos/BottomTabTipos";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../telas/Home";
import Icon from "@react-native-vector-icons/ionicons";


export type bottomProps = BottomTabNavigationProp<BottomTabTipos>

const bottomBar = createBottomTabNavigator<BottomTabTipos>()

export const Menu: React.FC = () => {

    return (


        <bottomBar.Navigator screenOptions={{ headerShown: false }}>
    
            <bottomBar.Screen  name="Home" component={Home} options={{ title: 'Pokémons' }}  />
        </bottomBar.Navigator>

    )
}