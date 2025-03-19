import React from 'react'
import Admin from "./Admin";
function Dashboard(props) {
  return (
    <div>
      <header>
        {
        props.role === "Admin" ? <Admin/> : null
        }
        </header>
        </div>

  );
}


export default Dashboard