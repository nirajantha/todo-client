import React from "react";
function Signup(){
    return(

      <div className="signup">
      <h1><b>Sign Up Here!</b></h1><br></br>
         <form>
             <input type="text" className="form-control" placeholder="email"></input><br></br>
             <input type="password" className="form-control" placeholder="Enter password"></input>
             <br></br>
            <button type="submit" className="btnsubmit">signup</button>
         </form>
      </div>
    

    );
}
export default Signup