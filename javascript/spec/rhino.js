
load('/Applications/javatools/jspec-4.3.2/lib/jspec.js')
load('/Applications/javatools/jspec-4.3.2/lib/jspec.xhr.js')
load('lib/ibge_censo_2010.js')
load('spec/unit/ibge_censo_2010_spec.helper.js')

JSpec
.exec('spec/unit/ibge_censo_2010_spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()