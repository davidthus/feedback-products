import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../App";
import { Upvote } from "../../components";
import {
  BottomWrapper,
  Category,
  Container,
  ContentWrapper,
  Description,
  Heading,
  NumOfComments,
  NumOfCommentsWrapper,
  Status,
  StatusColor,
  StatusWrapper,
} from "./RoadmapCard.style";

function RoadmapCard({
  type,
  color,
  req,
}: {
  type: string;
  color: string;
  req: request;
}) {
  return (
    <Container color={color}>
      <StatusWrapper>
        <StatusColor color={color} />
        <Status>{type}</Status>
      </StatusWrapper>
      <ContentWrapper>
        <Link to={"/" + req.id} style={{ textDecoration: "none" }}>
          <Heading>{req.title}</Heading>
        </Link>
        <Description>{req.description}</Description>
        <Category>{req.category}</Category>
      </ContentWrapper>
      <BottomWrapper>
        <Upvote upvotes={req.upvotes} id={req.id} roadmap />
        <NumOfCommentsWrapper>
          <img src="/assets/suggestions/comments.svg" alt="comments icon" />
          <NumOfComments>{req.comments.length}</NumOfComments>
        </NumOfCommentsWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default RoadmapCard;
