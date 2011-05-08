var IBGECenso2010 =  {
	
	sex_ratio: function() {
		var URL = "http://www.censo2010.ibge.gov.br/sinopse/index.php?dados=1R&uf=00";
		htmldoc = this.open_html_doc(URL);
		return IBGECenso2010SexRatio.get_instance(htmldoc);
	},
	
	literacy: function() {
		var URL = "http://www.censo2010.ibge.gov.br/sinopse/index.php?dados=P6&uf=00";
		htmldoc = this.open_html_doc(URL);
		return IBGECenso2010LiteratesRatio.get_instance(htmldoc);
	},
	
	open_html_doc: function(url) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, false);
		xhr.send();
		
		return xhr.responseText;
	}
}


var IBGECenso2010SexRatio = {

	get_instance: function(htmldoc) {
		this.content = htmldoc;
		return this;
	},
	
	women_per_region: function() {
		return get_census_values(this,5,8,11,14,17);
	},
	
	men_per_region: function() {
		return get_census_values(this,4,7,10,13,16);
	}
}


var IBGECenso2010LiteratesRatio = {
	
	get_instance: function(htmldoc) {
		this.content = htmldoc;
		return this;
	},
	
	literates_per_region: function() {
		return get_census_values(this,9,15,21,27,33);
	},
	
	not_children_per_region: function() {
		return get_census_values(this,6,12,18,24,30);
	}
	
}

get_census_values = function(page,n,ne,se,s,co) {
	var td_numbers_global = /<td class="td_numeros".*>.*<\/td>/g
	var td_numbers_local = /<td class="td_numeros".*>(.*)<\/td>/

	numbers = page.content.match(td_numbers_global);

	var in_n = numbers[n].match(td_numbers_local)[1].replace(/\./g, '');
	var in_ne = numbers[ne].match(td_numbers_local)[1].replace(/\./g, '');
	var in_se = numbers[se].match(td_numbers_local)[1].replace(/\./g, '');
	var in_s = numbers[s].match(td_numbers_local)[1].replace(/\./g, '');
	var in_co = numbers[co].match(td_numbers_local)[1].replace(/\./g, '');

	return {
		"N"  : in_n,
		"NE" : in_ne,
		"SE" : in_se,
		"S"	 : in_s,
		"CO" : in_co
	}
}
