/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"80385621-3533-4E7A-938D-1A7FEA3F9116"}
 */
var offColor = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"B91D1AAD-8D71-40FA-8A42-EF9C85C56FE1"}
 */
var onColor = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"66C2820F-23AB-425A-B4AD-726367328F7B"}
 */
var changeSize = null;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"02D68ACD-9C5E-4EFC-BA66-F41D1C318577"}
 */
var LabelShown = null;

/**
 * @properties={"typeid":35,"uuid":"6BE0E454-D917-4D19-A5FC-5DD4F22BE2E4","variableType":-4}
 */
var enabled = true;

/**
 * @properties={"typeid":35,"uuid":"401C4FE4-659A-47CF-9C6C-DCD73EA95C81","variableType":-4}
 */
var enableAnimate = false;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"D5F6FB9E-EE03-441A-B295-2C51E4E188FA"}
 */
var labelSwitchButton = "Switch button";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"CA34B969-4DE6-4257-A92D-50DAB56BC7E3"}
 */
var offText = "off";

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"79BC73DE-46D7-4B47-AB0E-6DC2E91F33E4"}
 */
var onText = "on";

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"2E15C38E-B96C-439E-97CD-C4C539C0E883"}
 */
function onDataChange(oldValue, newValue, event) {
	if(LabelShown == 1){
	elements.info_label.text = "<b>Switch is on</b><br><br>"
	}else{
		elements.info_label.text = "<b>Switch is off</b>"
	}  	
	return true;
}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"6BBD34CB-601F-484A-8F55-1E7FA9C1F9DE"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.switch_button2.enabled = (enabled == 0?false:true);	
	elements.info_label.text = (enabled == 0?'<b>Button disabled</b> <hr> ':'<b>Button enabled</b> <hr> ')
	return true
}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"B473CF05-7653-46BA-AAA0-93CC49433872"}
 */
function onDataChangeSwitchButton(oldValue, newValue, event) {
	 elements.switch_button2.componentSize = changeSize;
	 elements.switch_button2.onColor = onColor;
	 elements.switch_button2.offColor = offColor;
	 elements.info_label.text = "";
	 if(changeSize){
	 elements.info_label.text += "<b>the size was changed</b>"
	 }
	 if(onColor){
		 elements.info_label.text += "<b>On color was changed</b>" 
	}
	if(offColor){
		elements.info_label.text += "<b>Off color was changed</b>"
	}
	return true;
}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"3598820D-1AB3-44F4-8E9F-F21B2F2EBB6E"}
 */
function onDataChangeChangeAnimation(oldValue, newValue, event) {
	elements.switch_button2.animate = (enableAnimate == 0?false:true);	
	elements.info_label.text = (enableAnimate == 0?'<b>Animation disabled</b> <hr> ':'<b>Animation enabled</b> <hr> ')
	return true
}
