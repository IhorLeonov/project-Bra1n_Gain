import { UserForm } from 'components/UserForm/UserForm';
import { ChangePassord } from 'components/ChangePassord/ChangePassord';
import { useState } from 'react';
// import { BiSolidUserDetail } from 'react-icons/bi';
import { RiLockPasswordLine, RiFileUserLine } from 'react-icons/ri';







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
          >
            <RiFileUserLine size={24} />
            <p>Profile</p>
          </ToggleBtn>
          <ToggleBtn
            type="button"
            className={` ${isChangePasswordTab ? 'active pass' : 'notactive pass'}`}


            onClick={() => setIsChangePasswordTab(true)}
          > <RiLockPasswordLine size={20} />
            <p>Password</p>
          </ToggleBtn>
        </BtnWtapper>
        {isChangePasswordTab ? <ChangePassord /> : <UserForm />}
      </AccountPageContainer>
    </div>
  );
}
