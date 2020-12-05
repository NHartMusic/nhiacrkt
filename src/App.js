import { Route, Switch } from "react-router-dom"

import { Home } from './Pages'
import { Navbar } from './Components'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/about' component={About} />
        <Route path="/products" component={Products} />
        <Route path="/team" component={Team} />
        <Route path="/connect" component={Connect} />
      </Switch>
      <Home />
    </div>
  )
}

export default App
