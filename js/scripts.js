var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
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


	console.log(obshchaya_summa_sliderField1)

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

obshchaya_summa_sliderField1.noUiSlider.on('update', function(values, handle) {
	if (values[handle] == false) {} else {
		obshchaya_summa_rangeField1.value = values[handle];
	}
});

obshchaya_summa_sliderField1.noUiSlider.on('change', function(values, handle) {
});

obshchaya_summa_rangeField1.addEventListener('change', function() {
	obshchaya_summa_rangeField1.noUiSlider.set(this.value);

});

}