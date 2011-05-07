require 'sinatra'
require 'googlecharts'
require 'lib/ibge_censo2010'

get '/' do
	census = IBGECenso2010.new
	
	sex_ratio = census.sex_ratio
	women = sex_ratio.women_per_region
	men = sex_ratio.men_per_region
	
	@women_ratio = { 
		:N => women[:N]/(men[:N] + women[:N]) * 100,
		:NE => women[:NE]/(men[:NE] + women[:NE]) * 100,
		:S => women[:S]/(men[:S] + women[:S]) * 100,
		:SE => women[:SE]/(men[:SE] + women[:SE]) * 100,
		:CO => women[:CO]/(men[:CO] + women[:CO]) * 100
	}
	
	literacy = census.literacy
	literates = literacy.literates_per_region
	not_children = literacy.not_children_per_region

	@literates_ratio = {
		:N => (literates[:N]/not_children[:N]) * 100,
		:NE => (literates[:NE]/not_children[:NE]) * 100,
		:S => (literates[:S]/not_children[:S]) * 100,
		:SE => (literates[:SE]/not_children[:SE]) * 100,
		:CO => (literates[:CO]/not_children[:CO]) * 100,
	}

	erb :index
end

