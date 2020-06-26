import React, { Component } from 'react'

import { withRouter, RouteComponentProps } from 'react-router-dom'

import { observer } from 'mobx-react'

import withComponentName from '../../hocs/withComponentName'

import TodoModel from '../../stores/models/TodoModel'

import { TodosListWrapper } from './styledComponents'
import Todo from '../Todo'
import NoDataView from '../common/NoDataView'

interface TodoListProps extends RouteComponentProps {
  todos: Array<TodoModel>
}

@observer
class TodoList extends Component<TodoListProps> {
  render() {
    const { todos } = this.props

    if (todos.length === 0) {
      return <NoDataView />
    }
    return (
      <TodosListWrapper>
        {todos.map(todoItem => {
          return <Todo key={todoItem.id} todo={todoItem} />
        })}
      </TodosListWrapper>
    )
  }
}

export default withRouter(withComponentName(TodoList))
