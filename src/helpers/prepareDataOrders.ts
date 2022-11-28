export const sum = (category: string, data: any[]) => {
  const result = data.reduce((total, el) => {
    return total + Number(el[category]);
  }, 0);

  return String(result);
};

export const sumTotalPrice = (data: any[]) => {
  const result = data.reduce((total, el) => {
    return total + Number(el.Quantity) * Number(el.UnitPrice);
  }, 0);

  return String(result);
};

export const sumTotalDiscount = (data: any[]) => {
  const result = data.reduce((total, el) => {
    return (
      total + Number(el.Quantity) * Number(el.UnitPrice) * Number(el.Discount)
    );
  }, 0);

  return result === 0 ? "0.00" : String(result);
};
