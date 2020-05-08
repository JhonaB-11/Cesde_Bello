
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground,TouchableHighlight, TextInput, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState,useEffect } from 'react';
import CardComponent from './card-component';
import { useIsFocused } from '@react-navigation/native'


function listCita({navigation}) {
    const isFocused = useIsFocused();
    const [Data, setData] = useState([]);

    
    //res data for flatlist form api
    const fetchQuote = async () => {
        try{
          let response = await fetch('http://192.168.1.2:3000/api/listquote');
          let jsonResponse = await response.json();
          console.log(jsonResponse);
          setData(jsonResponse.quote);
        }catch(error){
          console.log('error');
        }               
    }
    useEffect(()=>{
        fetchQuote();
    },[isFocused]);


    
    return (
      <ImageBackground source={require('../assets/fondo.jpg')} style={styles.container}>
        <FlatList 
              data={Data}
              renderItem={({ item })=> <CardComponent quote={item}/>}
              keyExtractor={item => item._id}                  
            />
      </ImageBackground>
    );
    
  }

  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container : {
      flex : 1,
      flexDirection : 'row',
      
    },
    box1: {
      width: 300,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 15,
      marginLeft: 30,
      marginRight: 30,
      alignItems: 'center'
    },
    inputText: {
        padding: 10,
        margin: 10,
        width: 200,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        color : 'white',
        fontWeight: 'bold',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      content: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 40
      },
      item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      buttonStyle: {
        padding: 10,
        backgroundColor: 'red',
        width: 100,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
      }    
  });

  export default listCita;