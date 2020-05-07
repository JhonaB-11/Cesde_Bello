// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableHighlight, TextInput, Alert, TouchableOpacityComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './screen/DetailsScreen';
import addCita from './screen/addCita';
import listCita from './screen/listCita';
import { useState } from 'react';


function HomeScreen({ navigation }) {

  const [userName, setUserName] = useState("");

  return (
    <ImageBackground source={require('./assets/fondo.jpg')} style={styles.container}>

      <View style={styles.body}>
        <TouchableOpacity>
        <Text style={{fontWeight : "bold", fontSize: 20, color : "white", marginTop: 50}}>Quotes COVID-19</Text>
        </TouchableOpacity>

        <View style={styles.centerView}>
        <Image source={require('./assets/user.png')} style={styles.img}/>
        <TextInput placeholder="Enter Username" style={styles.inputText} onChangeText={text => setUserName(text)} ></TextInput>
        <TextInput placeholder="Enter Password" style={styles.inputText} secureTextEntry={true}></TextInput>
        <TouchableHighlight style={styles.buttonStyle} onPress={() => navigation.navigate('Details',{userName})}>
        <Text style={{color: 'white'}}>Login</Text>
        </TouchableHighlight>
        </View>

        <View style={styles.box1}>
        <Text style={{color : "white"}}>Create Acount</Text>
        <Text style={{color : "white"}}>Forgot Password</Text>
      </View>
      </View>
    </ImageBackground>
    
    
  );
}

const Stack = createStackNavigator();


function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode='screen'
        screenOptions={{
          headerTintColor:'#fff',
          headerStyle:{
            backgroundColor: '#000131',
            height: 70
          }
        }}
      >
        <Stack.Screen
        headerMode ='none'
        name="Home" 
        component={HomeScreen} 
        options ={{
          headerTransparent: 'true',
          title: 'Welcome',
          headerTitleAlign: 'center'
        }}
        />
        <Stack.Screen
        headerMode='screen' 
        name="Details" 
        component={DetailsScreen}
        options ={{
          title: 'Home',
        }}
        />
        <Stack.Screen name="Add" component={addCita}/>
        <Stack.Screen name="List" component={listCita}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column'
  },
  body : {
    flex : 1,
    alignItems: 'center',
    marginTop : 15,
  },
  img : {
    width: 100,
    height : 100,
    borderRadius : 50,
    resizeMode : 'contain',
    marginTop: 10,
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
  },
  buttonStyle: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1D66F9',
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  box1: {
    width: 300,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 350
  },
  centerView:{
    flex :1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    marginTop:120,
    marginLeft: 30,
    height:310,
    width:315,
    backgroundColor: 'rgba(00, 00, 52, 0.6)',
    borderRadius: 35
  },
  logoInicio:{
    borderRadius:50
  }
})

export default App;