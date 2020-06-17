let textElement = document.getElementById("text") //get text element from html
let optionsElement = document.getElementById("option-buttons")  //get options element from html


function startGame() {
    showTextNode(1) //brings game to first id 
}

function showTextNode(textNodeIndex){
    let textNode = textNodes.find(textNode => textNode.id == textNodeIndex) //grab textnode from its id to display to screen
    textElement.innerText = textNode.text //set text on screen to text value from inside textnode
    while (optionsElement.firstChild){
        optionsElement.removeChild(optionsElement.firstChild) //first removes default 4 options in the beginning of the game
    }
    textNode.options.forEach(option => { //now to add the options
        if (showOption(option)) { 
            let button = document.createElement("button") //creates button
            button.innerText = option.text //set the button text to the option text
            button.classList.add("btn") //styles the button from CSS
            button.addEventListener("click", () => selectOption(option)) //when you click on an option, it will call selectOption func
            optionsElement.appendChild(button) //add the button to options element
        }
    })
}

function showOption(option){    //always shows options
    return true
}

function selectOption(option){
    let nextTextNodeId = option.nextText //get next text id 
    if (nextTextNodeId < 0){   //if nexttext is -1, it will restart game otherwise it will go to next text id
        return startGame()
    }
    showTextNode(nextTextNodeId) //shows text for next text id
}

let textNodes = [ //here's where all texts and decision trees are created
    {
        id: 1,
        text: "You are at the gym. Which workout will you do today?",
        options: [
            {
                text: "Pecs",
                nextText: 2
            },
            {
                text: "Biceps",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "You had a nice workout session. On the way home, a cute girl asks you for your number.",
        options: [
            {
                text: "Give her your number",
                nextText: 3
            },
            {
                text: "Give her your damn number bud",
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: "You get home and feel tired and hungry. What do you do first?",
        options: [
            {
                text: "Eat something",
                nextText: 4
            },
            {
                text: "Go to sleep",
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: "You eat too fast and end up choking on your food. You died before you could call for help.",
        options: [
            {
            text: "Restart",
            nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: "After a nice and relaxing sleep, you feel like going for a walk.",
        options: [
            {
                text: "Go for a walk",
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: "You see someone is on their phone while crossing a street oblivious that there is an oncoming vehicle approaching. You have the chance to save the person. What do you do?",
        options: [
            {
                text: "Ignore and keep walking because you do not want to be caught in the mess.",
                nextText: 7
            },
            {
                text: "You push the person out of harm's way.",
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: "You go back home. What do you do now?",
        options: [
            {
                text: "Watch some movies",
                nextText: 9
            },
            {
                text: "Catch up on your homework",
                nextText: 9
            }
        ]
    },
    {
        id: 8,
        text: "You saved the person! But you ended up getting hit by the vehicle. You died an honourable death and the city declared you a hero.",
        options: [
            {
                text: "Restart",
                nextText: -1
            },
            {
                text: "Take a shot at rebirth (only available for your good deed)",
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: "A little while later, the girl you gave your number to earlier calls you.",
        options: [
            {
                text: "Pick up the phone",
                nextText: 11
            },
            {
                text: "Ignore, you don't want to get distracted",
                nextText: 12
            }
        ]
    },
    {
        id: 10,
        text: "You are three doors in front of you. The door you choose to go through determines your fate. Which door do you choose?",
        options: [
            { 
                text: "Door 1",
                nextText: 13
            },
            {
                text: "Door 2",
                nextText: 14
            },
            {
                text: "Door 3",
                nextText: 15
            }
        ]
    },
    {
        id: 11,
        text: "She had planted a tiny bomb inside your phone when you first met her. Your phone explodes as soon as you answer the phone and you die.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 12,
        text: "You read the news later and find out that the girl is in the wanted list for heinous crimes against men your age. Dodged a huge bullet!",
        options: [
            {
                text: "Report her last sighting to the authorities.",
                nextText: 16
            }
        ]
    },
    {
        id: 13,
        text: "You are reborn as a krill. You get preyed upon by a fish moments after birth.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 14,
        text: "You are reborn as a chicken in a farm. You live to 2 years of age before getting sent to the slaughterhouse.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 15,
        text: "Lucky! You are reborn into a human family in Japan. You are now named 'Kotaro'. >>Fast forward 18 years>> Here is the list of careers you are eligible for:",
        options: [
            {
                text: "Neurosurgeon",
                nextText: 17
            },
            {
                text: "Game Developer",
                nextText: 18
            },
            {
                text: "Manga Artist",
                nextText: 19
            }
        ]
    },
    {
        id: 16,
        text: "She is arrested shortly after. Police rewards you for your help with $50000! What do you intend to do now?",
        options: [
            {
                text: "Quit school and start a business",
                nextText: 20
            },
            {
                text: "Use money to pay student debts",
                nextText: 21
            }
        ]
    },
    {
        id: 17,
        text: "You eventually become Japan's number 1 neurosurgeon. You get thanked by thousands for saving their lives. You live to age 90 and die peacefully.",
        options: [
            {
                text: "Play Again!",
                nextText: -1
            }
        ]
    },
    {
        id: 18,
        text: "You invent games that sell millions in copies worldwide. Your name is known by every gamer. You live to age 79 and die peacefully.",
        options: [
            {
                text: "Play Again!",
                nextText: -1
            }
        ]
    },
    {
        id: 19,
        text: "You quickly realize the career of a manga artist is a harsh one. Your debut manga flops in the market and you are fired. You then spend the rest of your career as a chef. You live to age 82 and die peacefully.",
        options: [
            {
                text: "Play Again!",
                nextText: -1
            }
        ]
    },
    {
        id: 20,
        text: "Your business failed and you are now in more debt. Tough luck!",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 21,
        text: "You graduate from university and find a job that interests you. You live a normal life and die peacefully at age 86.",
        options: [
            {
                text: "Play Again!",
                nextText: -1
            }
        ]
    }
]


startGame() //to start game as soon as page loads