export default function VisionIconsLogIn({ type }) {
  return (
    <>
      {type === 'password' ? (
        <svg width={30} height={30}>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite.svg#icon-show-password'
            }
            fill="#3E85F3"
          />
        </svg>
      ) : (
        <svg width={30} height={30}>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite.svg#icon-close-password'
            }
            fill="#3E85F3"
          />
        </svg>
      )}
    </>
  );
}
