import React from 'react';

import { Container } from './ScrollToTop.styled';

import iconArrowUp from '../../../../src/shared/icons/iconArrowUp.svg';

export const ScrollToTop = () => {
  let calculateScrollValue = () => {
    let scrollProgress = document.getElementById('scroll-progress');
    let position = document.documentElement.scrollTop;
    let calculateHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((position * 100) / calculateHeight);
    if (scrollProgress) {
      if (position > 100) {
        scrollProgress.style.display = 'grid';
      } else {
        scrollProgress.style.display = 'none';
      }
      scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#3E85F3 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }
  };
  window.onscroll = calculateScrollValue;
  window.onload = calculateScrollValue;

  return (
    <Container>
      <div id="scroll-progress">
        <span id="scroll-progress-value">
          <svg height="20" width="20">
            <use href={iconArrowUp + '#icon-arrow-up'}></use>
          </svg>
        </span>
      </div>
    </Container>
  );
};
