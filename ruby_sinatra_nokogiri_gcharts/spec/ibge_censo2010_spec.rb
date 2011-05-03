require 'rspec'
require 'ibge_censo2010'

describe IBGECenso2010 do

  let(:census) { IBGECenso2010.new }

  describe 'sex ratio' do

    let(:sex_ratio) { census.sex_ratio }

    it 'should open page with "Razão de sexo, população de homens e mulheres"' do
      sex_ratio.should be
      sex_ratio.content.should match /Razão de sexo, população de homens e mulheres/
    end

    it 'should get number of women' do
		
			women = sex_ratio.women_per_region
			
      women.should be
      women[:N].should == 7859539
			women[:NE].should == 27172904
			women[:SE].should == 41287763
			women[:S].should == 13950480
			women[:CO].should == 7078123
    end

  end

	describe 'literate people' do
		
			let(:literacy) { census.literacy}
			
			it 'should open page with "Pessoas de 10 anos ou mais de idade, total e alfabetizadas, por situação do domicílio, segundo as Grandes Regiões e as Unidades da Federação - 2010"' do
				literacy.should be
				literacy.content.should match /Pessoas de 10 anos ou mais de idade, total e alfabetizadas, por situação do domicílio, segundo as Grandes Regiões e as Unidades da Federação - 2010/
			end

			it 'should get number of readers' do
				
				literates = literacy.literates_per_region
				
				literates[:N].should == 11326492
				literates[:NE].should == 36418124
				literates[:SE].should == 65979578
				literates[:S].should == 22571641
				literates[:CO].should == 11082347
			end
			
	end

end
