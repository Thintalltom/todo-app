import React, {useState} from 'react'
import './sidebar.css'
const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)
  return (
    <div className='bgsidebar'>
    
    <div onClick={handleClick}>
    {open ? (
      <p>close</p>
    ): (<p>open</p>)}
    </div>
 

    <ul className={ open ? 'sidebar' : 'nullbar' }>
      <div className='taskbar'>
      <li>
        New task
      </li>
      <li>
        Completed task
      </li>
      <li>
        Incomplete task
      </li>
      </div>
 
    </ul>
    </div>
  )
}

export default Sidebar