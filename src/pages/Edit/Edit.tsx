import React from "react";
import { Link } from "react-router-dom";
import { EditFeedback } from "../../components";
import { AppWrapper, BackAnchor, Container } from "./Edit.style";

function Edit() {
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
        <EditFeedback />
      </AppWrapper>
    </Container>
  );
}

export default Edit;
