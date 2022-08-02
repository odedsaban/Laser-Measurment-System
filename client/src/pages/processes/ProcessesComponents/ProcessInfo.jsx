import React, { useState } from "react"
import { useAlert } from "react-alert"

export const ProcessInfo = ({
  selectedProcess,
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
      {selectedProcess && !validProcessInfo ? (
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
              Continue
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};
