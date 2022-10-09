import React, { useState } from "react";
import { request } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { Banner, FeedbackCard, Filter, RoadmapLink } from "../../components";
import {
  AppWrapper,
  Container,
  Header,
  HeaderHeading,
  HeaderSubHeading,
  LeftSide,
  RightSide,
} from "./Home.style";

function Home() {
  const productRequests = useAppSelector((state) => state.feedback);
  const [sortOrder, setSortOrder] = useState<string>("most-upvotes");
  console.log(productRequests);
  console.log(sortOrder);

  return (
    <Container>
      <AppWrapper>
        <LeftSide>
          <Header>
            <HeaderHeading>Frontend Mentor</HeaderHeading>
            <HeaderSubHeading>Feedback board</HeaderSubHeading>
          </Header>
          <Filter />
          <RoadmapLink />
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
            .map((req) => {
              return <FeedbackCard key={req.id} feedback={req} />;
            })}
        </RightSide>
      </AppWrapper>
    </Container>
  );
}

export default Home;
