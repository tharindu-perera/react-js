import React, {Component} from 'react'

const TableData = propsww => {
    return (
        <table><tbody>{propsww.datetemp}</tbody></table>
)}



class Table extends Component{
    render(){

       let datetemp= this.props.data3.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                    </tr>
                )
            })
        return (
            <TableData datetemp={datetemp} />
        )
    }
}

export default Table