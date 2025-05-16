import { Text, TextInput, View, TouchableOpacity, Image, Alert } from "react-native";
import styles from "../../assets/css/styles";
import { Input } from "../components/input";
import { ButtonConfirmar } from "../components/btn";
import { Button2 } from "../components/button2";
import { use, useEffect, useState } from "react";
import { autenticacao } from "../firebasecConexao";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebasecConexao";
import { addDoc, collection, Firestore, setDoc, doc } from "firebase/firestore";



export const Login: React.FC = () => {

    const [validacao, setValidacao] = useState(0)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [user, setUser] = useState('')

    useEffect(() => {
        console.log(nome)
    }, [nome])
    useEffect(() => {
        console.log(email)
    }, [email])
    useEffect(() => {
        console.log(senha)
    }, [senha])

    async function criarUsuario() {


        if (nome != '' && email != '' && senha != '') {

            console.log('funcao chamada')

            const info = {
                NomeUsuario: nome
            }

            try {
                const usuario = await createUserWithEmailAndPassword(autenticacao, email, senha)

                console.log('esses sao os dados que serao enviados com a conta info criada' + info.NomeUsuario + usuario.user.uid)

                const infosRef = doc(db, 'usuario', usuario.user.uid)

                await setDoc(infosRef, info)
                    .then((usuario) => {
                        Alert.alert('cadastro realizado com sucesso')
                        console.log('documento adicionado com sucesso')
                    }).catch((error) => {
                        console.log(error)
                    })

            } catch (error) {
                console.log('erro ao criar a conta ou adicionar ao firestore:' + error);
            }

        } else {
            console.log('fudeuuuu')
        }



    }

    async function entrarUsuario() {
        try {
            const usuario = await signInWithEmailAndPassword(autenticacao, email, senha)
            setUser(String(usuario.user.email))

        } catch (error) {
            console.log(error)
        }
    }



    // useEffect(()=> {
    //     console.log(email)
    // }, [email])


    // async function Registro() {
    //     await addDoc(collection(db, 'usuario'), {
    //         nome: nome,
    //         email: email,
    //         senha: senha,
    //     })
    //     .then(() =>{
    //         console.log('CADASTRO REALIZADO COM SUCESSO')
    //         setNome('')
    //         setEmail('')
    //         setSenha('')
    //     })
    //     .catch((err) =>{
    //         console.log(err)
    //     })
    // }

    return (
        <View style={[styles.root, styles.justifycontentCenter]}>

            <Text>{user}</Text>


            <View style={{ top: 130, alignItems: 'center', gap: 40 }}>

                <Image
                    source={require('../../assets/image/PokeApi.png')}
                />

                {validacao == 0 ? (

                    <View style={{ width: 320, alignItems: 'center', gap: 20 }}>
                        <Input
                            Placeholder="Email"
                        />

                        <Input
                            Placeholder="Senha"

                        />
                        <ButtonConfirmar autenticarUsuario={() => entrarUsuario()} BotaoNome="Entrar" />

                        <Button2 BotaoNome2="Não tenho uma conta" Validacao={() => setValidacao(1)} />

                    </View>

                ) :

                    <View style={{ width: 320, alignItems: 'center', gap: 20 }}>

                        <Input
                            Placeholder="Nome"
                            inputValor={nome}
                            inputInfos={(text) => setNome(text)}
                        />
                        <Input
                            Placeholder="Email"
                            inputValor={email}
                            inputInfos={(text) => setEmail(text)}

                        />
                        <Input
                            Placeholder="Senha"
                            inputValor={senha}
                            inputInfos={(text) => setSenha(text)}

                        />
                        <ButtonConfirmar autenticarUsuario={() => criarUsuario()} BotaoNome="Cadastrar" />

                        <Button2 BotaoNome2="Voltar" Validacao={() => setValidacao(0)} />

                    </View>

                }

            </View>

        </View>
    );
}

