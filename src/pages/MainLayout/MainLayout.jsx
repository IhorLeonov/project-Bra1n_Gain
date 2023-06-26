import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { Wrapper, WrapperForFixSideBar } from './MainLayout.styled';
import { useWindowSize } from 'hooks/useWindowSize';

export default function MainLayout() {
  const [isVisible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(isVisible => !isVisible);

  const size = useWindowSize();

  useEffect(() => {
    setVisible(size.width > 1439 && true);
  }, [size.width]);

  return (
    <>
      <Wrapper>
        <WrapperForFixSideBar>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SideBar onToggle={toggleSidebar} />
              </motion.div>
            )}
          </AnimatePresence>
        </WrapperForFixSideBar>

        <Header onToggle={toggleSidebar} />
        <Outlet />
      </Wrapper>
    </>
  );
}
