import "./ProcessFactory.scss";
import Cylinder from "../../pages/HomePage/components/Cylinder"
import React ,{useState,useEffect} from "react";
// import TablesSelect from './TablesSelect';
import {  Tabs } from "react-tabs";
import Button from "@material-ui/core/Button";
import dataText from './sample.txt';


function ProcessCreating({  setPageTitel }) {

  // setPageTitel('Process Creating');
  fetch(dataText)
  .then(response => response.text())
  .then(data => {
    const allLines = data.split(/\r\n|\n/);

    allLines.forEach((line) => {

        let cleanLine = line.replaceAll('\x00', '');
        cleanLine = cleanLine.replaceAll('\r', '');

        const columnValues = cleanLine.split(/\t/);

    });
  });
  const [dotesValues,setDotsValues] = useState({valA: 0,valB: 0,valC: 0});
  const [tragets,setTargets] = useState({targetA: 0,targetB: 0,targetC: 0});
  const [status,setStatus] = useState({statusA: 0,statusB: 0,statusC: 0});
  const [isCylinderActive,setIsCylinderActive] = useState(false);
  // || tragets.targetB > dotesValues.valB || tragets.targetC > dotesValues.valC

  useEffect(() => {
    if(status.statusA && status.statusB && status.statusC && isCylinderActive){
      toggleCylinder();
    }
  },[status.statusA,status.statusB,status.statusC]);
  useEffect(() => {
    if(isCylinderActive){
      console.log('called')
      const timer = setTimeout(() => handleChangeDotDemo(), 1000)
      return () => clearTimeout(timer)
    }
   }, [dotesValues.valA,dotesValues.valB,dotesValues.valC, isCylinderActive])

   function handleChangeDotDemo(){
    console.log('handleChangeDot a')
    if(tragets.targetA > dotesValues.valA){
      setDotsValues((state)=>({...state, valA: state.valA + 0.5}))
    }
    else{
      setStatus((state)=>({...state,statusA:1}))
    }
    if(tragets.targetB > dotesValues.valB){
      setDotsValues((state)=>({...state, valB: state.valB + 0.5}))
    }
    else{
      setStatus((state)=>({...state,statusB:1}))
    }
    if(tragets.targetC > dotesValues.valC){
      setDotsValues((state)=>({...state, valC: state.valC + 0.5}))
    }
    else{
      setStatus((state)=>({...state,statusC:1}))
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
              <label>A Target</label>
                <div class="inputField">
                  <input
                    type="text"
                    value={tragets.targetA}
                    onChange={(e)=>setTargets((state)=>({...state, targetA:e.target.value}))}
                    disabled={isCylinderActive}
                  />
                </div>
              </div>

              <div className="field">
                <label>B Target</label>
                <div class="inputField">
                  <input
                    type="text"
                    value={tragets.targetB}
                    onChange={(e)=>setTargets((state)=>({...state, targetB:e.target.value}))}
                    disabled={isCylinderActive}
                  />
                </div>
              </div>
              <div className="field">
                <label>C Target</label>
                <div class="inputField">
                  <input
                    type="text"
                    value={tragets.targetC}
                    onChange={(e)=>setTargets((state)=>({...state, targetC:e.target.value}))}
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
