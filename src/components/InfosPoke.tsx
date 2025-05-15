import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import styles from '../../assets/css/styles';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';


interface infosPokemon {
    visibleModal: boolean,
    mudaVisibilidade: () => void,
    PokemonSelecionado: String,
}

interface habilidade {
    ability: {
        name: string,
        url: string,
    }
}

interface tipo {
    slot: string,
    type: {
        name: string
        url: string
    }
}

interface pokemon {
    name: string,
    height: number,
    weight: number,
    types: tipo[],
    abilities: habilidade[],
}


//interface : ele é tipo um molde que define como um objeto deve ser estruturado.

//visibleModal: boolean, define se e verdadeiro ou falso, ou seja, se a modal esta visivel ou nao

// mudaVisibilidade: () => void : isso e uma propriedade sem parametro(void = NADA), esta sendo usada para fechar o modal.

//pokemonSelecionado: contem o nome do pokemon selecionado, adquiradida pelo meu estado pokemons no meu App.tsx e foi passada em um parametro de string

// tipar: definir um tipo para algo como por exemplo  PokemonSelecionado: String, eu tipei o PokemonSelecionado pra ele receber um parametro de String.



const Pokemon: React.FC<infosPokemon> = (props) => {

    // React.FC <infosPokemon> = (props) => { :
    // meu componente funcional esta recebendo um props com a estrutura da interface.

    const [pokemon, setPokemon] = useState<pokemon | null>(null);

    const fetchDescription = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.PokemonSelecionado}/`)
            .then((response) => response.json())
            .then((response) => setPokemon({
                name: response.name,
                height: response.height,
                weight: response.weight,
                types: response.types.map((types: any) => ({
                    type: {
                        name: types.type.name,
                        url: types.type.url,
                    },
                })),
                abilities: response.abilities.map((abilities: any) => ({
                    ability: {
                        name: abilities.ability.name,
                        url: abilities.ability.url
                    }
                })),
            }));
    }





    useEffect(() => {
        console.log('carregou')
        fetchDescription()

        if (pokemon?.types && pokemon?.types.length > 0) {
            pokemon?.types.map((type, index) => (
                console.log('Returning the array of types ' + type.type.name, index)
            ));
        }


    }, [props.PokemonSelecionado])

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
                <Text style={styles.btnVoltar}>X</Text>
            </TouchableOpacity>

            {/* este TouchableOpacity esta fechandao meu modal, passando a minha propriedade mudaVisibilidade que tem seu valor dada como falsa, oq faz ele fechar a modal quando acionada  */}


            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ width: 250, height: 250, }}
                    source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.PokemonSelecionado}.png`
                    }}

                //a imagem esta usando a propriedade PokemonSelecionado para mostrar a imagem diante do nome do pokemon.
                />
            </View>


            <View style={{ alignItems: 'center', gap: 10}}>
                <Text style={styles.nomePoke}> {pokemon?.name}</Text>
                <Text style={styles.infosPoke}>Altura: {pokemon?.height / 10}</Text>
                <Text style={styles.infosPoke}>Peso: {pokemon?.weight / 10}</Text>

                {pokemon?.types.map((pokemon) => (
                    <Text style={styles.infosPoke}>Tipo: {pokemon?.type.name}</Text>
                ))}

                {pokemon?.abilities.map((pokemon) => (
                    <Text style={styles.infosPoke}>Habilidade: {pokemon?.ability.name}</Text>
                ))}
            </View>



            {/* mostra o nome do pokemon selecionado no app.tsx dentro da modal */}
        </Modal>

    )

}

export default Pokemon;