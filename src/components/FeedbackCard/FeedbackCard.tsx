import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../App";
import { Upvote } from "../../components";
import {
  BottomWrapper,
  Category,
  Container,
  Description,
  Details,
  Heading,
  HomeBottomWrapper,
  HomeContainer,
  HomeLeftSide,
  HomeNumOfCommentsDesktop,
  HomeUpvoteWrapper,
  LeftSide,
  NumOfComments,
  NumOfCommentsDesktop,
  NumOfCommentsWrapper,
  UpvoteWrapper,
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
        <UpvoteWrapper>
          <Upvote upvotes={upvotes} id={id} upvoted={upvoted} />
        </UpvoteWrapper>
        <Details>
          <Heading>{title}</Heading>
          <Description>{description}</Description>
          <Category>{category}</Category>
        </Details>
      </LeftSide>
      <NumOfCommentsDesktop>
        <NumOfCommentsWrapper>
          <img src="/assets/suggestions/comments.svg" alt="comments icon" />
          <NumOfComments>{comments.length}</NumOfComments>
        </NumOfCommentsWrapper>
      </NumOfCommentsDesktop>
      <BottomWrapper>
        <Upvote upvotes={upvotes} id={id} upvoted={upvoted} horizontal />
        <NumOfCommentsWrapper>
          <img src="/assets/suggestions/comments.svg" alt="comments icon" />
          <NumOfComments>{comments.length}</NumOfComments>
        </NumOfCommentsWrapper>
      </BottomWrapper>
    </Container>
  ) : (
    <Link to={"/" + id} style={{ textDecoration: "none", width: "100%" }}>
      <HomeContainer>
        <HomeLeftSide>
          <HomeUpvoteWrapper>
            <Upvote upvotes={upvotes} id={id} upvoted={upvoted} />
          </HomeUpvoteWrapper>
          <Details>
            <Heading>{title}</Heading>
            <Description>{description}</Description>
            <Category>{category}</Category>
          </Details>
        </HomeLeftSide>
        <HomeNumOfCommentsDesktop>
          <NumOfCommentsWrapper>
            <img src="/assets/suggestions/comments.svg" alt="comments icon" />
            <NumOfComments>{comments.length}</NumOfComments>
          </NumOfCommentsWrapper>
        </HomeNumOfCommentsDesktop>
        <HomeBottomWrapper>
          <Upvote upvotes={upvotes} id={id} upvoted={upvoted} horizontal />
          <NumOfCommentsWrapper>
            <img src="/assets/suggestions/comments.svg" alt="comments icon" />
            <NumOfComments>{comments.length}</NumOfComments>
          </NumOfCommentsWrapper>
        </HomeBottomWrapper>
      </HomeContainer>
    </Link>
  );
}

export default FeedbackCard;
