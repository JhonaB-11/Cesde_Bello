
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground,TouchableHighlight, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import {Agenda} from 'react-native-calendars';



function agenda(props) {
    
    const {id, name, lastname, address, datebirth, city, neighborhood, phonemobile, date} = props.appointment

    
    return (
      <View style={styles.container}>
        <Agenda
            items={{
                [{date}]: [{id:id},{name:name},{lastname:lastname}],
                '2020-05-06': [{name: 'item 3 - any js object'}, {name: 'any js object'}],
                '2020-05-07': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
            }}
            onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
            disabledByDefault = { true }
            onDayPress={(day)=>{console.log('day pressed')}}
            renderItem={(item, firstDayInDay) => {return (<View date/>);}}
            renderEmptyDate={() => {return (<View />);}}
            minDate={'1930-05-10'}
            maxDate={'2030-05-30'}
            pastScrollRange={50}
            futureScrollRange={50}
            refreshControl={null}
            markedDates={{
                '2020-05-05': {selected: true, marked: true},
                '2020-05-06': {marked: true}
              }}
            theme={{
                ...calendar.Theme,
                agendaDayTextColor: 'blue',
                agendaDayNumColor: 'blue',
                agendaTodayColor: 'blue',
                agendaKnobColor: 'blue',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                selectedDayBackgroundColor: '#00adf5',
                disabledArrowColor: '#d9e1e8',
                arrowColor: 'white',
                'stylesheet.calendar.header': {
                week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
                    }
                }
              }}
            style={{
                borderColor: 'gray',
                }}     
        /> 
      </View>
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

  export default agenda;