import * as React from 'react';
import { Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import{Header}from 'react-native-elements';
import HomeScreen from './Screens/HomeScreen';

export default class App extends React.Component{
render(){
    return(
  <View>
      <Header 
      backgroundColor={'blue'}
      centerComponent={{text:'DictionaryApp',style:{color:'yellow',fontSize:20}}}/>
      <HomeScreen/>
  </View>
    );
}
}
