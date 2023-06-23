import { FiMoon } from "react-icons/fi";
import {FiSun} from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { THEME_OPTIONS } from 'constants/Theme';
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';
import { setTheme } from 'redux/theme/themeSlice';

export const ThemeToggler = () => {
  const mode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(
      setTheme(
        mode === THEME_OPTIONS.light ? THEME_OPTIONS.dark : THEME_OPTIONS.light
      )
    );
  };

  return (
    <div>
      <ToggleButton onClick={handleThemeChange}>
        <ThemeIcon>
          <use
            href={
              mode === THEME_OPTIONS.light
                ? <FiMoon/>
                : <FiSun/>
            }
          />
        </ThemeIcon>
      </ToggleButton>
    </div>
  );
};