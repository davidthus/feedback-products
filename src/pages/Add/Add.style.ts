import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem 0.45rem 3rem 0.45rem;
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 0;
    padding-right: 0.45rem;
  }
`;

export const AppWrapper = styled.main`
  display: flex;
  gap: 3rem;
  width: 100%;
  max-width: 700px;
  flex-direction: column;
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
