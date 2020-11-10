import { Cabecalho } from "../Components/Cabecalho";

const efetuarLogin = async (usuario, senha) =>{
    let url = "10.0.2.2";
    if(Platform.OS == "ios"){
        url = "localhost";
    }
    
    const cabecalhoHTTP = {
        method: "POST",
        body:JSON.stringify({
            userName:usuario,
            password:senha
        }),
        header:{
            "ContentType" : "application/json"
        }
    }
     
    const resposta = await fetch(`http://${url}:3030/users/login`, cabecalhoHTTP);
    
    if(resposta.ok){
        //consegui login
        return resposta.headers.get("x-acess-token")
    }else{
        throw new Error("Nao foi possivel logar")
    }
    
}

export default efetuarLogin;