import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 4rem 3%;
  display: flex;
  justify-content: center;

  @media (max-width: 650px) {
    padding: 0;
  }
`;

export const RoadmapWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 650px) {
    gap: 0;
  }
`;

export const TabsContainer = styled.menu`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border-bottom: 1px solid ${(props: any) => props.theme.navy};
  background-color: ${(props: any) => props.theme.ghost};
`;

export const Tab = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  cursor: pointer;
  color: ${(props: any) => props.theme.navy};
  font-weight: bold;
  border-bottom: 3px solid
    ${(props: any) => (props.active ? props.theme[props.color] : "transparent")};
`;
