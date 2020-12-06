import React from 'react'
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
//components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer'
//pages
import { Home, Music, Blog, Tech, Connect } from './Pages'

const ContentWrapper = styled.div`
  height: 100%;
  flex-direction: column; 
`

function App() {
  return (
    <>
      <ContentWrapper>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/music' component={Music} />
          <Route path="/blog" component={Blog} />
          <Route path="/tech" component={Tech} />
          <Route path="/connect" component={Connect} />
        </Switch>
        <Footer />
      </ContentWrapper>
    </>
  )
}

export default App
