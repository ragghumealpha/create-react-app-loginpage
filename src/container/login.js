import React from 'react';
import '../css/login.css'
import Mobilesigninup from '../component/Mobilesigninup'
// import Background from '../src/backvg.jpg'
import { Row, Col } from 'antd'


class login extends React.Component {
	constructor() {
		super();
		this.state = {
			
			username: "",
			Emailvisibility: 'none',
			EmailerrorMessage: "You can't leave this empty.",
			Password: "",
			PasswordVisibility: 'hidden',
			PassworderrorMessage: "You can't leave this empty.",
			text: "",
			
		};
	
	}






	loginHandler = () => {

		alert("login succesfully")
	}
	render() {
		return (
			<div>
				{/* <Page loader={"rotate-spin"} color={"blue"} size={20}> */}
					<div>
						<div className="container backgroundiv">
							<div>
								
								<div>

									<div className="MainInputDom">
										{/* <div><Mobilesigninup background="#233367" color="white"/></div> */}
										<div>
											<Mobilesigninup background="#23673e" color="white"/>
											</div>
										<div style={{ padding: 10, background: "#423e3e" ,paddingTop:"5%"}}>

											<div>
												<Row>
													<Col lg={{ span: 24 }}>
														<div>
															<input className="inputfield-email" type="text" placeholder="username" value={this.state.username}
																onKeyPress={(e) => { if (e.charCode == 13) (this.loginHandler()) }}
																onChange={(e) => this.setState({ username: e.target.value, Emailvisibility: 'none', loaderdisplay: "hidden", btndisabled: false })}
															/>
															<p style={{ display: this.state.Emailvisibility, color: "red" }}>{this.state.EmailerrorMessage}</p>
														</div>
													</Col>
												</Row>
											</div>

											<div>
												<Row>
													<Col lg={{ span: 24 }}>
														<div>
															<input className="inputfield-email" type={this.state.type} placeholder="Password" value={this.state.Password}
																onKeyPress={(e) => { if (e.charCode == 13) (this.loginHandler()) }}
																onChange={(e) => this.setState({ Password: e.target.value, PasswordVisibility: 'hidden', loaderdisplay: "hidden", btndisabled: false })}

															/>

															<span style={{ visibility: this.state.PasswordVisibility, color: "red" }}>{this.state.PassworderrorMessage}</span>
														</div>
													</Col>
												</Row>
											</div>
											{/* <Link to="/forgetpassword" component={forgetpassword}><p className="forgetpasswordhadding">Forget password?</p></Link> */}

										</div>
									

										<div className="registerbtn">
											<button onClick={this.loginHandler} >Login</button>
											{/* <Button loading={this.state.loading} onClick={this.loginHandler}>Press me!</Button> */}

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/* </Page> */}
			</div>

		);
	}
}


export default login