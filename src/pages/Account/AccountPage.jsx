import { UserForm } from 'components/UserForm/UserForm';
import { AccountPageContainer } from './AccountPage.styled';

export default function AccountPage() {
    return (
        <div>
            <AccountPageContainer>
                <UserForm />
            </AccountPageContainer>

        </div>
    );
}

