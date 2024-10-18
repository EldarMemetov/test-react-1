import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "./Calendar.module.css";
import clsx from "clsx";
import percentageData from "./persentage.json";

const Calendar = () => {
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const today = new Date();
  const realYear = today.getFullYear();
  const realMonth = today.getMonth();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 0 ? 11 : prev - 1;
      if (prev === 0) setCurrentYear((yearPrev) => yearPrev - 1);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    if (
      currentYear < realYear ||
      (currentYear === realYear && currentMonth < realMonth)
    ) {
      setCurrentMonth((prev) => {
        const newMonth = prev === 11 ? 0 : prev + 1;
        if (prev === 11) setCurrentYear((yearPrev) => yearPrev + 1);
        return newMonth;
      });
    }
  };

  return (
    <>
      <div className={styles.navigation}>
        <h3 className={styles.selectedDay}>Month</h3>
        <div className={styles.monthYear}>
          <button className={styles.prevButton} onClick={handlePrevMonth}>
            <IoIosArrowBack />
          </button>
          <p className={styles.month}>
            {new Date(currentYear, currentMonth).toLocaleString("en-US", {
              month: "long",
            })}
          </p>
          <p className={styles.year}>{currentYear}</p>
          {currentYear < realYear ||
          (currentYear === realYear && currentMonth < realMonth) ? (
            <button className={styles.nextButton} onClick={handleNextMonth}>
              <IoIosArrowForward />
            </button>
          ) : (
            <div style={{ width: "14px" }}></div>
          )}
        </div>
      </div>

      <div className={styles.calendarContainer}>
        <div className={styles.containerDay}>
          <ul className={styles.daysList}>
            {daysArray.map((day) => {
              const percentage =
                percentageData.find((item) => item.id === day)?.percentage || 0;
              const circleClass = clsx(styles.dayItem, {
                [styles.lowPercentage]: percentage > 0 && percentage < 100,
                [styles.fullPercentage]: percentage >= 100,
                [styles.zeroPercentage]: percentage === 0,
              });
              return (
                <li key={day} className={styles.dayWrapper}>
                  <div className={circleClass}>
                    <p>{day}</p>
                  </div>
                  <p className={styles.percentageText}>{percentage}%</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Calendar;
