import React, { useState } from "react";
import { comment } from "../../App";
import { Reply, ReplyInput } from "../../components";
import {
  AvatarWrapper,
  CommentContent,
  Container,
  Content,
  DisplayName,
  ReplyButton,
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
          <ReplyButton onClick={() => setReplyOpen((prev) => !prev)}>
            Reply
          </ReplyButton>
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
        {feedback.replies.map((reply, index) => {
          return (
            <Reply
              key={index}
              data={reply}
              commentId={Number(feedback.id)}
              feedbackId={feedbackId}
            />
          );
        })}
      </CommentContent>
    </Container>
  );
}

export default Comment;
