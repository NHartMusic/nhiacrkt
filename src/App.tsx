import React from 'react'
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
//components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
//pages
import { Home, Music, Blog, Tech, Connect } from './pages'
import Albums2020 from './pages/blog/BlogPosts/Albums2020'


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
          <Route path="/albums2020" component={Albums2020} />
          <Route path="/tech" component={Tech} />
          <Route path="/connect" component={Connect} />
        </Switch>
        <Footer />
      </ContentWrapper>
    </>
  )
}

export default App
