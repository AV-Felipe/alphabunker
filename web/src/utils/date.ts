export function parseDate(date_raw: string){
  const data = new Date(date_raw);
  return ((data.getDate() )) + '/' + ((data.getMonth() + 1)) + '/' + data.getFullYear();
}
