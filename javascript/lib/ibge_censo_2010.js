var IBGECenso2010 = function() {
	
}

IBGECenso2010.prototype = {
	
	sex_ratio: function() {
		var URL = "http://www.censo2010.ibge.gov.br/sinopse/index.php?dados=1R&uf=00";

		var xhr = new XMLHttpRequest();
		xhr.open("GET", URL, false);
		xhr.send();
		
		var htmldoc = xhr.responseText;
		
		var parser = new DOMParser();
		var xmldoc = parser.parseFromString(htmldoc, "text/xml");

		return new IBGECenso2010SexRatio(htmldoc);
	}
}

var IBGECenso2010SexRatio = function(htmldoc) {
	this.content = htmldoc;
}

IBGECenso2010SexRatio.prototype = {
	women_per_region: function() {
		
		var td_numbers_global = /<td class="td_numeros".*>.*<\/td>/g
		var td_numbers_local = /<td class="td_numeros".*>(.*)<\/td>/
		
		numbers = this.content.match(td_numbers_global);
		
		var women_in_n = numbers[5].match(td_numbers_local)[1].replace(/\./g, '');
		var women_in_ne = numbers[8].match(td_numbers_local)[1].replace(/\./g, '');
		var women_in_s = numbers[11].match(td_numbers_local)[1].replace(/\./g, '');
		var women_in_se = numbers[14].match(td_numbers_local)[1].replace(/\./g, '');
		var women_in_co = numbers[17].match(td_numbers_local)[1].replace(/\./g, '');
		
		return {
			"N"  : women_in_n,
			"NE" : women_in_ne,
			"S"	 : women_in_s,
			"SE" : women_in_se,
			"CO" : women_in_co
		}
	}
}
