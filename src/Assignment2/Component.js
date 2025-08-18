import '../Assignment1/ComponentCss.css';


function WithProps(props ){
return (
    <div>
        <h2>Details of the Company Employee</h2>
        <table>
            <tr>
                <th> EmpID</th>
                <th> Name</th>
                <th> City</th>
                <th> Contact Number</th>
                <th> Website</th>
            </tr>
            {
                props.emparr.map(emp=><tr>
                    <td>{emp.empId}</td>
                    <td>{emp.empname}</td>
                    <td>{emp.empcity}</td>
                    <td>{emp.number}</td>
                    <td>{emp.website}</td>
                </tr>
                )
            }

        </table>
    </div>
)
}

export default WithProps;