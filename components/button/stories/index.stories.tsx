import React from 'react';
import { Button } from '../index';

export const primaryButton = () => (
  <>
    <Button size="sm" onClick={() => alert('Button pressed!')}>
      Small
    </Button>
    <Button onClick={() => alert('Button pressed!')}>Medium</Button>
    <Button size="lg" onClick={() => alert('Button pressed!')}>
      Large
    </Button>
  </>
);

export const secondaryButton = () => (
  <>
    <Button
      variant="secondary"
      size="sm"
      onClick={() => alert('Button pressed!')}
    >
      Small
    </Button>
    <Button variant="secondary" onClick={() => alert('Button pressed!')}>
      Medium
    </Button>
    <Button
      variant="secondary"
      size="lg"
      onClick={() => alert('Button pressed!')}
    >
      Large
    </Button>
  </>
);

export const disabled = () => (
  <>
    <Button
      isDisabled
      size="sm"
      onClick={() =>
        alert('Button is disabled so you should never see this alert')
      }
    >
      Small
    </Button>
    <Button
      isDisabled
      onClick={() =>
        alert('Button is disabled so you should never see this alert')
      }
    >
      Medium
    </Button>
    <Button
      isDisabled
      size="lg"
      onClick={() =>
        alert('Button is disabled so you should never see this alert')
      }
    >
      Large
    </Button>
  </>
);
