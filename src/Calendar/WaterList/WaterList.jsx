// import { FixedSizeList as List } from "react-window";
// import { FaGlassWhiskey, FaEdit, FaTrash } from "react-icons/fa";
// import styles from "./WaterList.module.css";

// // Данные для списка
// const waterData = [
//   { id: 1, volume: "200ml", time: "14:00" },
//   { id: 2, volume: "200ml", time: "14:00" },
//   { id: 3, volume: "200ml", time: "14:00" },
//   { id: 4, volume: "200ml", time: "14:00" },
//   { id: 5, volume: "200ml", time: "14:00" },
//   { id: 6, volume: "200ml", time: "14:00" },
//   { id: 7, volume: "200ml", time: "14:00" },
//   { id: 8, volume: "200ml", time: "14:00" },
// ];

// // Компонент для отображения каждого элемента списка
// const WaterListRow = ({ index, style }) => {
//   const rowData = waterData[index];
//   return (
//     <div className={styles.listItem} style={style}>
//       <FaGlassWhiskey className={styles.icon} />
//       <span className={styles.volume}>{rowData.volume}</span>
//       <span className={styles.time}>{rowData.time}</span>
//       <FaEdit className={styles.editIcon} />
//       <FaTrash className={styles.deleteIcon} />
//     </div>
//   );
// };

// const WaterList = () => {
//   return (
//     <div className={styles.listContainer}>
//       <List
//         height={200}
//         itemCount={waterData.length}
//         itemSize={50}
//         width="100%"
//       >
//         {WaterListRow}
//       </List>
//     </div>
//   );
// };

// export default WaterList;
