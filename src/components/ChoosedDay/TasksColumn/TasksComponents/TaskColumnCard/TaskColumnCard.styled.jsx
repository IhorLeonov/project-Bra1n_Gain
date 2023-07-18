import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  padding: 14px 14px 18px 14px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.isDragging ? "#3e85f3" : props.theme.colors.taskCardBgColor};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  :hover,
  :focus {
    border-color:  #3e85f3;
  }
`;

export const TextTask = styled.p`
  margin-bottom: 24px;

  color: ${props => props.theme.colors.textColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const WrapperToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: self-end;
  justify-content: space-between;
`;

export const ContainerDataUser = styled.div`
  display: flex;
  align-items: self-end;
  gap: 8px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid ${props => props.theme.colors.primaryBlueColor};
`;

export const Priority = styled.span`
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;

  color: #f7f6f9;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${props =>
    props.children === 'low'
      ? '#72C2F8'
      : props.children === 'medium'
      ? '#F3B249'
      : '#EA3D65'};
`;
