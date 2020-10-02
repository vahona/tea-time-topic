console.log('work');

const endPoint = `https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json`;
const container = document.querySelector('.container');
const addButton = document.querySelector('.add__button');
const addForm = document.querySelector('.adding');
const input = document.querySelector('.new__topic');
const response = fetch(endPoint);
console.log(response);

// import the svg file

// import { thumbup, thumDown } from './svg';

// Creat an empty arr

let teatopic = [];

// Function to feact the data

async function fetchTopic() {
    const response = await fetch(endPoint);
    const data = await response.json();
    teatopic = [...data];
    displayTeaTopic(teatopic);
    return data;

}

fetchTopic();

// Function to generate the tea topic

async function displayTeaTopic() {
    // const teaTime = await fetchTopic();
    const html = await teatopic.map(topic => {
        return `
        <article class="tea_topic">
          <div class="content">
          <svg class="w-6 h-6 archive" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              <p class="title">${topic.title}</p>
              <div class="thumb">
                <div class="up">
                  <p class="increament"> ${topic.upvotes}</p>
                  <button aria-label="${topic.title}" data-id="${topic.id}" class="thumbup">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                  </button>
                </div>
                <div class="down">
                  <p>${topic.downvotes}</p>
                  <button data-id ="${topic.id}" aria-label="${topic.title}" class="thumbdown">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
                  </button>
                </div>
            </div>
              <p>${topic.discussedOn}</p>
          </div>
        </article>`
    }).join('');

    container.innerHTML = html;



}

displayTeaTopic();

// Adding some topic

const addNewTopic = function(e) {
  const formAdd = document.querySelector('.adding');
  e.preventDefault();
  console.log("add topic");
  const newTopic = e.currentTarget;
  console.log(newTopic);
  const newTea = {
    id: newTopic.id,
    title: newTopic.title.value,
    upvotes: 0,
    downvotes:0,
    

  };

  
  teatopic.push(newTea);
  displayTeaTopic(teatopic);
  newTopic.reset();
}


// Local storage

// Listening event

const handleClick = e => {
  if (e.target.closest('button.thumbup')) {
    const button = e.target.closest('button.thumbup');
    const id = button.dataset.id;
    console.log(Number(id));
    updateup(Number(id));
  }


  if (e.target.closest('button.thumbdown')) {
    const button = e.target.closest('button.thumbdown');
    const id = button.dataset.id;
    console.log(id);
    console.log(Number(id));
    updateDown(Number(id));
  }
}

// Function for the nuber of up and down thumb

const updatetup = idFromTheButton => {
  const topic = teatopic.find(topic => topic.id === idFromTheButton);
  topic.upvotes++;
  upvotes

}

const updateDown = id => {
  const teaDown = teatopic.find(tea => tea.id === id);
  teaDown.downvotes++;
}

//

container.addEventListener('click', handleClick);
addForm.addEventListener('submit', addNewTopic);
