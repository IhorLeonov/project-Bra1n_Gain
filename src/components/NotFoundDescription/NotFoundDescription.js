import {
  Background,
  Wrapper,
  Four,
  TextWrapper,
  Picture,
  GoHome,
} from './NotFoundDescription.styled';

export const NotFoundDescription = () => {
  return (
    <section>
      <Background>
        <Wrapper>
          <Four>4</Four>
          <Picture>
            <source
              srcSet="images/goose_not_found/mobile_goose_png.png 1x, 
              images/goose_not_found/mobile_goose_png_2x@2x.png 2x,
              images/goose_not_found/mobile_goose.webp 1x,
              images/goose_not_found/mobile_goose@2x.webp 2x"
              media="(max-width: 767px)"
            />

            <source
              srcSet="images/goose_not_found/tablet_goose_png.png 1x, 
              images/goose_not_found/tablet_goose_png_2x.png 2x,
              images/goose_not_found/tablet_goose.webp 1x,
              images/goose_not_found/tablet_goose@2x.webp 2x"
              media="(min-width: 768px) and (max-width:1439px)"
            />

            <source
              srcSet="images/goose_not_found/desctop_goose.png 1x, 
              images/goose_not_found/desctop_goose@2x.png 2x,
              images/goose_not_found/desctop_goose.webp 1x,
              images/goose_not_found/desctop_goose@2x.webp 2x"
              media="(min-width: 1440px)"
            />

            <img
              src={
                process.env.PUBLIC_URL +
                '/images/goose_not_found/mobile_goose_png.png'
              }
              alt="goose in rocket"
            />
          </Picture>
          <Four>4</Four>
        </Wrapper>
        <TextWrapper>
          We’re sorry, the page you requested could not be found. Please go back
          to the{' '}
        </TextWrapper>
        <GoHome to={'/'} type="button">
          homepage
        </GoHome>
        .
      </Background>
    </section>
  );
};

export default NotFoundDescription;
