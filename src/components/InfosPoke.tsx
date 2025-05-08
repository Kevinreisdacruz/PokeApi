import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import styles from '../../assets/css/styles';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';


interface infosPokemon {
    visibleModal: boolean,
    mudaVisibilidade: () => void,
    PokemonSelecionado: String,
}






//interface : ele é tipo um molde que define como um objeto deve ser estruturado.

//visibleModal: boolean, define se e verdadeiro ou falso, ou seja, se a modal esta visivel ou nao

// mudaVisibilidade: () => void : isso e uma propriedade sem parametro(void = NADA), esta sendo usada para fechar o modal.

//pokemonSelecionado: contem o nome do pokemon selecionado, adquiradida pelo meu estado pokemons no meu App.tsx e foi passada em um parametro de string

// tipar: definir um tipo para algo como por exemplo  PokemonSelecionado: String, eu tipei o PokemonSelecionado pra ele receber um parametro de String.



const Pokemon: React.FC<infosPokemon> = (props) => {

    // React.FC <infosPokemon> = (props) => { :
    // meu componente funcional esta recebendo um pros com a estrutura da interface.

    const [pokemon, setPokemon] = useState([]);
    
const fetchDescription = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.PokemonSelecionado}/`)
    .then((response) => response.json())
    .then((response) => setPokemon(response));
}




    // const [caractPoke, setcaractPoke] = useState([])
    // //esta guradando as caracteristicas do pokemon da PokeApi

    const [imagemPoke, setImagePoke] = useState()

    // useEffect(() => {
    //     fetchPokemon()
    // }, [])

    //este useEffect: chama o fetchPokemon, para busacr as caracteristicas do pokemon

    // const fetchPokemon = () => {
    //     fetch(`https://pokeapi.co/api/v2/characteristic/${props.PokemonSelecionado}/`)
    //         .then(response => response.json())
    //         .then(caractPoke => setcaractPoke(caractPoke.results))

    //     // fetch: ele faz uma requisicao para a url da PokeApi pedindo as caracteristicas do pokemon selecionado. 
    //     // O nome do pokemons esta vindo do PokemonSelecionado ques etsa sendo passado do meu app.tsx. 
    //     // O resultado e salvo no minha variavel de estado caracPoke dentro do array. 


    // }

    return (

        <Modal visible={props.visibleModal}>
            <TouchableOpacity onPress={props.mudaVisibilidade}>
                <Text>X</Text>
            </TouchableOpacity>

            {/* este TouchableOpacity esta fechandao meu modal, passando a minha propriedade mudaVisibilidade que tem seu valor dada como falsa, oq faz ele fechar a modal quando acionada  */}


            <Image
                style={{ width: 150, height: 150 }}
                source={{
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.PokemonSelecionado}.png`
                }}

            //a imagem esta usando a propriedade PokemonSelecionado para mostrar a imagem diante do nome do pokemon.
            />

                <TouchableOpacity onPress={() => fetchDescription()}>
                    <Text>TESTAR</Text>
                </TouchableOpacity>
            <Text>{props.PokemonSelecionado}</Text>
            {pokemon.map((details, index) => (
                <Text>{index}</Text>
            ))}

            {/* mostra o nome do pokemon selecionado no app.tsx dentro da modal */}
        </Modal>

    )

}

export default Pokemon;