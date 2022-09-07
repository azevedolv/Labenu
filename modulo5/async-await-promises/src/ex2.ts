import { baseURL } from "./baseURL";
import axios from "axios";

//Exercício 2
//a. diferença da sintaxe entre função nomeada e arrow function
// precisamos declarar a a arrow function e, portanto, utilizamos "const nome-da-função =", com isso a sinalização de assincronicidade passa para depois da declaração, mas antes dos parênteses de parâmetros

const getAllSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

  const main = async () =>{
    try{
        const response = await getAllSubscribers()
        console.log(response);
        
    } catch (error:any) {
        console.log(error.response?.data || error.message);
    }

}
main();