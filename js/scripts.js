var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

function calcInit() {
	let obshchaya_summa_sliderField1 = document.getElementById('obshchaya-summa-kredita-rangeField-1'),
		obshchaya_summa_rangeField1 = document.getElementById('obshchaya-summa-kredita');
	let pervonachalnyj_vznos_sliderField2 = document.getElementById('pervonachalnyj-vznos-rangeField-2'),
		pervonachalnyj_vznos_rangeField2 = document.getElementById('pervonachalnyj-vznos');
	let summa_zajma_rangeField2 = document.getElementById('summa-zajma');
		
	


	



	noUiSlider.create(obshchaya_summa_sliderField1, {
		connect: [true, false],
		start: [1000000],
		step: 1000000,
		range: {
			'min': [1000000],
			'max': [250000000]
		},
		format: wNumb({
			decimals: 0,
			thousand: ' ',
		})
	});

	obshchaya_summa_sliderField1.noUiSlider.on('update', function (values, handle) {
		if (values[handle] == false) {} else {
			obshchaya_summa_rangeField1.value = values[handle];
		}
		let obshchayaSumma = obshchaya_summa_rangeField1.value.replace(/[^\d]/g, '');
		let pervonachalnyjVznos = pervonachalnyj_vznos_rangeField2.value.replace(/[^\d]/g, '');

		
		summa_zajma_rangeField2.value = parseInt(obshchayaSumma) - parseInt(pervonachalnyjVznos);

		
		
	});

	obshchaya_summa_sliderField1.noUiSlider.on('change', function (values, handle) {
		
	});

	obshchaya_summa_rangeField1.addEventListener('change', function () {
		obshchaya_summa_rangeField1.noUiSlider.set(this.value);
	
		
	});

	noUiSlider.create(pervonachalnyj_vznos_sliderField2, {
		connect: [true, false],
		start: [1000000],
		step: 1000000,
		range: {
			'min': [1000000],
			'max': [250000000]
		},
		format: wNumb({
			decimals: 0,
			thousand: ' ',
		})
	});

	pervonachalnyj_vznos_sliderField2.noUiSlider.on('update', function (values, handle) {
		if (values[handle] == false) {} else {
			pervonachalnyj_vznos_rangeField2.value = values[handle];
		}
		let obshchayaSumma = obshchaya_summa_rangeField1.value.replace(/[^\d]/g, '');
		let pervonachalnyjVznos = pervonachalnyj_vznos_rangeField2.value.replace(/[^\d]/g, '');

		
		summa_zajma_rangeField2.value = parseInt(obshchayaSumma) - parseInt(pervonachalnyjVznos);

	});

	pervonachalnyj_vznos_sliderField2.noUiSlider.on('change', function (values, handle) {});

	pervonachalnyj_vznos_rangeField2.addEventListener('change', function () {
		pervonachalnyj_vznos_rangeField2.noUiSlider.set(this.value);
		
	});

	
}

// смена языка - хедер
let language = document.querySelector('.language');
let languageList = document.querySelector('.language__list');

languageList.addEventListener('click', function (e) {
	language.classList.toggle('active');
});

document.documentElement.addEventListener('click', function (e) {
	if (!e.target.closest('.language')) {
		language.classList.remove('active');
	}
});


// меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

const menuLink = document.querySelectorAll('.menu__link');
const iconMenuRemove = document.querySelector('.menu__icon');
const menuBodyRemove = document.querySelector('.menu__body');

menuLink.forEach(function (entry) {
	entry.addEventListener("click", function (event) {
		event.preventDefault();
		document.body.classList.remove('lock');
		iconMenuRemove.classList.remove('active');
		menuBodyRemove.classList.remove('active');
	});
});

// dynamic_adapt
var move_array = [];
var move_objects = document.querySelectorAll("[data-move]");

if (move_objects.length > 0) {
	for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
		var _el6 = move_objects[_index10];

		var data_move = _el6.getAttribute("data-move");

		if (data_move != "" || data_move != null) {
			_el6.setAttribute("data-move-index", _index10);

			move_array[_index10] = {
				parent: _el6.parentNode,
				index: index_in_parent(_el6)
			};
		}
	}
}

function dynamic_adapt() {
	var w = document.querySelector("body").offsetWidth;

	if (move_objects.length > 0) {
		for (var _index11 = 0; _index11 < move_objects.length; _index11++) {
			var _el7 = move_objects[_index11];

			var _data_move = _el7.getAttribute("data-move");

			if (_data_move != "" || _data_move != null) {
				var data_array = _data_move.split(",");

				var data_parent = document.querySelector("." + data_array[0]);
				var data_index = data_array[1];
				var data_bp = data_array[2];

				if (w < data_bp) {
					if (!_el7.classList.contains("js-move_done_" + data_bp)) {
						if (data_index > 0) {
							//insertAfter
							var actual_index = index_of_elements(data_parent)[data_index];
							data_parent.insertBefore(_el7, data_parent.childNodes[actual_index]);
						} else {
							data_parent.insertBefore(_el7, data_parent.firstChild);
						}

						_el7.classList.add("js-move_done_" + data_bp);
					}
				} else {
					if (_el7.classList.contains("js-move_done_" + data_bp)) {
						dynamic_adaptive_back(_el7);

						_el7.classList.remove("js-move_done_" + data_bp);
					}
				}
			}
		}
	}
}

function dynamic_adaptive_back(el) {
	var index_original = el.getAttribute("data-move-index");
	var move_place = move_array[index_original];
	var parent_place = move_place["parent"];
	var index_place = move_place["index"];

	if (index_place > 0) {
		//insertAfter
		var actual_index = index_of_elements(parent_place)[index_place];
		parent_place.insertBefore(el, parent_place.childNodes[actual_index]);
	} else {
		parent_place.insertBefore(el, parent_place.firstChild);
	}
}

function index_in_parent(node) {
	var children = node.parentNode.childNodes;
	var num = 0;

	for (var _i2 = 0; _i2 < children.length; _i2++) {
		if (children[_i2] == node) return num;
		if (children[_i2].nodeType == 1) num++;
	}

	return -1;
}

function index_of_elements(parent) {
	var children = [];

	for (var _i3 = 0; _i3 < parent.childNodes.length; _i3++) {
		if (parent.childNodes[_i3].nodeType == 1 && parent.childNodes[_i3].getAttribute("data-move") == null) {
			children.push(_i3);
		}
	}
	return children;
}

window.addEventListener("resize", function (event) {
	dynamic_adapt();
});
dynamic_adapt();