// wrapper-component.js
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/utilities/theme.js';
import { StyleSheetManager } from 'styled-components';
import { getStore } from './src/utilities/getStore.js';

const WrapperComponentDocs = ( props ) => {
  const { frameContext } = props;
  return (
    <StyleSheetManager target={ frameContext.document.head }>
      <ThemeProvider theme={ theme }>
        <Provider store={ getStore() }>
          { props.children }
        </Provider>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default WrapperComponentDocs;