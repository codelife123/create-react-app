import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PendingTime = () => {
  const getDuration = (t0, t1) => {
    let d = new Date(t1) - new Date(t0);
    let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
    let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
    let hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24);
    let minutes = Math.floor(
      d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60
    );
    let seconds = Math.floor(
      d / 1000 -
        weekdays * 7 * 24 * 60 * 60 -
        days * 24 * 60 * 60 -
        hours * 60 * 60 -
        minutes * 60
    );
    let milliseconds = Math.floor(
      d -
        weekdays * 7 * 24 * 60 * 60 * 1000 -
        days * 24 * 60 * 60 * 1000 -
        hours * 60 * 60 * 1000 -
        minutes * 60 * 1000 -
        seconds * 1000
    );

    days = days + 7 * weekdays;

    let t = {};
    ['weekdays', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'].forEach(
      (q) => {
        if (eval(q) > 0) {
          t[q] = eval(q);
        }
      }
    );
    return t;
  };
  const estimateDate = '2022-11-01';
  const gap = getDuration(new Date(), new Date(estimateDate));

  const [days, setDays] = useState(gap['days']);
  const [hours, setHours] = useState(gap['hours']);
  const [minutes, setMinutes] = useState(gap['minutes']);
  const [seconds, setSeconds] = useState(gap['seconds']);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Box
      display="flex"
      flexDirection={'row'}
      justifyContent={'space-around'}
      marginY={2}
    >
      <Box display="flex" flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} color="primary">
          {days}
        </Typography>
        <Typography>Days</Typography>
      </Box>
      <Box display="flex" flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} color="primary">
          {hours}
        </Typography>
        <Typography>Hours</Typography>
      </Box>
      <Box display="flex" flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} color="primary">
          {minutes}
        </Typography>
        <Typography>Mins</Typography>
      </Box>

      <Box display="flex" flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} color="primary">
          {seconds}
        </Typography>
        <Typography>Secs</Typography>
      </Box>
    </Box>
  );
};

export default PendingTime;
