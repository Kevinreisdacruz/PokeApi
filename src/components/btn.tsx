import { Text, TouchableOpacity, View } from "react-native"
import styles from "../../assets/css/styles"


interface buttonProps{
    BotaoNome: string
    autenticarUsuario?: () => void
}

export const ButtonConfirmar: React.FC <buttonProps>= (props) => {
    return (

        <>

        <TouchableOpacity style={styles.btn1}>
            <Text style={styles.textBtn } onPress={props.autenticarUsuario}>{props.BotaoNome}</Text>
        </TouchableOpacity>

        </>
    )
}