import React from 'react'

function Navbar({filterItem,menuList}) {




    
  return (
   <>
         <nav className="navbar">
        <div className="btn-group">

        {
            menuList.map((curElement) => {
                return <button className="btn-group__item" onClick={() => filterItem(curElement)} >{curElement}</button>
            })
        }

          
          {/* <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
          <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
          <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={() => filterItem("sweet")}>Sweets</button> */}
          {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}
        </div>
      </nav>
   </>



    
  )
}

export default Navbar