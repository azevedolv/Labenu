import React from 'react';
import styledComponents from 'styled-components';
import { createGlobalStyle } from 'styled-components';
const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    background-color: whitesmoke;
}
`
const MainContainer = styledComponents.div`
display: flex;
flex-direction: column;
align-itens: center;
justify-content: center;
margin-left: 20%;
margin-right: 20%;
background-color: whitesmoke;
`
const CaixaDeMensagem = styledComponents.div`
border: 1px solid gray;
border-radius: 4px;
margin-bottom: 10px;
margin-top: 10px;
height: 70vh;
background-color: white;
p{
    background-color:white;
}
`
const ContainerInputs = styledComponents.div`
display:flex;
input {
    background-color: white;
    border-style: inset;
    border-radius: 4px;
    margin: 5px;
    width:40%
}
input:active{
    background-color: darkgray;
}
button{
    background-color: white;
    border-style: inset;
    border-radius: 4px;
    margin: 5px;
    width:20%;
}
button:hover{
    cursor: pointer;
    background-color:black;
    color: darkgray;
}
`
class Whatslab extends React.Component {

state = { //state para altereações nos valores dos elemtentos do objeto
    text: [
    {
        nomeUsuario: "",
        mensagem: ""
    }
],
    inputUser: "",
    inputText: ""
};
 sendText = () => { //função para adicionar usuário, mensagem e zerar o valor do
     const newMessenger = {
         nomeUsuario: this.state.inputUser,
         mensagem: this.state.inputText
     };
     const newMessage = [...this.state.text, newMessenger];
     this.setState({text: newMessage, inputText: "", inputUser: ""});
     onChangeInputUser = (event) => { //função para salvar o valor do input
        this.setState({inputUser: event.target.value});
    };
}
   
    onChangeInputText = (event) =>{ //função para salvar o valor do input 
        this.setState({inputText: event.target.value});
    };
   
    render() {
        const listaMensagem = this.state.text.map((messenger) => {
            if (messenger.mensagem != "" && messenger.nomeUsuario != ""){
           return (
                   <p>
                   {messenger.nomeUsuario} : {messenger.mensagem}
                   </p>
           );} else{
               <div>
   
               </div>
           }
        });
        
   
       return (
           <div>
           <GlobalStyled/>
           <MainContainer>
               <CaixaDeMensagem>
               {listaMensagem}
               </CaixaDeMensagem>
               <ContainerInputs>
               <input
               value={this.state.inputUser}
               onChange={this.onChangeInputUser}
               placeholder={"Nome de usuário"}
               />
   
               <input
               value={this.state.inputText}
               onChange={this.onChangeInputText}
               placeholder={"Digite sua mensagem"}
               />
   
               <button onClick={this.sendText}>Enviar</button>
               </ContainerInputs>
           </MainContainer>
           </div>
       );
   };
};

   export default Whatslab