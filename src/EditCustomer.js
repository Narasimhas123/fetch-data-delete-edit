import React from 'react'

function EditCustomer({ editForm, handleCustomerUpdate, handleChange }) {
    let {id, name, email, role} = editForm

// PATCH request; calls handleCustomerUpdate to push changes to the page
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editForm),
        })
            .then(resp => resp.json())
            .then(updatedCustomer => {
                handleCustomerUpdate(updatedCustomer)})
    }

    return (
        <div>
            <h4>Edit Customer</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="name" value={name} onChange={handleChange}/>
                <input type="text" name="email" value={email} onChange={handleChange}/>
                <input type="text" name="role" value={role} onChange={handleChange}/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default EditCustomer