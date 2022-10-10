import styled from "styled-components";

export const Container = styled.article`
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
  border-radius: ${(props: any) => props.theme.br};
  border-top: 5px solid ${(props: any) => props.theme[props.color]};
  background-color: ${(props: any) => props.theme.white};
`;

export const StatusWrapper = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const Status = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${(props: any) => props.theme.lightBlue};
`;

export const StatusColor = styled.div`
  border-radius: 99rem;
  width: 10px;
  height: 10px;
  background-color: ${(props: any) => props.theme[props.color]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 0.7rem;
  flex-direction: column;
`;

export const Heading = styled.h3`
  color: ${(props: any) => props.theme.navy};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: ${(props: any) => props.theme.moderateBlue};
  }
`;

export const Description = styled.p`
  color: ${(props: any) => props.theme.lightBlue};
  font-weight: 300;
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

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
