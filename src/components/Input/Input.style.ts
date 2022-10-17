import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  border-radius: ${(props: any) => props.theme.br};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media   (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const Heading = styled.h2`
  font-size: 1.2rem;
  color: ${(props: any) => props.theme.navy};
  width: 100%;
`;

export const Textarea = styled.textarea`
  background-color: ${(props: any) => props.theme.ghost};
  border-radius: ${(props: any) => props.theme.br};
  border: 1px solid ${(props: any) => props.theme.lightBlue};
  padding: 1rem;
  resize: none;
  width: 100%;
  font-size: 1rem;
  height: 6rem;
  color: ${(props: any) => props.theme.lightBlue};
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media   (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-end;
  }
`;

export const PostComment = styled.button`
  border-radius: ${(props: any) => props.theme.br};
  padding: 0.5rem 1rem;
  background-color: ${(props: any) => props.theme.purple};
  color: ${(props: any) => props.theme.white};
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgb(199, 90, 246);
  }
`;

export const CharactersLeft = styled.p`
  color: ${(props: any) => props.theme.lightBlue};
  font-size: 1.1rem;
  text-align: left;
  flex: 1;

  @media   (max-width: 600px) {
    text-align: left;
    width: 100%;
  }
`;

export const ErrorText = styled.p`
  color: ${(props: any) => props.theme.red};
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
