import {Switch, Route} from 'react-router-dom'
import {
  PopularMoviesPage,
  TopRatedMoviesPage,
  UpcomingMoviesPage,
} from './components/MovieDBMainPage'

import SingleMoviePage from './components/SingleMoviePage'

import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={PopularMoviesPage} />
    <Route exact path="/top-rated" component={TopRatedMoviesPage} />
    <Route exact path="/upcoming" component={UpcomingMoviesPage} />
    <Route exact path="/movie/:movieId" component={SingleMoviePage} />
  </Switch>
)

export default App
