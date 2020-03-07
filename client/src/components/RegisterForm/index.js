import React from 'react'



class RegisterForm extends React.Component {
	// refs
	// form: null;
	// usernameElem: null;
	// passwordElem: null;

	render() {
		const { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);
		
		return (
			
				<form  className="createAccountInfo"
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onRegister({
							firstName: this.firstNameElem.value,
							lastName: this.lastNameElem.value,
							email: this.emailElem.value,
							username: this.usernameElem.value,
							password: this.passwordElem.value,
						});
					}}
				>
					<div className="form-group">

						<input className="form-control"  ref={(input) => this.firstNameElem = input} type='text' name="firstName" placeholder='First name' /><br/>
						<input className="form-control"  ref={(input) => this.lastNameElem = input} type='text' name="lastName" placeholder='Last name' /><br/>
						<input className="form-control"  ref={(input) => this.emailElem = input} type='email' name="email" placeholder='Email' /><br/>

						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter username' /><br/>
						<input className="form-control"  ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						
						<button className="btn btn btn-primary" type='submit'>Submit</button>
					</div>
				</form>
			
		)
	}
}

export default RegisterForm