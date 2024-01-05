import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function EditModal({el,exampleModal}) {
    // const data-bs-target = exampleModal

console.log("yes")

  return (
    <div>
         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
          data-bs-whatever="@mdo" style={{width:"71px"}}>Edit</button>
   
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
     aria-hidden="true" style={{display: "none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New message to @getbootstrap</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                <input type="text" className="form-control" id="recipient-name" />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Updated</button>
          </div>
        </div>
      </div>
    </div>
    

    </div>
  )
}

export default EditModal