import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props: any) => props.theme.navy};
  height: 5.5rem;
  width: 100%;
  display: flex;
  border-radius: ${(props: any) => props.theme.br};
  align-items: center;
  padding: 1rem 1.75rem;
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
`;
