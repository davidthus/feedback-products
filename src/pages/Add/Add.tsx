import React from "react";
import { Link } from "react-router-dom";
import { AddFeedback } from "../../components";
import { AppWrapper, BackAnchor, Container } from "./Add.style";

function Add() {
  return (
    <Container>
      <AppWrapper>
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
        <AddFeedback />
      </AppWrapper>
    </Container>
  );
}

export default Add;
