require 'open-uri'
require 'nokogiri'

class IBGECenso2010

  def sex_ratio
    url = "http://www.censo2010.ibge.gov.br/sinopse/index.php?dados=1R&uf=00"
    @doc = Nokogiri::HTML(open(url))
    self
  end

	def literacy
    url = "http://www.censo2010.ibge.gov.br/sinopse/index.php?dados=P6&uf=00"
    @doc = Nokogiri::HTML(open(url))
    self
  end

  def content
    @doc.content
  end

  def women_per_region

    table = @doc.css(".td_numeros")

    { :N => table[5].content.gsub!('.','').to_f,
      :NE => table[8].content.gsub!('.','').to_f,
      :SE => table[11].content.gsub!('.','').to_f,
      :S => table[14].content.gsub!('.','').to_f,
      :CO => table[17].content.gsub!('.','').to_f
    }
  end

  def men_per_region

    table = @doc.css(".td_numeros")

    { :N => table[4].content.gsub!('.','').to_f,
      :NE => table[7].content.gsub!('.','').to_f,
      :SE => table[10].content.gsub!('.','').to_f,
      :S => table[13].content.gsub!('.','').to_f,
      :CO => table[16].content.gsub!('.','').to_f
    }
  end

	def literates_per_region

    table = @doc.css(".td_numeros")

    { :N => table[9].content.gsub!('.','').to_f,
      :NE => table[15].content.gsub!('.','').to_f,
      :SE => table[21].content.gsub!('.','').to_f,
      :S => table[27].content.gsub!('.','').to_f,
      :CO => table[33].content.gsub!('.','').to_f
    }
  end

	def not_children_per_region

    table = @doc.css(".td_numeros")

    { :N => table[6].content.gsub!('.','').to_f,
      :NE => table[12].content.gsub!('.','').to_f,
      :SE => table[18].content.gsub!('.','').to_f,
      :S => table[24].content.gsub!('.','').to_f,
      :CO => table[30].content.gsub!('.','').to_f
    }
  end

end
