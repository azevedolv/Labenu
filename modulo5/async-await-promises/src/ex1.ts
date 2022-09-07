import { baseURL } from "./baseURL";
import axios from "axios";


const main = async () =>{
    try{
        const response = await getAllSubscribers()
        console.log(response);
        
    } catch (error:any) {
        console.log(error.response?.data || error.message);
    }

}

//### Exercício 1 :  função nomeada simples que retorne todos os assinantes da nossa aplicação
// *a.* Qual endpoint você deve utilizar para isso?
// GET: https://labenews.herokuapp.com/subscribers

// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// : Promise<any[]>

// c. Implemente uma função nomeada que faça o que foi pedido.
async function getAllSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };
  main()
 
