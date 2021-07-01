
const tempoPadrao = require("./micro-modulo");


function microondas(alimentos, a)
{
    if (typeof alimentos=="number" && typeof tempo=="number")
     {
        switch (alimentos)
         {
            case "1": console.log(tempoPadrao.prato(a,10));
                break;
            case "2": console.log(tempoPadrao.prato(a,8));
                break;
            case "3": console.log(tempoPadrao.prato(a,15));
                break;
            case "4": console.log(tempoPadrao.prato(a,12));
                break;
            case "5": console.log(tempoPadrao.prato(a,8));
                break;
                default:console.log("Pato inexistente")
                   
                                
         }
         

         }
         else{
             console.log("Por favor, digite o tempo desejado em numero e escolha um prato valido")
    }
        
}


//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão);//

microondas(1,31)