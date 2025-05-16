import { Text, View, Image } from "react-native";
import styles from "../../assets/css/styles";

export const Favoritos: React.FC = () => {
    return (

        <View style={styles.root}>

            <View style={{alignItems: 'center'}}>

            <Image
                style={{ width: 350 }}
                source={require('../../assets/image/PokeApi.png')}
            />

            </View>

        </View>
    );
} 