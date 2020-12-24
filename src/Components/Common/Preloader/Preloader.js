import fetcher from "../../../img/spinner.gif";
import React from "react";


const Preloader = (props) => {
    return (
        <div>
          <img src={fetcher} alt="spinner"/>
        </div>
    )
}

export default Preloader