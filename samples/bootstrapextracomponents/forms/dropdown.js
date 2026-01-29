/**
 * @type {Boolean}
 *
 * @properties={"typeid":35,"uuid":"ACC329D5-0934-40C7-834A-023FCF2DE9CD","variableType":-4}
 */
var enabled = true;

/**
 * @type {Boolean}
 * @properties={"typeid":35,"uuid":"0AE8015A-6A04-4225-83E6-017A015ABDD8","variableType":-4}
 */
var visible = true;

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"859CF67A-E02B-451F-9F86-819F7C24897A"}
 */
var tooltip = 'Options';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"73CC601D-3EBB-409B-8EFB-A907A7FC4B26"}
 */
var text = 'Options';

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
 * @private
 *
 * @properties={typeid:24,uuid:"74847CC4-91E4-404E-94D3-5481F8670996"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.info_label.text = '<b>Text Selected :</b> <br><br> %%text%% <br><br>'
	elements.info_label.text += '<b>onDataChange</b> <br><br>' + 'oldValue : ' + oldValue + ' <br><br> ' + 'newValue : ' + newValue;
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1F7AD5D2-EB4D-4DAF-B4C0-C621B9272AF4"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.dropdown_1.addStyleClass('btn btn-success')

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"977891B3-B61E-47B6-B156-F67E75F794E2"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.dropdown_1.removeStyleClass('btn btn-success')
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
 * @private
 *
 * @properties={typeid:24,uuid:"66C5E842-9866-4454-8D96-34A91F359C9F"}
 */
function onDataChange$enabled(oldValue, newValue, event) {
	elements.dropdown_1.enabled = (enabled == 0 ? false : true);
	elements.info_label.text = (enabled == 0 ? '<b>Disabled</b> <hr> ' : '<b>Enabled</b> <hr> ')
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *@return {Boolean}
 * @properties={typeid:24,uuid:"5DDF9593-9C7D-43AB-AED3-F1579693AE8A"}
 */
function onDataChange$visible(oldValue, newValue, event) {
	elements.dropdown_1.visible = (visible == 0 ? false : true);
	elements.info_label.text = (visible == 0 ? '<b>Disabled</b> <hr> ' : '<b>Enabled</b> <hr> ')
	return true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"21315E49-C725-4406-A90F-AEF3858F4D27"}
 */
function onAction(event) {
	elements.info_label.text = '<b>onAction event fired</b>'

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"28A7BE95-F48A-4C7F-B3B9-5544536DD00D"}
 */
function onDoubleClick(event) {
	elements.info_label.text = '<b>onDoubleClick event fired</b>'

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F7154BF0-4C64-44E2-A41C-94B4D15AA18C"}
 */
function onRightClick(event) {
	elements.info_label.text = '<b>onRightClick event fired</b>'

}

/**

 * @protected
 *
 * @properties={typeid:24,uuid:"55D0B6FD-5E7A-4875-9B45-A5408B852EEB"}
 */
function onAction1_menuCustomers() {
	plugins.dialogs.showInfoDialog("Customers","You selected Customers Menu")
}

/**

 * @protected
 *
 * @properties={typeid:24,uuid:"68DCF7C9-B6DA-4FFD-9E9E-ED815C5EC77A"}
 */
function onAction_menuOrders() {
	plugins.dialogs.showInfoDialog("Customers","You selected Orders Menu")
}

/**

 * @protected
 *
 * @properties={typeid:24,uuid:"11AE3110-D1DE-4C8F-8FF4-C250CCF7E97F"}
 */
function onAction_menuProduct() {
	plugins.dialogs.showInfoDialog("Customers","You selected Products Menu")
}
