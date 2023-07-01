import { FiMoon } from "react-icons/fi";
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  return (
    <div>
      <ToggleButton>
        <ThemeIcon>
           <FiMoon />
        </ThemeIcon>
      </ToggleButton>
    </div>
  );
};
