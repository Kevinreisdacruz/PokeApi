import { TextInput } from "react-native"
import styles from "../../assets/css/styles"

interface inputProps {
    Placeholder: string,
}


export const Input: React.FC <inputProps>=(props) => {
    return (

        <TextInput
            style={styles.input}
            placeholder={props.Placeholder}
        />

    )
}
