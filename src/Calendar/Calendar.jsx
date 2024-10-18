import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Импорт иконок стрелок
import styles from "./Calendar.module.css";
import WaterList from "./WaterList/WaterList";

// Вспомогательная функция для получения количества дней в месяце
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// Функция для получения полного названия дня недели по дате
const getFullDayOfWeek = (year, month, day) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[new Date(year, month, day).getDay()];
};

const Calendar = () => {
  // Инициализируем состояние с текущим годом, месяцем и выбранным днем
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState(null); // Для хранения выбранного дня

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  // Генерация массива дней месяца
  const daysArray = [];
  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(day);
  }

  // Функции для переключения месяца
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 0 ? 11 : prev - 1;
      if (prev === 0) {
        setCurrentYear((yearPrev) => yearPrev - 1);
      }
      return newMonth;
    });
    setSelectedDay(null); // Сбрасываем выбранный день при смене месяца
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 11 ? 0 : prev + 1;
      if (prev === 11) {
        setCurrentYear((yearPrev) => yearPrev + 1);
      }
      return newMonth;
    });
    setSelectedDay(null); // Сбрасываем выбранный день при смене месяца
  };

  // Функция для выбора дня
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h2>Today</h2>
        <WaterList />
      </div>
      {/* Объединяем отображение выбранного дня, месяца и года */}
      <div className={styles.navigation}>
        <div className={styles.selectedDay}>
          {selectedDay &&
            getFullDayOfWeek(currentYear, currentMonth, selectedDay)}
        </div>

        <div className={styles.monthYear}>
          <button className={styles.prevButton} onClick={handlePrevMonth}>
            <FaArrowLeft />
          </button>
          <p className={styles.month}>
            {new Date(currentYear, currentMonth).toLocaleString("en-US", {
              month: "long",
            })}
          </p>
          <p className={styles.year}>{currentYear}</p>
          <button className={styles.nextButton} onClick={handleNextMonth}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Отображение дней месяца в виде списка */}
      <ul className={styles.daysList}>
        {daysArray.map((day) => (
          <li
            key={day}
            className={styles.dayItem}
            onClick={() => handleDayClick(day)} // Выбор дня при клике
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;

// import { useState } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import styles from "./Calendar.module.css";
// import {
//   getDaysInMonth,
//   getFullDayOfWeek,
// } from "../CalendarUtils/CalendarUtils";

// const Calendar = () => {
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [selectedDay, setSelectedDay] = useState(null);

//   const daysInMonth = getDaysInMonth(currentYear, currentMonth);
//   const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//   const handlePrevMonth = () => {
//     setCurrentMonth((prev) => {
//       const newMonth = prev === 0 ? 11 : prev - 1;
//       if (prev === 0) setCurrentYear((yearPrev) => yearPrev - 1);
//       return newMonth;
//     });
//     setSelectedDay(null);
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth((prev) => {
//       const newMonth = prev === 11 ? 0 : prev + 1;
//       if (prev === 11) setCurrentYear((yearPrev) => yearPrev + 1);
//       return newMonth;
//     });
//     setSelectedDay(null);
//   };

//   const handleDayClick = (day) => {
//     setSelectedDay(day);
//   };

//   return (
//     <>
//       {/* Вынесенные элементы: День недели, Месяц и Год */}
//       <div className={styles.navigation}>
//         <div className={styles.selectedDay}>
//           {selectedDay &&
//             getFullDayOfWeek(currentYear, currentMonth, selectedDay)}
//         </div>

//         <div className={styles.monthYear}>
//           <button className={styles.prevButton} onClick={handlePrevMonth}>
//             <IoIosArrowBack />
//           </button>
//           <p className={styles.month}>
//             {new Date(currentYear, currentMonth).toLocaleString("en-US", {
//               month: "long",
//             })}
//           </p>
//           <p className={styles.year}>{currentYear}</p>
//           <button className={styles.nextButton} onClick={handleNextMonth}>
//             <IoIosArrowForward />
//           </button>
//         </div>
//       </div>

//       {/* Основной контейнер календаря, содержащий только дни */}
//       <div className={styles.calendarContainer}>
//         <div className={styles.containerDay}>
//           <ul className={styles.daysList}>
//             {daysArray.map((day) => (
//               <li
//                 key={day}
//                 className={styles.dayItem}
//                 onClick={() => handleDayClick(day)}
//               >
//                 {day}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Calendar;
