export const formattedData = (isoDateString: string) => {
  const date = new Date(isoDateString);

  const options: {[key: string]: string | boolean} = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const createDate = date.toLocaleDateString('en-US', options);
  return { createDate };
};
