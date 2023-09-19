import React, { useState } from "react";

function DataInput({ addDataPoint }) {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [timeStamp, setTimeStamp] = useState("");

  const openModel = () => {
    setModelIsOpen(true);
  };
  const handleSubmit = () => {
    if (price && timeStamp) {
      const newDataPoint = {
        price: parseFloat(price),
        timeStamp: new Date(timeStamp).getTime(),
      };
      addDataPoint(newDataPoint);
      closeModal();
    }
  };
  const closeModal = () => {
    setModelIsOpen(false);
    setPrice("");
    setTimeStamp("");
  };
  return (
    <div className="data_input">
      <button onClick={openModel}>Add Data</button>
      {modelIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Data</h2>
            <div>
              <label>
                Price:
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <label>
                TimeStamp:
                <input
                  type="datetime-local"
                  value={timeStamp}
                  onChange={(e) => setTimeStamp(e.target.value)}
                />
              </label>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={closeModal}>Cencel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataInput;
