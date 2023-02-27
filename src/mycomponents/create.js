import React, {useState} from 'react'
import {Modal} from 'reactstrap'

export default function Create() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
             <div style={{alignItems:"right",marginRight:100,float:"right",marginBottom:10}}>
                   <button onClick={()=>setModalOpen(true)}>Create</button>
              </div>
               
               <Modal isOpen={modalOpen}>
               <div>
                     <span className="close" onClick={()=>setModalOpen(false)}>x</span>
                     <div className="inner">
                       <form>
                          <h1>Create Todos </h1><br/>
                          <label>To Do</label>
                          <textarea className="todo-content"/>
                          <label>Status</label><br/>
                          <input type="text" className="email" defaultValue="" /><br/>
                          <button>Create</button>
                       </form>
                     </div>
                   </div>
                   </Modal>
               </div>   
  )
}












  //   <>
  //   <div style={{}}></div><button onClick={()=>setModalOpen(true)}>Create</button>
  //    <Modal isOpen={modalOpen}>
  //           <div>
  //           <span className="close" onClick={()=>setModalOpen(false)}>X</span>
  //           </div>
  //    </Modal>
  //       <span className="close">X</span>
  //       <div className="inner">
  //           <form>
  //               <label>Todo</label>
  //               <textarea cols="30" rows="3" className="todo-content">Todo content</textarea><br></br>
  //               <label>status</label>
  //               <input type="text" className="email" defaultValue="" /><br></br>
  //               <button>create</button>
  //           </form>
  //       </div>
  //  </>


