import styled from 'styled-components';

export const AccountPageContainer = styled.div`
position: relative;
margin-top: 8px;
background: rgba(247, 246, 249, 1);
padding-top: 31px;
// font-family: Inter;
`;

export const BtnWtapper = styled.div`
display: flex;
`;

export const ToggleBtn = styled.button`
color: rgba(62, 133, 243, 1);
border-radius: 16px 16px 0 0;


&.active{
    background: rgba(255, 255, 255, 1);
}
&.notactive{
    color: rgba(52, 52, 52, 0.5);
}
`;
