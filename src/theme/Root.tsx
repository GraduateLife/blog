// import useLayoutEffect from '@docusaurus/useIsomorphicLayoutEffect';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useScrollPercentage } from '../hooks/useScrollPercentage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HorizontalScrollBar from '../components/Base/HorizontalScrollBar';
import { useEnvVar } from '../hooks/useEnvVar';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function Root({ children }) {
  return (
    <>
      {/* <div
        className="very-top"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 9999999,
          display: shouldShow,
        }}
      > */}
      {/* <HorizontalScrollBar
        currentPercentage={percentage}
        style={{
          display: shouldShow,
        }}
      ></HorizontalScrollBar> */}
      {/* </div> */}
      {children}
    </>
  );
}
