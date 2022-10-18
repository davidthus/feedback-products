import React, { useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { Banner, FeedbackCard, Filter, RoadmapLink } from "../../components";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import {
  AddFeedback,
  AppWrapper,
  Container,
  Header,
  HeaderHeading,
  HeaderSubHeading,
  HeadingsWrapper,
  IconWrapper,
  LeftSide,
  MenuToggle,
  MobileMenu,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundParagraph,
  NotFoundWrapper,
  Overlay,
  RequestsWrapper,
  RightSide,
} from "./Home.style";

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

function Home() {
  const productRequests = useAppSelector((state) => state.feedback);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>("most-upvotes");
  const [category, setCategory] = useState<string>("all");
  const { isMobileSize, isTabletSize, isDesktopSize } = useMatchMedia();

  return (
    <Container>
      <AppWrapper>
        <LeftSide>
          <Header>
            <HeadingsWrapper>
              <HeaderHeading>Frontend Mentor</HeaderHeading>
              <HeaderSubHeading>Feedback board</HeaderSubHeading>
            </HeadingsWrapper>
            {isMobileSize && (
              <IconWrapper>
                <MenuToggle onClick={() => setMenuOpen((prev) => !prev)}>
                  {menuOpen ? (
                    <img
                      src="https://lm-product-feedback-app.netlify.app/static/media/icon-close.dd55c392.svg"
                      alt="close menu icon"
                    />
                  ) : (
                    <img
                      src="https://lm-product-feedback-app.netlify.app/static/media/icon-hamburger.a8bc4c8c.svg"
                      alt="hamburger icon"
                    />
                  )}
                </MenuToggle>
              </IconWrapper>
            )}
            {menuOpen && isMobileSize && (
              <MobileMenu>
                <Filter category={category} setCategory={setCategory} />
                <RoadmapLink productRequests={productRequests} />
              </MobileMenu>
            )}
          </Header>
          {(isTabletSize || isDesktopSize) && (
            <>
              <Filter category={category} setCategory={setCategory} />
              <RoadmapLink productRequests={productRequests} />
            </>
          )}
        </LeftSide>
        <RightSide menuOpen={menuOpen ? true : false}>
          {menuOpen && isMobileSize && <Overlay />}

          <Banner setSortOrder={setSortOrder} requests={productRequests} />
          <RequestsWrapper initial="hidden" animate="visible" variants={list}>
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
          </RequestsWrapper>
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
