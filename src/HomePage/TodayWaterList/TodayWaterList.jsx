import Calendar from "../Calendar/Calendar";
import WaterList from "../WaterList/WaterList";
import styles from "./TodayWaterList.module.css";

const TodayWaterList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.todayText}>Today</h2>
      <div className={styles.waterList}>
        <WaterList />
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </div>
  );
};

export default TodayWaterList;
