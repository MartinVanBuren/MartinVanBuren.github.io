    			var menuElem = document.getElementById('menuID');
    			var titleElem = menuElem.querySelector('.title');

    			titleElem.onclick = function() {
      			menuElem.classList.toggle('open');
    			};