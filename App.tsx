import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import styles from './assets/css/styles';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Pokemon from './src/components/InfosPoke';

const App: React.FC = (props) => {

  const [pokemons, setPokemons] = useState([])
  const [infosPoke, setInfosPoke] = useState('')
  const [campoPesquisa, setCampoPesquisa] = useState("")
  

  const [modal, setModal] = useState(false)

  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    console.log(infosPoke);
  },[infosPoke])


  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results))
  }


  return (

    <ScrollView style={styles.root}>

      <Pokemon visibleModal={modal} mudaVisibilidade={() => setModal(false)} PokemonSelecionado={infosPoke} />
      
      <View style={styles.container}>

        {pokemons.map((pokemons, numeracao) => {
          return (

            <TouchableOpacity style={styles.btn} onPress={() => {setModal(true), setInfosPoke(String(pokemons.name)) }}>
              <Image
                style={{ width: 150, height: 150 }}
                source={{
                  uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemons.name}.png`
                }}
              />
              <Text style={styles.nomes}>{numeracao + 1} - {pokemons.name}</Text>
            </TouchableOpacity>

          )
        }

        )}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}



export default App;




