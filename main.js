
// let fname, lname, age, email, tel_no, courses, year;
            
// fname = document.getElementById("f_name").value;
// lname = document.getElementById("L_name").value;
// age = document.getElementById("age").value;
// email = document.getElementById("email").value;
// tel_no = document.getElementById("tel").value;
// courses = document.getElementById("courses").value;
// year = document.getElementById("A_period").value;
			
// document.getElementById("dislpayVal1").innerHTML = fname;
// document.getElementById("dislpayVal2").innerHTML = lname;
			
// document.getElementById("dislpayyear").innerHTML = year;
// document.getElementById("dislpayCourses").innerHTML = courses;

function DispalyValue(){

	let fname, lname, year;
						
		fname = document.getElementById("f_name").value;
		lname = document.getElementById("L_name").value;
		ear = document.getElementById("A_period").value;
						
		document.getElementById("val1").innerHTML = "Welcome "+fname +" " + lname;
		//document.getElementById("val2").innerHTML = lname;

		//document.getElementById("dislpayyear").innerHTML = "You are in "+year;
		//document.getElementById("dislpayCourses").innerHTML = courses;
			
			
}

function Login(){

	let default_uname="APC";
	let default_pw="1234";

	let uname, pw;


		uname = document.getElementById("username").value;
		pw = document.getElementById("pw").value;

		if(default_uname==uname && default_pw==pw)
		{
			window.alert("Login Successfull");
		}
		else if(default_uname==uname && default_pw!=pw)
		{
			window.alert("Entered Incorrect Password.try again");
		}
		else if(default_uname!=uname && default_pw==pw)
		{
			window.alert("Entered Incorrect User Name. try again");
		}
		else
		{
			window.alert("Entered Incorrect User Name & Password. try again");
		}
}
			

            
    