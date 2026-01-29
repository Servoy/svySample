/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"D0660F3B-7FB3-42DB-874B-7F1528C14E8E"}
 */
var tooltip = "This is a tooltip";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"49F43F6A-F0E4-4E18-9DC4-B52B468D293A"}
 */
var GroupText = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7E589AD9-FE10-4472-B9BE-D91F1EB22509"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	if(elements.groupbuttons_1.valuelist=="GroupButtons"){
		
	elements.groupbuttons_1.valuelist="GroupButtons2"
    elements.info_label.text="Valuelist has been changed!"
	}
	else{
		elements.groupbuttons_1.valuelist="GroupButtons"
		elements.info_label.text="Valuelist has been changed again!!"
	}
	


}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"14B3EF2F-F795-4063-915F-427B67AED08A"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.groupbuttons_1.removeStyleClass('')
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4AA034AE-9242-42AE-873C-C4C2CCB30B07"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.groupbuttons_1.addStyleClass('')

}
