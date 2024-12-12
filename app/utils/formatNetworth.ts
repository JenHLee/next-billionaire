export const formatNetWorth = (value: number) => {
    const billionValue = Math.floor(value / 1000);
    return `${billionValue} Billion`; 
  };
