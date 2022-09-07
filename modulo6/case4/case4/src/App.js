import { useEffect, useState } from "react"
import Logo from "./components/Logo/Logo"
import { RequestData } from "./services/RequestData"
import { ContestInfo, ContestInfoContainer, ContestInfoMobile, HomeContainer, LeftSide, LottoContainer, NumberContainer, NumberDiv, RightSide, Select } from "./styled"
import moment from "moment"
import Loader from "./components/Loader/Loader"
import { GlobalStyle } from "./styled"

const App = () => {

    const [lotteries, setLotteries] = useState([])
    const [contests, setContests] = useState([])
    const [contest, setContest] = useState([])
    const [selectController, setSelectController] = useState('MEGA-SENA')
    const [messageError, setMessageError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        RequestData({
            endpoint: "loterias",
            setData: setLotteries,
            setMessageError: setMessageError,
            setLoading: setLoading
        })

        RequestData({
            endpoint: "loterias-concursos",
            setData: setContests,
            setMessageError: setMessageError,
            setLoading: setLoading
        })
    }, [])

    useEffect(() => {

        contests.length > 0 && RequestData({
            endpoint: `concursos/${contests[0].concursoId}`,
            setData: setContest,
            setMessageError: setMessageError,
            setLoading: setLoading
        })
    }, [contests])

    useEffect(() => {

        const currentLottery = lotteries.find((lottery) => lottery.nome === selectController)
        const current = currentLottery && contests.find((contest) => contest.loteriaId === currentLottery.id)

        current && RequestData({
            endpoint: `concursos/${current.concursoId}`,
            setData: setContest,
            setMessageError: setMessageError,
            setLoading: setLoading
        })

    }, [selectController])


    const handleSelect = (event) => {
        setSelectController(event.target.value)
    }

    const lotteriesOptions = lotteries.map((lottery, index) => {
        return (<option key={index} value={lottery.nome}>{lottery.nome.toUpperCase()}</option>)
    })

    const contestNumbers = contest.numeros && contest.numeros.map((number, index) => {
        return (
            <NumberDiv key={index}>{number}</NumberDiv>
        )
    })
    return (
        <HomeContainer
            lotto={selectController.toUpperCase()}
        >
          <GlobalStyle />
            <LeftSide>
                <Select
                    onChange={handleSelect}
                    value={selectController}
                >
                    {lotteriesOptions}
                </Select>
                <LottoContainer>
                    <Logo />
                    <p>{selectController.toUpperCase()}</p>
                </LottoContainer>
                <ContestInfoContainer>
                    <p>CONCURSO</p>
                    <ContestInfo>
                        {contest.id}-{moment(contest.data).format('DD/MM/YYYY')}
                    </ContestInfo>
                    <ContestInfoMobile>
                        Nº {contest.id}
                    </ContestInfoMobile>
                </ContestInfoContainer>


            </LeftSide>

            <RightSide>
                {
                    loading ?
                        <Loader />
                        :
                        
                        <NumberContainer>
                            {messageError ? messageError : contestNumbers}
                        </NumberContainer>
                }
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </RightSide>
        </HomeContainer>
    )
}

export default App