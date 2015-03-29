
(function () {
'use strict'
	function setMarkUp () {
		var imgContainerOuter = document.createElement('div');
		imgContainerOuter.className = 'large-container-outer';
		var imgContainerInner = document.createElement('div');
		imgContainerInner.className = 'large-container-inner';	
		var blur = document.createElement('div');
		blur.className = 'blur';
		var largeImg = document.createElement('img');
		largeImg.id = 'large-img';
		largeImg.src  = 'img/treeImg3.jpg';
		var closeButton = document.createElement('div');
		closeButton.className = 'closeButton';

		imgContainerInner.appendChild(largeImg);
		imgContainerInner.appendChild(closeButton);
		imgContainerOuter.appendChild(imgContainerInner);

		document.getElementsByTagName('body')[0].appendChild(blur);
		document.getElementsByTagName('body')[0].appendChild(imgContainerOuter);
	}
	setMarkUp();

	function showOrHide () {
		document.body.classList.toggle('show')
	}	

	function showTreeImg (event) {
		showOrHide()
	}

	document.getElementById('treeImage').addEventListener("click", showTreeImg, false);
	document.getElementsByClassName("closeButton")[0].addEventListener("click", showTreeImg, false);

})();

