import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import {AiTwotoneEdit} from "react-icons/ai"

export default function 
Edit() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>     
    <AiTwotoneEdit/> 
               <Modal isOpen={modalOpen}>
               <div>
                     <span className="close" onClick={()=>setModalOpen(false)}>x</span>
                     <div className="inner">
                       <form>
                          <h1>Edit Todos </h1><br/>
                          <label>To Do</label>
                          <textarea className="todo-content"/>
                          <label>Status</label><br/>
                          <input type="text" className="email" defaultValue="" /><br/>
                          <button>Edit</button>
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


