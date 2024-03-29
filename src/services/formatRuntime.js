export const formatRuntimeEn = time => {
  if (time) {
    const hours = Math.floor(time / 60);
    const min = time % 60;
    const result = hours > 0 ? `${hours}h ${min}m` : `${min}m`;
    return result;
  }
};
