import "./ProcessFactory.scss";
import Cylinder from "../../pages/HomePage/components/Cylinder"
import React ,{useState,useEffect} from "react";
// import TablesSelect from './TablesSelect';
import {  Tabs } from "react-tabs";
import Button from "@material-ui/core/Button";
import dataTxt from './sample.txt';


function ProcessCreating({  setPageTitel }) {

  setPageTitel('Process Creating');
  const [dotesValues,setDotsValues] = useState({valA: 0,valB: 0,valC: 0});
  const [tragets,setTargets] = useState({targetA: 0,targetB: 0,targetC: 0});
  const [status,setStatus] = useState({statusA: 0,statusB: 0,statusC: 0});
  const [data,setSdata] = useState();
  const [counter,setCounter] = useState(1);
  const [isCylinderActive,setIsCylinderActive] = useState(false);
  // || tragets.targetB > dotesValues.valB || tragets.targetC > dotesValues.valC
    useEffect(() => {
        fetch(dataTxt)
        .then(response => response.text())
        .then(data => {
            const allLines = data.split(/\r\n|\n/);
            let rows =[];
            let counter = 0;
            allLines.forEach((line) => {
                let cleanLine = line.replaceAll('\x00', '');
                cleanLine = cleanLine.replaceAll('\r', '');
                const columnValues = cleanLine.split(/\t/);
                rows[counter++]={proba: columnValues[2],probb: columnValues[3] ,probc: columnValues[4]}
                // console.log(columnValues);
            });
            setSdata(rows)
        });
    },[])

    useEffect(() => {
    if(status.statusA && status.statusB && status.statusC && isCylinderActive){
        toggleCylinder();
    }
    },[status.statusA,status.statusB,status.statusC]);

    useEffect(() => {
    if(isCylinderActive){
        const interval = setInterval(() => {
            setCounter((state)=> state + 1)
            getDataRow(counter);
        }, 2000);
        return () => clearInterval(interval);
    }
    }, [isCylinderActive,counter]);


    const getDataRow = (rowNumber)=>{
        console.log(data.length);
        if(rowNumber < 15){
            setDotsValues({valA: data[rowNumber].proba,valB: data[rowNumber].probb,valC: data[rowNumber].probc})
        }
        else{
            setIsCylinderActive(false);
            setStatus({statusA:1,statusB:1,statusC:1});
        }
        
    }

    const toggleCylinder = ()=>{
        setIsCylinderActive((state) => !state);
    }

  return (
    <div className="fullWidth ProcessCreatingPage">
      <div class="innerContainer ">
        <Tabs className="flexed graphGenerator">
          <div class="rightContainer">

            <div className="innerTitle">Process Data</div>

            <div className="allFields fieldsArea flexedWrap basicFields">

              <div className="field">
              <label>A Value</label>
                <div class="inputField">
                  <input
                    type="text"
                    value={dotesValues.valA}
                    disabled={isCylinderActive}
                  />
                </div>
              </div>

              <div className="field">
                <label>B Value</label>
                <div class="inputField">
                  <input
                    type="text"
                    value={dotesValues.valB}
                    disabled={isCylinderActive}
                  />
                </div>
              </div>
              <div className="field">
                <label>C Value</label>
                <div class="inputField">
                  <input
                    type="text"
                    value={dotesValues.valC}
                    disabled={isCylinderActive}
                  />
                </div>
              </div>
              <div className="field buttonContainer">
                <Button
                  variant="contained"
                  className="regBtn blueBtn"
                  size="large"
                  onClick={toggleCylinder}
                >{!isCylinderActive ? 'Start' : 'Stop'}</Button>
              </div>
              {/* <div className="fullWidth"><button className="regBtn blueBtn" onClick={onGraphCrated}>צור גרף</button></div> */}
              {/* <div className="flex"><label>Choose DB: </label><DatabaseSelectField databases = {databases} onSelectDB={onChangeDB}/>  </div>
            <div className="flex"><label>Choose Table:</label> <TablesSelect Tables= {dataTables} onSelectTable={onChangeTable}/> </div> */}
            </div>
            

          </div>
            <div class="leftContainer">
              <Cylinder isActive={isCylinderActive}/>
              <ul class="dots">
                  <li style={{right:'320px',top:'80px'}}>A<div class={`dot ${status.statusA && `active`}`}></div><span>{dotesValues.valA}</span></li>
                  <li style={{right:'180px',top:'80px'}}>C<div class={`dot ${status.statusC && `active`}`}></div><span>{dotesValues.valC}</span></li>
                  <li style={{right:'250px',top:'80px'}}>B<div class={`dot ${status.statusB && `active`}`}></div><span>{dotesValues.valB}</span></li>
              </ul>
            </div>
        </Tabs>
      </div>
    </div>
  );
}
export default ProcessCreating;
