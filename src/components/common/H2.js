import React from 'react';
import { H2 as H2Native } from 'native-base';

const H2 = ({ children }) => {
  return (
    <H2Native>
      {children}
    </H2Native>
  );
};

export { H2 };
