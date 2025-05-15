import { StyleSheet, StatusBar } from "react-native";


const styles = StyleSheet.create({
    root:{
        marginTop:StatusBar.currentHeight || 0
    },

    container: {
        alignItems:'center',
        justifyContent:'center',
        gap:20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width:180, 
        borderWidth:3,
        borderRadius: 15,
        backgroundColor: '#FFCB05'
    },

    nomes: {
        padding: 7,
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }

    infosPoke:{
         
    }

  });

  export default styles;