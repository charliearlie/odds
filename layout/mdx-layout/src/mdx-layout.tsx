import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import styles from './layout.module.css';

import '~/tokens/all.scss';

export const Layout = (props) => (
  <MDXProvider>
    <CssLayout
      logo={
        <div className={styles.heading}>
          <img
            className={`${styles.logo}`}
            src="https://cdn.prod.us.occloud.io/blue/img/icons/oc-logo.png"
          />
        </div>
      }
      {...props}
      style="font-family: 'Public Sans', sans-serif;"
    />
  </MDXProvider>
);
