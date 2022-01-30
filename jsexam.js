// Basics

function logNumbers () { 
    for ( let number = 1; number < 101; number ++ ) {
    var divThree = number % 3;
    var divFive = number % 5;
    if ( (divThree == 0) && (divFive == 0) ) 
        console.log("Jackpot!");
    else if (divThree == 0)
      console.log( "This is divisibleby 3");
    else if (divFive == 0)
      console.log( "This is divisibleby 5");
    else
      console.log( number );
  } 
};

logNumbers();

// DOM manipulation

function getRandomImage() {  
var image = new Array();  
image[1] = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.india.com%2Flifestyle%2Fthings-you-should-never-do-before-exams-4420910%2F&psig=AOvVaw0uflqfWq3Tve5KBIduoK64&ust=1643624489666000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiY5MSg2fUCFQAAAAAdAAAAABAD";
image[2] = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.additudemag.com%2Fhow-to-study-for-final-exams-adhd%2F&psig=AOvVaw0uflqfWq3Tve5KBIduoK64&ust=1643624489666000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiY5MSg2fUCFQAAAAAdAAAAABAJ";
image[3] = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fyou-ready-exams-380342311&psig=AOvVaw0uflqfWq3Tve5KBIduoK64&ust=1643624489666000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiY5MSg2fUCFQAAAAAdAAAAABAO";
var rndmImage = Math.floor(Math.random() * image.length);
if (rndmImage == 0) {
    rndmImage = 1;
}
return image[rndmImage]
};

let btn = document.createElement("button");
btn.innerHTML = "Come up with image";
btn.onclick = getRandomImage()

document.body.appendChild(btn);

//I forgot to actually add it to an html element so you can dispaly it in browser not just cosole but I'm running out of time. Sorry. 


// Async API calls

const promise1 = fetch("https://reqres.in/api/users")
.then(response => response.json())
.then(data => {console.log(data.id[1].first_name);
    return data.id[1].first_name
})

const promise2 = fetch("https://reqres.in/api/users")
.then(response => response.json())
.then(data => {console.log(data.page[2].first_name);
    return data.id[2].first_name
})

const promise3 = fetch("https://reqres.in/api/users")
.then(response => response.json())
.then(data => {console.log(data.id[3].first_name);
    return data.id[3].first_name
})

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
    const ul = document.createElement("ul");
    for (let i = 0; i < values.length; i++) {
        console.log(values[i])
        const li = document.createElement("li");
        li.innerHTML = values[i];
        ul.appendChild(li)
        document.getElementById("exam").appendChild(ul);
      }

  });



  