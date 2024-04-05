import "./Dashboard.scss";
import WordCloud from "../../components/WordCloud/WordCloud";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [showWarehouseModal, setShowWarehouseModal] = useState(false);
  const [passedInfo, setPassedInfo] = useState({});

  const deleteHandler = () => {
    setShowModal(true);
    setShowWarehouseModal(true);

    // setPassedInfo({ id: id, name: name });
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-content-container">
        <h1 className="content-header">Overview</h1>

        <div className="conditions-container">
          <div className="conditions-text">
            <p className="conditions-text__header">Automated Conditions</p>
            <p className="conditions-text__body">Blue Nike Sweatshirt Return</p>
          </div>
          <Button
            text="Add new condition"
            name="conditions-text__button"
            onClick={deleteHandler}
          />
          <Button
            text="View All Conditions"
            name="conditions-text__button"
            onClick={deleteHandler}
          />
        </div>

        <div className="analytics-container">
          <div className="analytics-text">
            <h1 className="analytics-text__header">Analytics</h1>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              showWarehouseModal={showWarehouseModal}
              setShowWarehouseModal={setShowWarehouseModal}
              passedInfo={passedInfo}
            />
            <Button text="See all data" name="analytics-text__button" />
          </div>

          <div className="analytics-body">
            <div className="wordcloud-map">
              <WordCloud />
            </div>
            <div className="analytics-subbody2">
              <div className="return-rate"></div>
              <div className="time-approve"></div>
            </div>
          </div>
        </div>
        {/* <div className="table-container">
          <div className="table-header">
            <p className="table-header__title">Pending Requests</p>
            <Button text="See all requests" name="table-header__button" />
          </div>
          <div className="table">
            <p className="table__text">Return ID</p>
            <p className="table__text">Order ID</p>
            <p className="table__text">Item</p>
            <p className="table__text">Reason</p>
            <p className="table__text">Requested</p>
            <p className="table__text">Quantity</p>
            <p className="table__text">Action</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
