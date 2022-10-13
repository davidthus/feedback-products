import React from "react";
import { request } from "../../App";
import { Comment } from "../../components";
import { CommentsWrapper, Container, Heading } from "./CommentContainer.style";

function CommentContainer({ feedback }: { feedback: request }) {
  return (
    <Container>
      <Heading>{feedback.comments.length} Comments</Heading>
      <CommentsWrapper>
        {feedback.comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              feedbackId={Number(feedback.id)}
              feedback={comment}
            />
          );
        })}
      </CommentsWrapper>
    </Container>
  );
}

export default CommentContainer;
