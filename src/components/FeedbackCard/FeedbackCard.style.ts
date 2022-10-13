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
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
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
