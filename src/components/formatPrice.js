export function formatPrice(price, factor = 1) {
    return (price * factor).toLocaleString('pl-PL', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }