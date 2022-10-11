import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  border-radius: ${(props: any) => props.theme.br};
  padding: 0;

  @media screen and (max-width: 700px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
`;

export const AddIcon = styled.img`
  width: 3.5rem;
  height: auto;
  transform: translateY(-1.75rem);
`;

export const TopWrapper = styled.aside`
  padding-inline: 1.75rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const BottomWrapper = styled.form`
  padding: 0.5rem 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 700px) {
    padding: 5rem 1rem 2rem;
  }
`;

export const MainHeading = styled.h1`
  color: ${(props: any) => props.theme.navy};
  font-size: 1.8rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GroupHeading = styled.h2`
  color: ${(props: any) => props.theme.navy};
  font-size: 1.4rem;
`;

export const GroupDescription = styled.label`
  color: ${(props: any) => props.theme.lightBlue};
`;

export const GroupInput = styled.input`
  height: 3rem;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${(props: any) => props.theme.ghost};
  border-radius: ${(props: any) => props.theme.br};
  border: 1px solid ${(props: any) => props.theme.ghost};
  font-size: 1.1rem;
  color: ${(props: any) => props.theme.lightBlue};
  outline: none;

  &:focus {
    border: 1px solid ${(props: any) => props.theme.moderateBlue};
  }
`;

export const GroupTextArea = styled.textarea`
  resize: none;
  height: 8rem;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${(props: any) => props.theme.ghost};
  border-radius: ${(props: any) => props.theme.br};
  border: 1px solid ${(props: any) => props.theme.ghost};
  font-size: 1.1rem;
  color: ${(props: any) => props.theme.lightBlue};
  outline: none;

  &:focus {
    border: 1px solid ${(props: any) => props.theme.moderateBlue};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media screen and (max-width: 300px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: ${(props: any) => props.theme.br};
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;

  @media screen and (max-width: 300px) {
    width: 100%;
  }
`;

export const Cancel = styled(Button)`
  background-color: ${(props: any) => props.theme.navy};
  color: ${(props: any) => props.theme.white};
`;

export const AddFeedbackButton = styled(Button)`
  color: ${(props: any) => props.theme.white};
  background-color: ${(props: any) => props.theme.purple};
`;

export const CancelWrapper = styled.div`
  width: auto;

  @media screen and (max-width: 300px) {
    width: 100%;
  }
`;

export const ErrorText = styled.p`
  color: crimson;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;
