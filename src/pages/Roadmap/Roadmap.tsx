import React from "react";
import { Banner, RoadmapGrid } from "../../components";
import { Container, RoadmapWrapper } from "./Roadmap.style";

function Roadmap() {
  return (
    <Container>
      <RoadmapWrapper>
        <Banner roadmap />
        <RoadmapGrid />
      </RoadmapWrapper>
    </Container>
  );
}

export default Roadmap;
