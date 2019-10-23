const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    var depassement = 0
    var futdepasser = 0
    var plus = 0
    var moins = 0
    var ajouter = 0
    var diminuer = 0
    var fin = 0
    var output = 0
   	for(var i = 1, length1 = input.length; i < length1; i++)
   	{
   		futdepasser = input[i].slice(0,5)
   		depassement = input[i].slice(2,5)
   		
   		plus = parseInt(futdepasser, 10)
   		ajouter = ajouter + plus
   		
   		moins = parseInt(depassement, 10)
   		diminuer = diminuer + moins
   	} 
   	depart = input[0]
   	fin += depart
   	fin += ajouter
   	fin -= diminuer
   	if (fin > 10000)
   	{
   		output = 'KO'
   	}
   	else if (fin <= 10000 && fin >= 100) 
   	{
   		output = 100
   	}  
   	else if (fin < 100) 
   	{
 		output += 1000
  	}
    return(output)
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}