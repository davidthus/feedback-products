import React from "react";
import { RoadmapCard } from "../../components";
import { roadmapTab } from "../../pages/Roadmap/Roadmap";
import {
  Column,
  ColumnHeading,
  ColumnHeadings,
  ColumnSubHeading,
  Container,
} from "./RoadmapGrid.style";

interface Props {
  tabs: roadmapTab[];
  mobile?: boolean;
}

function RoadmapGrid({ tabs, mobile }: Props) {
  return (
    <Container mobile={mobile ? true : false}>
      {tabs.map((tab) => {
        return (
          <Column>
            <ColumnHeadings>
              <ColumnHeading>
                {tab.title} ({tab.requests.length})
              </ColumnHeading>
              <ColumnSubHeading>{tab.subtitle}</ColumnSubHeading>
            </ColumnHeadings>
            {tab.requests.map((req, index) => (
              <RoadmapCard
                key={index}
                type={tab.title}
                color={tab.color}
                req={req}
              />
            ))}
          </Column>
        );
      })}
    </Container>
  );
}

export default RoadmapGrid;
