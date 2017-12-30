function validateAll() 
{
    // FirstName Validation
    var x = /^[a-zA-Z\-]+$/;
    var firstnameValid = document.forms["JS_Form"]["fname"].value.match(x);
    if(firstnameValid == null){
        document.getElementById("fnerr").innerHTML=("*Please enter only characters and '-'");
        document.getElementById("fnerr").style.color="red";
        document.getElementById("fname").focus();
        return false;
    }         
        else
        {
            document.getElementById("fnerr").innerHTML = "";
        }
         var x = /^[a-zA-Z\-]+$/;
    var lastnameValid = document.forms["JS_Form"]["lname"].value.match(x);
    if(lastnameValid == null){
        document.getElementById("lnerr").innerHTML=("*Please enter only characters and '-'");
        document.getElementById("lnerr").style.color="red";
        document.getElementById("lname").focus();
        return false;
    }
        else
        {
            document.getElementById("lnerr").innerHTML = "";
        }
    // Email Validation
    var x = document.forms["JS_Form"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
        {
            document.getElementById("emerr").innerHTML="*Please Enter Valid Email";
            document.getElementById("emerr").style.color="red";
            document.getElementById("email").focus();
            return false;
        }
        else
        {
            document.getElementById("emerr").innerHTML = "";
        }

    // Phone number Validation
    var val=document.forms["JS_Form"]["phone"].value;
        if (/^\d{2}-\d{3}-\d{5}$/.test(val))
        {
               document.getElementById("pherr").innerHTML = "";
        }
    else
        {
            document.getElementById("pherr").innerHTML="*Please Enter Valid Phone number";
            document.getElementById("pherr").style.color="red";
            document.getElementById("phone").focus();
            return false;
        }

    // Gender Validation

         var gender = document.getElementsByName('gender');
        var genValue = false;

        for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            document.getElementById("gnerr").innerHTML="*Please Select Gender";
      document.getElementById("gnerr").style.color="red";
        document.getElementById("gender").focus();
            
            return false;
        }
        else
        {
            document.getElementById("gnerr").innerHTML = ""; 
        }
    
    // Country-Selection Validation
        if(document.getElementById('sele').selectedIndex == 0)
        {
            document.getElementById("cnerr").innerHTML="*Please Select Country";
            document.getElementById("cnerr").style.color="red";
            document.getElementById("sele").focus();
            return false;
        }
        else
        {
            document.getElementById("cnerr").innerHTML=""; 
        }
    // Checkbox Validation  
        if(!this.JS_Form.cbox.checked)
        {
         document.getElementById("agerr").innerHTML="*Please tick the box";
            document.getElementById("agerr").style.color="red";
            document.getElementById("cbox").focus();
            
            return false;
        }

// Final Submit
    else
        {
        alert(" Details Submitted Successfully!");
        return true;
        }
};