/**
 * @type {Number}
 *
 * @properties={"typeid":35,"uuid":"A8DBD78E-E4CF-494F-BC40-A12396990706","variableType":4}
 */
var enableColumnMove = 1;

/**
 * @type {Number}
 * 
 * @properties={"typeid":35,"uuid":"0057CEE1-F4E7-495D-8AEC-A9C7A8E51096","variableType":4}
 */
var enableSorting = 1;

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C2FAFD4E-4046-441F-AC4E-62E5EED50F1D"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.datagrid.addStyleClass('custom_calendar_style')
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DE142640-78AD-40FE-B26A-80185B0A0A9D"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.datagrid.removeStyleClass('custom_calendar_style')
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
 * @properties={typeid:24,uuid:"05D2F9DC-78B4-49E0-B326-1B81E6E878DE"}
 */
function onDataChange$enableColumnMove(oldValue, newValue, event) {
	solutionModel.getForm(controller.getName()).getWebComponent('datagrid').setJSONProperty('enableColumnMove', newValue)
	
	controller.recreateUI();
	
	if(newValue){
		elements.info_label.text = '<b>Moving of columns has been enabled</b><hr>'			
	}
	else{
		elements.info_label.text = '<b>Moving of columns has been disabled</b><hr>'			
	}
	
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
 * @private
 *
 * @properties={typeid:24,uuid:"F2C29AA8-1C2E-4A89-8D5C-CB8EA3756075"}
 */
function onDataChange$enableColumnResize(oldValue, newValue, event) {
	solutionModel.getForm(controller.getName()).getWebComponent('datagrid').setJSONProperty('enableSorting', newValue)
	controller.recreateUI();
	
	
	if(newValue){
		elements.info_label.text = '<b>Sorting of columns has been enabled</b><hr>'			
	}
	else{
		elements.info_label.text = '<b>Sorting of columns has been disabled</b><hr>'			
	}
	
	
	return true
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"40081CF7-EEA3-442A-8202-58FD6366BF0C"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	elements.info_label.text = '<b>Column '+columnindex+' of record ' + foundsetindex + ' has been clicked</b><hr>'	
	
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4EBCB16F-A20B-44DF-8B1E-B07BA5CCA873"}
 */
function onActionChangeEditType(event) {
	var colIndex = elements.datagrid.getColumnIndex('athlete')
	
	if(!elements.datagrid.getColumn(colIndex).editType){
		elements.datagrid.getColumn(colIndex).editType = 'TEXTFIELD'
		elements[event.getElementName()].text = 'Disable editing of first name'
		elements.info_label.text = '<b>Column first name is now be editable by double clicking in the column</b><hr>'				
	}
	else{
		
		elements.datagrid.getColumn(colIndex).editType = null		
		elements[event.getElementName()].text = 'Enable editing of first name'		
		elements.info_label.text = '<b>Column first name is no longer editable</b><hr>'				
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1C91842E-B250-42D8-A8B7-F23A9992DE45"}
 */
function onLoad(event) {
	if(!scopes.globals.ds){
		scopes.globals.createData()
	}
}
