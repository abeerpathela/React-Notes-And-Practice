### ***fefl class 30/01/26***



**AJAX , xml request**



const request = new XMLHttpRequest() // creating a xml request object (SYNC 								feature )

request.open("GET","LINK OF API"); // open a get request by the method open 					of the request object(SYNC feature)

request.send(); // yeh request ko asynchronies way me send karega (SYNC 								feature)

request.onLoad=()=>{

 	// console.log(request.responseText); // ab yeh tabhi print hoga  									jab 						data successfully backend 						se aa jayega

 	const data=JSON.parse(request.responseText); // to use the data 							which came from the 							backend we have to 							convert it to the 							json format

 	console.log(data);

 

}

// console.log(request.responseText); // here responseText will give the 				        value as empty  (async feature)



AJAX request purane wali " get karna "



AJAX request " post karna " -:



button.addEventListener('click',()=>{

 	fetch("Link of Backend",

 	   {

 		method : "POST",

 		headers:{

 			"Content-Type" : "application/json",

 		}

 		body: JSON.stringify({

 			name:"Abc",

 			role:"def:,

 			salary:12345

 		})

 	}

 	).then((response)=> response.json())

 	  .then((Acknowledgement) => alert(Acknowledgement.mess age) 					     console.log(Acknowledgement));

 	  .catch((e)=> console.log(e));

});



AXIOS (fetch ka alternative an modern solution)



"agar AXIOS ko use karna hai toh uski script ko code mei import karna padega"



"Axios does not give the exact data that the backend sends while fetch gives us the exact data the backend sends"



"Axios return the data in the form of the object"



axios.get("Link of backend")

.then((data) => console.log(data))

.catch((e) => console.log(e));



post request using axios



axios.post("Link of backend",

 	    {

 		name:"Abc",

 	 	role:"def:,

 		salary:12345

 	    },

 	    {

 		headers:{

 			"Content-Type":"application/json"

 		}

 	    }

).then((ack)=> console.log(ack.data))

.catch((e)=>console.log(e));



Question: take input of three fields name,role,salary using input fields make a button on click which sends axios post request which takes the value from the input



axios.post("Link of backend",

 	    {

 		name: name.value,

 	 	role: role.value:,

 		salary: salary.value

 	    },

 	    {

 		headers:{

 			"Content-Type":"application/json"

 		}

 	    }

).then((ack)=> console.log(ack.data))

.catch((e) => console.log(e));



### ***fefl class 06/02/26***



Which of the following function will execute first?



function getUser(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("User fetched!");

            resolve("");

        },4000);

 

    })

}

function getPost(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Post fetched!");

            resolve("");

        },3000);

 

    })

}

getUser();

getPost();



Answer: "Pehle post wala function fer user wala function"



Which of this function will execute first ?



function getUser(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("User fetched!");

            resolve("");

        },4000);

 

    })

}

function getPost(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Post fetched!");

            resolve("");

        },3000);

 

    })

}

function getComment(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Comments fetched!");

            resolve("");

        },3000);

    })

}

function getCommentLike(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Comments like fetched!");

            resolve("");

        },3000);

    })

}

getUser();

getPost();

getComment();

getCommentLike();

Answer:



Post fetched!

Comments fetched!

Comments like fetched!

User fetched!



// Jab multiple then lag jate hai toh ussse hum promise chaining bolte hai

// Is problem ko solve karne ke liye aaya async await ka concept

// jis bhi function ke aage hum await likh dete hai toh jub tak woh pura nahi ho jata agla function execute nahi ho sakta

// await humesha aise function pe lagta hai jo hume koi promise return kar raha hota hai

// jis function ke andar hum await use karte hai us function ko hum async bna dete hai



function getUser(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("User fetched!");

            resolve("");

        },4000);

 

    })

}

function getPost(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Post fetched!");

            resolve("");

        },3000);

 

    })

}

function getComment(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Comments fetched!");

            resolve("");

        },3000);

    })

}

function getCommentLike(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("Comments like fetched!");

            resolve("");

        },3000);

    })

}



async function main(){

    try{

        await getUser();

        await getPost();

        await getComment();

        await getCommentLike();

    }

    catch{(e)=>{

        console.log(e)

    }}

}



main();

// Normal API fetch call using async await

async function fetchCall(){

    let response= await fetch("URL");

    let data= await response.json();

    console.log(data);

}

fetchCall();



 

make weather frcasting api project

