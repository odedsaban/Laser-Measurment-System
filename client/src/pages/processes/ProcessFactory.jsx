import React, { useState } from "react";
import ProcessCreating from "./ProcessCreatingData";

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
  const [isProcessSelected, setIsProcessSelected] = useState(false);
  const [validProcessInfo, setValidProcessInfo] = useState(false);
  const [isValidTableInfo, setIsValidTableInfo] = useState(false);
  console.log('isValidTableInfo ' + isValidTableInfo);
  console.log('validProcessInfo ' + validProcessInfo);
  console.log('isProcessSelected ' + isProcessSelected);

  return (
    <div className="whiteBlock fullWidth basicTables usersDataPage">
      <div className="top">
        {pageTitel}
      </div>
      <div className="innerContainer basicBlockSpaces">
        {isProcessSelected === false && (
          <ProcessSelection isProcessSelected={isProcessSelected} setIsProcessSelected={setIsProcessSelected} setPageTitel={setPageTitel}/>
        )}
        {!validProcessInfo && (
          <ProcessInfo
            setDbInfo={setDbInfo}
            dbInfo={dbInfo}
            isProcessSelected={isProcessSelected}
            validProcessInfo={validProcessInfo}
            setValidProcessInfo={setValidProcessInfo}
            setPageTitel={setPageTitel}
          />
        )}

        {validProcessInfo === true && <ProcessCreating dbInfo={dbInfo} setPageTitel={setPageTitel} />}
      </div>
    </div>
  );
};
