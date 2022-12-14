import './SuperRequests.css'

const SuperRequests = () => {
  return (
    <div className="studentList-container">
      <div className="admin-requests">Requests</div>
      <div className="admin-form">
        <div className="tableContainer">
          {' '}
          <table className="tableItem">
            <tr className="tableTr">
              <th></th>
              <th>Name</th>
              <th>Email&nbsp;Id</th>
              <th>Mobile&nbsp;No</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>1</td>
              <td>Smith</td>
              <td>50</td>
              <td>50</td>
              <td className=" btnApprove">
                <button className="acceptBtn accept">Accept</button>
              </td>
              <td className=" btnApprove">
                {' '}
                <button className="acceptBtn reject">Reject</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jackson</td>
              <td>94</td>
              <td>94</td>
              <td className=" btnApprove">
                <button className="acceptBtn accept">Accept</button>
              </td>
              <td className=" btnApprove">
                {' '}
                <button className="acceptBtn reject">Reject</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Johnson</td>
              <td>67</td>
              <td>67</td>
              <td className=" btnApprove">
                <button className="acceptBtn accept">Accept</button>
              </td>
              <td className=" btnApprove">
                {' '}
                <button className="acceptBtn reject">Reject</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SuperRequests
