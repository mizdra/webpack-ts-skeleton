import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export type AppProps = {};

export function App(_props: AppProps) {
  return (
    <Container maxWidth="sm">
      <Button variant="contained" color="primary">
        Button
      </Button>
    </Container>
  );
}
