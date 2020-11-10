import React, {Fragment, useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  View

} from "react-native";
import efetuarLogin from '../../api/login';

import estilo from "./estilo"

const Login = () => {
const [usuario, setUsuario] = useState("");
const [senha, setSenha] = useState("");
const [mensagemErro, setMensagemErro] = useState("");
  
    const tentarLogar =  async() => {
      try{
        const token = await efetuarLogin(usuario, senha);
        console.warn(token);
      }catch(erro){
        setMensagemErro(erro.message);
      }
      
    }
  
  return (
    <Fragment>
      <View style={estilo.conteiner}>
        <TextInput 
        style={estilo.inputs}
         placeholder="Usuario"
         onChangeText={texto => setUsuario(texto)}
         />
         <TextInput 
         style={estilo.inputs}
         placeholder="Senha"
         secureTextEntry={true}
         onChangeText={texto => setSenha(texto)}
         />
         <Text>{mensagemErro}</Text>
      </View>
      <Button title="Entrar" onPress={tentarLogar}/>

    </Fragment>
    

  )
};
export default Login;
