let pswWorkouts = []
let workoutsList = document.getElementById('workouts-list');
let workoutsLoading = document.getElementById('workouts-loading');
let pUpdate = document.getElementById('updateP-el');
let dateRefresh = "";
const btnRefresh = document.getElementById('refresh-btn');
const apiUrl = process.env.WP_URL;

window.setTimeout(function() {
  if (!localStorage.getItem('pswWorkouts')) {
    workoutsList.innerHTML = `<li class="italic font-medium text-orange-700">Loading workouts ...</li>`;
    console.log("Workouts not currently in local storage.");
    getWorkoutsFromPSW();
  } else {
    console.log("Workouts already in local storage.");
    dateRefresh = localStorage.getItem('lastUpdate');
    pUpdate.innerHTML = `<span class="font-medium">Last updated on ${dateRefresh}</span>`;
    workoutsLoading.classList.remove('hidden');
    setTimeout(() => {
      render(JSON.parse(localStorage.getItem('pswWorkouts')))
      workoutsLoading.classList.add('hidden');
    }, 500);
  }}, 500
);

btnRefresh.addEventListener('click', function() {
  dateRefresh = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  pUpdate.innerHTML = `<span class="font-medium">Last updated on ${dateRefresh}</span>`;
  localStorage.clear();
  localStorage.setItem("lastUpdate", dateRefresh);
  workoutsList.innerHTML = `<li class="italic font-medium text-orange-700">Updating workouts ...</li>`;
  getWorkoutsFromPSW();
});

function getWorkoutsFromPSW() {
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    pswWorkouts = data;
    localStorage.setItem("pswWorkouts", JSON.stringify(pswWorkouts));
    render(pswWorkouts);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function render(workouts) {
  let workoutsListItems = "";
  for (let i = 0; i < workouts.length; i++) {
    let date = new Date(workouts[i].date);
    workoutsListItems +=
      `<li class="pt-1 mb-2">
        <a class="hover:text-orange-700 hover:font-bold" href='${workouts[i].link}' target='_blank'>
          ${workouts[i].title.rendered}
        </a>
        <br/><span class="italic text-xs text-sky-700">Published on ${date.toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',})} </span>
      </li>`;
  }
  workoutsList.innerHTML = workoutsListItems;
}
