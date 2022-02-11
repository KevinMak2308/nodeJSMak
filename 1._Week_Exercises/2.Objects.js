// --------------------------------------
// Objects
// --------------------------------------
const out = (...str) => console.log(...str);


// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

out(alienMessage.message)

// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const myProfile =  {
	name : "Kev",
	age : 30
}

out(myProfile)

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

stackOverflow.isAllowed = true

out(stackOverflow)

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world.",
	about : "Just a tribute "
}

delete thisSong.description

out(thisSong)



// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------


