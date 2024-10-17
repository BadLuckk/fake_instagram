import React from 'react'
import CommentInput from './CommentInput'
import ShowComments from './ShowComments'

function CommentSection(props) {
  return (
    <div><CommentInput postId={props?.postId}/>
    <ShowComments/>   
    </div>
  )
}

export default CommentSection