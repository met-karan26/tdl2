/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function app() {
    
    const[item,setItem]= useState("");
    const[Values,setList]=useState([]);
    const[index,setIndex]=useState("");
    const[toggle,setToggle]=useState(false);

    function handelChange(event){
        const value=event.target.value;
        console.log(value);
        setItem(value);
    }
//function to add an element.
    function addItem(){
        if(!item){
        alert("Plz. fill the data");}
        else if(item && toggle){
setList(
    Values.map((curElem)=>{
        if(curElem.id===index){
            return{...curElem,name:item};
        }
        return curElem;
    }
));
setItem("");
setIndex(null);
setToggle(false);
        }
        else{

            //To generate a unique id for each element.
            const myNewInputData={
                id:new Date().getTime().toString(),
                name:item
            };
            //<---------This block ends here--------->
        setList(prevItem=>{
            return [...prevItem,myNewInputData];
        });
        setItem(" ");
    }}
//edit function property still left.
function editItem(ide){
const elem_tobeEdited=Values.find((curElem)=>{
    return curElem.id===ide;
});
setItem(elem_tobeEdited.name);
setIndex(ide);
setToggle(true);
}
//local storage has not been added yet.
    function deleteItem(ide){
        const updated=Values.filter((curElem)=>{
            return curElem.id !== ide;
    });
setList(updated);};

    function clearList(){
        setList([]);
    }


    return <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                <img src="https://raw.githubusercontent.com/thapatechnical/reactjsByThapaTechnical/fdfcb12eac37b74d060e344e977df5749a939200/public/images/todo.svg" alt="pic"></img>
                <figcaption>Add your list here</figcaption>
                </figure>

                <div className="addItems">
                    <input onChange={handelChange} value={item} type="text" placeholder="✍ Add items"></input>
                    {toggle? <i className="far fa-edit" onClick={addItem}></i>:<i className="fa fa-plus add-btn" onClick={addItem}></i>}
                    
                </div>
                <div className="showItems">
                  {Values.map((curElem)=> 
                  <div className="eachItem" key={curElem.id}>
                    <h3>{curElem.name}</h3>
                        <div className="todo-btn">
                        <i className="far fa-edit" onClick={()=>editItem(curElem.id)}></i>
                        <i className="far fa-trash-alt" onClick={()=>deleteItem(curElem.id)}></i>
                        </div>
                    </div>
                    )}
                </div>
                <div onClick={clearList} className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" ><span>CheckList</span></button></div></div></div>
    </>
}

export default app;