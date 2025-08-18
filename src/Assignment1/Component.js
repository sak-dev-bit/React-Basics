import './ComponentCss.css';


function FirstComponent(){

    return (
        <div>
            <p>
                DATA OF STUDENT FROM MCA
            </p>
            <table>
                    <th> Roll No</th>
                    <th>Student Name</th>
                    <th>Student Address</th>
                    <th>Student Subject</th>
             
                <tr>
                    <td>201</td>
                    <td>Rahul Deshmukh</td>
                    <td>Pune</td>
                    <td>AWS</td>
                </tr>
                <tr>
                    <td>202</td>
                    <td>Priya Patil</td>
                    <td>Mumbai</td>
                    <td>DevOps</td>
                </tr>
                <tr>
                    <td>203</td>
                    <td>Swapnil Joshi</td>
                    <td>Nashik</td>
                    <td>React</td>
                </tr>
                <tr>
                    <td>204</td>
                    <td>Neha Kulkarni</td>
                    <td>Kolhapur</td>
                    <td>Mongo</td>
                </tr>
                <tr>
                    <td>205</td>
                    <td>Ajay Shinde</td>
                    <td>Aurangabad</td>
                    <td>CPP</td>
                </tr>
            </table>
        </div>
    )
}
export default FirstComponent;