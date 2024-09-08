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
	task.style.margin = "auto"
	const text = document.createTextNode(val);
	task.appendChild(text);


	const task_container = document.createElement('div')
	const inner_container = document.createElement('div')
	inner_container.style.margin = "0 auto 0 auto"
	inner_container.style.display = "flex"
	inner_container.style.flexDirection = "row"
	inner_container.style.flexWrap = "wrap"
	var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	newElement.setAttribute("d", "M9 9L15 15M15 9L9 15");
	newElement.style.stroke = "green";
	newElement.style.strokeWidth = "2px";
	newElement.style.cursor = "pointer";

	svg.appendChild(newElement);
	svg.onclick = function() { }
	svg.setAttribute("viewBox", "5 5 14 14");
	svg.setAttribute("width", "30px");

	inner_container.appendChild(svg)
	inner_container.appendChild(task)
	task_container.appendChild(inner_container)
	task_container.style.cssText = `
		background-color: green;
		color: black;
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		margin-bottom: 20px;
		margin-left: auto;
	`
	const results = document.getElementById("results")
	results.appendChild(task_container)
}
