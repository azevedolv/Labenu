import express, { Request, Response } from 'express'
import cors from 'cors'
import { products } from "./data"
const app = express()


app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get('/teste', (req: Request, res: Response) => {
  res.status(200).send('A API está funcionando')
}
)

app.post('/new-product', (req: Request, res: Response) => {
  const productName = req.body.name
  const productPrice = req.body.price
  try {
    if (!productName || !productPrice) {
      res.statusCode = 401
      throw new Error("Nome do produto ou preço não enviados");

    }
    if (typeof productName !== "string") {
      res.statusCode = 422
      throw new Error("Nome do produto inválido ou não enviado");

    }
    if (typeof productPrice !== "number") {
      res.statusCode = 422
      throw new Error("Preço do produto inválido ou não enviado");

    }
    if (productPrice < 0) {
      res.statusCode = 422
      throw new Error("Preço do produto inválido");

    }
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === productName) {
        res.statusCode = 409
        throw new Error("Já existe produto com esse nome!")
      }
      products.push({
        id: Date.now().toString(),
        name: productName,
        price: Number(productPrice)
      })
      break
    }
    res.status(200).send({ products })
  }
  catch (err: any) {
    if (res.statusCode === 200) {
      res.status(500)
        .send("Erro inesperado")
    } else {
      res.send(err.message)
    }
  }
}
)

app.get('/products', (req: Request, res: Response) => {
  res.status(200).send(products)
})

app.put("/products/:id", (req: Request, res: Response) => {
  const productID = req.params.id
  const productName = req.body.name
  const productPrice = req.body.price

  try{
    if(!productName || !productPrice){
      res.statusCode = 401
      throw new Error("Nome do produto ou preço não enviados");
      
    }
    if(typeof productName !== "string"){
      res.statusCode = 422
      throw new Error("Nome do produto inválido ou não enviado");
      
    }
    if(typeof productPrice !== "number"){
      res.statusCode = 422
      throw new Error("Preço do produto inválido ou não enviado");
      
    }
    if(productPrice < 0){
      res.statusCode = 422
      throw new Error("Preço do produto inválido");
      
    }
    if(!productID){
      res.statusCode = 404
      throw new Error("ID do produto não foi recebida");
      
    }
    let findID = false
        for (let i = 0; i < products.length; i++) {
          if (productID === products[i].id) {
            products[i].name = productName
            products[i].price = productPrice
            findID = true
            break
          }
        }
        if(findID === false){
          res.statusCode = 404
          throw new Error("Produto não encontrado!");
          
        }
        res.send({ products })
      
    }
    catch (err: any) {
      if (res.statusCode === 200) {
        res.status(500)
          .send("Erro inesperado")
      } else {
        res.send(err.message)
      }
    }
})

app.delete("/products", (req: Request, res: Response) => {
  const id = req.query.id

  try {
    if (!id) {
      res.statusCode = 401
      throw new Error("ID do produto não foi enviada");

    }
    let findID = false
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1)
        findID = true
        break
      }
   }
   if(findID === false){
     res.statusCode = 404
     throw new Error("Produto não encontrado");
     
   }
    res.status(200).send(products)
  }
  catch (err: any) {
    if (res.statusCode === 200) {
      res.status(500)
        .send("Erro inesperado")
    } else {
      res.send(err.message)
    }
  }

  
})



// import express, { Request, Response } from "express"
// import cors from "cors"
// import { users } from "./data"

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.listen(3003, () => console.log("Servidor disponível em 3003"))

// // app.get('/test/hello', (req: Request, res: Response) => {
// //   const name = req.query.name
// //   const ocupacao = req.body.ocupacao

// //   res.send(`Olá, ${ocupacao} ${name}!`)
// // })

// // app.get('/test/:number', (req: Request, res: Response) => {
// //   res.send(
// //     `Seu número da sorte é ${Number(req.params.number) + 3}!
// //   `)
// // })

// app.get("/playlists", (req: Request, res: Response) => {
//   // tenho todos os usuários
//   const currentUsers = users // array de objetos
//   console.log(1, currentUsers);

//   // Vou pegar as playlists de cada usuário
//   const userPlaylists = currentUsers.map((user: any) => {
//     return user.playlists
//   }) // array de arrays
//   console.log(2, userPlaylists)

//   const result = userPlaylists.flat(1)

//   res.status(200).send(result);
// })

// app.get("/playlists/search", (req: Request, res: Response) => {
//   const queriedName = req.query.name

//   if (!queriedName) {
//     res.status(400).send("Faltou a query 'name'")
//   }

//   const searchResult = []

//   for (let user of users) {
//     for (let playlist of user.playlists) {
//       if (playlist.name.includes(queriedName)) {
//         searchResult.push({
//           id: playlist.id,
//           name: playlist.name
//         })
//       }
//     }
//   }

//   res.send({
//     result: {
//       quantity: searchResult.length,
//       list: searchResult
//     }
//   })
// })

// app.get("/tracks", (req: Request, res: Response) => {
//   const playlistId = req.query.id

//   if (!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

//   const allPlaylists = users.map((user: any) => {
//     return user.playlists
//   }).flat(1)

//   let tracks;

//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       tracks = playlist.tracks
//     }
//   })

//   res.status(200).send(tracks)
// })

// app.post('/playlists', (req: Request, res: Response) => {
//   const playlistName = req.body.name
//   const userIdToAdd = req.headers.authorization

//   for (let i = 0; i < users.length; i++ ) {
//     if (users[i].id === userIdToAdd) {
//       users[i].playlists.push({
//         id: Date.now().toString(),
//         name: playlistName,
//         tracks: []
//       })
//     }
//   }

//   res.send({ users })
// })

// app.post("/playlists/:playlistId/tracks", (req: Request, res: Response) => {
//   const playlistIdToAdd = req.params.playlistId
//   const userIdToAdd = req.headers.authorization
//   const { name, artist, url } = req.body

//   // iterando users
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id === userIdToAdd) {
//       // iterando playlists do user
//       for (let j = 0; j < users[i].playlists.length; j++) {
//         if (users[i].playlists[j].id === playlistIdToAdd) {
//           users[i].playlists[j].tracks.push({
//             id: Date.now().toString(),
//             name,
//             artist,
//             url,
//           })
//         }
//       }
//     }
//   }


//   res.send({ users })
// })

// app.delete("/playlist", (req: Request, res: Response) => {
//   const id = req.query.id

//   users.forEach((user: any) => {
//     user.playlists = user.playlists.map((playlist: any) => {
//       if (playlist.id === id) {
//         return {}
//       }
//       return playlist
//     });
//   })

//   res.status(200).send(users)
// })

// app.delete("/track", (req: Request, res: Response) => {
//   const trackId = req.query.trackId
//   const playlistId = req.query.playlistId

//   const allPlaylists = users
//     .map((user: any) => {
//       return user.playlists;
//     })
//     .flat(1);
//   for (let i = 0; i <= allPlaylists.lenght; i++) {
//     allPlaylists[i]
//   }

//   for (let playlist of allPlaylists) {
//     playlist
//   }

//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       playlist.tracks = playlist.tracks.map((track: any) => {
//         if (track.id === trackId) {
//           return {};
//         }
//         return track;
//       });
//     }
//   })

//   res.status(200).send(allPlaylists)
// })