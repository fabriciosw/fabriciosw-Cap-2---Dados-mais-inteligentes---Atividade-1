const html = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"

const cidades = html.split("*")
alert(`As cidades avaliadas são ${cidades[1]}, ${cidades[3]} e ${cidades[5]}`)

let roteirosA = [];
const divisao = html.split("#Roteiro A | ")
for (i = 0; i < divisao.length; i++) {
    if (divisao[i].startsWith('Região')) {
        var excluirResto = divisao[i].search("<br>#Roteiro B")
        roteirosA.push(divisao[i].substring(0, excluirResto))
    }
}
alert(`O roteiro A de ${cidades[1]} é ${roteirosA[0]};\n O roteiro A de ${cidades[3]} é ${roteirosA[1]};\n O roteiro A de ${cidades[5]} é ${roteirosA[2]}`)

let roteirosAamount = []
for (i = 0; i < roteirosA.length; i++) {
    roteirosAamount.push(roteirosA[i].split(";").length)
}
alert(`O roteiro A de ${cidades[1]} tem ${roteirosAamount[0]} lugares;\n O roteiro A de ${cidades[3]} tem ${roteirosAamount[1]} lugares;\n O roteiro A de ${cidades[5]} tem ${roteirosAamount[2]} lugares`)


function pegarRoteiroDeBairro(cidade, bairro) {
    const roteiros = html.split("Roteiros para ")
    roteiros.shift()

    for (i = 0; i < roteiros.length; i++) {
        if (roteiros[i].startsWith(`*${cidade}*`)) {
            const regiao = roteiros[i].split(`Região: ${bairro}<br>`)
            const stringLugares = regiao[1].split("<br>")
            const lugares = stringLugares[0].split("; ")
            const arraySemVazios = lugares.filter(i => i);
            return arraySemVazios
        }
    }
}
const centroSP = pegarRoteiroDeBairro("São Paulo", "Centro")
const downtownLV = pegarRoteiroDeBairro("Las Vegas", "Downtown")

alert(`Os pontos turísticos do Centro de SP são ${centroSP}`)
alert(`Os pontos turísticos do Downtown de Las Vegas são ${downtownLV}`)