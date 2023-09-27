/* LISTAGEM POKEMONS */ 
var pokemon = [
    {
        numero: '#001',
        nome: "Bulbasaur",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/1.png' alt='Bulbasaur'>",
        descricao: "Bulbasaur pode ser visto tirando uma soneca ao sol. A semente nas suas costas cresce cada vez mais à medida que absorve os raios solares.",
    },
    {
        numero: '#002',
        nome: "Ivysaur",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/2.png' alt='Ivysaur'>",
        descricao: "Há um broto nas costas deste Pokémon. As pernas e o tronco de Ivysaur são grossos e fortes para aguentar seu peso. Se começa a passar mais tempo no sol, é sinal de que seu bulbo logo irá florescer em uma flor grande."
    },
    {
        numero: '#003',
        nome: "Venusaur",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/3.png' alt='Venusaur'>",
        descricao: "Há uma flor grande nas costas de Venusaur. Dizem que a flor adquire cores vívidas se está bem nutrido e se toma muito sol. O aroma da flor acalma as emoções das pessoas."
    },
    {
        numero: '#004',
        nome: "Charmander",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/4.png' alt='Charmander'>",
        descricao: "A chama que queima na ponta da sua cauda é um indicador de suas emoções. A chama oscila quando Charmander está contente. Se o Pokémon fica com raiva, a chama queima violentamente."
    },
    {
        numero: '#005',
        nome: "Charmeleon",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/5.png' alt='Charmeleon'>",
        descricao: "Charmeleon destrói seus oponentes sem pena com suas garras afiadas. Torna-se agressivo quando encontra um oponente forte e então a chama na ponta da sua cauda queima intensamente em uma cor azulada."
    },
    {
        numero: '#006',
        nome: "Charizard",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/6.png' alt='Charizard'>",
        descricao: "Charizard voa pelo céu à procura de oponentes poderosos. Aspira fogo de temperatura tão ardente que derrete qualquer coisa. Entretanto, este Pokémon nunca virará seu hálito ardente em oponentes mais fracos que ele."
    },
    {
        numero: '#007',
        nome: "Squirtle",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/7.png' alt='Squirtle'>",
        descricao: "A carapaça de Squirtle não serve só para sua proteção. As ranhuras em sua superfície e a sua forma arredondada ajudam a minimizar a resistência na água permitindo que nade em alta velocidade."
    },
    {
        numero: '#008',
        nome: "Wartortle",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/8.png' alt='Wartortle'>",
        descricao: "Sua cauda grande é coberta por um pelo grosso. A cauda se torna cada vez mais escura à medida que Wartortle envelhece. Os arranhões na sua carapaça são evidências da resistência deste Pokémon em batalha."
    },
    {
        numero: '#009',
        nome: "Blastoise",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/9.png' alt='Blastoise'>",
        descricao: "Blastoise possui canos de água muito precisos que sobressaem de sua carapaça. Podem dar tiros de água com tamanha precisão que conseguem abater latas vazias a uma distância de mais de 50 metros."
    },
    {
        numero: '#010',
        nome: "Caterpie",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/10.png' alt='Caterpie'>",
        descricao: "Caterpie tem um apetite voraz. Pode devorar folhas maiores do que seu corpo bem diante de seus olhos. Este Pokémon libera um cheiro terrivelmente forte das suas antenas."
    },
    {
        numero: '#011',
        nome: "Metapod",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/11.png' alt='Metapod'>",
        descricao: "O invólucro que reveste o corpo deste Pokémon é duro como uma prancha de metal. Metapod não se move muito e permanece imóvel para que seus órgãos moles evoluam dentro de sua couraça."
    },
    {
        numero: '#012',
        nome: "Butterfree",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/12.png' alt='Butterfree'>",
        descricao: "Butterfree tem uma habilidade especial para achar o pólen delicioso das flores. Pode localizar, extrair e carregar o mel das flores que estão florescendo a mais de 10 km do seu ninho."
    },
    {
        numero: '#013',
        nome: "Weedle",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/13.png' alt='Weedle'>",
        descricao: "Weedle tem um olfato extremamente aguçado. É capaz de distinguir os tipos de folhas que gosta dos tipos que não gosta simplesmente farejando com seu nariz vermelho grande."
    },
    {
        numero: '#014',
        nome: "Kakuna",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/14.png' alt='Kakuna'>",
        descricao: "Kakuna permanece praticamente imóvel se agarrando a árvores. Entretanto, a preparação para a sua futura evolução é extremamente intensa. A prova disto é a quentura de sua carapaça."
    },
    {
        numero: '#015',
        nome: "Beedrill",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/15.png' alt='Beedrill'>",
        descricao: "Beedrill são extremamente territoriais. Por segurança, aconselha-se que ninguém chegue perto de seus ninhos, pois se enraivecidos, atacam em um enxame furioso."
    },
    {
        numero: '#016',
        nome: "Pidgey",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/16.png' alt='Pidgey'>",
        descricao: "Pidgey tem um senso de direção extremamente aguçado. É capaz de voltar para seu ninho sem errar, mesmo que seja removido dos lugares que conhece."
    },
    {
        numero: '#017',
        nome: "Pidgeotto",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/17.png' alt='Pidgeotto'>",
        descricao: "Pidgeotto se apossa de uma área grande como seu próprio território. Este Pokémon voa para vigiar seu espaço. Se alguém invadir o seu território, punirá o invasor arduamente com suas garras afiadas sem piedade."
    },
    {
        numero: '#018',
        nome: "Pidgeot",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/18.png' alt='Pidgeot'>",
        descricao: "Este Pokémon tem uma plumagem deslumbrante de belas penas brilhantes. Muitos Treinadores são atraídos pela beleza extraordinária das penas em sua cabeça, os convencendo a escolher Pidgeot como seu Pokémon."
    },
    {
        numero: '#019',
        nome: "Rattata",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/19.png' alt='Rattata'>",
        descricao: "Rattata é extremamente prudente. Move suas orelhas até enquanto dorme para ouvir tudo. Não é particular na hora de escolher seu habitat podendo fazer seu ninho em qualquer lugar."
    },
    {
        numero: '#020',
        nome: "Raticate",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/20.png' alt='Raticate'>",
        descricao: "As presas robustas de Raticate crescem continuamente. Para mantê-las afiadas, rói troncos e pedras. Pode até mesmo roer as paredes das casas."
    },
    {
        numero: '#021',
        nome: "Spearow",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/21.png' alt='Spearow'>",
        descricao: "Spearow tem um piado muito alto que pode ser ouvido a mais de 1 km de distância. Se seu piado agudo e lamentoso for ouvido por todo lado, é sinal de que estão avisando uns aos outros que há perigo iminente."


    },
    {
        numero: '#022',
        nome: "Fearow",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/22.png' alt='Fearow'>",
        descricao: "Fearow é reconhecido por seu pescoço e bico longo. O formato de seu corpo é bom para caça em terra ou água. Move seu bico fino agilmente para capturar presas."
    },
    {
        numero: '#023',
        nome: "Ekans",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/23.png' alt='Ekans'>",
        descricao: "Ekans se enrola para descansar. Adota esta posição para responder rapidamente a qualquer ameaça de qualquer direção levantando a cabeça com uma encarada feroz."
    },
    {
        numero: '#024',
        nome: "Arbok",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/24.png' alt='Arbok'>",
        descricao: "Este Pokémon é terrivelmente forte e pode esmagar qualquer coisa com seu corpo. Pode achatar até cilindros pesados de aço. Uma vez que Arbok se enrosca em seu oponente, escapar de seu abraço é impossível."
    },
    {
        numero: '#025',
        nome: "Pikachu",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/25.png' alt='Pikachu'>",
        descricao: "Quando Pikachu acha alguma coisa nova, lança uma carga elétrica nela. Se você encontrar uma fruta torrada, é prova de que este Pokémon errou na intensidade de sua carga elétrica."
    },
    {
        numero: '#026',
        nome: "Raichu",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/26.png' alt='Raichu'>",
        descricao: "Se suas bolsas elétricas ficarem sobrecarregadas, Raichu aterrará sua cauda no solo para descarregar eletricidade. Zonas queimadas podem ser encontradas perto de seu ninho."
    },
    {
        numero: '#027',
        nome: "Sandshrew",
        tipo1: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/27.png' alt='Sandshrew'>",
        descricao: "O corpo de Sandshrew é configurado para absorver água sem desperdício, o que permite que sobreviva em desertos áridos. Enrola-se para se proteger de seus oponentes."
    },
    {
        numero: '#028',
        nome: "Sandslash",
        tipo1: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/28.png' alt='Sandslash'>",
        descricao: "O corpo de Sandslash é coberto por espinhos duros, que são partes endurecidas da sua pele. Troca seus espinhos uma vez por ano e os espinhos novos crescem por baixo dos velhos."
    },
    {
        numero: '#029',
        nome: "Nidoran",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/29.png' alt='Nidoran Fêmea'>",
        descricao: "Nidoran♀ tem espinhos que secretam um veneno poderoso. Pensa-se que foram desenvolvidos como proteção para este Pokémon pequenino. Quando enraivado, libera uma toxina horrível pelo seu chifre."
    },
    {
        numero: '#030',
        nome: "Nidorina",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/30.png' alt='Nidorina'>",
        descricao: "Quando estão entre amigos e familiares, escondem seus espinhos para evitar acidentes. Ficam nervosos se forem separados de seu grupo."
    },
    {
        numero: '#031',
        nome: "Nidoqueen",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        foto: "<img src='./src/imagens/png/31.png' alt='Nidoqueen'>",
        descricao: "O corpo de Nidoqueen é revestido de escamas duríssimas. Gosta de lançar seus oponentes pelos ares com suas investidas fortes. Dá tudo de si para proteger suas crias."
    },
    {
        numero: '#032',
        nome: "Nidoran",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/32.png' alt='Nidoran Macho'>",
        descricao: "Nidoran♂ desenvolveu músculos para mover suas orelhas em qualquer direção. Nem mesmo o menor som passa desapercebido por este Pokémon."
    },
    {
        numero: '#033',
        nome: "Nidorino",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/33.png' alt='Nidorino'>",
        descricao: "Nidorino tem um chifre que é mais duro do que um diamante. Se sentir uma presença hostil, todos os espinhos nas suas costas se eriçam, e assim, desafia o oponente com toda sua força."
    },
    {
        numero: '#034',
        nome: "Nidoking",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        foto: "<img src='./src/imagens/png/34.png' alt='Nidoking'>",
        descricao: "A cauda grossa de Nidoking tem um poder imensamente destrutivo. Com uma rabada, pode derrubar uma torre de transmissão de metal. Uma vez que este Pokémon entra em um estado voraz, não há como pará-lo."
    },
    {
        numero: '#035',
        nome: "Clefairy",
        tipo1: "<img src='./src/imagens/fada.fw.png' alt='Fada' title='Fada'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/35.png' alt='Clefairy'>",
        descricao: "Toda noite de lua cheia, grupos deste Pokémon saem para brincar. Ao amanhecer, os Clefairy cansados retornam aos seus refúgios nas montanhas e vão dormir pertinho uns dos outros."
    },
    {
        numero: '#036',
        nome: "Clefable",
        tipo1: "<img src='./src/imagens/fada.fw.png' alt='Fada' title='Fada'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/36.png' alt='Clefable'>",
        descricao: "Clefable movimenta-se saltitando como se estivesse usando suas asas. Seus passinhos leves permitem que ande sobre água. É conhecido por caminhar em lagos em noites calmas de lua cheia."
    },
    {
        numero: '#037',
        nome: "Vulpix",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/37.png' alt='Vulpix'>",
        descricao: "Ao nascer, Vulpix tem uma cauda branca. A cauda se separa em seis se este Pokémon recebe bastante amor de seu Treinador. As seis caudas se encaracolam majestosamente."
    },
    {
        numero: '#038',
        nome: "Ninetales",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/38.png' alt='Ninetales'>",
        descricao: "Ninetales emite uma luz sinistra de seus olhos vermelhos para controlar totalmente a mente de seus oponentes. Diz-se que este Pokémon vive por mil anos."
    },
    {
        numero: '#039',
        nome: "Jigglypuff",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/fada.fw.png' alt='Fada' title='Fada'>",
        foto: "<img src='./src/imagens/png/39.png' alt='Jigglypuff'>",
        descricao: "As cordas vocais de Jigglypuff podem se ajustar sem problema ao comprimento de onda de sua voz. Usa esta habilidade para cantar com um comprimento de onda preciso para adormecer seus oponentes."
    },
    {
        numero: '#040',
        nome: "Wigglytuff",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/fada.fw.png' alt='Fada' title='Fada'>",
        foto: "<img src='./src/imagens/png/40.png' alt='Wigglytuff'>",
        descricao: "Wigglytuff tem olhos enormes e em forma de pires. As superfícies de seus olhos são sempre cobertas com uma camada fina de lágrimas. Se qualquer poeira entra nos olhos deste Pokémon, é lavada rapidamente."
    },
    {
        numero: '#041',
        nome: "Zubat",
        tipo1: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/41.png' alt='Zubat'>",
        descricao: "Zubat permanece imóvel quietamente no escuro durante o dia. Se este Pokémon passasse muito tempo exposto ao sol, correria perigo de sofrer queimaduras leves."
    },
    {
        numero: '#042',
        nome: "Golbat",
        tipo1: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/42.png' alt='Golbat'>",
        descricao: "Golbat ama beber sangue de seres vivos. Este Pokémon é particularmente ativo em noites escuras. Ao cair da noite sai voando para procurar sangue fresco."
    },
    {
        numero: '#043',
        nome: "Oddish",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/43.png' alt='Oddish'>",
        descricao: "Durante o dia, Oddish se enterra no solo para absorver nutrientes usando seu corpo inteiro. Quanto mais fértil for o solo, mais lustrosas se tornam as suas folhas."
    },
    {
        numero: '#044',
        nome: "Gloom",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/44.png' alt='Gloom'>",
        descricao: "Gloom libera uma fragrância fedorenta do pistilo de sua flor. Quando se depara com perigo, o fedor aumenta. Se estiver se sentindo calmo e em segurança, não libera seu aroma fétido."
    },
    {
        numero: '#045',
        nome: "Vileplume",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/45.png' alt='Vileplume'>",
        descricao: "O pólen tóxico de Vileplume causa ataques de alergia aguda. Por isso não é aconselhável se aproximar de nenhuma flor na selva, por mais linda que seja."
    },
    {
        numero: '#046',
        nome: "Paras",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        foto: "<img src='./src/imagens/png/46.png' alt='Paras'>",
        descricao: "Paras tem cogumelos parasitas crescendo em suas costas chamados tochukaso. Eles crescem ao se alimentarem dos nutrientes deste Pokémon Inseto. São muito valiosos como elixir de vida."
    },
    {
        numero: '#047',
        nome: "Parasect",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        foto: "<img src='./src/imagens/png/47.png' alt='Parasect'>",
        descricao: "Parasect são conhecidos por infestar árvores grandes em massa e drenar os nutrientes de seus troncos e raízes. Quando a árvore infestada padece, movem-se de uma vez para outra árvore."
    },
    {
        numero: '#048',
        nome: "Venonat",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/48.png' alt='Venonat'>",
        descricao: "Diz-se que Venonat evoluiu com um revestimento fino de pelo rígido que cobre e protege seu corpo inteiro. Possui olhos tão grandes que não há uma presa que passe desapercebida."
    },
    {
        numero: '#049',
        nome: "Venomoth",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/49.png' alt='Venomoth'>",
        descricao: "Venomoth é um Pokémon noturno e só ativo à noite. Suas presas favoritas são insetos pequenos que se encontram em volta das luzes nas ruas, atraídos pela luz na escuridão."
    },
    {
        numero: '#050',
        nome: "Diglett",
        tipo1: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/50.png' alt='Diglett'>",
        descricao: "Diglett são criados na maioria das fazendas agrícolas pela simples razão de que quando escavam, deixam o solo perfeitamente lavrado para o plantio. O solo fica ideal para o cultivo de legumes deliciosos."
    },
    {
        numero: '#051',
        nome: "Dugtrio",
        tipo1: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/51.png' alt='Dugtrio'>",
        descricao: "Dugtrio são na verdade trigêmeos originados de um único corpo, por isso pensam da mesma forma. Trabalham em equipe e sem descanso quando escavam."
    },
    {
        numero: '#052',
        nome: "Meowth",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/52.png' alt='Meowth'>",
        descricao: "Meowth retrai as garras afiadas das suas patas para esgueirar-se furtivamente sem fazer barulho. Por algum motivo, este Pokémon ama moedas brilhantes que reluzem com a luz."
    },
    {
        numero: '#053',
        nome: "Persian",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/53.png' alt='Persian'>",
        descricao: "Persian tem seis bigodes chamativos que dão uma aparência feroz a este Pokémon. Seus bigodes detectam os movimentos do ar para determinar o que está à sua volta. Torna-se manso se for agarrado pelos bigodes."
    },
    {
        numero: '#054',
        nome: "Psyduck",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/54.png' alt='Psyduck'>",
        descricao: "Psyduck usa um poder misterioso que gera ondas cerebrais supostamente observadas apenas em seres adormecidos. Esta descoberta motivou polêmica entre estudiosos."
    },
    {
        numero: '#055',
        nome: "Golduck",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/55.png' alt='Golduck'>",
        descricao: "Golduck alcança uma velocidade incrível graças às nadadeiras membranosas de suas patas dianteiras e traseiras e à forma aerodinâmica de seu corpo. A velocidade deste Pokémon de fato supera a de qualquer nadador."
    },
    {
        numero: '#056',
        nome: "Mankey",
        tipo1: "<img src='./src/imagens/lutador.fw.png' alt='Lutador' title='Lutador'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/56.png' alt='Mankey'>",
        descricao: "Quando Mankey começa a se tremer e sua respiração nasal fica ofegante, é o sinal certo de que está ficando com raiva. Entretanto, porque explode de raiva rapidamente, é impossível alguém escapar de sua fúria."
    },
    {
        numero: '#057',
        nome: "Primeape",
        tipo1: "<img src='./src/imagens/lutador.fw.png' alt='Lutador' title='Lutador'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/57.png' alt='Primeape'>",
        descricao: "Quando Primeape fica furioso, sua circulação sanguínea é intensificada e seus músculos ficam ainda mais fortes. Entretanto, se torna menos inteligente."
    },
    {
        numero: '#058',
        nome: "Growlithe",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/58.png' alt='Growlithe'>",
        descricao: "Growlithe tem um olfato bastante aguçado e uma memória olfativa incrível, nunca esquece um cheiro. Usa seu sistema de olfato avançado para determinar as emoções de outros seres vivos."
    },
    {
        numero: '#059',
        nome: "Arcanine",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/59.png' alt='Arcanine'>",
        descricao: "Arcanine é conhecido por sua alta velocidade. Dizem que é capaz de percorrer mais de 10 mil quilômetros em um único dia e noite. O fogo que arde com vigor no corpo deste Pokémon é sua fonte de poder."
    },
    {
        numero: '#060',
        nome: "Poliwag",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/60.png' alt='Poliwag'>",
        descricao: "Poliwag tem uma pele bem fina. Tanto que é possível ver suas vísceras em espiral através dela. Apesar de fina, a pele é também bem flexível e até mesmo os caninos mais afiados ricocheteiam dela."
    },
    {
        numero: '#061',
        nome: "Poliwhirl",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/61.png' alt='Poliwhirl'>",
        descricao: "A superfície do corpo de Poliwhirl é sempre úmida e lisa com um fluido viscoso. Graças a esta película escorregadia, pode escapar das garras dos oponentes em batalhas."
    },
    {
        numero: '#062',
        nome: "Poliwrath",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/lutador.fw.png' alt='Lutador' title='Lutador'>",
        foto: "<img src='./src/imagens/png/62.png' alt='Poliwrath'>",
        descricao: "Os músculos fortes e altamente desenvolvidos de Poliwrath nunca se cansam, por mais que se exercite muito. É tão incrivelmente forte que pode cruzar o oceano nadando sem nenhum esforço."
    },
    {
        numero: '#063',
        nome: "Abra",
        tipo1: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/63.png' alt='Abra'>",
        descricao: "Abra dorme por 18 horas por dia. Entretanto, pode pressentir a presença de oponentes até mesmo enquanto dorme. Quando em perigo, se teletransporta para um lugar seguro."
    },
    {
        numero: '#064',
        nome: "Kadabra",
        tipo1: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/64.png' alt='Kadabra'>",
        descricao: "Kadabra emite uma onda alfa peculiar se tem dor de cabeça. Somente uma pessoa com uma psique forte pode se tornar o Treinador deste Pokémon."
    },
    {
        numero: '#065',
        nome: "Alakazam",
        tipo1: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/65.png' alt='Alakazam'>",
        descricao: "O cérebro de Alakazam cresce sem parar e por causa disso sua cabeça é muito pesada para seu pescoço segurar. Portanto, segura sua cabeça usando seu poder psicocinético."
    },
    {
        numero: '#066',
        nome: "Machop",
        tipo1: "<img src='./src/imagens/lutador.fw.png' alt='Lutador' title='Lutador'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/66.png' alt='Machop'>",
        descricao: "Os músculos de Machop são especiais e nunca ficam doloridos, nem mesmo com exercícios excessivos. Tem poder suficiente para arremessar cem pessoas adultas."
    },
    {
        numero: '#067',
        nome: "Machoke",
        tipo1: "<img src='./src/imagens/lutador.fw.png' alt='Lutador' title='Lutador'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/67.png' alt='Machoke'>",
        descricao: "Os músculos tonificados de Machoke são fortes como aço. Este Pokémon é tão forte que pode levantar um lutador de sumô com um só dedo."
    },
    {
        numero: '#068',
        nome: "Machamp",
        tipo1: "<img src='./src/imagens/lutador.fw.png' alt='Lutador' title='Lutador'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/68.png' alt='Machamp'>",
        descricao: "Machamp é tão forte que pode arremessar o que quiser. Entretanto, quando tem que realizar uma tarefa que requer delicadeza e destreza, seus braços acabam se enrolando sem jeito. Tende a agir sem pensar."
    },
    {
        numero: '#069',
        nome: "Bellsprout",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/69.png' alt='Bellsprout'>",
        descricao: "Este Pokémon tem um corpo fino e flexível permitindo que se incline e se balanceie para se esquivar de ataques. Cospe um fluido corrosivo capaz de derreter até ferro."
    },
    {
        numero: '#070',
        nome: "Weepinbell",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/70.png' alt='Weepinbell'>",
        descricao: "Weepinbell tem um gancho na parte de trás de seu corpo, que usa à noite para se prender a um galho e dormir. Caso se mova enquanto dorme, pode acordar no chão."
    },
    {
        numero: '#071',
        nome: "Victreebel",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/71.png' alt='Victreebel'>",
        descricao: "Victreebel tem uma trepadeira que estende de sua cabeça e agita como se fosse um animal prestes a atacar uma presa. Quando uma presa se aproxima, este Pokémon a engole por inteiro."
    },
    {
        numero: '#072',
        nome: "Tentacool",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/72.png' alt='Tentacool'>",
        descricao: "O corpo de Tentacool é composto por muita água. Se for removido do mar, acaba ressecado e murcho. Se este Pokémon acabar desidratado, coloque-o de volta no mar."
    },
    {
        numero: '#073',
        nome: "Tentacruel",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/73.png' alt='Tentacruel'>",
        descricao: "Tentacruel tem grandes esferas vermelhas em sua cabeça que brilham antes de lançar uma explosão ultrassônica. A explosão deste Pokémon causa ondas fortes ao seu redor."
    },
    {
        numero: '#074',
        nome: "Geodude",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        foto: "<img src='./src/imagens/png/74.png' alt='Geodude'>",
        descricao: "Quanto mais longa for a vida de Geodude, maior será o desgaste nas suas extremidades, deixando este Pokémon mais arredondado. Entretanto, seu coração continuará duro, rochoso e áspero."
    },
    {
        numero: '#075',
        nome: "Graveler",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        foto: "<img src='./src/imagens/png/75.png' alt='Graveler'>",
        descricao: "Graveler cresce comendo pedras. Aparentemente prefere comer as pedras que estão cobertas de musgo. Este Pokémon come toneladas de pedras diariamente."
    },
    {
        numero: '#076',
        nome: "Golem",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        foto: "<img src='./src/imagens/png/76.png' alt='Golem'>",
        descricao: "Golem vive em montanhas. Se tiver um grande terremoto, estes Pokémon rolarão em massa para descer para o pé da montanha."
    },
    {
        numero: '#077',
        nome: "Ponyta",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/77.png' alt='Ponyta'>",
        descricao: "Golem vive em montanhas. Se tiver um grande terremoto, estes Pokémon rolarão em massa para descer para o pé da montanha."
    },
    {
        numero: '#078',
        nome: "Rapidash",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/78.png' alt='Rapidash'>",
        descricao: "Rapidash são vistos geralmente galopando por campos e planícies. Entretanto, quando este Pokémon fica sério, sua crina flameja e queima enquanto galopa a 240 km/h."
    },
    {
        numero: '#079',
        nome: "Slowpoke",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        foto: "<img src='./src/imagens/png/79.png' alt='Slowpoke'>",
        descricao: "Slowpoke usa sua cauda para pegar presas ao mergulhá-la em um rio. Entretanto, este Pokémon frequentemente esquece o que está fazendo e passa dias inteiros fazendo nada na beira da água."
    },
    {
        numero: '#080',
        nome: "Slowbro",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        foto: "<img src='./src/imagens/png/80.png' alt='Slowbro'>",
        descricao: "A cauda de Slowbro tem um Shellder grudado nela com uma mordida. Como resultado, a cauda não pode ser mais usada para pesca, o que faz Slowbro nadar com relutância para pegar presas."
    },
    {
        numero: '#081',
        nome: "Magnemite",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "<img src='./src/imagens/aco.fw.png' alt='Aço' title='Aço'>",
        foto: "<img src='./src/imagens/png/81.png' alt='Magnemite'>",
        descricao: "Magnemite se conecta às linhas de tensão para alimentar-se de eletricidade. Se faltar energia na sua casa, cheque seu disjuntor. Você pode encontrar um alto número destes Pokémon grudados à caixa do disjuntor."
    },
    {
        numero: '#082',
        nome: "Magneton",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "<img src='./src/imagens/aco.fw.png' alt='Aço' title='Aço'>",
        foto: "<img src='./src/imagens/png/82.png' alt='Magneton'>",
        descricao: "Magneton emite uma força magnética poderosa que é fatal aos dispositivos mecânicos. Por isso, as cidades grandes ligam suas sirenes para alertar aos cidadãos do aparecimento em massa deste Pokémon."
    },
    {
        numero: '#083',
        nome: "Farfetch'd",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/83.png' alt='Farfetchd'>",
        descricao: "Farfetch'd é sempre visto com um caule de alguma planta. Parece que há caules bons e ruins. Este Pokémon é conhecido por lutar contra outros pelos caules."
    },
    {
        numero: '#084',
        nome: "Doduo",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/84.png' alt='Doduo'>",
        descricao: "As duas cabeças de Doduo nunca dormem ao mesmo tempo. Elas sempre revezam para que uma possa ficar de vigia enquanto a outra dorme."
    },
    {
        numero: '#085',
        nome: "Dodrio",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/85.png' alt='Dodrio'>",
        descricao: "Se as três cabeças de Dodrio estiverem olhando para lados diferentes, é sinal de que está de vigia. Se este Pokémon estiver de vigia, não chegue perto dele, pois poderá ser bicado."
    },
    {
        numero: '#086',
        nome: "Seel",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/86.png' alt='Seel'>",
        descricao: "Seel caça suas presas no oceano gelado debaixo das camadas de gelo. Quando precisa respirar, abre um buraco no gelo com a protuberância afiada de sua cabeça."
    },
    {
        numero: '#087',
        nome: "Dewgong",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/gelo.fw.png' alt='Gelo' title='Gelo'>",
        foto: "<img src='./src/imagens/png/87.png' alt='Dewgong'>",
        descricao: "Dewgong ama cochilar sobre gelo. Há muito tempo um marinheiro viu este Pokémon dormindo sobre uma geleira e pensou que fosse uma sereia."
    },
    {
        numero: '#088',
        nome: "Grimer",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/88.png' alt='Grimer'>",
        descricao: "O corpo de lodo e elástico de Grimer pode passar por qualquer fresta, por menor que seja. Este Pokémon entra em canos de esgoto para beber a água suja."
    },
    {
        numero: '#089',
        nome: "Muk",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/89.png' alt='Muk'>",
        descricao: "Um fluido nojento com um cheiro horrível emana do corpo de Muk. Uma só gota do fluido corporal deste Pokémon pode apodrecer uma piscina inteira."
    },
    {
        numero: '#090',
        nome: "Muk",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/90.png' alt='Shellder'>",
        descricao: "À noite, este Pokémon usa sua língua para cavar um buraco no fundo do mar para dormir. Shellder fecha sua concha enquanto dorme, mas deixa sua língua para fora."
    },
    {
        numero: '#091',
        nome: "Cloyster",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/gelo.fw.png' alt='Gelo' title='Gelo'>",
        foto: "<img src='./src/imagens/png/91.png' alt='Cloyster'>",
        descricao: "Cloyster é capaz de nadar no mar ingerindo água pela boca e a expelindo para trás. Este Pokémon atira espinhos de sua concha com o mesmo método."
    },
    {
        numero: '#092',
        nome: "Gastly",
        tipo1: "<img src='./src/imagens/fantasma.fw.png' alt='Fantasma' title='Fantasma'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/92.png' alt='Gastly'>",
        descricao: "Gastly é constituído em grande parte de matéria gasosa. Seu corpo gasoso reduz rapidamente quando é exposto a ventos fortes. Grupos deste Pokémon se aglomeram debaixo das beiras das casas para escapar dos ventos."
    },
    {
        numero: '#093',
        nome: "Haunter",
        tipo1: "<img src='./src/imagens/fantasma.fw.png' alt='Fantasma' title='Fantasma'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/93.png' alt='Haunter'>",
        descricao: "Haunter é um Pokémon perigoso. Se acenar para você enquanto flutua no escuro, nunca chegue perto. Este Pokémon tentará lambê-lo para se apossar de sua vida."
    },
    {
        numero: '#094',
        nome: "Gengar",
        tipo1: "<img src='./src/imagens/fantasma.fw.png' alt='Fantasma' title='Fantasma'>",
        tipo2: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        foto: "<img src='./src/imagens/png/94.png' alt='Gengar'>",
        descricao: "Às vezes, em uma noite escura, sua sombra projetada pela luz da rua irá dominar você de repente. É na verdade Gengar fingindo ser sua sombra."
    },
    {
        numero: '#095',
        nome: "Onix",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        foto: "<img src='./src/imagens/png/95.png' alt='Onix'>",
        descricao: "Onix tem um ímã no seu cérebro que age como um compasso para que não se perca enquanto está andando por túneis. Seu corpo se torna mais redondo e mais liso ao envelhecer."
    },
    {
        numero: '#096',
        nome: "Drowzee",
        tipo1: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/96.png' alt='Drowzee'>",
        descricao: "Se seu nariz começar a coçar enquanto dorme, é sinal de que um destes Pokémon está no seu travesseiro tentando comer seu sonho pelas suas narinas."
    },
    {
        numero: '#097',
        nome: "Hypno",
        tipo1: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/97.png' alt='Hypno'>",
        descricao: "Hypno segura um pêndulo na sua mão, cujo movimento e brilho deixam o oponente em um estado hipnótico profundo. Enquanto este Pokémon procura por presas, pule o pêndulo."
    },
    {
        numero: '#098',
        nome: "Krabby",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/98.png' alt='Krabby'>",
        descricao: "Krabby vivem em praias, enterrados em buracos na areia. Em praias quase sem comida, estes Pokémon podem ser vistos brigando uns com os outros por território."
    },
    {
        numero: '#099',
        nome: "Kingler",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/99.png' alt='Kingler'>",
        descricao: "Kingler tem uma pinça enorme que agita no ar para se comunicar com outros. Entretanto, por sua pinça ser muito pesada, o Pokémon se cansa rapidamente."
    },
    {
        numero: '#0100',
        nome: "Voltorb",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/100.png' alt='Voltorb'>",
        descricao: "Voltorb foi visto primeiro em uma empresa que fabrica Poké Bolas. A conexão entre a primeira vez em que foi visto e o fato de se parecer com uma Poké Bola ainda é um mistério."
    },
    {
        numero: '#0101',
        nome: "Electrode",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/101.png' alt='Electrode'>",
        descricao: "Electrode come eletricidade da atmosfera. Em dias em que raios caem, você pode ver este Pokémon explodindo por todo canto de tanto comer eletricidade."
    },
    {
        numero: '#0102',
        nome: "Exeggcute",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        foto: "<img src='./src/imagens/png/102.png' alt='Exeggcute'>",
        descricao: "Este Pokémon consiste de seis ovos que formam um aglomerado coeso. Os seis ovos se atraem e giram. Quando rachaduras aparecem nos ovos, é sinal de que está perto de evoluir."
    },
    {
        numero: '#0103',
        nome: "Exeggutor",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        foto: "<img src='./src/imagens/png/103.png' alt='Exeggutor'>",
        descricao: "Exeggutor veio originalmente dos trópicos. Suas cabeças crescem com sua exposição ao sol quente. Dizem que quando suas cabeças caem, se juntam para formar Exeggcute."
    },
    {
        numero: '#0104',
        nome: "Cubone",
        tipo1: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/104.png' alt='Cubone'>",
        descricao: "Cubone se lamenta pela mãe que não verá de novo. A lua cheia lembra este Pokémon de sua mãe, o que o faz chorar. As manchas na sua caveira são causadas por suas lágrimas."
    },
    {
        numero: '#0105',
        nome: "Marowak",
        tipo1: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/105.png' alt='Marowak'>",
        descricao: "Marowak é a forma evoluída de um Cubone. É mais forte por ter superado a tristeza de perder sua mãe. O temperamento forte e decidido deste Pokémon não é fácil de mudar."
    },
    {
        numero: '#0106',
        nome: "Hitmonlee",
        tipo1: "<img src='./src/imagens/lutador.fw.png' alt='Lutador' title='Lutador'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/106.png' alt='Hitmonlee'>",
        descricao: "As pernas de Hitmonlee se contraem e se alongam livremente. Usa suas pernas elásticas para dominar seus oponentes com chutes devastadores. Após a batalha, massageia suas pernas para vencer o cansaço."
    },
    {
        numero: '#0107',
        nome: "Hitmonchan",
        tipo1: "<img src='./src/imagens/lutador.fw.png' alt='Lutador' title='Lutador'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/107.png' alt='Hitmonchan'>",
        descricao: "Dizem que Hitmonchan possui o espírito de um boxeador que treinava para um campeonato mundial. Tem um espírito indomável e nunca irá amarelar diante de adversidades."
    },
    {
        numero: '#0108',
        nome: "Lickitung",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/108.png' alt='Lickitung'>",
        descricao: "Dizem que Hitmonchan possui o espírito de um boxeador que treinava para um campeonato mundial. Tem um espírito indomável e nunca irá amarelar diante de adversidades."
    },
    {
        numero: '#0109',
        nome: "Koffing",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/109.png' alt='Koffing'>",
        descricao: "Se Koffing se agita, levanta a toxicidade de seus gases internos e os jorra pelo seu corpo inteiro. Pode inflar seu corpo demais e explodir."
    },
    {
        numero: '#0110',
        nome: "Weezing",
        tipo1: "<img src='./src/imagens/veneno.fw.png' alt='Veneno' title='Veneno'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/110.png' alt='Weezing'>",
        descricao: "Weezing ama os gases que emanam de comidas estragadas. Este Pokémon achará uma casa suja e a fará sua casa. À noite, quando as pessoas da casa dormem, irá se esbaldar no lixo."
    },
    {
        numero: '#0111',
        nome: "Rhyhorn",
        tipo1: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        tipo2: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        foto: "<img src='./src/imagens/png/111.png' alt='Rhyhorn'>",
        descricao: "Rhyhorn corre em linha reta esmagando tudo pelo seu caminho. Não se incomoda quando dá de cabeça com um bloco de aço. Entretanto, pode sentir um pouco de dor no dia seguinte pela batida."
    },
    {
        numero: '#0112',
        nome: "Rhydon",
        tipo1: "<img src='./src/imagens/terra.fw.png' alt='Terra' title='Terra'>",
        tipo2: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        foto: "<img src='./src/imagens/png/112.png' alt='Rhydon'>",
        descricao: "O chifre de Rhydon pode esmagar até mesmo diamantes. Uma só pancada de seu rabo pode derrubar um prédio. Sua pele é tão dura que nem mesmo canhões podem arranhá-la."
    },
    {
        numero: '#0113',
        nome: "Chansey",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/113.png' alt='Chansey'>",
        descricao: "Chansey põe ovos muito nutritivos diariamente. Os ovos são tão gostosos que são facilmente devorados até mesmo por pessoas sem apetite."
    },
    {
        numero: '#0114',
        nome: "Tangela",
        tipo1: "<img src='./src/imagens/grama.fw.png' alt='Grama' title='Grama'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/114.png' alt='Tangela'>",
        descricao: "Os cipós de Tangela quebram facilmente se são agarrados. Isto não causa dor a este Pokémon, o que permite que fuja rapidamente. Os cipós perdidos são substituídos por novos cipós no dia seguinte."
    },
    {
        numero: '#0115',
        nome: "Kangaskhan",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/115.png' alt='Kangaskhan'>",
        descricao: "Se encontrar alguma cria de Kangaskhan brincando sozinha, não é aconselhável que chegue perto ou tente pegá-la. A mãe com certeza estará por perto e ficará violentamente furiosa com você."
    },
    {
        numero: '#0116',
        nome: "Horsea",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/116.png' alt='Horsea'>",
        descricao: "Horsea come insetos pequenos e os musgo de pedras. Se a correnteza do mar mudar rapidamente, irá se ancorar enrolando sua cauda em pedras ou corais para não ser arrastado para longe."
    },
    {
        numero: '#0117',
        nome: "Seadra",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/117.png' alt='Seadra'>",
        descricao: "Seadra dorme após abrir espaço entre as ramas dos corais. Os pescadores de corais são espetados pelos espinhos venenosos deste Pokémon quando não percebem sua presença."
    },
    {
        numero: '#0118',
        nome: "Goldeen",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/118.png' alt='Goldeen'>",
        descricao: "Goldeen é um Pokémon muito bonito com nadadeiras que crescem elegantemente na água. Entretanto, não baixe sua guarda perto deste Pokémon, pois pode atacar você com seu chifre."
    },
    {
        numero: '#0119',
        nome: "Seaking",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/119.png' alt='Seaking'>",
        descricao: "No outono, Seaking machos podem ser vistos performando danças de acasalamento nos leitos de rios para atrair as fêmeas. A cor de seu corpo fica mais bonita nessa estação."
    },
    {
        numero: '#0120',
        nome: "Staryu",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/120.png' alt='Staryu'>",
        descricao: "Staryu tem um órgão central, conhecido como núcleo, que brilha com uma luz vermelha. Se você for para a praia no final do verão, os núcleos destes Pokémon brilham como as estrelas no céu."
    },
    {
        numero: '#0121',
        nome: "Starmie",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        foto: "<img src='./src/imagens/png/121.png' alt='Starmie'>",
        descricao: "A parte central de Starmie, seu núcleo, brilha fortemente em sete cores. Por causa de sua natureza brilhante, este Pokémon foi apelidado de “joia do mar”."
    },
    {
        numero: '#0122',
        nome: "Mr. Mime",
        tipo1: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        tipo2: "<img src='./src/imagens/fada.fw.png' alt='Fada' title='Fada'>",
        foto: "<img src='./src/imagens/png/122.png' alt='Mr. Mime'>",
        descricao: "Mr. Mime é um mestre em pantomima. Seus gestos e movimentos convencem os espectadores de que algo invisível realmente existe. Uma vez que os espectadores acreditam, aquilo que era invisível se torna palpável."
    },
    {
        numero: '#0123',
        nome: "Scyther",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/123.png' alt='Scyther'>",
        descricao: "Scyther é incrivelmente rápido. Sua velocidade intensa reforça a eficácia do par de foices em seus antebraços. Suas foices são tão efetivas que podem cortar troncos maciços em um só gesto."
    },
    {
        numero: '#0124',
        nome: "Jynx",
        tipo1: "<img src='./src/imagens/gelo.fw.png' alt='Gelo' title='Gelo'>",
        tipo2: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        foto: "<img src='./src/imagens/png/124.png' alt='Jynx'>",
        descricao: "Jynx anda ritmicamente movimentando seus quadris como se estivesse dançando. Seus movimentos são tão fascinantes que pessoas que os veem são levadas a balançar seus quadris sem pensar no que estão fazendo."
    },
    {
        numero: '#0125',
        nome: "Electabuzz",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/125.png' alt='Electabuzz'>",
        descricao: "Quando há uma tempestade, grupos deste Pokémon competem entre si para escalar prédios que possivelmente serão atingidos por raios. Algumas cidades usam Electabuzz como para-raios."
    },
    {
        numero: '#0126',
        nome: "Magmar",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/126.png' alt='Magmar'>",
        descricao: "Magmar expele chamas violentas por seu corpo durante uma batalha para intimidar seu oponente. Suas explosões ardentes criam ondas quentes que queimam gramas e árvores ao seu redor."
    },
    {
        numero: '#0127',
        nome: "Pinsir",
        tipo1: "<img src='./src/imagens/inseto.fw.png' alt='Inseto' title='Inseto'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/127.png' alt='Pinsir'>",
        descricao: "Pinsir é surpreendentemente forte. Pode agarrar um oponente que pesa o dobro com seus chifres e levantá-lo facilmente. Os movimentos deste Pokémon ficam lentos em lugares frios."
    },
    {
        numero: '#0128',
        nome: "Tauros",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/128.png' alt='Tauros'>",
        descricao: "Não se satisfaz a não ser que esteja sempre causando alvoroço. Se não há um oponente para Tauros batalhar, atacará árvores grandes e as derrubará para se acalmar."
    },
    {
        numero: '#0129',
        nome: "Magikarp",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/129.png' alt='Magikarp'>",
        descricao: "Magikarp é um triste exemplo de um Pokémon que só consegue pular e salpicar água. Esta conduta levou os cientistas a estudar este Pokémon."
    },
    {
        numero: '#0130',
        nome: "Gyarados",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/130.png' alt='Gyarados'>",
        descricao: "Quando Magikarp evolui para Gyarados, suas células cerebrais sofrem uma alteração estrutural. Dizem que esta alteração é a culpada por este Pokémon ser violento por natureza."
    },
    {
        numero: '#0131',
        nome: "Lapras",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "<img src='./src/imagens/gelo.fw.png' alt='Gelo' title='Gelo'>",
        foto: "<img src='./src/imagens/png/131.png' alt='Lapras'>",
        descricao: "Humanos quase levaram Lapras à extinção. Dizem que à tardinha este Pokémon canta melancolicamente procurando pelos outros que restaram da sua espécie."
    },
    {
        numero: '#0132',
        nome: "Ditto",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/132.png' alt='Ditto'>",
        descricao: "Ditto reorganiza sua estrutura celular para mudar de forma. Entretanto, se tenta se transformar em algo se guiando somente por sua memória, acaba errando nos detalhes."
    },
    {
        numero: '#0133',
        nome: "Eevee",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/133.png' alt='Eevee'>",
        descricao: "A configuração genética instável de Eevee permite que mude de acordo com o ambiente em que vive. A radiação de várias pedras faz este Pokémon evoluir."
    },
    {
        numero: '#0134',
        nome: "Vaporeon",
        tipo1: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/134.png' alt='Vaporeon'>",
        descricao: "Vaporeon sofreu uma mutação repentina e cresceu brânquias e barbatanas que permitem que viva na água. Este Pokémon tem a habilidade de controlar água."
    },
    {
        numero: '#0135',
        nome: "Jolteon",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/135.png' alt='Jolteon'>",
        descricao: "As células de Jolteon geram um nível baixo de eletricidade. Este poder é amplificado pela eletricidade estática do seu pelo, permitindo que solte relâmpagos. Seu pelo é feito de agulhas carregadas de eletricidade."
    },
    {
        numero: '#0136',
        nome: "Flareon",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/136.png' alt='Flareon'>",
        descricao: "O pelo macio de Flareon tem um propósito funcional de liberar calor no ar para que seu corpo não superaqueça. A temperatura corporal deste Pokémon pode atingir um máximo de 900 °C."
    },
    {
        numero: '#0137',
        nome: "Porygon",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/137.png' alt='Porygon'>",
        descricao: "Porygon é capaz de reverter completamente os dados do seu programa e entrar no espaço cibernético. Este Pokémon é protegido contra cópia, então não pode ser duplicado."
    },
    {
        numero: '#0138',
        nome: "Omanyte",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        foto: "<img src='./src/imagens/png/138.png' alt='Omanyte'>",
        descricao: "Omanyte é um dos Pokémon anciões que foi extinto há muito tempo e que foi regenerado a partir de fósseis por humanos. Se for atacado por um oponente, entra em sua concha dura."
    },
    {
        numero: '#0139',
        nome: "Omastar",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        foto: "<img src='./src/imagens/png/139.png' alt='Omastar'>",
        descricao: "Omastar usa seus tentáculos para capturar suas presas. Acredita-se que entrou em extinção porque sua concha cresceu pesada demais, fazendo com que seus movimentos ficassem muito devagar e difíceis."
    },
    {
        numero: '#0140',
        nome: "Kabuto",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        foto: "<img src='./src/imagens/png/140.png' alt='Kabuto'>",
        descricao: "Kabuto é um Pokémon regenerado de um fóssil, porém, em raras ocasiões, foram encontrados casos de exemplares vivos. Este Pokémon não mudou nada em 300 milhões de anos."
    },
    {
        numero: '#0141',
        nome: "Kabutops",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/agua.fw.png' alt='Água' title='Água'>",
        foto: "<img src='./src/imagens/png/141.png' alt='Kabutops'>",
        descricao: "Há muito tempo Kabutops nadava debaixo d'água para caçar suas presas. Parece que estava evoluindo da vida marinha para a terrestre, como é evidente pelas mudanças em suas brânquias e pernas."
    },
    {
        numero: '#0142',
        nome: "Aerodactyl",
        tipo1: "<img src='./src/imagens/pedra.fw.png' alt='Pedra' title='Pedra'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/142.png' alt='Aerodactyl'>",
        descricao: "A origem de Aerodactyl data da era dos dinossauros. Foi regenerado do material genético extraído de âmbar. Supõe-se que tenha sido considerado o rei dos céus em tempos antigos."
    },
    {
        numero: '#0143',
        nome: "Snorlax",
        tipo1: "<img src='./src/imagens/normal.fw.png' alt='Normal' title='Normal'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/143.png' alt='Snorlax'>",
        descricao: "Um dia normal da vida de Snorlax consiste em comer e dormir. É um Pokémon tão dócil que é fácil de ver crianças brincando em cima da sua barriga enorme."
    },
    {
        numero: '#0144',
        nome: "Articuno",
        tipo1: "<img src='./src/imagens/gelo.fw.png' alt='Gelo' title='Gelo'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/144.png' alt='Articuno'>",
        descricao: "Articuno é um Pokémon pássaro lendário que pode controlar gelo. O bater de suas asas esfria o ar. Dizem que começa a nevar quando este Pokémon voa."
    },
    {
        numero: '#0145',
        nome: "Zapdos",
        tipo1: "<img src='./src/imagens/eletrico.fw.png' alt='Eletrico' title='Elétrico'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/145.png' alt='Zapdos'>",
        descricao: "Zapdos é um Pokémon pássaro lendário que tem a habilidade de controlar eletricidade. Vive em nuvens carregadas de eletricidade e ganha poder se for atingido por raios."
    },
    {
        numero: '#0146',
        nome: "Moltres",
        tipo1: "<img src='./src/imagens/fogo.fw.png' alt='Fogo' title='Fogo'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/146.png' alt='Moltres'>",
        descricao: "Moltres é um Pokémon pássaro lendário capaz de controlar fogo. Dizem que caso se machuque, mergulha seu corpo no magma de um vulcão para arder e se curar."
    },
    {
        numero: '#0147',
        nome: "Dratini",
        tipo1: "<img src='./src/imagens/dragao.fw.png' alt='Dragão' title='Dragão'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/147.png' alt='Dratini'>",
        descricao: "Dratini muda e se desfaz de sua pele velha continuamente, porque a energia vital de seu corpo não para de alcançar níveis incontroláveis."
    },
    {
        numero: '#0148',
        nome: "Dragonair",
        tipo1: "<img src='./src/imagens/dragao.fw.png' alt='Dragão' title='Dragão'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/148.png' alt='Dragonair'>",
        descricao: "Dragonair acumula uma quantidade enorme de energia dentro de seu corpo. Dizem que altera o clima da área em que está descarregando energia através dos cristais no seu pescoço e cauda."
    },
    {
        numero: '#0149',
        nome: "Dragonite",
        tipo1: "<img src='./src/imagens/dragao.fw.png' alt='Dragão' title='Dragão'>",
        tipo2: "<img src='./src/imagens/voador.fw.png' alt='Voador' title='Voador'>",
        foto: "<img src='./src/imagens/png/149.png' alt='Dragonite'>",
        descricao: "Dragonite é capaz de dar a volta no mundo em apenas 16 horas. Tem um coração bondoso e guia para terra barcos perdidos durante tempestades."
    },
    {
        numero: '#0150',
        nome: "Mewtwo",
        tipo1: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/150.png' alt='Mewtwo'>",
        descricao: "Mewtwo é um Pokémon que foi criado por manipulação genética. Entretanto, apesar do poder científico dos humanos ter criado seu corpo, eles falharam em dar a Mewtwo um coração sensível."
    },
    {
        numero: '#0151',
        nome: "Mew",
        tipo1: "<img src='./src/imagens/psiquico.fw.png' alt='Psiquico' title='Psiquico'>",
        tipo2: "",
        foto: "<img src='./src/imagens/png/151.png' alt='Mew'>",
        descricao: "Dizem que Mew possui a composição genética de todos os Pokémon. É capaz de ficar invisível quando quer para passar desapercebido quando alguém se aproxima."
    },
];

