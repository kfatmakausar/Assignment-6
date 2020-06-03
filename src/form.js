import React, {Component} from "react";
import "./form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            tempFirst: "",
            tempLast: "",
            isClicked: false,
          };
          this.handleEdit = this.handleEdit.bind(this);
          this.handleCancel = this.handleCancel.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.handleSave = this.handleSave.bind(this);
        }  

        handleSave(e){
          this.setState({
            firstName: this.state.tempFirst,
            lastName: this.state.tempLast,
            isClicked: false,
          });
        }

        handleEdit(e) {
          this.setState({
            isClicked: true,
          });
        }    

        handleCancel(e) {
          this.setState({
            isClicked: false,
          }); 
        }

        handleChange(e) {
          this.setState({
            [e.target.name]: e.target.value,
          });
        }


        render() {
          return this.state.isClicked ? 
            <div>
              <div>
                <input 
                  type="text" 
                  name="tempFirst"
                  defaultValue={this.state.firstName} 
                  onChange={(e) => this.handleChange(e)}>
                </input>
              </div> 
              <div>
                <input 
                  type="text" 
                  name="tempLast"
                  defaultValue={this.state.lastName} 
                  onChange={(e) => this.handleChange(e)}>
                </input>
              </div>

              <button onClick={this.handleCancel}>Cancel</button>
              <button onClick={this.handleSave}>Save</button>
            </div> :
            <div>
              <div>
                <p> Firstname: {this.state.firstName}</p>
              </div>
              <div>
                <p> Lastname: {this.state.lastName}</p>
              </div>

              <button onClick={this.handleEdit}>Edit</button>
            </div>
        }
      }
      export default Form;