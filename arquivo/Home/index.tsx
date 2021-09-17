import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { stylesLink, stylesLinkImportantes, styles } from './css';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNagationParaList } from '../../types';

const LinkItem = (props:any)=>{
    return(
        <Text style={stylesLink.text}>{props.name}</Text>
    );
};
const LinksImportantes = ()=>{
    return(
        <View style={stylesLinkImportantes.container}> 
            <LinkItem name="Home" />
            <LinkItem name="Post" />
            <LinkItem name="Videos" />
            <LinkItem name="Photos" />
            <LinkItem name="Community" />
        </View>
    );
};

type HomeProps = NativeStackNavigationProp<StackNagationParaList, "Home">;

const Home = () => {
    const navigation = useNavigation<HomeProps>();
    function irParaTelaLogin(){
        navigation.navigate('Login');
    };
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={
                    require("../../imagens/seta.png")}>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../imagens/pesquisar.png")}>
                    </Image>
                    <TextInput 
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        style={styles.textInput}>
                    </TextInput>
                </View>
                <Image source={
                    require("../../imagens/compartilhar.png")}>
                </Image>
            </View>
            <LinksImportantes />
            <StatusBar style="auto" />
            <View style={styles.final}>
                <TouchableOpacity style={styles.botao} onPress={irParaTelaLogin}>
                    <Text style={{color: "#F5FFFF"}}>Logaut</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Home;