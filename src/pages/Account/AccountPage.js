import { UserForm } from 'components/UserForm/UserForm';
import { ChangePassord } from 'components/ChangePassord/ChangePassord';
import { useState } from 'react';

import { AccountPageContainer, BtnWtapper, ToggleBtn } from './AccountPage.styled';

export default function AccountPage() {
  const [isChangePasswordTab, setIsChangePasswordTab] = useState(false);

  return (
    <div>
      <AccountPageContainer>
        <BtnWtapper>
          <ToggleBtn
            type="button"
            className={` ${isChangePasswordTab ? 'notactive' : 'active'}`}

            onClick={() => setIsChangePasswordTab(false)}
          >Profile</ToggleBtn>
          <ToggleBtn
            type="button"
            className={` ${isChangePasswordTab ? 'active' : 'notactive'}`}

            onClick={() => setIsChangePasswordTab(true)}
          >Password</ToggleBtn>
        </BtnWtapper>
        {isChangePasswordTab ? <ChangePassord /> : <UserForm />}
      </AccountPageContainer>
    </div>
  );
}
