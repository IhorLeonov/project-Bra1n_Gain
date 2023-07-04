import {
  Background,
  Wrapper,
  Four,
  TextWrapper,
  Picture,
  GoHome,
  GoHomeText,
} from './NotFoundDescription.styled';

export const NotFoundDescription = () => {
  const m1 =
    process.env.PUBLIC_URL + '/images/goose_not_found/mobile_goose_png.png';
  const m2 =
    process.env.PUBLIC_URL +
    '/images/goose_not_found/mobile_goose_png_2x@2x.png';
  const m3 =
    process.env.PUBLIC_URL + '/images/goose_not_found/mobile_goose.webp';
  const m4 =
    process.env.PUBLIC_URL + '/images/goose_not_found/mobile_goose@2x.webp';

  const t1 =
    process.env.PUBLIC_URL + '/images/goose_not_found/tablet_goose_png.png';
  const t2 =
    process.env.PUBLIC_URL + '/images/goose_not_found/tablet_goose_png_2x.png';
  const t3 =
    process.env.PUBLIC_URL + '/images/goose_not_found/tablet_goose.webp';
  const t4 =
    process.env.PUBLIC_URL + '/images/goose_not_found/tablet_goose@2x.webp';

  const d1 =
    process.env.PUBLIC_URL + '/images/goose_not_found/desctop_goose.png';
  const d2 =
    process.env.PUBLIC_URL + '/images/goose_not_found/desctop_goose@2x.png';
  const d3 =
    process.env.PUBLIC_URL + '/images/goose_not_found/desctop_goose.webp';
  const d4 =
    process.env.PUBLIC_URL + '/images/goose_not_found/desctop_goose@2x.webp';

  return (
    <section>
      <Background>
        <Wrapper>
          <Four>4</Four>
          <Picture>
            <source
              srcSet={`${m1} 1x, ${m2} 2x, ${m3} 1x, ${m4} 2x`}
              media="(max-width: 767px)"
            />

            <source
              srcSet={`${t1} 1x, ${t2} 2x, ${t3} 1x, ${t4} 2x`}
              media="(min-width: 768px) and (max-width:1279px)"
            />

            <source
              srcSet={`${d1} 1x, ${d2} 2x, ${d3} 1x, ${d4} 2x`}
              media="(min-width: 1280px)"
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
          We’re sorry, the page you requested could not be found.
        </TextWrapper>
        <GoHome to={'/'} type="button">
          <GoHomeText>Please go back to the homepage.</GoHomeText>
        </GoHome>
      </Background>
    </section>
  );
};

export default NotFoundDescription;
