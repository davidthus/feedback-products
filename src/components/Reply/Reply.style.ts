import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  width: 100%;
  margin-top: 2rem;
`;

export const UserAvatar = styled.img`
  height: 100%;
  border-radius: 99rem;
`;

export const AvatarWrapper = styled.aside`
  height: 40px;
  width: 50px;
`;

export const ReplyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const Content = styled.p`
  font-size: 0.9rem;
  color: ${(props: any) => props.theme.lightBlue};
  width: 100%;
  font-weight: 500;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisplayName = styled.h3`
  color: ${(props: any) => props.theme.navy};
  font-size: 0.9rem;
`;

export const Username = styled.h4`
  color: ${(props: any) => props.theme.lightBlue};
  font-size: 0.9rem;
  font-weight: 400;
`;

export const TopWrapper = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ReplyButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props: any) => props.theme.moderateBlue};
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;

export const ReplyingTo = styled.b`
  font-size: 0.9rem;
  color: ${(props: any) => props.theme.purple};
  width: 100%;
  font-weight: 600;
`;
