const tasksList = [];

const setCurrentDate = () => {
  const headerDateElement = document.getElementById('headerDate');
  const headerMonthElement = document.getElementById('headerMonth');

  const currentDate = new Date();
  const currentDayName = currentDate.toLocaleDateString('en-us', { weekday: 'long' });
  const currentDayNumber = currentDate.toLocaleDateString('en-us', { day: '2-digit' });
  const currentMonthName = currentDate.toLocaleDateString('en-us', { month: 'long' });

  headerDateElement.innerText = `${currentDayName}, ${currentDayNumber}th`;
  headerMonthElement.innerText = currentMonthName;
}

const toggleModal = () => {
  const modalElement = document.querySelector('.modal-overlay');

  modalElement.classList.toggle('hidden');

  // if (modalElement.classList.includes('hidden')) {
  //   modalElement.classList.remove('hidden')
  // } else {
  //   modalElement.classList.add('hidden')
  // }
}

const addNewTask = () => {
  const taskInputElement = document.getElementById('taskInput');
  const taskName = taskInputElement.value;

  const newTask = {
    name: taskName,
    completed: false,
    timestamp: Date.now(),
    id: Math.random()
  }

  if (taskName.trim()) {
    tasksList.unshift(newTask);
    taskInputElement.value = '';
  }

  console.log(tasksList);
}

const addListnerToAddBtn = () => {
  const addTaskBtnElement = document.getElementById('addTaskBtn');
  const newTaskBtnElement = document.getElementById('newTaskBtn');

  addTaskBtnElement.addEventListener('click', toggleModal);
  newTaskBtnElement.addEventListener('click', addNewTask);
}

const addListnerToCloseBtn = () => {
  const closeModalBtnElement = document.getElementById('closeModalBtn');
  closeModalBtnElement.addEventListener('click', toggleModal)
}


setCurrentDate();
addListnerToAddBtn();
addListnerToCloseBtn();
