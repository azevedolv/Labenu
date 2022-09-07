import React, { useState } from 'react';
import { Body, DeleteButton, GlobalStyle, HeaderButtonDiv, InputLogin, SendContainer, TableDiv } from './styled';
import SendIcon from '@mui/icons-material/Send';
import useForm from '../hooks/useForm';
import axios from 'axios';
import useRequestData from '../hooks/useRequestData';
import { Chart } from "react-google-charts";
import {Table} from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';


function IndexPage() {
  const {form, onChange, clearForm} = useForm({first_name:"", last_name:"", participation:""})
  const [users, request] = useRequestData("https://case1-cubonetworking.herokuapp.com/user", [])

  console.log(users);
  const usersMap = users && users.map((user)=>{
    return [`${user.first_name} ${user.last_name}`, user.participation]
  })

  const [options] = useState({
    title: 'Participação'
  })
 



  const onSubmitCadastro = async (event) =>{
    event.preventDefault()
    const url = "https://case1-cubonetworking.herokuapp.com/user";
    const body ={
      "first_name": form.first_name,
      "last_name": form.last_name,
      "participation": form.participation
    }
    console.log(body);
    const headers = {headers:{"Content-Type": "application/json"}}
    await axios.post(url, body, headers)
    .then((response) =>{
      alert("Usuário cadastrado com sucesso.")
      console.log(response.data)
      clearForm()
      request()
    })
    .catch((error) =>{
      alert("Erro!")
      console.log(error)
    })
  }

  const deleteUsers =  async () =>{
    if (window.confirm("Tem certeza que deseja excluir os usuários?")) {
   const url = "https://case1-cubonetworking.herokuapp.com/user";
   await axios.delete(url)
    .then((response) =>{
      // alert("Usuários deletados com sucesso.")
      clearForm()
      request()
    })
    .catch((error) =>{
      alert("Erro!")
      console.log(error)
    })
  }
}

  const tableMap = users && users.map((user)=>{
    return(
      <>
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td >{user.participation}%</td>
        </tr>
        </>
    )
  })
  
  return (
    <Body>
      <GlobalStyle />
      <header>
        <HeaderButtonDiv>
        <form onSubmit={onSubmitCadastro}>
          <div>
          <InputLogin
          name='first_name' 
          value={form.first_name}
          placeholder="Primeiro nome"
          onChange={onChange}
          required
          type={'text'}
          />
          </div>
         
          <div>
          <InputLogin 
          name='last_name'
          value={form.last_name}
          type={'text'}
          placeholder="Último nome"
          onChange={onChange}
          required
          />
          </div>
          <div>
          <InputLogin 
          name='participation'
          value={form.participation}
          type={'number'}
          placeholder="Participação"
          onChange={onChange}
          required
          />
          </div>
          <div>
          <SendContainer>
          <button type='submit'><SendIcon /></button>
          </SendContainer>
          </div>
          </form>
        </HeaderButtonDiv>
      </header>
      <main>
        <TableDiv>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Primeiro nome</th>
          <th>Último nome</th>
          <th>Participação</th>
        </tr>
      </thead>
      <tbody>
        {tableMap}
        {/* <tr>
          <td>1</td>
          <td>Luiz</td>
          <td>Vinicius</td>
          <td >10%</td>
        </tr> */}
      </tbody>
    </Table>
    </TableDiv>
      <div>
          <Chart
            width={'800px'}
            height={'500px'}
            chartType="PieChart"
            data={[['Usuários', 'Participação'],
          ...usersMap]}
            options={options}
          />
        </div>
        <div>
        <DeleteButton onClick={deleteUsers}><DeleteIcon/></DeleteButton>
        </div>
      </main>
    </Body>
  )
}

export default IndexPage