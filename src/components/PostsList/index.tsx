import React, { Component } from 'react'

import { observer } from 'mobx-react'

import NoDataView from '../common/NoDataView'

import PostModel from '../../stores/models/PostModel'

import { Post } from '../Post'

type PostListProps = {
  posts: Array<PostModel>
}

@observer
class PostsList extends Component<PostListProps> {
  render() {
    const { posts } = this.props

    if (posts.length === 0) {
      return <NoDataView />
    }
    return (
      <div>
        {posts.map(eachPost => {
          return <Post key={eachPost.id} eachPost={eachPost} />
        })}
      </div>
    )
  }
}

export default PostsList
