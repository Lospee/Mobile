import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";


class App extends Component {

  //render serve para a renderização de coisas na pagina tanto video como gif entre outras coisas
  render(){
       return(
          <View>
            <Text style={{color: '#363636', fontSize: 25, margin: 10}}>Aplicação inicial</Text>
            <Text style={{ fontFamily: 'Inter-Black' }}> Espaço inicial de Aplicação</Text>
            <Text>Versão 1.0</Text>
console.log('Rendering App component');
console.log('Rendering Jobs component');
            <Image
            source={{uri:'https://static.wixstatic.com/media/47a38c_937819dfaf1e42f485e5e8f7e02becff~mv2.png/v1/fit/w_2500,h_1330,al_c/47a38c_937819dfaf1e42f485e5e8f7e02becff~mv2.png'}}
            style={{width: 400, height: 200}}
            />
            <Text>Desenho feito por Guilerme Freitas : Abacaxi you Later</Text>
            <Jobs
                  largura={400}  altura={200}

            />
          
          
          </View>
         


       );
  }



}

export default App;

class Jobs extends Component {
  render(){
    var img = 'https://pbs.twimg.com/media/E6JHwO6WEAML_Yu.jpg:large';

    return (

         <View>

            <Image
             source={{uri: img}}
             style={{width: this.props.largura, height: this.props.altura}}
            />

            <Text>Desenho feito por Guilerme Freitas: Corte</Text>

         </View>


    );
  }
}