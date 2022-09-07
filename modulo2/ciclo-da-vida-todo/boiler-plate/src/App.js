import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  //Dentro de Tarefa(que é cada tarefa do array de objetos do state), se a propriedade completa (que analisa se a tarefa foi feita ou não) for true a estilização do texto é line-trough (riscado), mas se for false, não há estilização
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(), //O Date.now() é usado para gerar um número único (id) para cada tarefa. Esse id deve ser usado para identificar qual tarefa foi clicada para marcar como completa. Não precisa se preocupar com o funcionamento dele, basta colocá-lo da forma como indicado acima, em todas as tarefas a serem criadas, que irá funcionar. 
        texto: 'Fazer o exercício diário',
        completa: false // Indica se a tarefa está completa (true ou false)
      }],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("Tarefa", JSON.stringify(this.state.tarefas));//salvando a lista de tarefas no LS para quando abrir a página já aparecer a lista; como a lista de tarefas se altera automaticamente com cada alteração no input, o LS também se atualiza a cada alteração no input, por meio dessa função

    //como o local storage não guarda arrays e objetos, apenas strings, temos que trasnformá-los em strings, por meio do JSON.stringify() -- se eu quiser voltar de string para array/objeto = JSON.parse()
  };

  componentDidMount() {
    const tarefaString = localStorage.getItem("Tarefa");
    // se existir, então converta e atualize o estado com ele
    if (tarefaString) {
      const tarefa = JSON.parse(tarefaString);//montando a lista de tarefas de volta à página, transformando o arquivo do LS em lista de objetos novamente;
      this.setState({ tarefas: tarefa });
    }
  };


  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });//inputValue (dentro do state) é igual ao que o usuário escreve no input
  };

  criaTarefa = () => { //não é possível alterar diretamente o array de objetos ou a propriedade dos objetos, é necessário criar variáveis de apoio:
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }; //crio uma nova varíavel nos mesmos moldes da propriedade tarefa no state
   
    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]
    //crio uma nova lista adicionando a nova tarefa
    this.setState({tarefas: novaListaDeTarefas})
    //e faço a lista de tarefas no state ser igual a nova lista de tarefas, atualizada
    
  };

  selectTarefa = (id) => { //o que menos entendi foi essa id -- se eu clickar na tarefa, e sua id da tarefa for a mesma = altere seu estado (completa: true/false) 
    const alteraTarefa = this.state.tarefas.map((tarefa) => {//variável-função que ao clickar na tarefa seu estado mude para completa ou pendente
      if (tarefa.id === id) {
        const mudaEstado = {...tarefa, completa: !tarefa.completa}
        //como eu não posso alterar diretamente a propriedade do objeto, eu preciso criar uma nova variável que copie a estrutura do objeto desejado (tarefa) e altere diretamente a propriedade dessa nova variavel equivalente à que queriamos alterar inicialmente (completa)
        return mudaEstado 
        //retorna a nova variál de apoio com a propriedade completa alterada
      } else {
        //se não, retorna a tarefa sem alteração
        return tarefa
      }
    })
    this.setState({
      tarefas: alteraTarefa
      //salva a nova lista de tarefas, atualizada;
    })
  };

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value}) //toda vez que o input alterar de valor, a propriedade filtro se altera para o mesmo valor do input
    //como o input é um select (lista com as tarefas) quando clickarmos no tipo de tarefa (completas, pendentes ou nenhum), a lista exposta se altera
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes'://Se a propriedade filtro do state for pendentes retorna a tarefa com a propriedade completa como false
          return !tarefa.completa
        case 'completas':
          return tarefa.completa //Se a propriedade filtro do state for completas retorna a tarefa com a propriedade completa como true
        default:
          return true //não entendi bem o default - acho que se não for nenhum das duas opções só repete a lista de tarefas, independentemente se já foi completa ou se está pendente
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
