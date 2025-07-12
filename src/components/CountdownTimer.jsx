import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { FaRetweet } from "react-icons/fa";

export default function CountdownTimer({ start }) {
  const [count, setCount] = useState(start);
  const intervalRef = useRef(null);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, [start]);

  const handleReset = () => {
    setCount(start);
    startTimer();
  };

  return (
    <div className="countdown-timer">
      {count > 0 ? (
        <p>Remaining Time: {count} s</p>
      ) : (
        <p>Time out</p>
      )}

      {count === 0 && (
        <button className="reset-button" onClick={handleReset}><FaRetweet  /></button>
      )}
    </div>
  );
}

CountdownTimer.propTypes = {
  start: PropTypes.number.isRequired,
};
