import { TextInput } from "react-native"
import styles from "../../assets/css/styles"

interface inputProps {
    Placeholder: string,
    inputInfos?: (param: string) => void,
    inputValor?: string
}


export const Input: React.FC <inputProps> = (props) => {
    return (

        <TextInput
            style={styles.input}
            placeholder={props.Placeholder}
            onChangeText={props.inputInfos}
            value={props.inputValor}
            
        />

    )
}
