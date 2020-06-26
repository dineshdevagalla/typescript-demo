import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'

import PostsList from '../../components/PostsList'
import PostStore from '../../stores/PostStore'

interface TodosRouteProps {}

interface InjectedProps extends TodosRouteProps {
  postStore: PostStore
}

@inject('postStore')
@observer
class PostsRoute extends Component<TodosRouteProps> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getPosts()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getPostsStore = () => {
    return this.getInjectedProps().postStore
  }

  getPosts = () => {
    this.getPostsStore().getPostList()
  }

  renderSuccessUI = observer(() => {
    const { posts } = this.getPostsStore()
    return <PostsList posts={posts} />
  })

  render() {
    const { getPostListAPIStatus, getPostListAPIError } = this.getPostsStore()
    return (
      <LoadingWrapperWithFailure
        apiStatus={getPostListAPIStatus}
        apiError={getPostListAPIError}
        onRetry={this.getPosts}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}

export default PostsRoute
