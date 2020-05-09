
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground,TouchableHighlight, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import  DateTimePickerModal  from  'react-native-modal-datetime-picker';



function addCita({ navigation }) {

  const [ isDatePickerVisible , setDatePickerVisibility ] =  useState ( false );
  const [date, setDate] = useState(""); 
    const  showDatePicker  = () => {
          setDatePickerVisibility (true);
       };
     
       const  hideDatePicker  = () => {
          setDatePickerVisibility (false);
       };
     
       const handleConfirm = (date) => {
        setDate(date);
        Alert.alert("Your selected time and date are: ",String(date));

        hideDatePicker();
      };
      
  
    const [quoteid, setquoteid] = useState("");
    const [quoteName, setquoteName] = useState("");
    const [quoteLastName, setquoteLastName] = useState("");
    const [quoteAddress, setquoteAddress] = useState("");
    const [quoteDateBirth, setquoteDateBirth] = useState("");
    const [quoteCity, setquoteCity] = useState("");
    const [quoteNeighborhood, setquoteNeighborhood] = useState("");
    const [quotePhoneNumber, setquotePhoneNumber] = useState("");
    
    const createQuote = async ()=>{

      if ( quoteid == "" || quoteName == "" || quoteLastName == "" || quoteAddress == "" || quoteDateBirth == "" || quoteNeighborhood== "" || quotePhoneNumber == "" || date == "") {
        Alert.alert("Debe llenar todos los campos");
      }
      else if (isNaN(quoteid))
      {
        Alert.alert("El ID debe ser un número");

      } else if (isNaN(quotePhoneNumber))
      {
        Alert.alert("El número telefonico debe ser númerico");
        
      } else if (quotePhoneNumber.length > 10)
      {
        Alert.alert("El número debe contener maximo 10 caracteres");
        
      } else {

        try{
          const response = await fetch('http://192.168.1.1:3000/api/addquote',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              id: quoteid,
              name: quoteName,
              lastname: quoteLastName,
              address: quoteAddress,
              dateofbirth: quoteDateBirth,
              city: quoteCity,
              neighborhood: quoteNeighborhood,
              phonenumber: quotePhoneNumber,
              date: date
            })
          });
          const json = await response.json();
          Alert.alert("Quote Create");
          navigation.navigate("List");
          
        }   catch(error){
            console.log(error);
        }
        
      }
       
    }
    
    return (
      <ImageBackground source={require('../assets/fondo.jpg')} style={styles.container}>
        <ScrollView>
        <View style={[styles.content]}>
        <TextInput placeholder="ID" style={styles.inputText} onChangeText={text => setquoteid(text)} keyboardType={'numeric'}/>
        <TextInput placeholder="Name" style={styles.inputText} onChangeText={text => setquoteName(text)}/>
        <TextInput placeholder="Last Name" style={styles.inputText} onChangeText={text => setquoteLastName(text)}/>
        <TextInput placeholder="Address" style={styles.inputText} onChangeText={text => setquoteAddress(text)}/>
        <TextInput placeholder="Date of Birth" style={styles.inputText} onChangeText={text => setquoteDateBirth(text)}/>
        <TextInput placeholder="City" style={styles.inputText} onChangeText={text => setquoteCity(text)}/>
        <TextInput placeholder="Neighborhood" style={styles.inputText} onChangeText={text => setquoteNeighborhood(text)}/>
        <TextInput placeholder="Phone Number" style={styles.inputText} onChangeText={text => setquotePhoneNumber(text)} keyboardType={'numeric'}/>
        <TouchableHighlight style={styles.buttonStyle} onPress = {showDatePicker}>
        <Text style={{color: 'white', justifyContent:'center', alignItems:'center'}}>Date</Text>
        </TouchableHighlight>
        < DateTimePickerModal
            isVisible = {isDatePickerVisible}
            mode = {'datetime'} 
            onConfirm = {handleConfirm}
            onCancel = {hideDatePicker}
            is24Hour={false}
        />  
        <View style={styles.box1}>
        <TouchableHighlight style={styles.buttonStyle} onPress={createQuote}>
        <Text style={{color: 'white', justifyContent:'center'}}>Create Quote</Text>
        </TouchableHighlight>
        </View>
        </View>
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
      width: 110,
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
    
  })

  export default addCita;