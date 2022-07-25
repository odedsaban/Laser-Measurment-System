import "./ProcessFactory.scss";
import {Cylinder} from "../../components/Cylinder/Cylinder"
import React from "react";
// import TablesSelect from './TablesSelect';
import {  Tabs } from "react-tabs";


function ProcessCreating({  setPageTitel }) {

  setPageTitel('Process Creating');


  return (
    <div className="fullWidth ProcessCreatingPage">
      <div class="innerContainer ">
        <Tabs className="flexed graphGenerator">
          <div class="rightContainer">

            <div className="innerTitle">Process Data</div>

            <div className="allFields fieldsArea flexedWrap basicFields">

              <div className="field">
              <label>label label</label>
                <div class="inputField">
                  <input
                    type="text"
                  />
                </div>
              </div>

              <div className="field">
                <label>label label</label>
                <div class="inputField">
                  <input
                    type="text"
                  />
                </div>
              </div>
  
              {/* <div className="fullWidth"><button className="regBtn blueBtn" onClick={onGraphCrated}>צור גרף</button></div> */}
              {/* <div className="flex"><label>Choose DB: </label><DatabaseSelectField databases = {databases} onSelectDB={onChangeDB}/>  </div>
            <div className="flex"><label>Choose Table:</label> <TablesSelect Tables= {dataTables} onSelectTable={onChangeTable}/> </div> */}
            </div>
            

          </div>
            <div class="leftContainer">
            <Cylinder />
            </div>
        </Tabs>
      </div>
    </div>
  );
}
export default ProcessCreating;
