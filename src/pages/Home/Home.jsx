// import "../Modal/Modal.scss";
import "./Home.scss";
// import "../../styles/partials/_transitions.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import HeaderArrow from "../../assets/icons/chevron_right-24px.svg";
import Dashboard from "../../components/Dashboard/Dashboard";

export default function Home() {
  const [warehouse, setWarehouse] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showWarehouseModal, setShowWarehouseModal] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [passedInfo, setPassedInfo] = useState({});

  // useEffect(() => {
  //   const fetchWarehouseData = async () => {
  //     try {
  //       // const getWarehouse = await axios.get(
  //       //   "http://localhost:5050/api/warehouses"
  //       // );
  //       // setWarehouse(getWarehouse.data);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };
  //   fetchWarehouseData();
  // }, [showModal]);

  const deleteHandler = () => {
    setShowModal(true);
    setShowWarehouseModal(true);
    // setPassedInfo({ id: id, name: name });
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        showWarehouseModal={showWarehouseModal}
        setShowWarehouseModal={setShowWarehouseModal}
        passedInfo={passedInfo}
      />
      <Dashboard />
    </>
  );
}
