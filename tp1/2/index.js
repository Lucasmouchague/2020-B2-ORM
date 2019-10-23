const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    var poid = 0
    var nbcarton = 0
    var output = 0
    for(var i = 1, length1 = input.length; i < length1; i++)
    {
    	poid  += input[i]
    	//console.log(poid)
    }
    //console.log(poid)
    nbcarton = input[0]
    nballer_retour = poid/100
    if (nballer_retour <= 1)
    {
    	output = 1
    }
    else if(nballer_retour > 1)
    {
    	output = Math.ceil(nballer_retour)
    	
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
