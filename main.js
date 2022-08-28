//For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. 
//Generate an array of messages.
const messages = ["Type One is principled, purposeful, self-controlled, and perfectionistic.", 
"Type Two is generous, demonstrative, people-pleasing, and possessive.", 
"Type Three is adaptable, excelling, driven, and image-conscious.", 
"Type Four is expressive, dramatic, self-absorbed, and temperamental.", 
"Type Five is perceptive, innovative, secretive, and isolated.", 
"Type Six is engaging, responsible, anxious, and suspicious.", 
"Type Seven is spontaneous, versatile, acquisitive, and scattered.", 
"Type Eight is self-confident, decisive, willful, and confrontational.", 
"Type Nine is receptive, reassuring, complacent, and resigned." ];

//Function to generate a random message from the array, taking in a random number as an argument.
const generateMessage = (num) => {
    return messages[num];
};

//Generate a random number, store to a variable.
const randNumber = Math.floor(Math.random() * 9);

console.log(generateMessage(randNumber));