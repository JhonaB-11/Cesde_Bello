import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const deleteQuote = async (req,res) => {
    try{
      let res = await fetch('http://192.168.1.2:3000/api/deletequote');
        
      quote.remove({"id": req.param.id}, function(error){
        if(error){
            
            console.log(error);
        } else {
            res.logo('true');
        }
      })
    }catch(error){
      console.log('error');
    }               
}


function CardComponent(props){
    const {_id, id, name, lastname, address, datebirth, city, neighborhood, phonenumber, date} = props.quote
    return(
        <View style={styles.item}>
            <Text style={styles.name}>Nombre: {name}</Text>
            <Text style={styles.textt}>Identificación: {id}</Text>
            <Text style={styles.textt}>Apellido: {lastname}</Text>
            <Text style={styles.textt}>Direccion: {address}</Text>
            <Text style={styles.textt}>Fecha Nacimiento: {datebirth}</Text>
            <Text style={styles.textt}>Ciudad: {city}</Text>
            <Text style={styles.textt}>Barrio: {neighborhood}</Text>
            <Text style={styles.textt}>Celular: {phonenumber}</Text>
            <Text style={styles.textt}>Cita: {date}</Text>
            <TouchableHighlight style={styles.buttonStyle} onPress={deleteQuote} >
            <Text style={{color: 'white', justifyContent:'center'}}>Delete Quote</Text>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
      flex: 1,
      backgroundColor: 'rgba(00, 00, 52, 0.6)',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 20,
      borderWidth: 2,
      padding: 20,
      color: 'white'
    },
    name: {
      backgroundColor: 'rgba(00, 00, 52, 0.6)',
      fontSize: 20,
      borderRadius: 10,
      marginLeft: -2,
      width: 280,
      color: 'white'
    },
    textt: {
        color: 'white',
        fontSize: 16
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: 'red',
        width: 120,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
      }
  });
export default CardComponent;

