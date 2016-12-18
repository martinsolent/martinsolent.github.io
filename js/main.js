// Adding this function quest will not pop up auto
function askQuestions () {

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('user is named ' + fullName);

	//Compare values ==
	if (firstName == 'General' && lastName != 'Assembly') { 
		console.log ('Greeting, General!');
	} else {
		console.log ('Sorry No Greeting');
	}

	// This will change the colour of the h1 text on the index.html 
	var faveColor = prompt ('What is your favourite colour?');
	faveColor = faveColor.toLowerCase().trim();

	if (faveColor == 'red' ||
		faveColor == 'green' ||
		faveColor == 'blue' ||
		faveColor == 'yellow') {

		$ ('h1').css('color', faveColor);
	}



	// Age checker - this appears in Console of Dev tools
	var age = prompt ('How old are you');
	age = parseInt (age);
	// Could use this one for age range between 18-60 will be adult
	if (age >= 18 && age <60) {
		console.log ('User is an adult');
	}
	if (age >= 18) {
		console.log ('User is an adult');
	} else if (age >= 13) {
		console.log ('User is a teenager');
	} else {
		console.log ('User is a child');
	}
}
// alert ($); 
// This makes sure JS works - then delete Have already added link to bottom of html
// When the page has loaded
$(function () {
	
	// When the users clicks the image then ask questions
	$('img').on('click', askQuestions);
	// When the user clicks h3 - finds all h3s
	$('h3').on('click', function() {

		//Hide the next element - this is the first h3 on page, user clicks a h3 & next element is hidden
		//$(this).next().hide();
		
		//Put toggle to show & hide
		//$(this).next().toggle();

		//This slide- show hide & add passing argument (5000) time
		$(this).next().slideToggle(1000);

		// add another para then only show/hide one of them - put both in a <div>
	});

})