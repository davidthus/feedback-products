import React, { useState } from "react";
import { reply } from "../../App";
import ReplyInput from "../ReplyInput/ReplyInput";
import {
  AvatarWrapper,
  Container,
  Content,
  DisplayName,
  ReplyButton,
  ReplyContent,
  ReplyingTo,
  TopWrapper,
  UserAvatar,
  UserDetails,
  Username,
} from "./Reply.style";

function Reply({
  data,
  commentId,
  feedbackId,
}: {
  data: reply;
  commentId: number;
  feedbackId: number;
}) {
  const [replyOpen, setReplyOpen] = useState(false);

  function handleClick(e: any) {
    e.preventDefault();
    setReplyOpen((prev) => !prev);
  }

  return (
    <Container>
      <AvatarWrapper>
        <UserAvatar src={data.user.image} />
      </AvatarWrapper>
      <ReplyContent>
        <TopWrapper>
          <UserDetails>
            <DisplayName>{data.user.name}</DisplayName>
            <Username>@{data.user.username}</Username>
          </UserDetails>
          <ReplyButton onClick={handleClick}>Reply</ReplyButton>
        </TopWrapper>
        <Content>
          <ReplyingTo>{`@${data.replyingTo} `}</ReplyingTo>
          {data.content}
        </Content>
        {replyOpen && (
          <ReplyInput
            feedbackId={feedbackId}
            user={data.user}
            commentId={commentId}
            setReplyOpen={setReplyOpen}
          />
        )}
      </ReplyContent>
    </Container>
  );
}

export default Reply;
