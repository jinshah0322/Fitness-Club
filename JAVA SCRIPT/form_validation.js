function form_validation()
{
	if(document.form.name.value=="")
	{
		alert("Enter Your Name");
		document.form.name.focus();
		return false;
	}
	if(document.form.age.value=="")
	{
		alert("Enter Your Age");
		document.form.age.focus();
		return false;
	}
	if(document.form.cnumber.value=="")
	{
		alert("Enter Your Contact Number ");
		document.form.cnumber.focus();
		return false;
	}
	if(document.form.email.value=="")
	{
		alert("Enter Your Email");
		document.form.email.focus();
		return false;
	}
	if(document.form.height.value=="")
	{
		alert("Enter Your Height");
		document.form.height.focus();
		return false;
	}
	if(document.form.cweight.value=="")
	{
		alert("Enter Your Current Weight");
		document.form.cweight.focus();
		return false;
	}
	if(document.form.gweight.value=="")
	{
		alert("Enter Your Goal Weigth");
		document.form.gweight.focus();
		return false;
	}
	if(document.form.date.value=="")
	{
		alert("Enter Date Of Registration");
		document.form.date.focus();
		return false;
	}
	let confirm=prompt("JOIN @ Rs350.00/MONTH");
	if(!(confirm==350))
	{
		alert("ENTER VALID AMOUNT");
	}
	else
	{
		alert("Your Response Has Been Submited");
	}
}
	
