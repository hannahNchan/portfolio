export const convertTime = (time) => {
  const date = new Date(time).toLocaleString().split(' ')[0];
  return date.replaceAll('/',' - ').split(' - ')[2];
}
