import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props: any) => props.theme.white};
  border-radius: ${(props: any) => props.theme.br};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const Heading = styled.h3`
  font-weight: bold;
  color: ${(props: any) => props.theme.navy};
  font-size: 1.2rem;
`;

export const Anchor = styled.p`
  color: ${(props: any) => props.theme.moderateBlue};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const TopWrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StatusesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const StatusRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ColorAndStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Status = styled.p`
  font-weight: 300;
  font-size: 1.1rem;
  color: ${(props: any) => props.theme.lightBlue};
`;

export const StatusColor = styled.div`
  border-radius: 99rem;
  width: 10px;
  height: 10px;
  background-color: ${(props: any) => props.theme[props.color]};
`;

export const Number = styled.p`
  color: ${(props: any) => props.theme.lightBlue};
  font-size: 1.2rem;
  font-weight: bold;
`;
