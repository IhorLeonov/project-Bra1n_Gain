import { ReactComponent as ShowPasswordIcon } from '../../shared/icons/icon-show-password.svg';
import { ReactComponent as ClosePasswordIcon } from '../../shared/icons/icon-close-password.svg';

export default function VisionIcons({ typeIcon }) {
  return (
    <>
      {typeIcon === 'password' ? <ShowPasswordIcon /> : <ClosePasswordIcon />}
    </>
  );
}
