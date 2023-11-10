import { UserForm } from 'components/UserForm/UserForm';
import { ChangePassord } from 'components/ChangePassord/ChangePassord';
import { useState } from 'react';
import { RiLockPasswordLine, RiFileUserLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import {
  AccountPageContainer,
  BtnWtapper,
  ToggleBtn,
} from './AccountPage.styled';

export default function AccountPage() {
  const [isChangePasswordTab, setIsChangePasswordTab] = useState(false);
  const { t } = useTranslation();

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
            <p>{t('accountPage.Profile')}</p>
          </ToggleBtn>
          <ToggleBtn
            type="button"
            className={` ${
              isChangePasswordTab ? 'active pass' : 'notactive pass'
            }`}
            onClick={() => setIsChangePasswordTab(true)}
          >
            {' '}
            <RiLockPasswordLine size={20} />
            <p>{t('accountPage.Password')}</p>
          </ToggleBtn>
        </BtnWtapper>
        {isChangePasswordTab ? <ChangePassord /> : <UserForm />}
      </AccountPageContainer>
    </div>
  );
}
