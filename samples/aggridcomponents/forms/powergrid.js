/**
 * @properties={typeid:24,uuid:"76778AFD-95AF-430F-B276-D50E77BE7154"}
 */
function createData(){
	var ds = scopes.globals.ds
//	application.output(ds)
	c = elements.powergrid_1.newColumn('country'); c.dataprovider = 'country';c.headerTitle='Country'; c.rowGroupIndex = 1; c.maxWidth = 140;
	c = elements.powergrid_1.newColumn('athlete'); c.dataprovider = 'athlete';c.headerTitle='athlete'; c.maxWidth = 140;
	c = elements.powergrid_1.newColumn('sport'); c.dataprovider = 'sport';c.headerTitle='Sport'; c.pivotIndex = 2;
	c = elements.powergrid_1.newColumn('year'); c.dataprovider = 'year';c.headerTitle='Year'; c.pivotIndex = 3; c.maxWidth = 140;
	c = elements.powergrid_1.newColumn('date'); c.dataprovider = 'date';c.headerTitle='Date'; c.pivotIndex = 4; c.maxWidth = 140;
	c = elements.powergrid_1.newColumn('gold'); c.dataprovider = 'gold';c.headerTitle='Gold'; c.aggFunc = 'sum'; c.maxWidth = 140;
	c = elements.powergrid_1.newColumn('silver'); c.dataprovider = 'silver';c.headerTitle='Silver'; c.aggFunc = 'sum'; c.maxWidth = 140;
	c = elements.powergrid_1.newColumn('bronze'); c.dataprovider = 'bronze';c.headerTitle='Bronze'; c.aggFunc = 'sum'; c.maxWidth = 140;
		
	elements.powergrid_1.renderData(ds)	
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F3326B9A-FE8E-42E2-82CF-C6AC9A85BC18"}
 */
function onAction$enablePivot(event) {

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3F53D903-B294-4B28-B99F-2CA1E98CCED6"}
 */
function onAction$addStyle(event) {
	elements.info_label.text = '<b>Add Style Class</b> <hr> '
	elements.powergrid_1.addStyleClass('custom_calendar_style')
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E3F93712-4440-4E50-B01F-B9AEE1CE001A"}
 */
function onAction$removeStyle(event) {
	elements.info_label.text = '<b>Remove Style Class</b> <hr> '
	elements.powergrid_1.removeStyleClass('custom_calendar_style')
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CA399604-5865-4284-9BBE-116BCE9FC237"}
 */
function onLoad(event) {
	if(!scopes.globals.ds){
		scopes.globals.createData()
	}
	
	createData()
}
