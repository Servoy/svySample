/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"B46835C2-BBE0-48D6-A313-A7C7BC51F5CB"}
 */
var firstItemIcon = 'RIGHT';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"D45ECEF0-F240-4165-8640-819BC3E8341D"}
 */
var firstItemPosition = 'LEFT';

/**
 * @type {String}
 *
 * @properties={"typeid":35,"uuid":"38A37EF5-D545-43CE-B7D5-2F957D84EAB6"}
 */
var brandText = 'Servoy';

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0416DB60-60A9-4D9C-AAAB-583C20FAA56A"}
 */
function onActionMenuItem(event) {
	var text = plugins.dialogs.showInputDialog('Enter the text for the menu item','')
	var menuItem = elements.navbar.createMenuItem(text)
	elements.navbar.addMenuItem(menuItem)
	
	elements.info_label.text = 'menuItem ' + menuItem.text + ' has been added'	
}

/**
 * Called whenever a menu item is clicked or a submenu item is selected with the JSEvent and the menuItem object clicked on.
 *
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-navbar.menuItem>} menuItem
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3E2FE95D-74DE-408C-96C9-A61E97615C41"}
 */
function onMenuItemClicked(event, menuItem) {
	elements.info_label.text = 'menuItem ' + menuItem.text + ' has been clicked'

}

/**
 * Called when the user clicks on the brand logo or text.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"56E562D3-4750-423E-8ED1-B726AC21A140"}
 */
function onBrandClicked(event) {
	elements.info_label.text = 'Brand has been clicked'	
		
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0101C9CB-8BCF-4AD0-B9CE-3FDDE720B8A8"}
 */
function onActionAddBrandLogo(event) {
	elements.multifileupload_2.openModal()
	
}

/**
 * @param {JSUpload} jsUpload
 *
 * @private
 *
 * @properties={typeid:24,uuid:"256CCB05-BC77-456D-A134-CD5EED1435B3"}
 */
function onFileUploaded(jsUpload) {
	elements.navbar.brandLogo = null	
	var media = solutionModel.getMedia('brandLogo')
	if(media){
		media.bytes = jsUpload.getBytes()	
	}
	else{
		media = solutionModel.newMedia("brandlogo",jsUpload.getBytes())
	}
	
	elements.navbar.brandLogo = media.getName()
	
	elements.info_label.text = 'New brand logo is uploaded'
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
 * @properties={typeid:24,uuid:"8B8BEC2C-2772-4FEF-8464-C8E35076AF36"}
 */
function onDataChangePosition(oldValue, newValue, event) {
	elements.navbar.menuItems[0].position = newValue
	elements.info_label.text = 'Position is set to ' + newValue
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
 * @private
 *
 * @properties={typeid:24,uuid:"E5E91ADE-D973-42ED-98A3-1E42D33F41AF"}
 */
function onDataChangeIcon(oldValue, newValue, event) {
	elements.navbar.menuItems[0].iconName = newValue
	elements.info_label.text = 'Icon is set to ' + newValue	
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
 * @properties={typeid:24,uuid:"EA250D70-EA17-42FB-9408-166DAEDB71F0"}
 */
function onDataChangeBrandText(oldValue, newValue, event) {
	elements.info_label.text = 'Brand text is set to ' + brandText
	return true
}
