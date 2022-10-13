import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

import { CommentContainer, FeedbackCard, Input } from "../../components";
import {
  AppContainer,
  AppWrapper,
  BackAnchor,
  EditFeedback,
  NavWrapper,
} from "./Feedback.style";

function Feedback() {
  const { feedback, currentUser } = useAppSelector((state) => state);
  const { id } = useParams();

  function findReq(id: string | undefined) {
    const numId = Number(id);
    const index = feedback.findIndex((req) => req.id === numId);
    const req = feedback[index];
    return req;
  }
  const Request = findReq(id);

  return (
    <AppContainer>
      <AppWrapper>
        <NavWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <BackAnchor>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9L2 5l4-4"
                  stroke="#4661e6"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                ></path>
              </svg>
              Go Back
            </BackAnchor>
          </Link>
          <Link to={`/edit/${id}`} style={{ textDecoration: "none" }}>
            <EditFeedback>Edit Feedback</EditFeedback>
          </Link>
        </NavWrapper>
        <FeedbackCard feedback={Request} page />
        <CommentContainer feedback={Request} />
        <Input id={Request.id} author={currentUser} />
      </AppWrapper>
    </AppContainer>
  );
}

export default Feedback;
