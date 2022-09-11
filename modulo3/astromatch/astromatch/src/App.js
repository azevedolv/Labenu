import React, { useState } from "react";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`


function App() {
  const [page, setPage] = useState("home")

  const exposedPage = () => {
    switch (page) {
      case "home":
        return <Home matchPage={matchPage} />
      case "matches":
        return <Matches homePage={homePage} />
      default:
        return <Matches  homePage={homePage}/>
    }
  }

  const homePage = () =>{
    setPage("home")
  }
  const matchPage = () =>{
    setPage("matches")
  }
  return (
    <div>
      <GlobalStyle />
      {exposedPage()}
    </div>
  );
}

export default App;
