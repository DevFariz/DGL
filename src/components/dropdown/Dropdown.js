import './Dropdown.scss'

const Dropdown = ({links, isDropdownOpen}) => {
  return (
    <>
      {isDropdownOpen ? <DropdownList links={links}/> : null}
    </>
          
  )
}

const DropdownList = (links) => {
  <div className="dropdown">
    <ul className="dropdown-menu">
      {links.map((item, i) => {
        return (
          <li className="dropdown-item" key={i}>
            {item}
          </li>)
      })}
    </ul>
  </div>
}

export default Dropdown