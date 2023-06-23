import styled from '@emotion/styled';

export const UserName = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  margin-right: 14px;

  @media (min-width: 765px) {
    font-size: 18px;
    line-height: 1;
  }
  color: ${props => props.theme.text};
`;

export const BackgroundName = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(228, 216, 30, 0.7147233893557423) 9%,
    rgba(241, 255, 13, 0.8155637254901961) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserNameIcon = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;

  color: black;
`;

export const UserPicture = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border: 1.8px solid ${props => props.theme.componentAccent};
  border-radius: 50%;

  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 765px) {
    width: 44px;
    height: 44px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;