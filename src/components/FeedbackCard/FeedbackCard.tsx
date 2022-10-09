import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../App";
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
  feedback: { id, category, title, description, comments },
}: {
  feedback: request;
}) {
  console.log({ id, category, title, description, comments });

  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <Container>
        <LeftSide>
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
