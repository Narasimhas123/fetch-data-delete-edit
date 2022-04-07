import React from 'react'

function Customer({customer, customer:{id, name, email, role}, captureEdit, changeEditState, setCustomers}) {


  const deleteData=()=>{
    
    fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json/${id}`, {
        method: "DELETE",
       
    })
        .then(resp => resp.json())
        .then(updatedCustomer => {
          setCustomers(updatedCustomer)})
  }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td>
                <button
                  onClick={() => {
                    captureEdit(customer);
                    changeEditState(customer)
                  }}
                >
                  Edit
                </button>
                <button onClick={()=>deleteData(customer.id)}>delete</button>
            </td>
        </tr>
    )
}
export default Customer