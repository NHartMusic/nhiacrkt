import React from 'react'
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
//components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer'
//pages
import { Home, About, Products, Team, Connect } from './Pages'

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
          <Route path='/about' component={About} />
          <Route path="/products" component={Products} />
          <Route path="/team" component={Team} />
          <Route path="/connect" component={Connect} />
        </Switch>
        <Footer />
      </ContentWrapper>
    </>
  )
}

export default App