/* ALTERAR MODO CLARO OU ESCURO */
const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener('change', () => {
    const htmlDM = document.querySelector("html");
    const bodyDM = document.querySelector("body");
    htmlDM.classList.toggle("dark-modo");
    bodyDM.classList.toggle("body-escuro");
})

/* POPULANDO LISTA DE POKEMONS */
let listaPokemon = pokemon;
const listaHTML = document.getElementById('lista-pokemon');

const simboloFem = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z'/></svg>";

const simboloMasc = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80l0 0h0v0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z'/></svg>";

const carregaListaPokemon = function() {
    listaHTML.innerHTML = "";

    listaPokemon.map( function(pokemons) {
        if (pokemons.numero == '#029') {
            listaHTML.innerHTML += `
            <li>
                <div class="card-pokemon">
                    <div class="ficha">
                        <div class="nome">${pokemons.numero} - ${pokemons.nome} ${simboloFem}</div>
                        <div class="tipos">
                            <div class="tipo1">${pokemons.tipo1}</div>
                            <div class="tipo2">${pokemons.tipo2}</div>
                        </div>
                    </div>
                    <div class="foto-pokemon">${pokemons.foto}</div>
                    <div class="texto-pokemon"><p class="descricao">${pokemons.descricao}</p></div>
                </div>
            </li>
        `;
        } else if (pokemons.numero == '#032') {
            listaHTML.innerHTML += `
            <li>
                <div class="card-pokemon">
                    <div class="ficha">
                        <div class="nome">${pokemons.numero} - ${pokemons.nome} ${simboloMasc}</div>
                        <div class="tipos">
                            <div class="tipo1">${pokemons.tipo1}</div>
                            <div class="tipo2">${pokemons.tipo2}</div>
                        </div>
                    </div>
                    <div class="foto-pokemon">${pokemons.foto}</div>
                    <div class="texto-pokemon"><p class="descricao">${pokemons.descricao}</p></div>
                </div>
            </li>
        `;
        } else {
            listaHTML.innerHTML += `
            <li>
                <div class="card-pokemon">
                    <div class="ficha">
                        <div class="nome">${pokemons.numero} - ${pokemons.nome}</div>
                        <div class="tipos">
                            <div class="tipo1">${pokemons.tipo1}</div>
                            <div class="tipo2">${pokemons.tipo2}</div>
                        </div>
                    </div>
                    <div class="foto-pokemon">${pokemons.foto}</div>
                    <div class="texto-pokemon"><p class="descricao">${pokemons.descricao}</p></div>
                </div>
            </li>
        `;
        };
    });
}

