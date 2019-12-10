import React from 'react'
import {render} from 'react-dom'

let studentList = [
    {"name": "Amit Gaikwad", "age": 16, "classroom": 10},
    {"name": "Archana Gaikwad", "age": 18, "classroom": 11},
    {"name": "Madan Gaikwad", "age": 30, "classroom": 15},
    {"name": "Abhijit Gaikwad", "age": 35, "classroom": 20}
]

const Student = ({name, age, classroom, graduate}) => {
    return (
        <section>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>class: {classroom}</p>
            <p>Gaduate: {graduate ? 'Yes':'No'}</p>
        </section>
    )
}

const Opening = () => {
    return(
        <div>
            <h1>School is opening soon.</h1>
        </div>
    )}

const Closing = () => <div><h1>School is closing soon.</h1></div>

class School extends React.Component {

    state = { 
        open: true,
        graduate: true,
        opening: true,
        data: [],
        loading: false
     }
    // constructor(props) {
    //     super(props) 
    //     this.state = {
    //         graduate: false,
    //         open: true
    //         }
    //     this.toggleOpenClose = this.toggleOpenClose.bind(this)
    //     }

    componentDidMount() {
        this.setState({loading: true})
        fetch('http://amtg-label-dgtlztn-nd-qa-amtg-label-digitalization-qa.qapps.firmenich.com/status')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
    }

        toggleOpenClose = () =>  {
            this.setState(prevState => ( {
                open: !prevState.open
            }))
        }
    render() {
       const { students } = this.props
        return (
            
            <div>
            {this.state.loading ? 'Loading...' : 
                    <div>
                        {this.state.data.map((status, j) => {
                            return(
                                <div key={j}>
                                    <p>Server Name: {status.lf_server}</p>
                                    {status.lf_svc.map((svc, k) => {
                                        return(
                                            <div key={k}>
                                                <p>Service: {svc.name}</p>
                                                <p>Status: {svc.status = 'running' ? 'Running': 'Stopped'}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                        
                    </div>}
            {this.state.opening ? <Opening/> : <Closing/>}
            <button onClick = { this.toggleOpenClose }>Toggle</button>
            <h1>This school is {this.state.open ? 'open': 'closed'}</h1>
                {students.map(
                    (student, i) => <Student key={i} 
                                    name={student.name} 
                                    age={student.age} 
                                    classroom={student.classroom} 
                                    graduate= {this.state.graduate}
                                    />
                )
            }
            <p>The student is {this.state.graduate ? 'graduate': 'not graduate'}</p>
            </div>
            
        )
    }
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