import React from 'react'
import { observer } from "mobx-react"
import PostModel from '../../stores/models/PostModel'

type PostProps = {
    eachPost: PostModel

}
@observer
class Post extends React.Component<PostProps> {


    render() {
        const { eachPost } = this.props
        console.log(eachPost.title, "hiiiii")
        return (<div className="border border-solid border-black">
            <h1>{eachPost.title}</h1>
            <p>{eachPost.body}</p>
        </div>)
    }



}

export { Post }