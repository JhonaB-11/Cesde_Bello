import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



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
    }
  });
export default CardComponent;

