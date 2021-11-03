export const assert = (data, err) => {

  if (!data) throw err
  return true;

}

export const loader = (text) => {

  console.log(`🕑 ${text || 'Loading...'}`);
  console.log('\n');

}

export const measure = (text, length) => {

  if (text && typeof text === 'string'){

    const t = text.split(' '); let res = '';
    t.forEach((l, i) => { res += (i !== 0 && i % length === 0) ? `${t[i]}\n` : `${t[i]} ` });
    return res;

  }

  return '';

} 

export const time = (date) => {

  const ms = { second: 1000, minute: 60000, hour: 3600000, day: 86400000 };

  // calc the diff 
  const diff = new Date() - new Date(date);

  if (diff <= ms.minute)
    return `${(diff/ms.second).toFixed(0)}s`

  if (diff > ms.minute && diff < ms.hour)
    return `${(diff/ms.minute).toFixed(0)}m`;

  if (diff > ms.hour && diff <= ms.day)
    return `${(diff/ms.hour).toFixed(0)}h`;

  const arr = date.split(' ');
  return `${arr[1]} ${arr[2]}`;
  
}