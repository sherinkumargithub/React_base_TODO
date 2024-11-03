// import React from 'react'


// // reciving the props
// const Footer = ({length}) => {
//     const year = new Date();
//   return (
//     // <footer>Copyright &copy; {year.getFullYear()}</footer>
//     <footer>
//       {length} list of {length === 1 ? "activity" : "activities"}
//     </footer>
//   )
// }

// export default Footer  
import React from 'react'

// receiving the props
const Footer = ({ length }) => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year}</p>
            <p>{length} {length === 1 ? "activity" : "activities"} in the list</p>
        </footer>
    )
}

export default Footer;
