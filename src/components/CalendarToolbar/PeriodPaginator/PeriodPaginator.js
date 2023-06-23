import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ButtonLeft,
  ButtonRight,
  ContainerBtn,
  Period,
  Wrapper
} from './PeriodPaginator.styled';
import './style.css'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { formatPeriod } from 'utils/calendarToolbar/formatPeriod';
import { changeDate } from 'utils/calendarToolbar/changeDate';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
      root: {
        width: '0',
        height: "0",
        position: 'absolute',
        top: "-17px",
        opacity: "0",
        overflow: "hidden",
        '@media screen and (min-width: 768px)': {
          top: "-12px",
        },
    },
  },
}
}
});


export const PeriodPaginator = ({ date, setDate, typenav }) => {
  const [period, setPeriod] = useState(() => formatPeriod(date, typenav));
  const [openPicker, setOpenPicker] = useState(false);

  const handleInputChange = (event) => {
    setDate(event.target.value);
  };

  const handleInputClick = () => {
    if(typenav === 'day')
    setOpenPicker(true);
  };

  const handlePickerChange = (newValue) => {
    setDate(newValue);
    setOpenPicker(false);
  };
  
  const handleClick = num => {
    setDate(changeDate(date, num, typenav));
  };
  
    useEffect(() => {
      setPeriod(formatPeriod(date, typenav));
    }, [typenav, date]);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={ AdapterDateFns }>
      <Period          
      onClick={handleInputClick}
      onChange={handleInputChange}
      >{period}</Period>
        {openPicker && (
          <DatePicker
            open
            value={date}
            onChange={handlePickerChange}
            onClose={() => setOpenPicker(false)}
            
          />
        )}
    </LocalizationProvider>
    </ThemeProvider>
    
      <ContainerBtn>
        <ButtonLeft onClick={() => handleClick(-1)}>
        <ArrowLeft/>
        </ButtonLeft>

        <ButtonRight onClick={() => handleClick(1)}>
        <ArrowRight/>
        </ButtonRight>
      </ContainerBtn>
    </Wrapper>
  );
};
