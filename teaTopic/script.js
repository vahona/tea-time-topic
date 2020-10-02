console.log('work');

const endPoint = `https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json`;
const container = document.querySelector('.container')
const response = fetch(endPoint);
console.log(response);

// Creat an empty arr

const tea = [];

// Function to feact the data

async function fetchTopic() {
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
    
}

// Function to generate the tea topic

async function displayTeaTopic() {
    const teaTime = await fetchTopic();
    const html = teaTime.map(topic => {
        return `
        <article>
        <p>${topic.title}</p>
        <p>${topic.upvotes}</p>
        <p>${topic.downvotes}</p>
        <p>${topic.discussedOn}</p>
    </article>`
    }).join('');

    container.innerHTML = html;

}

displayTeaTopic();


