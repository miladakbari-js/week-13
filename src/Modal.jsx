import "./Modal.css"
function Modal() {
  return (
    <div className="container-modal">
        <div className="modal-head">
            {/* <button>X</button> */}
            <div className="round" style={{backgroundColor:"#eb3434"}}></div>
            <div className="round" style={{backgroundColor:"#dddddf"}}></div>
            <div className="round" style={{backgroundColor:"#66af66"}}></div>
        </div>
        <div className="modal-body">Please Select a Tab</div>
    </div>
  )
}

export default Modal