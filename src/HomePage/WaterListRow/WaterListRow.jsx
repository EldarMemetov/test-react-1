import { FaGlassWhiskey, FaEdit, FaTrash } from "react-icons/fa";
import styles from "./WaterListRow.module.css";

export default function WaterListRow({ rowData }) {
  return (
    <div className={styles.listItem}>
      <FaGlassWhiskey className={styles.icon} />
      <p className={styles.volume}>{rowData.volume}ml</p>
      <p className={styles.time}>{rowData.time}</p>
      <FaEdit className={styles.editIcon} />
      <FaTrash className={styles.deleteIcon} />
    </div>
  );
}
