import { baseURL } from "./baseURL";
import axios from "axios";

// Crie uma função que permita criar uma nova notícia.

// *a.* Qual é o tipo dessa função? Por quê?
// POST, pois adiciona uma nova informação ao endpoint ou PUT, que atualiza se essa informação já existir ou adiciona se não

// b. Implemente a função solicitada

async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }

  const news = {
    title: "Brasil volta a sorrir",
    content: "Após ano de Hexa e eleições, temos motivos de esperança.",
    date: Date.now() as number
}
  const main = async () =>{
    try{
        const response = await createNews(news.title, news.content, news.date)
        .then(()=>{console.log("Notícia publicada!");
        })
        console.log(response);
        
    } catch (error:any) {
        console.log(error.response?.data || error.message);
    }

}
main();