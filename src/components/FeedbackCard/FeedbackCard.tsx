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

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

function FeedbackCard({
  feedback: { id, category, title, description, comments, upvotes, upvoted },
  page,
}: {
  feedback: request;
  page?: boolean;
}) {
  return page ? (
    <Container
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      page
    >
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
      <HomeContainer variants={item}>
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
