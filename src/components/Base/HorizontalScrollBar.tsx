import React from 'react';

type Props = { currentPercentage: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const HorizontalScrollBar = ({ currentPercentage, style, ...rest }: Props) => {
  return (
    <div
      {...rest}
      style={{
        ...style,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999999,
        height: '3px',
        backgroundColor: 'red',
        width: currentPercentage + '%',
      }}
    ></div>
  );
};

export default HorizontalScrollBar;
