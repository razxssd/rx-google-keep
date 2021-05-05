import React from 'react';

interface ITooltipProps {
  label: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({children, label}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const setIsVisibleHandler = React.useCallback((value) => {
    setTimeout(() => {
      setIsVisible(value)
    }, 500)
  }, [])

  return <div className="rx-tooltip-container" onMouseOver={() => setIsVisibleHandler(true)} onMouseLeave={() => setIsVisibleHandler(false)}>
    {children}
    {isVisible && <div className="rx-tooltip-content">{label}</div>}
  </div>
};
