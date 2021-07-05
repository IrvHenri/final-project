export default function currencyFormatterHelpers() {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const formatMoneyShort = (n) => {
    if (n < 0) {
      let positive = n * -1;
      console.log(positive);
      if (positive < 1e3) return "-" + positive;
      if (positive >= 1e3 && positive < 1e6)
        return "-" + (positive / 1e3).toFixed(1) + "K";
      if (positive >= 1e6 && positive < 1e9)
        return "-" + (positive / 1e6).toFixed(1) + "M";
      if (positive >= 1e9 && positive < 1e12)
        return "-" + (positive / 1e9).toFixed(1) + "B";
      if (positive >= 1e12) return "-" + (positive / 1e12).toFixed(1) + "T";
    }

    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };
  return {
    currencyFormatter,
    formatMoneyShort,
  };
}
