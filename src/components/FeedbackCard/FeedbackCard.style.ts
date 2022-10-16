import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  border-radius: ${(props: any) => props.theme.br};
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props: any) => props.theme.white};
  transition: 0.5s;

  &:hover {
    border: ${(props: any) =>
      props.page
        ? `1px solid ${props.theme.white}`
        : `1px solid ${props.theme.purple}`};
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

export const HomeContainer = styled.article`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  border-radius: ${(props: any) => props.theme.br};
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props: any) => props.theme.white};
  transition: 0.5s;

  &:hover {
    border: ${(props: any) =>
      props.page
        ? `1px solid ${props.theme.white}`
        : `1px solid ${props.theme.purple}`};
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const HomeLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Details = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
  align-items: flex-start;
`;

export const NumOfCommentsWrapper = styled.aside`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

export const NumOfComments = styled.p`
  color: ${(props: any) => props.theme.navy};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Heading = styled.h4`
  font-weight: bold;
  color: ${(props: any) => props.theme.navy};
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-weight: 300;
  color: ${(props: any) => props.theme.lightBlue};
  font-size: 1rem;
`;

export const Category = styled.b`
  border-radius: ${(props: any) => props.theme.br};
  background-color: ${(props: any) => props.theme.ghost};
  color: ${(props: any) => props.theme.moderateBlue};
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const BottomWrapper = styled.aside`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

export const HomeBottomWrapper = styled.aside`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;

export const UpvoteWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const HomeUpvoteWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NumOfCommentsDesktop = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const HomeNumOfCommentsDesktop = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
