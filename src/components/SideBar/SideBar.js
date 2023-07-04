import { UserNav } from 'components/SideBar/UserNav/UserNav';
import { LogoutBtn } from 'components/SideBar/LogoutBtn/LogoutBtn';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  Container1,
  CloseIcon,
  Header,
  LogoContainer,
  Heading,
  ButtonClose,
  ItalicLetters,
  ContainerLogo,
} from './SideBar.styled';

const d1 = process.env.PUBLIC_URL + '/images/goose_logo-desctop/goose_logo-desctop.png';
const d2 = process.env.PUBLIC_URL + '/images/goose_logo-desctop/goose_logo-desctop@2x.png';
const d3 = process.env.PUBLIC_URL + '/images/goose_logo-desctop/goose_logo-desctop.webp';
const d4 = process.env.PUBLIC_URL + '/images/goose_logo-desctop/goose_logo-desctop@2x.webp';

const t1 = process.env.PUBLIC_URL + '/images/goose_logo-tablet/goose_logo-tablet.png';
const t2 = process.env.PUBLIC_URL + '/images/goose_logo-tablet/goose_logo-tablet@2x.png';
const t3 = process.env.PUBLIC_URL + '/images/goose_logo-tablet/goose_logo-tablet.webp';
const t4 = process.env.PUBLIC_URL + '/images/goose_logo-tablet/goose_logo-tablet@2x.webp';

const m1 = process.env.PUBLIC_URL + '/images/goose_logo-mobile/goose_logo-mobile.png';
const m2 = process.env.PUBLIC_URL + '/images/goose_logo-mobile/goose_logo-mobile@2x.png';
const m3 = process.env.PUBLIC_URL + '/images/goose_logo-mobile/goose_logo-mobile.webp';
const m4 = process.env.PUBLIC_URL + '/images/goose_logo-mobile/goose_logo-mobile@2x.webp';

export const SideBar = ({
  doActiveCalendar,
  doActiveAccount,
  toggleSidebar,
}) => {

  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleCloseButtonClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setIsOpen(windowWidth >= 1280);
  }, [windowWidth]);

  const SidebarContainer = windowWidth < 1280 ? Container1 : Container;
  
  return (
    <>
      {isOpen && (
        <SidebarContainer>
          <div>
            <Header>
              <Link to="/">
                <LogoContainer>
                <ContainerLogo>
                    <picture>
                       <source
                             srcSet={`${d1} 1x, ${d2} 2x, ${d3} 1x, ${d4} 2x`}
                                 media="(min-width: 1280px)"
                        >
                       </source>
                       <source
                             srcSet={`${t1} 1x, ${t2} 2x, ${t3} 1x, ${t4} 2x`}
                                 media="(min-width: 768px)"
                        >
                       </source>
                       <source
                             srcSet={`${m1} 1x, ${m2} 2x, ${m3} 1x, ${m4} 2x`}
                                 media="(min-width: 375px)"
                        >
                       </source>
                       <img
                        src={process.env.PUBLIC_URL + '/images/goose_logo-desctop/goose_logo-desctop.png'}
                        alt="goose logo"
                      />   
                    </picture>
                  </ContainerLogo>
                  <Heading>
                    G<ItalicLetters>oo</ItalicLetters>seTrack
                  </Heading>
                </LogoContainer>
              </Link>
              <ButtonClose type="button" onClick={handleCloseButtonClick}>
                <CloseIcon />
              </ButtonClose>
            </Header>
            <UserNav
              doActiveCalendar={doActiveCalendar}
              doActiveAccount={doActiveAccount}
              toggleSidebar={toggleSidebar}
            />
            </div>
          <LogoutBtn />
        </SidebarContainer>
      )}
    </>
  );
};

SideBar.propTypes = {
  doActiveCalendar: PropTypes.func,
  doActiveAccount: PropTypes.func,
  toggleSidebar: PropTypes.func,
};