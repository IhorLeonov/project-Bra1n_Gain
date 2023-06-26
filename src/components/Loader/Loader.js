import { LoaderBox } from 'components/Loader/Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = ({ width }) => {
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor="#CAE8FF"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </LoaderBox>
  );
};
