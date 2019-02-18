import React from 'react';
import Mobilesigninup from '../component/Mobilesigninup'
import '../css/register.css'
import { Row, Col } from "antd"
import swal from 'sweetalert2';
export default class register extends React.Component {
	constructor() {
		super();
		this.state = {
			
			

			username: "",
			email: "",
			Password: "",
			ConfirmPassword: "",

			usernameVisibility: "none",
			usernameErrorMessage: "You can't leave this empty.",
			Emailvisibility: 'none',
			EmailerrorMessage: "You can't leave this empty.",

			PasswordVisibility: 'none',
			PassworderrorMessage: "You can't leave this empty.",
			ConfirmPasswordVisibility: 'none',
			ConfirmPassworderrorMessage: "You can't leave this empty.",
		};
	}


	
	verifyEmailhandler = (e) => {
		this.setState({email: e.target.value, Emailvisibility: "block" })

		let emailregix = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		if (!emailregix.test(e.target.value)) {
			this.setState({ EmailerrorMessage: "Enter valid email address" })
		}
		else{
			this.setState({Emailvisibility:'none'})
		}
	
	}

	usernameHandler = (e) => {
		this.setState({username: e.target.value, usernameVisibility: "block",})
		if(e.target.value==="")
		{
			this.setState({usernameErrorMessage:"Feild can not be empty"})
		}
		else{
			this.setState({usernameVisibility:"none"})
		}
		
	}
	signupHandler = () => {
	alert("You have register succesfully")
		

	}
	passwordhandler = (e) => {
		this.setState({Password: e.target.value, PasswordVisibility: "block",})

		if (e.target.value === "") {
			this.setState({ PassworderrorMessage: "Password can not be empty" })
		}
		else if (e.target.value.length < 6) {
			this.setState({ PassworderrorMessage: "Password Must be of more than 6 digits !" })
		}
		else if (e.target.value.length > 15) {
			this.setState({ PassworderrorMessage: "Password maximum length is 15 digit" })
		}
		else if (e.target.value.length > 6 && e.target.value.length < 16) {
			this.setState({ PasswordVisibility: "none" })
		}
	}
	confermpasswordHandler = (e) => {
		this.setState({  ConfirmPassword: e.target.value, ConfirmPasswordVisibility: 'block' })
		if (e.target.value === "") {
			this.setState({ ConfirmPassworderrorMessage: "Password can not be empty" })
		}
		else if (e.target.value !== this.state.Password) {
			this.setState({ ConfirmPassworderrorMessage: "Sorry Password does not match!" })
		}
		else if (e.target.value === this.state.Password) {
			this.setState({ ConfirmPasswordVisibility: "none" })
		}
	}
	render() {
		return (
			<div>
				<div className="container backgroundiv">
					<div>
						
						<div>

							<div className="MainInputDom">
								<div><Mobilesigninup background2="#23673e" color2="white" /></div>
								<div style={{ padding: 10, background: "#423e3e" }}>


									<div>
										<Row>
											<Col lg={{ span: 24 }}>
												<div>
													<input className="inputfield-email" type="text" placeholder="User name" value={this.state.username}
														onKeyPress={(e) => { if (e.charCode == 13) (this.signupHandler()) }}
														onChange={this.usernameHandler}
													/>


													<span style={{ display: this.state.usernameVisibility, color: "red", marginLeft: 10 }}>{this.state.usernameErrorMessage}</span>
												</div>
											</Col>
										</Row>
									</div>

									<div>
										<Row>
											<Col lg={{ span: 24 }}>
												<div>
													<input className="inputfield-email" type="text" placeholder="Email"
														onKeyPress={(e) => { if (e.charCode == 13) (this.signupHandler()) }}
														onChange={this.verifyEmailhandler}
													/>
													

													<span style={{ display: this.state.Emailvisibility, color: "red", marginLeft: 10 }}>{this.state.EmailerrorMessage}</span>
												</div>


											</Col>
										</Row>
									</div>


									<div>
										<Row>
											<Col lg={{ span: 12 }}>
												<div>
													<input style={{ width: "95%", margin: 10 }} className="inputfield" type="password" placeholder="Password" value={this.state.Password}
														onKeyPress={(e) => { if (e.charCode == 13) (this.signupHandler()) }}
														onChange={this.passwordhandler}
													/>
													<span style={{ display: this.state.PasswordVisibility, color: "red", marginLeft: 10 }}>{this.state.PassworderrorMessage}</span>
												</div>
											</Col>
											<Col lg={{ span: 12 }}>
												<input style={{ width: "95%", margin: 10 }} className="inputfield" type="password" placeholder="Confirm Password" value={this.state.ConfirmPassword}
													onKeyPress={(e) => { if (e.charCode == 13) (this.signupHandler()) }}
													onChange={this.confermpasswordHandler}
												/>
												<p style={{ display: this.state.ConfirmPasswordVisibility }}>{this.state.ConfirmPassworderrorMessage}</p>
											</Col>
										</Row>
									</div>


								</div>

							
								<div className="registerbtn">
									<button onClick={this.signupHandler} >Register</button>
								</div>
							</div>
						</div>



					</div>
				</div>
			</div>
		);
	}
}