import React, { useEffect, useState } from 'react'
import passa from "./sangamlogo.png"

const getlocalitem=()=>{
    let list=localStorage.getItem('lists');

    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}

const App = () => {

     const[item,upitem]=useState();
     const[arritem,uparritem]=useState(getlocalitem());

    const additem=(e)=>{
        e.preventDefault();
        if(!item){

        }else{
         uparritem([...arritem,item]);
         upitem('');
        }
    }

    const deleteitem=(id)=>{ 
            const updata=arritem.filter((elem,ind)=>{
                return ind!==id;
                
            })
            uparritem(updata);
    }

    const removeAll=()=>{
        uparritem([]);
    }

    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(arritem))
    }, [arritem]);




    return (
        <>
          <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={passa} alt="passalogo" />    
                    <figcaption>Todo List 📓</figcaption>               
                </figure>

                <div className="addItems">
                    <form onSubmit={additem}>
                    <input type="text" placeholder=" ✍️ Add item " value={item} onChange={(e)=>upitem(e.target.value)}/>
            
                    <i className="fa fa-plus-circle add-btn" title="Add item" onClick={additem}></i>
                
                    </form>
                </div>

                <div className="showItems">
                    {
                        arritem.map((elem,ind)=>{
                            return(
                                <div className="eachItem" key={ind}>
                                <h3>{elem}</h3>
                                <i className="fa fa-trash add-btn"title="delete item" onClick={()=> deleteitem(ind)}> </i>
                            </div>
                            )
                        })
                    }
                    
                  
                </div>

                <div className="showItem">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
                </div>

            </div>  
          </div>  
        </>
    )
}

export default App
