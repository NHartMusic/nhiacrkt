import React from 'react'
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
//components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
//pages
import { home, music, blog, tech, connect } from './pages'

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
          <Route exact path="/" component={home} />
          <Route path='/music' component={music} />
          <Route path="/blog" component={blog} />
          <Route path="/tech" component={tech} />
          <Route path="/connect" component={connect} />
        </Switch>
        <Footer />
      </ContentWrapper>
    </>
  )
}

export default App
