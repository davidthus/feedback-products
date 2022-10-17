import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

export const TextArea = styled.textarea`
  flex: 1;
  background-color: ${(props: any) => props.theme.ghost};
  border-radius: ${(props: any) => props.theme.br};
  border: 1px solid ${(props: any) => props.theme.lightBlue};
  padding: 1rem;
  resize: none;
  font-size: 1rem;
  height: 6rem;
  color: ${(props: any) => props.theme.lightBlue};

  @media   (max-width: 600px) {
    width: 100%;
  }
`;

export const PostReply = styled.button`
  background-color: ${(props: any) => props.theme.purple};
  border-radius: ${(props: any) => props.theme.br};
  padding-inline: 1.3rem;
  height: 3rem;
  color: ${(props: any) => props.theme.white};
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: rgb(199, 90, 246);
  }

  @media   (max-width: 600px) {
    max-width: 9rem;
  }
`;

export const ErrorText = styled.p`
  color: ${(props: any) => props.theme.red};
  font-size: 0.9rem;
  width: 100%;
  margin-top: 0.5rem;
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media   (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
`;
