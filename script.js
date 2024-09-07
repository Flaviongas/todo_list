function add() {
	//task=$('#task')
	task = document.getElementById("task")
	val = task.value
	if (val.length != 0) {

		insertDiv(val)
		task.value = ''
	}
}
window.onclick = e => {
	if (e.target.nodeName == "svg") {
		console.log(e.target.parentNode);
		e.target.parentNode.remove()
	} else if (e.target.nodeName == "path") {

		console.log(e.target.parentNode);
		e.target.parentNode.parentNode.remove()
	}
}

function delete_task() {

}

function insertDiv(val) {
	const task = document.createElement("p");
	task.style.textAlign = "center"
	const text = document.createTextNode(val);
	task.appendChild(text);


	const task_container = document.createElement('div')
	var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	newElement.setAttribute("d", "M9 9L15 15M15 9L9 15");
	newElement.style.stroke = "red";
	newElement.style.strokeWidth = "2px";
	svg.appendChild(newElement);
	svg.style.width = "30px"
	svg.style.height = "30px"
	svg.onclick = function() { }

	task_container.appendChild(svg)
	task_container.appendChild(task)
	task_container.style.cssText = `
		background-color: green;
		color: black;
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		margin-bottom: 20px;
	`
	const results = document.getElementById("results")
	results.appendChild(task_container)
}
