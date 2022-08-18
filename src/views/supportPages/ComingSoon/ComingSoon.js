import React, { useEffect, useState, useRef } from 'react';
import PendingTime from './PendingTime';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from '../../common/Container';
import TeamWorkingIllustration from '../../svg/illustrations/TeamWorking';

import { useForm } from 'react-hook-form';
import { reCAPTCHA } from 'react-google-recaptcha';

const ComingSoon = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const captchaRef = useRef(null);

  // const [email, setEmail] = useState('');
  console.log(errors);

  const onSubmit = (data) => {
    const token = captchaRef.current.getValue();
    console.log('form submitted' + token);
    const url = 'https://e548-203-189-184-201.ngrok.io/waitingList';
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        email: data.Email,
      }),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Box
      minHeight={'calc(100vh - 64px - 183px)'}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item container justifyContent={'center'} xs={12} md={6}>
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
              <TeamWorkingIllustration height={'100%'} width={'100%'} />
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant="h3"
                component={'h3'}
                align={isMd ? 'left' : 'center'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                We are launching soon
              </Typography>
              <Typography
                component="p"
                color="textSecondary"
                align={isMd ? 'left' : 'center'}
              >
                We're creating something awesome.
                <br />
                We'll be here soon with our new awesome site, subscribe to be
                notified.
              </Typography>
              <PendingTime />
              <form noValidate autoComplete="off">
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'column' }}
                  alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                >
                  <Box
                    flex={'1 1 auto'}
                    component={TextField}
                    label="Enter your email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    height={54}
                    marginBottom={2}
                    error={errors.Email != undefined}
                    {...register('Email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />

                  <div>
                    <RecaptchaView
                      sitekey={'6LcRmG4hAAAAAFu7zOI-lpnsPm_-4nqSvKz8Am23'}
                      ref={captchaRef}
                    />
                  </div>

                  <Box
                    component={Button}
                    variant="contained"
                    color="primary"
                    size="large"
                    height={54}
                    marginTop={{ xs: 2, sm: 2 }}
                    fullWidth
                    onClick={handleSubmit(onSubmit)}
                  >
                    Subscribe
                  </Box>
                </Box>
              </form>
              <Box marginTop={2} display={'flex'} justifyContent={'center'}>
                <IconButton aria-label="facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="instagram">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ComingSoon;
