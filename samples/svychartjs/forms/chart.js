/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"D519EF4E-1583-4A0A-ACA9-F7D6D01A4909"}
 */
var legend = 'The Chart';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"F0EA60CF-7124-4874-B780-AEAD19F871AE"}
 */
var backgroundcolorscheme = '';

/**
 * @properties={typeid:24,uuid:"CDE578A2-FB06-4610-B987-0E969C90B5EB"}
 */
function drawPie() {
	elements.chart.clearChart();
	/**
	 * @properties={typeid:35,uuid:"63796707-1832-4650-A4C1-0D847CC7C485",variableType:-4}
	 */
	var data = {
		type: 'pie',
		data: {
			labels: ["Red",
			"Green",
			"Yellow", "Black"],
			datasets: [{
				data: [10, 20, 30, 40],
				backgroundColor: ["#F7464A",
				"#46BFBD",
				"#FDB45C", "black"],
				hoverBackgroundColor: ["#FF5A5E",
				"#5AD3D1",
				"#FFC870", "black"]
			}]
		}
	}
	
	var options = {
		title: {
			display: true,
			text: 'Pie Chart'
		}
	}
	//Initialize the chart by using setData
	elements.chart.setData(data);
	elements.chart.setOptions(options);
}

/**
 * @properties={typeid:24,uuid:"9DE9DE2A-5672-4BCA-8A41-D32A795D3977"}
 */
function drawBar() {
	elements.chart.clearChart();
	var options = {
		title: {
			display: false,
			text: 'Horizontal Bar Chart'
		},
		legend: {
			display: false
		},
		plugins:{
			legend: false
		}
	}
	/**
	 * @properties={typeid:35,uuid:"63796707-1832-4650-A4C1-0D847CC7C485",variableType:-4}
	 */
	var data = {
		type: 'bar',
		data: {
			labels: ["Red",
			"Green",
			"Yellow", "Black"],
			datasets: [{
				data: [10, 20, 50, 15],
				backgroundColor: ["#F7464A",
				"#46BFBD",
				"#FDB45C", "black"],
				hoverBackgroundColor: ["#FF5A5E",
				"#5AD3D1",
				"#FFC870", "black"]
			}]
		}
	}

	//Initialize the chart by using setData
	elements.chart.setData(data);
	elements.chart.setOptions(options);
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3A3BDD3D-7A38-471B-A15B-A272C6FA7BE3"}
 */
function onLoad(event) {
	drawPie();
}
