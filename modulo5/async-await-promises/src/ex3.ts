import { baseURL } from "./baseURL";
import axios from "axios";

//Exercício 3 - tipagem

type Subs ={
    id:string,
    name:string,
    email:string
}
const getAllSubscribers = async (): Promise<Subs[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

// a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem? 
// - RESPOSTA: não apontou nenhum erro, o email continua vindo como segunda informação. Seria necessário um map para reformular a estrutura da resposta para vir id, name, email.

// b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso
// - RESPOSTA: Como a Promise é a expectativa de algum valor, atribuir esse valor como any é dizer que pode ser qualquer coisa. Quando mapeamos seu resultado podemos ajustar o código de acordo com o resultao do mapeamento, o que facilita futuras manutenções e alterações do código.

//c) reformulação da função 
const getSubscribers = async (): Promise<Subs[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

  
  const main = async () =>{
    try{
        const response = await getSubscribers()
        console.log(response);
        
    } catch (error:any) {
        console.log(error.response?.data || error.message);
    }

}
main();