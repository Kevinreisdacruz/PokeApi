import { StyleSheet, StatusBar } from "react-native";


const styles = StyleSheet.create({
    root: {
        marginTop: StatusBar.currentHeight || 0
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

 

    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        borderWidth: 3,
        borderRadius: 15,
        backgroundColor: '#FFCB05'
    },

    btnVoltar: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        margin: 10,
        backgroundColor: '#FFCB05',
        width: 30,
        borderRadius: 5,
    },

    nomes: {
        padding: 7,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.37,
        shadowRadius: 2,
        elevation: 5,
        width: 300,
        margin: 5
    },

    nomePoke: {
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: '#FFCB05',
        width: 300,
        borderRadius: 10,
        color: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.37,
        shadowRadius: 2,
        elevation: 5,
        margin: 5
    },

    infosPoke: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.37,
        shadowRadius: 2,
        elevation: 5,
        width: 300,
        margin: 5,
    },

    input: {
        borderWidth: 2,
        width: '80%',
        
    },

    btnConfirmar: {
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 200,
        height: 25,
        borderRadius: 5
    
    }



});

export default styles;