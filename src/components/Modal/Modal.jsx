import { Link } from "react-router-dom";
import "./Modal.scss";
import React, { useState, useEffect } from "react";

export const Modal = ({
  showModal,
  setShowModal,
  showWarehouseModal,
  showInventoryModal,

  passedInfo,
}) => {
  const showHideClassName = true ? "modal display-block" : "modal display-none";

  const handleCloseModal = () => {
    window.location.reload();
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showWarehouseModal || showInventoryModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showWarehouseModal, showInventoryModal]);

  return (
    <>
      {showWarehouseModal && (
        <div className={showHideClassName}>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <div className="content-cont">
              <button className="close-modal" onClick={handleCloseModal}>
                {/* <img src={closeIcon} /> */}
              </button>

              <div className="modal-text">
                <h2>Set Up Your Return Rules For Products</h2>
                <div className="modaldiv">
                  <h3>Items that meet the following rules will be</h3>
                  <select name="approval" id="appr">
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
                <div className="modaldiv">
                  <h3>Rule name</h3>
                  <input placeholder="E.g. Defective Hoodies Returns"></input>
                </div>
                <div className="modaldiv">
                  <h3>This rule applies to</h3>
                  <select name="category" id="cat">
                    <option value="select">Select a category</option>
                    <option value="php">All products</option>
                    <option value="java">Gym Sweat Hoodies</option>
                    <option value="golang">Running Shoes</option>
                    <option value="python">Waterbottle</option>
                    <option value="c#">Crossover Leggings</option>
                  </select>
                </div>
                <div className="modaldiv">
                  <h3>Return reason</h3>
                  <select name="category" id="cat">
                    <option value="select">Select a return reason</option>
                    <option value="php">Item is damaged</option>
                    <option value="java">Ordered the wrong size</option>
                    <option value="golang">
                      Item does not match the image
                    </option>
                    <option value="python">Other</option>
                  </select>
                </div>
                <div className="modaldiv">
                  <h3>
                    Items was exchanged less than{" "}
                    <select name="approval" id="appr">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>{" "}
                    </select>{" "}
                    times previously
                  </h3>
                </div>
                <div className="modaldiv">
                  <h3 className="modal_add-text">+ Add customize conditions</h3>
                </div>
                <div>
                  <h3>Return Processing</h3>
                  <div className="modaldiv">
                    <input type="checkbox" id="scales" name="scales" />
                    <label for="scales">
                       Require photos for damage verification?
                    </label>
                  </div>
                  <div className="modaldiv">
                    <input type="checkbox" id="scales1" name="scales1" />
                    <label for="scales1">
                       Ask for additional information from the customer?
                    </label>
                  </div>
                </div>
              </div>

              <div className="button-container">
                <button className="delete-button" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button className="delete-button" onClick={handleCloseModal}>
                  Apply</button>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
