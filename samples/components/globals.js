/**
 * @type {JSDataSet}
 *
 * @properties={"typeid":35,"uuid":"28A268E9-30A0-421A-B9D2-B3F68B33B99E","variableType":-4}
 */
var ds;

/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>|String>} queryParams all query parameters of the deeplink url with which the Client was started, key>string if there was one value else key>Array<String>
 *
 * @properties={typeid:24,uuid:"44E802B4-B12F-4683-91B2-AF980EA8DDF6"}
 */
function onSolutionOpen(arg, queryParams) {
	if (queryParams.argument && forms[queryParams.argument])
	forms.nav.elements.navbar.containedForm = forms[queryParams.argument]
}

/**
 * @properties={typeid:24,uuid:"BCC54BEF-4DBC-49E6-86AA-397939A94D69"}
 */
function createData(){
	var f = plugins.file.createTempFile('.json','olympic-winners')
	f.setBytes(solutionModel.getMedia('olympic-winners.json').bytes)
	var data = JSON.parse(plugins.file.readTXTFile(f))
	ds = databaseManager.createEmptyDataSet();
	ds.addColumn('country')
	ds.addColumn('athlete')
	ds.addColumn('sport')
	ds.addColumn('year')
	ds.addColumn('date')
	ds.addColumn('gold')
	ds.addColumn('silver')
	ds.addColumn('bronze')

	var fs = datasources.mem.data.getFoundSet()
	
	for (var i = 0; i < data.length; i++) {		
		ds.addRow([data[i].country,data[i].athlete,data[i].sport,data[i].year,data[i].date,data[i].gold,data[i].silver,data[i].bronze]);
		
		fs.newRecord()
		fs.country = data[i].country
		fs.athlete = data[i].athlete
		fs.sport = data[i].sport
		fs.year = data[i].year
		fs.date= data[i].date
		fs.gold = data[i].gold
		fs.silver = data[i].silver
		fs.bronze = data[i].bronze
		
	}
	
}

/**
 * @properties={"typeid":35,"uuid":"E5CBEC44-1F3B-4891-9BD0-496814A00BDA","variableType":-4}
 */
var previousq = [];

/**
 * @properties={typeid:24,uuid:"2B298414-D336-4211-8542-0418A4343475"}
 */
function gitbooksAPIClear(){
	previousq = [];
}

/**
 * TODO generated, please specify type and doc for the params
 * @param q
 *
 * @properties={typeid:24,uuid:"F852A942-1EDB-409A-B337-35E2E9107183"}
 */
function gitbooksAPI(q,prevq){
	
	var h = plugins.http.createNewHttpClient();
	var g = h.createPostRequest('https://api.gitbook.com/v1/search/ask');
	g.addHeader('content-type','application/json')
	var qq = {query: q, previousQuerie:[prevq]};
	g.setBodyContent(JSON.stringify(qq))
	g.addHeader('Authorization','Bearer gb_api_K7Oq4oRLQNpK6xKbLtj4HYKksAyl66nwTUkHbOXl')
	var e = g.executeRequest()
	previousq.push(q) // store previous questions
	return JSON.parse(e.getResponseBody()).answer.text;
}
