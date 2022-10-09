import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../App";
import {
  Anchor,
  ColorAndStatusWrapper,
  Container,
  Heading,
  Number,
  Status,
  StatusColor,
  StatusesWrapper,
  StatusRow,
  TopWrapper,
} from "./RoadmapLink.style";

function RoadmapLink({ productRequests }: { productRequests: request[] }) {
  return (
    <Container>
      <TopWrapper>
        <Heading>Roadmap</Heading>
        <Link to="/roadmap" style={{ textDecoration: "none" }}>
          <Anchor>View</Anchor>
        </Link>
      </TopWrapper>
      <StatusesWrapper>
        <StatusRow>
          <ColorAndStatusWrapper>
            <StatusColor color="orange" />
            <Status>Planned</Status>
          </ColorAndStatusWrapper>
          <Number>
            {productRequests.filter((req) => req.status === "planned").length}
          </Number>
        </StatusRow>
        <StatusRow>
          <ColorAndStatusWrapper>
            <StatusColor color="purple" />
            <Status>In-Progress</Status>
          </ColorAndStatusWrapper>
          <Number>
            {
              productRequests.filter((req) => req.status === "in-progress")
                .length
            }
          </Number>
        </StatusRow>
        <StatusRow>
          <ColorAndStatusWrapper>
            <StatusColor color="brightBlue" />
            <Status>Live</Status>
          </ColorAndStatusWrapper>
          <Number>
            {productRequests.filter((req) => req.status === "live").length}
          </Number>
        </StatusRow>
      </StatusesWrapper>
    </Container>
  );
}

export default RoadmapLink;
