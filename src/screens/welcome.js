import React from 'react'
import Logo from '../img/backpack.svg'
import Alert  from '../component/alert.js' 

class WelcomeScreen extends React.Component
{
 showAlert = ()=>{
		const formFather        = document.querySelector(".form-father");
		formFather.style.top    = "0px";
		formFather.style.bottom =  "0%";
		formFather.style.left   = "-3%";
		formFather.style.right  = "0%";
		document.querySelector(".default").style.display = "none";
}

 render(){
 	return(<section>
 			<Alert/>
 			<div  className="default">
	 			<h1 className="text-white text-center pt-m"> Welcome to codabŸ </h1>
	 			<p className="text-white text-center w-m">Learn how to code, even in offline with codebŸ,
	 			 You can also learn from our website <a href="#">here</a>
	 			</p>
	 			<img class="logo" src={Logo} alt="backpack image from codabŸ"/>
	 			<button onClick ={this.showAlert} className="btn bg-primary text-white  start-btn ">start learn </button>
	 		</div>
 		</section>)
 }
}


export default WelcomeScreen