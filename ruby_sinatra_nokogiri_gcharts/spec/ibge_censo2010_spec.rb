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

		it 'should get number of men' do
			
			men = sex_ratio.men_per_region
			
			men.should be
			men[:N].should == 8004915
			men[:NE].should == 25909046
			men[:SE].should == 39076647
			men[:S].should == 13436411
			men[:CO].should == 6979971
		end

  end

	describe 'literate people' do
		
			let(:literacy) { census.literacy}
			
			it 'should open page with "Pessoas de 10 anos ou mais de idade, total e alfabetizadas, por situação do domicílio, segundo as Grandes Regiões e as Unidades da Federação - 2010"' do
				literacy.should be
				literacy.content.should match /Pessoas de 10 anos ou mais de idade, total e alfabetizadas, por situação do domicílio, segundo as Grandes Regiões e as Unidades da Federação - 2010/
			end

			it 'should get number of readers > 10 yo' do
				
				literates = literacy.literates_per_region
				
				literates[:N].should == 11326492
				literates[:NE].should == 36418124
				literates[:SE].should == 65979578
				literates[:S].should == 22571641
				literates[:CO].should == 11082347
			end
			
			it 'should get population > 10 yo' do
				
				population = literacy.not_children_per_region
				
				population[:N].should == 12670041
				population[:NE].should == 44223349
				population[:SE].should == 69532602
				population[:S].should == 23694211
				population[:CO].should == 11870062
			end
			
	end

end
