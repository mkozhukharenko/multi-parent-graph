function TreeModel (treeNodes) {

	this.getFirstQuestion = function () {
		return treeNodes[0];
	}
	this.getNextQuestion = function (answerId) {
		var nextQuestion = treeNodes.filter(function (item) {
			return item.id === answerId;
		});
		return nextQuestion[0];
	}
}

function Renderer () {

	var root = document.createElement('div');
	root.className = 'questionnaire';

	var createButton = function (params) {
		var optionButton = document.createElement('button');
			optionButton.className = 'option';	
			optionButton.innerHTML = params.userPick;
			optionButton.setAttribute("data-move-to", params.moveTo);	
		return optionButton;
	}

	this.createQuestionView = function (questionObj) {
		var options = questionObj.options;
			root.innerHTML = 	'<h3>' + questionObj.questions + '</h3>';
		for (var i=0; i< options.length; i+=1) {
			root.appendChild(createButton(options[i]));
		}
		return root;
	};
	this.createResultView = function (retulsObj) {
		root.innerHTML = '<h3> Без вагань купуйте ' + retulsObj.result + ' та тримайте у себе в квартирі</h3>';
		return root;

	};
}

function HandleClicks (tree, renderer) {
	var appendTo = document.getElementById('require-questionnaire');
	var currentQuestion = renderer.createQuestionView(tree.getFirstQuestion());
	appendTo.appendChild(currentQuestion);

	this.onOptionClick = function (event) {
		if (event.target !== null && event.target.classList.contains('option')) {
			var answerId = parseInt(event.target.dataset.moveTo); 	
			currentQuestion = tree.getNextQuestion(answerId);
			if (currentQuestion.result) {
				var newView = renderer.createResultView(currentQuestion)
			} else {
				var newView = renderer.createQuestionView(currentQuestion);
			}
			appendTo.removeChild(appendTo.firstChild);
			appendTo.appendChild(newView);
		}
	}	
	appendTo.addEventListener("click", this.onOptionClick.bind(this), false);
}

var treeModel = new TreeModel(data);
var renderer = new Renderer();
var handleClicks = HandleClicks(treeModel, renderer);
