import React from "react";
import { useAppSelector } from "../../app/hooks";
import { RoadmapCard } from "../../components";
import {
  Column,
  ColumnHeading,
  ColumnHeadings,
  ColumnSubHeading,
  Container,
} from "./RoadmapGrid.style";

function RoadmapGrid() {
  const productRequests = useAppSelector((state) => state.feedback);

  return (
    <Container>
      <Column>
        <ColumnHeadings>
          <ColumnHeading>
            Planned (
            {productRequests.filter((req) => req.status === "planned").length})
          </ColumnHeading>
          <ColumnSubHeading>Ideas prioritized for research</ColumnSubHeading>
        </ColumnHeadings>
        {productRequests
          .filter((req) => req.status === "planned")
          .map((req, index) => (
            <RoadmapCard key={index} type="Planned" color="orange" req={req} />
          ))}
      </Column>
      <Column>
        <ColumnHeadings>
          <ColumnHeading>
            In-Progress (
            {
              productRequests.filter((req) => req.status === "in-progress")
                .length
            }
            )
          </ColumnHeading>
          <ColumnSubHeading>Currently being developed</ColumnSubHeading>
        </ColumnHeadings>
        {productRequests
          .filter((req) => req.status === "in-progress")
          .map((req, index) => (
            <RoadmapCard
              key={index}
              type="In-Progress"
              color="purple"
              req={req}
            />
          ))}
      </Column>
      <Column>
        <ColumnHeadings>
          <ColumnHeading>
            Live (
            {productRequests.filter((req) => req.status === "live").length})
          </ColumnHeading>
          <ColumnSubHeading>Released features</ColumnSubHeading>
        </ColumnHeadings>
        {productRequests
          .filter((req) => req.status === "live")
          .map((req, index) => (
            <RoadmapCard key={index} type="Live" color="brightBlue" req={req} />
          ))}
      </Column>
    </Container>
  );
}

export default RoadmapGrid;
