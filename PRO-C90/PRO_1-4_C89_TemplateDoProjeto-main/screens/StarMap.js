import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela do mapa estelar!</Text>
            </View>
           
        )
    }
  
}
<><WebView
    scalesPageToFit={true}
    source={{ uri: path }}
    styles={{ marginTop: 20, marginBottom: 20, }} /><TextInput style={styles.inputStyle}
        placeholder="Digite sua latitude"
        placeholderTextColor="white"
        onChangeText={(text) => {
            this.setState({
                latitude: text
            });
        } }


        const {longitude,latitude} = this.state;
        const path = `https://virtualsky.Ico.global/embed/index.html?longitude=
${longitude}&latitude=${latitude}&constellations=true&constellationlabels=
true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=
false&showposition=false`






























































