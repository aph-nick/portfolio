import React from 'react';

type PolandFlagProps = {
  className?: string;
};

export class PolandFlag extends React.Component<PolandFlagProps> {
  render() {
    const { className } = this.props;
    return (
      <svg
        className={className}
        viewBox="0 0 5 3"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Polska flaga"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="5" height="1.5" fill="#fff" />
        <rect y="1.5" width="5" height="1.5" fill="#dc143c" />
      </svg>
    );
  }
}