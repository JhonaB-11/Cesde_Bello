
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableHighlight, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import addCita from '../screen/addCita';
import listCita from '../screen/listCita';
import { Video } from 'expo-av';


function DetailsScreen({route, navigation}) {

    const {userName} = route.params;

    return (
      <ImageBackground source={require('../assets/fondo.jpg')} style={styles.container}>
        <Text style={{fontWeight : "bold", fontSize: 20, color : "white", marginTop: 30}}>Welcome {userName}</Text>
        <View style={styles.box1}>
        <TouchableHighlight style={styles.buttonStyle} onPress={() => navigation.navigate('Add')}>
        <Text style={{color: 'white', justifyContent:'center'}}>Add Quote +</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonStyle} onPress={() => navigation.navigate('List')}>
        <Text style={{color: 'white'}}>List Quote</Text>
        </TouchableHighlight>
        </View>
        <ScrollView>
        <Text style={{fontWeight : "bold", fontSize: 20, color : "white", marginTop: 10, alignItems: 'center'}}>Lavate las Manos!</Text>
        <Video
          source={ require('../assets/COVID-19.mp4') }
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          useNativeControls = {true}
          isLooping
          style={{ width: 300, height: 300 }}
        />
        </ScrollView>
      </ImageBackground>
    );
  }
  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Add" component={addCita}/>
          <Stack.Screen name="List" component={listCita}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container : {
      flex : 1,
      flexDirection : 'column',
      alignItems: 'center'
    },
    buttonStyle: {
      padding: 10,
      backgroundColor: '#1D66F9',
      width: 120,
      height: 40,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
    },
    box1: {
      width: 300,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 15,
      marginLeft: 30,
      marginRight: 30,
    },
    box2: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    }
    
  })

  export default DetailsScreen;