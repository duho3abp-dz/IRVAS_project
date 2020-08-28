'use strict';

const timer = ({
      targetDate, 
      days, 
      hours, 
      minutes, 
      seconds
}) => {

      targetDate.forEach((item, i) => {

            const target = new Date(targetDate[i]),
                  timeZoneDifference = -target.getTimezoneOffset() * 60 * 1000;

            const day = document.querySelector(days[i]),
                  hour = document.querySelector(hours[i]),
                  minute = document.querySelector(minutes[i]),
                  second = document.querySelector(seconds[i]);

            const numberCheck = num => +num < 10 && +num >= 0 ? `0${num}` : num ;

            const updateClock = (d = '00', h = '00', m = '00', s = '00') => {
                  day.textContent = d;
                  hour.textContent = h;
                  minute.textContent = m;
                  second.textContent = s;
            };

            const сountdown = () => {
                  const total = target - new Date() - timeZoneDifference,
                        days = numberCheck(Math.floor(total / (1000 * 60 * 60 * 24))),
                        hours = numberCheck(Math.floor((total / (1000 * 60 * 60)) % 24)),
                        minutes = numberCheck(Math.floor((total / (1000 * 60)) % 60)),
                        seconds = numberCheck(Math.floor((total / 1000) % 60));

                  if (+total <= 0) {
                        updateClock();
                        clearInterval(timerInterval); 
                  }

                  updateClock(days, hours, minutes, seconds);
            };  
            сountdown();

            const timerInterval = setInterval(сountdown, 1000);

      });

};

export default timer;