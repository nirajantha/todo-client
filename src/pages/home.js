import React from 'react'
import Edit from '../mycomponents/Edit';
import Create from '../mycomponents/create';
import {FaEye} from "react-icons/fa"
import {AiFillDelete} from "react-icons/ai"
function Home(){
    return(
        <div className="home">
            <h1>Dashboard</h1>
            <Create/>
            <table className="style-table">
                <thead>
                    <tr>
                        <th className="id">id</th>
                        <th className="todo">todo</th>
                        <th className="status">status</th>
                        <th className="change">change</th>
                    </tr>
                    <tr>
                        <td className="id">1</td>
                        <td className="todo">cooking</td>
                        <td className="status"><FaEye/></td>
                        <td className="change"><Edit/>&nbsp;&nbsp;&nbsp;&nbsp;<AiFillDelete/></td>
                    </tr>
                </thead>
            </table>
        </div>
        
    );
}
export default Home