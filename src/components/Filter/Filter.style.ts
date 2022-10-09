import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props: any) => props.theme.white};
  border-radius: ${(props: any) => props.theme.br};
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  color: ${(props: any) =>
    props.active ? props.theme.white : props.theme.moderateBlue};
  background-color: ${(props: any) =>
    props.active ? props.theme.moderateBlue : props.theme.ghost};
  border: none;
  border-radius: ${(props: any) => props.theme.br};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props: any) =>
      props.active ? props.theme.moderateBlue : props.theme.modBlueHover};
  }
`;
