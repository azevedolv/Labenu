enum Siglas {
DC = "DC",
AC = "AC"
}

function idadeHistorica (ano:number, sigla:Siglas):string{
    switch(sigla){
        case "AC":
        if(ano > 4000){
            return "Pré-história"
        } 
        else{
            return "Idade Antiga"
        }
        case "DC":
            if(ano < 476){
                return "Idade Antiga"
            }
            else if(ano >= 476 && ano < 1473){
                return "Idade Média"
            }
            else if(ano >= 1473 && ano < 1789){
                return "Idade Moderna"
            }
            else if(ano >= 1789){
                return "Idade Contemporânea"
            }
            else{
                return "Erro! Parâmetro inválido"
            }
    }
}
console.log(idadeHistorica(1444,Siglas.AC));

