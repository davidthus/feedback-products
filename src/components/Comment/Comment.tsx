import React, { useState } from "react";
import { comment } from "../../App";
import { ReplyInput } from "../../components";
import {
  AvatarWrapper,
  CommentContent,
  Container,
  Content,
  DisplayName,
  Reply,
  TopWrapper,
  UserAvatar,
  UserDetails,
  Username,
} from "./Comment.style";

function Comment({
  feedback,
  feedbackId,
}: {
  feedback: comment;
  feedbackId: number;
}) {
  const [replyOpen, setReplyOpen] = useState(false);

  return (
    <Container>
      <AvatarWrapper>
        <UserAvatar src={feedback.user.image} />
      </AvatarWrapper>
      <CommentContent>
        <TopWrapper>
          <UserDetails>
            <DisplayName>{feedback.user.name}</DisplayName>
            <Username>@{feedback.user.username}</Username>
          </UserDetails>
          <Reply onClick={() => setReplyOpen((prev) => !prev)}>Reply</Reply>
        </TopWrapper>
        <Content>{feedback.content}</Content>
        {replyOpen && (
          <ReplyInput
            feedbackId={feedbackId}
            user={feedback.user}
            commentId={Number(feedback.id)}
            setReplyOpen={setReplyOpen}
          />
        )}
      </CommentContent>
    </Container>
  );
}

export default Comment;
