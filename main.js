var names_of_people = [];
    
function submit()
{
	//get the value from text input and put the value into an array
    var GuestName = document.getElementById("name1").value;
	//Push the var value into the array
	names_of_people.push(GuestName);
	//display  var value in console
	console.log(GuestName);    
	//display array value in console
    console.log(names_of_people);
	//Create a lenght var and get the legnth from the array
    var lenght_of_name = names_of_people.length;
	//Show that in Console
    console.log(lenght_of_name);
	//display the names from the array into this <p id="display_name">
	document.getElementById("display_name").innerHTML=names_of_people
   }



function show()
{
	//Returns the value of the array into the var i
	var i= names_of_people.join("<br>");
//Then, display's in console
	console.log(names_of_people);
	//Show it on screen
	document.getElementById("p1").innerHTML=i
	document.getElementById("sort_button").style.display="block";

	}

// add the sort function
function sorting()
	{
		//write down this sort function to sort the array
		names_of_people.sort();         
//return the value into the same variable and also break
		var i= names_of_people.join("<br>");
		//show it in console
		console.log(names_of_people);		
		//then show the sort on HTML
		document.getElementById("sorted").innerHTML=i
		}

//Create a searching function to search a name
function searching()
{
	//Create a variable by name s
	var s= document.getElementById("s1").value;
	//var found = 0
	var found=0;
	//declare a var
	var j;
	//create a for loop
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
		//show the result
	document.getElementById("p2").innerHTML="name found "+found+" time";
	//then show the result in console
	console.log("found name "+found+" time");
}
