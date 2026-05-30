import React, { useState, useEffect } from 'react';

const Counter = ({ target, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Strip non-numeric chars for target calculation
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numericTarget)) {
      setCount(target);
      return;
    }

    let start = 0;
    const end = numericTarget;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  // Format with comma
  const formatNumber = (num) => {
    if (typeof num === 'string') return num;
    return num.toLocaleString('en-IN');
  };

  return (
    <span>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default Counter;
