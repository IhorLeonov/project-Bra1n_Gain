import { selectLanguage } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from 'redux/auth/authSlice';

import { ReactComponent as UA } from '../../shared/icons/ua.svg';
import { ReactComponent as EN } from '../../shared/icons/en.svg';
import { LanguageBox } from './ChangeLanguageBtn.styled';

export const ChangeLanguageBtn = () => {

    const dispatch = useDispatch();
    const languageValue = useSelector(selectLanguage);
    const handleLanguage = () => dispatch(toggleLanguage());

    return (
        <LanguageBox>{languageValue === "uk" ?
            <UA onClick={handleLanguage} />
            :
            <EN onClick={handleLanguage} />
        }</LanguageBox>
    );
};

export default ChangeLanguageBtn;
