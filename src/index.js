import React from 'react'
import {render} from 'react-dom'

let studentList = [
    {"name": "Amit Gaikwad", "age": 16, "classroom": 10},
    {"name": "Archana Gaikwad", "age": 18, "classroom": 11},
    {"name": "Madan Gaikwad", "age": 30, "classroom": 15},
    {"name": "Abhijit Gaikwad", "age": 35, "classroom": 20}
]

const Student = ({name, age, classroom}) => {
    return (
        <section>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>class: {classroom}</p>
        </section>
    )
}

const School = ({students}) => {
    return (
        <div>
            {students.map(
                (student, i) => <Student key={i} 
                                name={student.name} 
                                age={student.age} 
                                classroom={student.classroom} />
            )
        }
        </div>
    )
}

// const Hello = ({fname, lname, msg}) => {
//     return (
//         <div>
//             <h1>{msg}</h1>
//             <p style={{fontWeight: "bold"}}>Author: {fname} {lname}</p>
//         </div>
//     )
// }

// const Hello = (props) => {
//     return ( 
//         <div>
//             <h1>{props.msg}</h1>
//             <p style={{fontWeight: "bold"}}>Author: {props.fname} {props.lname}</p>
//         </div>
//     )
// }

// class Hello extends Component {
//     render() {
//         const {fname, lname, msg} = this.props;
//         return (
//             <div>
//                 <h1>{msg}</h1>
//                 <p style={{fontWeight: "bold"}}>Author: {fname} {lname}</p>
//             </div>
//         )
//     }
// }

render(<School students={studentList}/>, document.getElementById('root'))