import React, { useState } from "react";

export const ProcessSelection = ({ setIsProcessSelected , setPageTitel }) => {
  // setPageTitel('בחירת מסד נתונים');
  return (
    <div className="dbChoseContainer">
        <h1>Select Process</h1>
        <ul className="dbTypesList fieldsArea">
          <li onClick={() => setIsProcessSelected(true)}>
            <img src="/images/cylinder-3.jpeg" />
            <span className="title">Process type 1</span>
          </li>
          <li onClick={() => setIsProcessSelected(true)}>
            <img src="/images/cylinder-2.jpeg" />
            <span className="title">Process type 2</span>
          </li>
          <li onClick={() => setIsProcessSelected(true)}>
            <img src="/images/cylinder-3.jpeg" />
            <span className="title">Process type 3</span>
          </li>

        </ul>
    </div>
  );
};
