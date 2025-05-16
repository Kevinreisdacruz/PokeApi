import { Text, TouchableOpacity, View } from "react-native"
import styles from "../../assets/css/styles"

interface buttonProps2{
    BotaoNome2: string,
    Validacao: () => void,
}



export const Button2: React.FC <buttonProps2> = (props) => {
    return (

        <>

        <TouchableOpacity style={styles.btn2} onPress={props.Validacao}>
            <Text style={styles.textBtn}>{props.BotaoNome2}</Text>
        </TouchableOpacity>

        </>
    )
}