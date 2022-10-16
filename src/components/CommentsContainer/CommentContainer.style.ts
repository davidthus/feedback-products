import styled from "styled-components";

export const Container = styled.section`
  border-radius: ${(props: any) => props.theme.br};
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    padding: 1.5rem max(3vw, 0.3rem);
  }
`;

export const Heading = styled.h2`
  color: ${(props: any) => props.theme.navy};
  font-size: 1.2rem;
  width: 100%;
`;

export const CommentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
`;
