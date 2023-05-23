import React, { useEffect, useState } from 'react';

const CountDown = ({ targetDate, targetDay, targetHour }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date(targetDate + 'T' + targetHour + ':00:00Z').getTime();

    const calculateCountdown = () => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const calculatedDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const calculatedMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const calculatedSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state with the countdown values
      setDays(calculatedDays);
      setHours(calculatedHours);
      setMinutes(calculatedMinutes);
      setSeconds(calculatedSeconds);
    };

    // Calculate the countdown immediately
    calculateCountdown();

    // Update the countdown every 1 second
    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate, targetHour]);

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-500 text-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-3xl font-semibold mb-4">
            🔥 Only {days} days left until {targetDay} at {targetHour}! 🔥
          </h1>
          <div className="flex justify-center items-center">
            <div className="border border-white rounded-lg p-4 m-2">
              <span className="text-4xl font-bold">{days}</span>
              <span className="text-lg">Days</span>
            </div>
            <div className="border border-white rounded-lg p-4 m-2">
              <span className="text-4xl font-bold">{hours}</span>
              <span className="text-lg">Hours</span>
            </div>
            <div className="border border-white rounded-lg p-4 m-2">
              <span className="text-4xl font-bold">{minutes}</span>
              <span className="text-lg">Minutes</span>
            </div>
            <div className="border border-white rounded-lg p-4 m-2">
              <span className="text-4xl font-bold">{seconds}</span>
              <span className="text-lg">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
