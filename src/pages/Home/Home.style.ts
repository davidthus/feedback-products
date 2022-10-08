import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 3rem 0.45rem 0.45rem 0.45rem;
  display: flex;
  justify-content: center;
`;

export const AppWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 2rem;
`;
