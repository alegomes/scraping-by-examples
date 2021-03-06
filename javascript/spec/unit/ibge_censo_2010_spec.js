
describe 'IBGECenso2010'
  describe '.sex_ratio'

	before_each
	  	sex_ratio = IBGECenso2010.sex_ratio();
	end

    it 'should open with "Razão de sexo, população de homens e mulheres"'
		sex_ratio.should.not.be_null
		sex_ratio.content.should.match /Razão de sexo, população de homens e mulheres/
    end
	
	it 'should get number of women' 
		var women = sex_ratio.women_per_region()
	
		women["N"].should.eql 7859539
		women["NE"].should.eql 27172904
		women["SE"].should.eql 41287763
		women["S"].should.eql 13950480
		women["CO"].should.eql 7078123
	end
	
	it 'should get number of men' 
		var men = sex_ratio.men_per_region()
	
		men["N"].should.eql 8004915
		men["NE"].should.eql 25909046
		men["SE"].should.eql 39076647
		men["S"].should.eql 13436411
		men["CO"].should.eql 6979971
	end
	
	it 'should get population per region'
		var women = sex_ratio.women_per_region()
		var men = sex_ratio.men_per_region()
		var population = sex_ratio.population_per_region()
		
		population["N"].should.eql (women["N"] + men["N"])
		population["NE"].should.eql (women["NE"] + men["NE"])
		population["SE"].should.eql (women["SE"] + men["SE"])
		population["S"].should.eql (women["S"] + men["S"])
		population["CO"].should.eql (women["CO"] + men["CO"])
	end
	
	it 'should get women ratio per region'
		var women_ratio = sex_ratio.women_ratio_per_region()
	
		parseInt(women_ratio["N"] * 100).should.eql 49
		parseInt(women_ratio["NE"] * 100).should.eql 51
		parseInt(women_ratio["SE"] * 100).should.eql 51
		parseInt(women_ratio["S"] * 100).should.eql 50
		parseInt(women_ratio["CO"] * 100).should.eql 50
	end

  end

  describe '.literates_ratio'
  	
    	before_each
    	  	literacy = IBGECenso2010.literacy()
    	end
  		
  		it 'should open page with "Pessoas de 10 anos ou mais de idade, total e alfabetizadas, por situação do domicílio, segundo as Grandes Regiões e as Unidades da Federação - 2010"'
  			literacy.should.not.be_null
  			literacy.content.should.match /Pessoas de 10 anos ou mais de idade, total e alfabetizadas, por situação do domicílio, segundo as Grandes Regiões e as Unidades da Federação - 2010/
  		end
  
  		it 'should get number of readers > 10 yo'
  			literates = literacy.literates_per_region()
  			
  			literates["N"].should.eql 11326492
  			literates["NE"].should.eql 36418124
  			literates["SE"].should.eql 65979578
  			literates["S"].should.eql 22571641
  			literates["CO"].should.eql 11082347
  		end
		
		it 'should get population > 10 yo'
			
			population = literacy.not_children_per_region()
			
			population["N"].should.eql 12670041
			population["NE"].should.eql 44223349
			population["SE"].should.eql 69532602
			population["S"].should.eql 23694211
			population["CO"].should.eql 11870062
		end
		
		it 'should get literates ratio' 
		
			literates = literacy.literates_per_region()
			population = literacy.not_children_per_region()
			
			literates_ratio = literacy.literates_ratio_per_region()
			literates_ratio["N"].should.eql literates["N"]/population["N"]
			literates_ratio["NE"].should.eql literates["NE"]/population["NE"]
			literates_ratio["SE"].should.eql literates["SE"]/population["SE"]
			literates_ratio["S"].should.eql literates["S"]/population["S"]
			literates_ratio["CO"].should.eql literates["CO"]/population["CO"]
		end
	end
end