import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
  ...new Set(
    Menu.map((curElement) => {
      return curElement.category;
    })
  ),"All",
]

const Resturant = () => {

  // const myStyle = {color:"red"};

  const [menuData,setMenuData] = useState(Menu)
  const [menuList,setMenuList] = useState(uniqueList);



  const filterItem = (category) =>
  {
    if(category === "All"){
      setMenuData(Menu);
      return
    }
    const update = Menu.filter((curElement) => {
      return curElement.category === category;
      
    });
    setMenuData(update)
     
    
   
  }

  return (
    <>

      <Navbar menuList={menuList} filterItem={filterItem}></Navbar>

      <MenuCard menuData={menuData}></MenuCard>
    </>
  )
}

export default Resturant