import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from "../../../axios";
import { useAlert } from "react-alert"

export const ProcessInfo = ({
  isProcessSelected,
  validProcessInfo,
  setValidProcessInfo,
  setPageTitel
}) => {
  const [shapeInfo, setShapeInfo] = useState({height:0,radius:0});
  setPageTitel("Process Info");

  const [disableBtn, setDisableBtn] = useState(false);
  const alertMessag = useAlert();

  return (
    <div class="allFields flexedWrap basicFields dbConfigFrom">
      {isProcessSelected && !validProcessInfo ? (
        <form action="">
           <div className="field">
            <label>Shape Height:</label>
            <div class="inputField">
              <input
                type="number"
                value={shapeInfo.height}
                onChange={(e) =>
                  setShapeInfo({
                    ...shapeInfo,
                    height: e.target.value,
                  })
                }
              />
            </div>
           </div>
          <div className="field">
          <label>Shape Radius:</label>
            <div class="inputField">
              <input
                type="number"
                value={shapeInfo.radius}
                onChange={(e) =>
                  setShapeInfo({
                    ...shapeInfo,
                    radius: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div class="fullWidth">
            <button className=" regBtn blueBtn" disabled={disableBtn}
              onClick={async (e) => {
                e.preventDefault();
                setDisableBtn(true);
                setValidProcessInfo(true)
              }}
            >
              שלח
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};
