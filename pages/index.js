import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Index = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div>
        <Typography variant="h2">
          Bullish-AF LaunchPad
        </Typography>
        <Typography variant="h5">
     DeFi Tokens pre-sale launchpad
    </Typography>
      </div>
      <Link href="/about">
        <a className={classes.text}>About</a>
      </Link>
    </main>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    margin: '100px auto',
    maxWidth: 1100,
    textAlign: 'center'
  },
  text: {
    fontSize: 18
  }
}));

export default Index;
