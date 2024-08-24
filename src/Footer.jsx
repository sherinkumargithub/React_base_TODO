import React from 'react'


// reciving the props
const Footer = ({length}) => {
    const year = new Date();
  return (
    // <footer>Copyright &copy; {year.getFullYear()}</footer>
    <footer>
      {length} list of {length === 1 ? "activity" : "activities"}
    </footer>
  )
}

export default Footer  