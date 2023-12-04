import { Component } from "react";
import "./index.css"
import { Button, Modal } from "react-bootstrap";

class ModalDetails extends Component {
  state = {
    active: false,
    phNum: "",
    email: "",
    qualification: '',
    level: "",
  }

  onChangePhoneNum = e => {
    this.setState({phNum: e.target.value})
  }

  onChangeEmail = e => {
    this.setState({email: e.target.value})
  }

  onChangeQualification = e => {
    this.setState({qualification: e.target.value})
  }

  onChangeLevel = e => {
    this.setState({Level: e.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      active: !prevState.active,
      phNum: "",
      email: "",
      qualification: "",
      level: "",
    }))
  }

  render() {
    const {active, phNum, email, qualification, level} = this.state
    console.log(active)
    return (
      <>
      <div className="form-container">
        <form className="form">
          <h4 className="form-heading">
            Aspiring to be an ACCA?Get in touch with us!
          </h4>
          <input type="text" placeholder="Phone Number" className="input" value={phNum} onChange={this.onChangePhoneNum} />
          <input type="text" placeholder="Email Address" className="input" value={email} onChange={this.onChangeEmail} />
          <select
                id="Qualification"
                name="Qualification"
                placeholder="Current Qualification"
                className="select-input"
                onChange={this.onChangeQualification}
                value={qualification}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="options"
                >
                  Current Qualification
                </option>
                <option value="BSC">BSC</option>
                <option value="BCOM">BCOM</option>
                <option value="B.TECH">B.TECH</option>
                <option value="CSE">CSE</option>
                <option value="Other">Other</option>
              </select>
              <select
                id="Qualification-Intrest"
                name="Qualification-Intrest"
                placeholder="Current Qualification"
                className="select-input"
                value={level}
                onChange={this.onChangeLevel}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="options"
                >
                  Intrested In
                </option>
                <option value="ACCA Level I">ACCA Level I</option>
                <option value="ACCA Level II">ACCA Level II</option>
                <option value="ACCA Level III">ACCA Level III </option>
              </select>
        </form>
      </div>
      <>
      <Button className="request-btn" onClick={this.onClickButton} type="button">Request Call Back</Button>
      <div>
      <Modal show={active} className="modal-container">
        <div className="modal">
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">Your Response Has Been Recorded</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">One Of Our Executive Will Reach Out To You</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.onClickButton} className="close-btn">Close</Button>
          </Modal.Footer>
          </div>
      </Modal>
      </div>
      </>
      </>
    );
  }
}

export default ModalDetails;
