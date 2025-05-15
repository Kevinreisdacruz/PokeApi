import { Text, TouchableOpacity, View } from "react-native"
import styles from "../../assets/css/styles"

interface buttonProps{
    BotaoNome: string,
}

export const ButtonConfirmar: React.FC <buttonProps>= (props) => {
    return (

        <>

        <TouchableOpacity style={styles.btnConfirmar}>
            <Text style={{ textAlign: 'center', color: 'white' }}>{props.BotaoNome}</Text>
        </TouchableOpacity>

        </>
    )
}