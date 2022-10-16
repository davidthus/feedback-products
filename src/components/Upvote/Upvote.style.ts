import styled from "styled-components";

export const Container = styled.button`
  border-radius: ${(props: any) => props.theme.br};
  cursor: pointer;
  display: flex;
  flex-direction: ${(props: any) => (props.horizontal ? "row" : "column")};
  align-items: center;
  background-color: ${(props: any) =>
    props.active ? props.theme.moderateBlue : props.theme.ghost};
  padding: 0.5rem;
  border: none;
  gap: ${(props: any) => (props.horizontal ? "1rem" : "auto")};
  width: ${(props: any) => (props.horizontal ? "auto" : "2.8rem")};
  height: ${(props: any) => (props.horizontal ? "2.8rem" : "auto")};

  &:hover {
    background-color: ${(props: any) =>
      props.active ? props.theme.moderateBlue : props.theme.modBlueHover};
  }

  &:active {
    outline: ${(props: any) => props.theme.modBlueHover} dashed 2px;
  }

  &:focus {
    outline: ${(props: any) => props.theme.modBlueHover} dashed 2px;
  }
`;

export const Number = styled.b`
  color: ${(props: any) =>
    props.active ? props.theme.white : props.theme.navy};
  font-weight: bold;
  font-size: 1rem;
`;

export const Arrow = styled.img`
  transition: transform 1s ease 0s;
  height: 20px;
  transform: ${(props: any) =>
    props.active ? "rotate(0deg)" : "rotate(180deg)"};
  filter: ${(props: any) =>
    props.active
      ? "invert(97%) sepia(31%) saturate(787%) hue-rotate(179deg) brightness(100%) contrast(102%)"
      : "invert(42%) sepia(87%) saturate(3459%) hue-rotate(218deg) brightness(90%) contrast(100%)"};
`;
