import React, { useState } from "react";

export const ProcessSelection = ({ setSelectedProcess , setPageTitel }) => {
  // setPageTitel('בחירת מסד נתונים');
  return (
    <div className="dbChoseContainer">
        <h1>Select Process</h1>
        <ul className="dbTypesList fieldsArea">
          <li onClick={() => setSelectedProcess(1)}>
            <img src="/images/cylinder-1.jpeg" />
            <span className="title">Process type 1</span>
          </li>
          <li onClick={() => setSelectedProcess(2)}>
            <img src="/images/cylinder-2.jpeg" />
            <span className="title">Process type 2</span>
          </li>
          <li onClick={() => setSelectedProcess(3)}>
            <img src="/images/cylinder-3.jpeg" />
            <span className="title">Process type 3</span>
          </li>

        </ul>
    </div>
  );
};
