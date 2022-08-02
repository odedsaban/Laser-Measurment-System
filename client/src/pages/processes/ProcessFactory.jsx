import React, { useState } from "react";
import ProcessCreating from "./ProcessCreatingData";
import ProcessCreatingv2 from "./ProcessCreating";

//import components
import { ProcessSelection } from "./ProcessesComponents/ProcessSelection";
import { ProcessInfo } from "./ProcessesComponents/ProcessInfo";

const navigationText = [
  {
    text: "Processes",
    link: "/",
  },
  {
    text: "Process Creation",
    link: "",
  },  
];
export const ProcessFactory = ({setNavigationText}) => {
  setNavigationText(navigationText);
  const [pageTitel, setPageTitel] = useState();
  const [dbInfo, setDbInfo] = useState({
    dbConfig: {},
    tableInfo: { tableName: "", columnNameInt: "", columnNameString: "" },
  });
  const [selectedProcess, setSelectedProcess] = useState(false);
  const [validProcessInfo, setValidProcessInfo] = useState(false);
  const [isValidTableInfo, setIsValidTableInfo] = useState(false);
console.log(selectedProcess);
const getProcess =() => {
  switch(selectedProcess){
    case 1: return <ProcessCreating setPageTitel={setPageTitel}/>
    default: return <ProcessCreatingv2 setPageTitel={setPageTitel}/>
  }
}
  return (
    <div className="whiteBlock fullWidth basicTables usersDataPage">
      <div className="top">
        {pageTitel}
      </div>
      <div className="innerContainer basicBlockSpaces">
        {selectedProcess === false && (
          <ProcessSelection selectedProcess={selectedProcess} setSelectedProcess={setSelectedProcess} setPageTitel={setPageTitel}/>
        )}
        {!validProcessInfo && (
          <ProcessInfo
            setDbInfo={setDbInfo}
            dbInfo={dbInfo}
            selectedProcess={selectedProcess}
            validProcessInfo={validProcessInfo}
            setValidProcessInfo={setValidProcessInfo}
            setPageTitel={setPageTitel}
          />
        )}

        {validProcessInfo === true && getProcess()}
      </div>
    </div>
  );
};
