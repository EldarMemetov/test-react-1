import { Scrollbars } from "react-custom-scrollbars-2";
import styles from "./WaterList.module.css";
import waterData from "./WaterData";
import WaterListRow from "../WaterListRow/WaterListRow";
import { FaPlus } from "react-icons/fa";

export default function WaterList() {
  const shouldShowScroll = waterData.length > 3;

  return (
    <div className={styles.listContainer}>
      {shouldShowScroll ? (
        <Scrollbars
          style={{ height: "200px", width: "100%" }}
          renderTrackVertical={(props) => (
            <div
              {...props}
              style={{
                backgroundColor: "#d7e3ff",
                width: "4px",
                right: "2px",
                position: "absolute",
                top: "0px",
                bottom: "0px",
              }}
            />
          )}
          renderThumbVertical={(props) => (
            <div
              {...props}
              style={{
                backgroundColor: "#9ebbff",
                width: "6px",
                borderRadius: "4px",
                marginLeft: "-1px",
              }}
            />
          )}
          autoHide={false}
          thumbMinSize={30}
        >
          <ul className={styles.waterList}>
            {waterData.map((rowData) => (
              <li className={styles.waterItem} key={rowData.id}>
                <WaterListRow rowData={rowData} />
              </li>
            ))}
          </ul>
        </Scrollbars>
      ) : (
        <ul className={styles.waterList}>
          {waterData.map((rowData) => (
            <li className={styles.waterItem} key={rowData.id}>
              <WaterListRow rowData={rowData} />
            </li>
          ))}
        </ul>
      )}

      {waterData.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.buttonContainer}>
            <button className={styles.addButton}>
              <FaPlus />
            </button>
            <span className={styles.addText}>Add water</span>
          </div>
        </div>
      ) : (
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton}>
            <FaPlus />
          </button>
          <span className={styles.addText}>Add water</span>
        </div>
      )}
    </div>
  );
}
