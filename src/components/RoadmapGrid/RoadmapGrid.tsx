import React from "react";
import { useAppSelector } from "../../app/hooks";
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
      </Column>
      <Column>
        <ColumnHeadings>
          <ColumnHeading>
            Live (
            {productRequests.filter((req) => req.status === "live").length})
          </ColumnHeading>
          <ColumnSubHeading>Released features</ColumnSubHeading>
        </ColumnHeadings>
      </Column>
    </Container>
  );
}

export default RoadmapGrid;
