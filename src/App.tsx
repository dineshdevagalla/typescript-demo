import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'

const HomeRoute = lazy(() => import('./routes/HomeRoute'))
const SampleRoute = lazy(() => import('./routes/SampleRoute'))
const TodosRoute = lazy(() => import('./routes/TodosRoute'))
const PostsRoute = lazy(() => import('./routes/PostsRoute'))
const LazyLoadingRoute = lazy(() => import('./routes/LazyLoadingRoute'))
const ImageHoverRoute = lazy(() => import('./components/ImageHover'))
//import SampleRoute from './routes/SampleRoute'
//import HomeRoute from './routes/HomeRoute'
//import TodosRoute from './routes/TodosRoute'
//import PostsRoute from './routes/PostsRoute
import stores from './stores'

import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH,
  POSTS_ROUTE_PATH,
  LAZY_LOADING_PATH
} from './constants/NavigationConstants'

import i18n from './i18n'
//import { Provider } from "mobx-react";
const App = () => {
  return (
    <Provider {...stores}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Dinesh....</div>}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path={SAMPLE_ROUTE_PATH}>
                <SampleRoute />
              </Route>
              <Route exact path={TODOS_ROUTE_PATH}>
                <TodosRoute />
              </Route>
              <Route exact path={POSTS_ROUTE_PATH}>
                <PostsRoute />
              </Route>
              <Route exact path={LAZY_LOADING_PATH}>
                <LazyLoadingRoute />
              </Route>
              \
              <Route exact path='/hover'>
                <ImageHoverRoute />
              </Route>
              <Route path={HOME_ROUTE_PATH}>
                <HomeRoute />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </I18nextProvider>
    </Provider>
  )
}

export default App
