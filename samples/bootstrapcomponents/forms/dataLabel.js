/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"E7C18B62-19AF-49AA-9149-F189599EBEB8"}
 */
var text3 = "Format-lets you choose the formatting of the chars";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"9185DA9E-C421-491B-BE87-3450DEA22DD3"}
 */
var text2 = "Data Provider-displays data from a specific source";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"5F17B97C-7728-453C-A93F-0D03FB747AF8"}
 */
var text = "This is a tooltip";

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FFCD2029-8A3F-412E-A887-D4BAFBE097D8"}
 */
function addDate(event) {
	// TODO Auto-generated method stub
customer1= new Date();
elements.info_label.text="<b>Changed data provider</b><br>Added a random date";
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E6F6E1D3-344A-45AE-8424-CB585CA0A1B7"}
 */
function addNumber(event){
	customer1= Math.floor(Math.random() * 10);
	elements.info_label.text="<b>Changed data provider</b><br>Added a random int ";
}

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"E39FDB04-C917-467E-BA1F-3EADAD56138B"}
 */
var customer1 = "This is the datalabel";

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FED27E88-E095-4169-B306-B5F8C45135F5"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.datalabel_2.addStyleClass('')

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5052BBB4-22CF-4FE9-B8FE-D6F0F19C6270"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.datalabel_2.removeStyleClass('custom_calendar_style')
}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"54297362-1221-41C3-BE1B-6236932195E5"}
 */
function onAction(event, dataTarget) {
	// TODO Auto-generated method stub
	elements.info_label.text="<b>onAction</b><br>The Datalabel has been triggered";

}
