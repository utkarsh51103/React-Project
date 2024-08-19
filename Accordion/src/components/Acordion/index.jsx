import { useState } from "react"
import data from "../data"
import './style.css'


export default function Accrodion(){

  const [selected, setselected]  = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiples, setmultiple] = useState([]);

    function handlesingleselection(getcurrentId){
        console.log(getcurrentId);
        setselected(getcurrentId === selected ? null : getcurrentId);
    }
    
    function handlemultiselection(getcurrentId){
            let cpyMultiple = [...multiples]
            const findIndex = cpyMultiple.indexOf(getcurrentId)

            console.log(findIndex)
            
            if(findIndex === -1)cpyMultiple.push(getcurrentId)
            else cpyMultiple.splice(findIndex,1)
            setmultiple(cpyMultiple);
    }
  console.log(multiples);
    return(
        <div className="wrapper">
        <button onClick={()=> setenableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordion">
        {
            data && data.length > 0 ? 
            data.map(dataItem=> 
                <div className="item">
                 <div onClick={enableMultiSelection ? 
                    ()=>handlemultiselection(dataItem.id) 
                     : ()=> handlesingleselection(dataItem.id)} className="title" >
                  <h3>{dataItem.Question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection ? multiples.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.Answer}</div> 
                : selected === dataItem.id && (
                    <div className="content">{dataItem.Answer}</div>)
                }
            </div>
            ) : <div>No Data present</div>
        }
        </div> 
        </div>
    )
}