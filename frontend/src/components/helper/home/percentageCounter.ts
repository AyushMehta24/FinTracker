export const calculatePercentage = (
  data: { value: number; label: string; color: string }[]
) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  return data.map((item) => ({
    ...item,
    percentage: ((item.value / total) * 100).toFixed(2) + "%",
  }));
};
