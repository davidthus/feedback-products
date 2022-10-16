import React, { useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { Banner, FeedbackCard, Filter, RoadmapLink } from "../../components";
import {
  AddFeedback,
  AppWrapper,
  Container,
  Header,
  HeaderHeading,
  HeaderSubHeading,
  LeftSide,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundParagraph,
  NotFoundWrapper,
  RightSide,
} from "./Home.style";

function Home() {
  const productRequests = useAppSelector((state) => state.feedback);
  const [sortOrder, setSortOrder] = useState<string>("most-upvotes");
  const [category, setCategory] = useState<string>("all");

  return (
    <Container>
      <AppWrapper>
        <LeftSide>
          <Header>
            <HeaderHeading>Frontend Mentor</HeaderHeading>
            <HeaderSubHeading>Feedback board</HeaderSubHeading>
          </Header>
          <Filter category={category} setCategory={setCategory} />
          <RoadmapLink productRequests={productRequests} />
        </LeftSide>
        <RightSide>
          <Banner setSortOrder={setSortOrder} requests={productRequests} />
          {productRequests
            .filter((req: request) => req.status === "suggestion")
            .sort((a, b): any => {
              switch (sortOrder) {
                case "most-upvotes":
                  return b.upvotes - a.upvotes;
                case "least-upvotes":
                  return a.upvotes - b.upvotes;
                case "most-comments":
                  return b.comments.length - a.comments.length;
                case "least-comments":
                  return a.comments.length - b.comments.length;
                default:
                  return b.upvotes - a.upvotes;
              }
            })
            .filter((req) => {
              if (category === "all") {
                return req;
              } else {
                return req.category === category;
              }
            })
            .map((req) => {
              return <FeedbackCard key={req.id} feedback={req} />;
            }).length === 0 ? (
            <NotFound />
          ) : (
            productRequests
              .filter((req: request) => req.status === "suggestion")
              .sort((a, b): any => {
                switch (sortOrder) {
                  case "most-upvotes":
                    return b.upvotes - a.upvotes;
                  case "least-upvotes":
                    return a.upvotes - b.upvotes;
                  case "most-comments":
                    return b.comments.length - a.comments.length;
                  case "least-comments":
                    return a.comments.length - b.comments.length;
                  default:
                    return b.upvotes - a.upvotes;
                }
              })
              .filter((req) => {
                if (category === "all") {
                  return req;
                } else {
                  return req.category === category;
                }
              })
              .map((req) => {
                return <FeedbackCard key={req.id} feedback={req} />;
              })
          )}
        </RightSide>
      </AppWrapper>
    </Container>
  );
}

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <img
          src="/assets/suggestions/illustration-empty.svg"
          alt="a detective with a monocle"
        />
        <NotFoundHeading>There is no feedback yet.</NotFoundHeading>
        <NotFoundParagraph>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </NotFoundParagraph>
        <Link to="/add">
          <AddFeedback>+ Add Feedback</AddFeedback>
        </Link>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
}

export default Home;
