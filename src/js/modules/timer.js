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

            const сountdown = () => {
                  const total = target - new Date() - timeZoneDifference,
                        days = Math.floor(total / (1000 * 60 * 60 * 24)),
                        hours = Math.floor((total / (1000 * 60 * 60)) % 24),
                        minutes = Math.floor((total / (1000 * 60)) % 60),
                        seconds = Math.floor((total / 1000) % 60);

                  day.textContent = numberCheck(days);
                  hour.textContent = numberCheck(hours);
                  minute.textContent = numberCheck(minutes);
                  second.textContent = numberCheck(seconds);
            };  
            сountdown();

            setInterval(сountdown, 1000);

      });

};

export default timer;