carregaListaPokemon();

/* BARRA DE PESQUISA - nome */

const buscaNome = document.getElementById("pesq-nome");

buscaNome.addEventListener('keyup', function() {
    tipoSelecionado.innerHTML = 'Filtrar por tipo';

    const resultado = listaPokemon.filter((pokemons) => pokemons.nome.toLowerCase().includes((buscaNome.value).toLowerCase()));

    if(resultado.length <= 0) {
        listaHTML.innerHTML = `
        <div class='resultado'>"Nenhum resultado encontrado"</div>`
    } else {
        listaPokemon = resultado;
        carregaListaPokemon();
        listaPokemon = pokemon;
    }
});


/* BARRA DE PESQUISA - tipo */

const buscaTipo = document.getElementById("pesq-tipo");
const tipoSelecionado = document.getElementById("textoSelecionado");
const opcoes = document.getElementsByClassName("opcoes");
const navVisib = document.querySelector("nav");
const seta = document.getElementById("seta");

buscaTipo.addEventListener('click', () => {
    navVisib.classList.toggle("oculto");
    seta.classList.toggle("seta-virada");
});

for(opcao of opcoes){
    opcao.onclick = function() {
        buscaNome.value = "";
        tipoSelecionado.innerHTML = this.textContent;
        navVisib.classList.toggle("oculto");
        seta.classList.toggle("seta-virada");

        if (tipoSelecionado.innerText == "Todos") {
            carregaListaPokemon();
            console.log(tipoSelecionado.innerText);
        } else {
            const resultado2 = listaPokemon.filter((pokemons) => (pokemons.tipo1.toLowerCase() + pokemons.tipo2.toLowerCase()).includes((tipoSelecionado.innerText).toLowerCase()));
            listaPokemon = resultado2;
            carregaListaPokemon();
            listaPokemon = pokemon;
        }
    }
};