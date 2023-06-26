import { FiMoon } from "react-icons/fi";
import {FiSun} from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { theme } from 'constants/Theme';
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';
import { setTheme } from 'redux/theme/themeSlice';

export const ThemeToggler = () => {
  const mode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(
      setTheme(
        mode === theme.light ? theme.dark : theme.light
      )
    );
  };

  return (
    <div>
      <ToggleButton onClick={handleThemeChange}>
        <ThemeIcon>
          <use
            href={
              mode === theme.light
                ? <FiMoon/>
                : <FiSun/>
            }
          />
        </ThemeIcon>
      </ToggleButton>
    </div>
  );
};