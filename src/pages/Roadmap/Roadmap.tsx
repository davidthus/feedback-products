import React, { useState } from "react";
import { request } from "../../App";
import { useAppSelector } from "../../app/hooks";
import { Banner, RoadmapGrid } from "../../components";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { Container, RoadmapWrapper, Tab, TabsContainer } from "./Roadmap.style";

export interface roadmapTab {
  color: string;
  status: string;
  requests: request[];
  title: string;
  subtitle: string;
}

function Roadmap() {
  const productrequests = useAppSelector((state) => state.feedback);
  const { isMobileSize } = useMatchMedia();
  const [activeTab, setActiveTab] = useState("planned");

  const tabs: roadmapTab[] = [
    {
      color: "orange",
      status: "planned",
      requests: productrequests.filter((req) => req.status === "planned"),
      title: "Planned",
      subtitle: "Ideas prioritized for research",
    },
    {
      status: "in-progress",
      color: "purple",
      requests: productrequests.filter((req) => req.status === "in-progress"),
      title: "In-Progress",
      subtitle: "Currently being developed",
    },
    {
      status: "live",
      color: "brightBlue",
      requests: productrequests.filter((req) => req.status === "live"),
      title: "Live",
      subtitle: "Released features",
    },
  ];

  return (
    <Container>
      <RoadmapWrapper>
        <Banner roadmap />
        {isMobileSize && (
          <TabsContainer>
            {tabs.map((tab) => (
              <Tab
                color={tab.color}
                active={tab.status === activeTab ? true : false}
                onClick={() => setActiveTab(tab.status)}
              >
                {tab.title} ({tab.requests.length})
              </Tab>
            ))}
          </TabsContainer>
        )}
        {isMobileSize ? (
          <RoadmapGrid
            tabs={tabs.filter((tab) => tab.status === activeTab)}
            mobile
          />
        ) : (
          <RoadmapGrid tabs={tabs} />
        )}
      </RoadmapWrapper>
    </Container>
  );
}

export default Roadmap;
