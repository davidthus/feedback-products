import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props: any) => props.theme.navy};
  height: ${(props: any) => (props.roadmap ? "8rem" : "5.5rem")};
  width: 100%;
  display: flex;
  border-radius: ${(props: any) => props.theme.br};
  align-items: center;
  padding: 1rem 1.75rem;

  @media (max-width: 650px) {
    border-radius: 0;
  }

  @media (max-width: 650px) {
    padding: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

export const AddFeedback = styled.button`
  background-color: ${(props: any) => props.theme.purple};
  border-radius: ${(props: any) => props.theme.br};
  cursor: pointer;
  padding: 0.6rem 1rem;
  color: ${(props: any) => props.theme.ghost};
  font-weight: bold;
  border: none;
  font-size: 1rem;
`;

export const FilterSuggestionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NumOfSuggestions = styled.p`
  color: ${(props: any) => props.theme.white};
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const RoadmapBack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RoadmapHeading = styled.h1`
  color: ${(props: any) => props.theme.white};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const BackAnchor = styled.button`
  display: flex;
  color: ${(props: any) => props.theme.white};
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    text-decoration: underline;
  }
`;

export const LightBulb = styled.img`

  @media (max-width: 650px) {
    display: none;
  }
`;
