import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../App";
import { Upvote } from "../../components";
import {
  Category,
  Container,
  Description,
  Details,
  Heading,
  LeftSide,
  NumOfComments,
  NumOfCommentsWrapper,
} from "./FeedbackCard.style";

function FeedbackCard({
  feedback: { id, category, title, description, comments, upvotes, upvoted },
  page,
}: {
  feedback: request;
  page?: boolean;
}) {
  return page ? (
    <Container page>
      <LeftSide>
        <Upvote upvotes={upvotes} id={id} upvoted={upvoted} />
        <Details>
          <Heading>{title}</Heading>
          <Description>{description}</Description>
          <Category>{category}</Category>
        </Details>
      </LeftSide>
      <NumOfCommentsWrapper>
        <img src="/assets/suggestions/comments.svg" alt="comments icon" />
        <NumOfComments>{comments.length}</NumOfComments>
      </NumOfCommentsWrapper>
    </Container>
  ) : (
    <Link to={"/" + id} style={{ textDecoration: "none", width: "100%" }}>
      <Container>
        <LeftSide>
          <Upvote upvotes={upvotes} id={id} upvoted={upvoted} />
          <Details>
            <Heading>{title}</Heading>
            <Description>{description}</Description>
            <Category>{category}</Category>
          </Details>
        </LeftSide>
        <NumOfCommentsWrapper>
          <img src="/assets/suggestions/comments.svg" alt="comments icon" />
          <NumOfComments>{comments.length}</NumOfComments>
        </NumOfCommentsWrapper>
      </Container>
    </Link>
  );
}

export default FeedbackCard;
