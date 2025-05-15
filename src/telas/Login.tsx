import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "../../assets/css/styles";
import { Input } from "../components/input";
import { ButtonConfirmar } from "../components/buttonConfirmar";



export const Login: React.FC = () => {
    return (
        <View style={styles.root}>

            <View style={{ alignItems: 'center', gap: 15 }}>

                <Text style={{ textAlign: 'center', fontSize: 45, margin: 20 }}>Login</Text>

                <Input
                    Placeholder="Nome"
                />
                <Input
                    Placeholder="Email"
                />
                <Input
                    Placeholder="Senha"
                />

                <ButtonConfirmar BotaoNome="Entrar"/>

                

            </View>

        </View>
    );
}

