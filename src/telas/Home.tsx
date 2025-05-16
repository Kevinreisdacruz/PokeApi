import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import styles from '../../assets/css/styles';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Pokemon from '../components/InfosPoke';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebasecConexao';
import { autenticacao } from '../firebasecConexao';
import { User } from '../tipos/User';





export const Home: React.FC = () => {

    const [pokemons, setPokemons] = useState([])
    const [infosPoke, setInfosPoke] = useState('');
    const [campoPesquisa, setCampoPesquisa] = useState('')
    const [modal, setModal] = useState(false)
    const [printNome, setPrintNome] = useState<User | null> (null)

    async function Document() {


        const Ref = doc(db, 'usuario', String(autenticacao.currentUser?.uid));
        const Snap = await getDoc(Ref).then((response) => {
            setPrintNome({
                nome: response.data()?.NomeUsuario
            })
    
        })

        // if (Snap.exists()) {

        //     setPrintNome(Snap.data())
        //     console.log('doument data:', Snap.data())
        // } else {
        //     console.log('documento nao encontrado')
        // }
    }

    useEffect(() => {
        fetchPokemons()
        Document()
    }, [])


    // useEffect(() => {
    //   console.log(infosPoke);
    // },[infosPoke])


    const fetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => response.json())
            .then(pokemons => setPokemons(pokemons.results))

        // foi feita uma requisicao http para a pokeApi e salvando a lista de pokemons na variavel de estado pokemons

        // fetch: ele faz uma requisicao para a url da pokeapi pedindo um limit de informacoes de 1000 pokemons  

        // .then(response => response.json()): converte a resposta da api em algo mais legivel via codigo

        // .then(pokemons => setPokemons(pokemons.results)): quando o json estiver legivel o pokemons.result acessa um array com todos os 1000 pokemons que foram requisitados no fetch, depois a funcao setPokemons muda o estado da minha variavel pokemons e salva os pokemons no seu estado.
    }



    return (



        <ScrollView style={styles.root}>

            <Pokemon visibleModal={modal} mudaVisibilidade={() => setModal(false)} PokemonSelecionado={infosPoke} />

            {/* visibleModal={modal}

                O que é: Está passando a variável modal como prop chamada visibleModal.
                oq ele faz: Controla se o modal deve estar visível ou não. Lá no InfosPoke */

                // mudaVisibilidade = {() => setModal(false)}
                // O que é: Está passando uma função como prop chamada mudaVisibilidade.

                // Fecha o modal, pois define modal como false.

                // para que serve: Quando o usuário acionar a funcao setModal, o InfosPoke pode chamar a função infosPoke para guardar o pokemon e enviar ao component InfosPoke.

            }

            <View style={styles.container}>

                <Image
                    style={{width: 350}}
                    source={require('../../assets/image/PokeApi.png')}
                />

                {/* <Text>{printNome?.nome}</Text> */}

                {pokemons.map((pokemons, numeracao) => {
                    return (

                        <TouchableOpacity style={styles.btn} onPress={() => { setModal(true), setInfosPoke(String(pokemons.name)) }}>
                            <Image
                                style={{ width: 150, height: 150, }}
                                source={{
                                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemons.name}.png`
                                }}
                            />
                            <Text style={styles.nomes}>{numeracao + 1} - {pokemons.name}</Text>
                        </TouchableOpacity>

                    )
                }

                    //{pokemons.map((pokemons,numeracao) => { : o map esta percorrendo o array da variavel de estado pokemons que foi requisitado na PokeApi

                    //<TouchableOpacity style={styles.btn} onPress={() => { setModal(true), setInfosPoke(String(pokemons.name)) }}> : foi aplicado um onpress que ao clicar sera acionado a minha funcao setModal e definira o estado da minha variavel de estado de false para true onde ela ira abrir minha modal.

                    // setInfosPoke(String(pokemons.name)) :  salva o nome do pokemon selecionado para ser enviado para minha modal 

                    // <Text style={styles.nomes}>{numeracao + 1} - {pokemons.name}</Text> : esta mostrando na tela a numeracao dos pokemons dianta da sua posicao no array, o +1 esta sendo usado para a numeracao nao comecar na contagem 0, e tambem esta sendo mostrado os nomes dos pokemons que estao no array 


                )}

                <StatusBar style="auto" />
            </View>

        </ScrollView >


    );
}








