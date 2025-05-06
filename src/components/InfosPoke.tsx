import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import styles from '../../assets/css/styles';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';


interface infosPokemon {
    visibleModal: boolean,
    mudaVisibilidade: () => void,
    PokemonSelecionado: String,
}

const Pokemon: React.FC = (props: infosPokemon) => {

    const [caractPoke, setcaractPoke] = useState([])
    const [imagemPoke, setImagePoke] = useState()

    useEffect(() => {
        fetchPokemon()
    },[])

        const fetchPokemon = () => {
           fetch (`https://pokeapi.co/api/v2/characteristic/${props.PokemonSelecionado}/`)
           .then(response => response.json())
           .then(caractPoke => setcaractPoke(caractPoke.results))
        }

    return(

    <Modal visible={props.visibleModal}>
        <TouchableOpacity onPress={props.mudaVisibilidade}>
            <Text>X</Text>
        </TouchableOpacity>

        <Image
                style={{ width: 150, height: 150 }}
                source={{
                  uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.PokemonSelecionado}.png`
                }}
              />
        <Text>{props.PokemonSelecionado}</Text>
    </Modal>

    )
    
}

export default Pokemon;