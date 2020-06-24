import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'

import stores from './stores'

import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH,
  POSTS_ROUTE_PATH
} from './constants/NavigationConstants'
import TodosRoute from './routes/TodosRoute'
import PostsRoute from './routes/PostsRoute'

const App = () => {
  return (
    <Provider {...stores}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={SAMPLE_ROUTE_PATH}>
            <SampleRoute />
          </Route>
          <Route exact path={TODOS_ROUTE_PATH}>
            <TodosRoute />
          </Route>
          <Route exact path={HOME_ROUTE_PATH}>
            <HomeRoute />
          </Route>
          <Route exact path={POSTS_ROUTE_PATH}>
            <PostsRoute />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
