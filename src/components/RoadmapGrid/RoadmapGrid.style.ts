import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  width: 100%;
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const ColumnHeadings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  width: 100%;
`;

export const ColumnHeading = styled.h2`
  color: ${(props: any) => props.theme.navy};
  font-size: 1.3rem;
`;

export const ColumnSubHeading = styled.h3`
  color: ${(props: any) => props.theme.lightBlue};
  font-size: 1rem;
  font-weight: 500;
`;
