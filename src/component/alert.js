import React from 'react'
export default class Alert extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			email:"",
			password:"",
			errorMessage:""
		}
		this.thisExist = this.thisExist.bind(this)
	}
	showDefault = () =>{
		const formFather            = document.querySelector(".form-father");
			formFather.style.top    = "-20%";
			formFather.style.bottom =  "100%";
		document.querySelector(".default").style.display = "block";
	}

	handleChange = (e)=>
	{
		let name  = e.target.name;
		let value = e.target.value;
		//CHECK THE NAME OF THE INPUTS
		this.setState({[name]:value})
	}
	handleSubmit = (e)=>{

		let msg = "";
		if(this.state.email == false || this.state.password == false){
			msg = " * Please fill all the inputs";
		}else{
			// IF THERE IS NO ERRO THEN CHECK IF THE ACCOUNT ALREADY EXIST 
			msg = "";
			// CLOSE THE CURRENT WINDOW THEN OPEN OTHER WINDOW 
		    // THAT SHOW THE USER INFORMATION
			alert(this.thisExist())
		}
		//SHOW THE ERRO MESSAGE
		this.setState({errorMessage:msg})
		e.preventDefault();
	}

	thisExist(){
		let res = null,
			msg = "The password or the email is not corret ";

		res = `${this.state.email       == "emanuelabizimi@gmail.com" 
				 && this.state.password == "rabi" ?  true : false
				}`;
		//UPDATE THE ERROR MESSAGE
        msg = res == false ? msg : "";
        this.setState({errorMessage:msg})
		return res;		
	}
	render(){
		return(<div className="form-father p-3">
			      <form  onSubmit={this.handleSubmit} className="mx-5" >
			        <p className="text-light-gray">Enter your email and password to connect to your codaby account
			       </p>
			   	    <p className="text-white">
			   	    	<label>Email :</label>   
			   	    	<input  onChange ={this.handleChange} className='text-white' type="email" name="email" placeholder="Type your email" value ={this.state.email}/>
			   	    </p>
			     	<p className="text-white">
			     		 <label>password:</label>
			     		 <input  onChange ={this.handleChange} className='text-white' type="password" name="password" placeholder="Type your password" value ={this.state.password}/>
			     	</p>
			     	<p className="text-white">
			     		<span></span> 
			     		<input className='text-white' type="checkbox" name="keeppsw"/> keep to password 
			     	</p>
			     	<p className="text-primary">Forget the password </p>
			     	<button className="btn bg-light-gray ">
			     		Create an account 
			     	</button>
			     	<button type="button" className="btn bg-light-gray" 
			     			onClick ={this.showDefault}>cancel
			     	</button> 
			     	<button className="btn bg-primary text-white">Next
			     	</button>
			        <p className="text-danger mt-3">{this.state.errorMessage}</p>
			     </form>
			</div>
			)
	}
}