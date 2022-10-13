import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem 0.45rem 4rem;
  display: flex;
  justify-content: center;
`;

export const AppWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  max-width: 750px;
  width: 100%;
`;

export const NavWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const EditFeedback = styled.button`
  font-size: 1rem;
  padding: 0.6rem 1rem;
  background-color: ${(props: any) => props.theme.moderateBlue};
  border-radius: ${(props: any) => props.theme.br};
  color: ${(props: any) => props.theme.white};
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const BackAnchor = styled.button`
  display: flex;
  color: ${(props: any) => props.theme.lightBlue};
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    text-decoration: underline;
  }
`;
