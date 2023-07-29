setInterval(() => {
  const date = new Date();
  const hourTime = date.getHours();
  const minTime = date.getMinutes();
  const secTime = date.getSeconds();
  const hrotation = 30 * hourTime + minTime / 2;
  const mrotation = 6 * minTime;
  const srotation = 6 * secTime;
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
