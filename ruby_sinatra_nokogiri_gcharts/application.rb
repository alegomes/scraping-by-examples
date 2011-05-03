require 'sinatra'
require 'googlecharts'
require 'lib/ibge_censo2010'

get '/' do
	census = IBGECenso2010.new
	@women = census.sex_ratio.women_per_region
	@literates = census.literacy.literates_per_region
	
	erb :index
end
