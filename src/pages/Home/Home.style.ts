import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 3rem 0.45rem 0.45rem 0.45rem;
  display: flex;
  justify-content: center;
`;

export const AppWrapper = styled.main`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 1300px;
  padding: 1rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.header`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  min-width: 250px;
  max-width: 250px;

  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: fit-content;
  }
`;

export const RightSide = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.section`
  background-image: url(/assets/suggestions/desktop/background-header.png);
  height: clamp(5.5rem, 13vh, 8.5rem);
  width: 100%;
  border-radius: ${(props: { theme: any }) => props.theme.br};
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    height: 100%;
    background-image: url(/assets/suggestions/tablet/background-header.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const HeaderHeading = styled.h1`
  color: ${(props: any) => props.theme.white};
  font-size: 1.5rem;
`;

export const HeaderSubHeading = styled.h2`
  color: ${(props: any) => props.theme.white};
  font-size: 1.1rem;
  font-weight: 300;
`;

export const NotFoundContainer = styled.article`
  width: 100%;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
  width: 50%;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundHeading = styled.h2`
  color: ${(props: any) => props.theme.navy};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const NotFoundParagraph = styled.p`
  color: ${(props: any) => props.theme.lightBlue};
  font-size: 1rem;
  font-weight: bold;
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
