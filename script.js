todo_list = [];
function add() {
	//task=$('#task')
	task = document.getElementById("task")
	console.log(task)
	val = task.value
	todo_list.push(val)
	console.log(todo_list)
	insertDiv(val)
	task.value = ''
}

function insertDiv(val) {
	//$("#results").append('<div role="alert" class="alert alert-info my-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round"stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>'+val+'</span> </div>')
	document.createElement('div')
}
