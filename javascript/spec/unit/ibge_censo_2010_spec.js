
describe 'IBGECenso2010'
  describe '.sex_ratio'

	before_each
		censo = new IBGECenso2010();
	  	sex_ratio = censo.sex_ratio();
	end

    it 'should open with "Razão de sexo, população de homens e mulheres"'
		sex_ratio.should.not.be_null
		sex_ratio.content.should.match /Razão de sexo, população de homens e mulheres/
    end

	it 'should get number of women' 
		var women = sex_ratio.women_per_region()
	
		women["N"].should.eql "7859539"
		women["NE"].should.eql "27172904"
		women["S"].should.eql "41287763"
		women["SE"].should.eql "13950480"
		women["CO"].should.eql "7078123"
		
	end

  end
end