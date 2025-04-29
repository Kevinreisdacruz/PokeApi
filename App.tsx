import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App: React.FC = (props) => {



  const [pokemons, setPokemons] = useState([])
  const [campoPesquisa, setCampoPesquisa] = useState("")

  useEffect(() => {
    fetchPokemons()
  }, [])


  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results))
  }



  return (

    <ScrollView >
     

        {pokemons.map((pokemons, numeracao) => {
          return (
            
            <View>
              <Text>{numeracao + 1} - {pokemons.name}</Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={{
                  uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemons.name}.png`
                }}
              />
            </View>

          )
        }



        )}

        <StatusBar style="auto" />
      
    </ScrollView>
  );
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



