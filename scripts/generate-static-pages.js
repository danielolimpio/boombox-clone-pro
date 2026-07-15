/**
 * Script para gerar páginas HTML estáticas para SEO
 * Baseado na estrutura do The Art of Yoga
 * 
 * Este script é executado após o build do Vite e cria
 * pastas físicas com index.html para cada rota do site.
 * 
 * IMPORTANTE: Cada página inclui links HTML reais (não React Router)
 * para permitir que crawlers descubram todas as URLs do site.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Lista completa de todas as rotas do site eFuxico
// ATENÇÃO: Estes paths devem corresponder EXATAMENTE às rotas do App.tsx
const routes = [
  // Páginas institucionais
  { path: '/', title: 'eFuxico - Entretenimento, Celebridades e Fofocas | Portal de Notícias', description: 'eFuxico - Seu portal de entretenimento com as últimas notícias sobre celebridades, fofocas, tendências e muito mais.', category: 'home' },
  { path: '/sobre', title: 'Sobre o eFuxico | Conheça Nossa História', description: 'Conheça o eFuxico, seu portal de entretenimento favorito. Saiba mais sobre nossa história e equipe.', category: 'institucional' },
  { path: '/contato', title: 'Contato | eFuxico', description: 'Entre em contato com a equipe do eFuxico. Envie suas sugestões, críticas e dúvidas.', category: 'institucional' },
  { path: '/privacidade', title: 'Política de Privacidade | eFuxico', description: 'Política de privacidade do eFuxico. Saiba como tratamos seus dados pessoais.', category: 'institucional' },
  { path: '/termos', title: 'Termos de Uso | eFuxico', description: 'Termos de uso do site eFuxico. Leia nossos termos e condições.', category: 'institucional' },
  
  // Páginas de navegação
  { path: '/recentes', title: 'Notícias Recentes | eFuxico', description: 'As últimas notícias e fofocas do mundo das celebridades. Fique por dentro de tudo.', category: 'navegacao' },
  { path: '/tendencias', title: 'Tendências | eFuxico', description: 'O que está em alta no mundo do entretenimento. Confira as tendências do momento.', category: 'navegacao' },
  { path: '/hot', title: 'Hot - O Mais Comentado | eFuxico', description: 'Os assuntos mais comentados e polêmicos do mundo das celebridades.', category: 'navegacao' },
  { path: '/populares', title: 'Mais Populares | eFuxico', description: 'Os conteúdos mais populares do eFuxico. O que todo mundo está lendo.', category: 'navegacao' },
  { path: '/felinos', title: '18 Espécies de Felinos ao Redor do Mundo | eFuxico', description: 'Conheça 18 espécies fascinantes de felinos selvagens ao redor do mundo, incluindo os que vivem no Brasil.', category: 'navegacao' },
  
  // Série Celebridades Antes e Depois (rotas conforme App.tsx)
  { path: '/xuxa-meneghel-antes-depois-maquiagem', title: 'Xuxa Meneghel Antes e Depois da Maquiagem | eFuxico', description: 'Veja a transformação incrível de Xuxa Meneghel antes e depois da maquiagem. Celebridades ao natural.', category: 'celebridades' },
  { path: '/sandy-cantora-antes-depois-maquiagem', title: 'Sandy Cantora Antes e Depois da Maquiagem | eFuxico', description: 'Confira Sandy antes e depois da maquiagem. A cantora brasileira ao natural.', category: 'celebridades' },
  { path: '/ludmilla-antes-depois-maquiagem', title: 'Ludmilla Antes e Depois da Maquiagem | eFuxico', description: 'Ludmilla antes e depois da maquiagem. Veja a cantora ao natural.', category: 'celebridades' },
  { path: '/luana-piovani-antes-depois-maquiagem', title: 'Luana Piovani Antes e Depois da Maquiagem | eFuxico', description: 'Luana Piovani antes e depois da maquiagem. A atriz ao natural.', category: 'celebridades' },
  { path: '/leticia-spiller-antes-depois-maquiagem', title: 'Letícia Spiller Antes e Depois da Maquiagem | eFuxico', description: 'Letícia Spiller antes e depois da maquiagem. A atriz ao natural.', category: 'celebridades' },
  { path: '/giovanna-antonelli-antes-depois-maquiagem', title: 'Giovanna Antonelli Antes e Depois da Maquiagem | eFuxico', description: 'Giovanna Antonelli antes e depois da maquiagem. A atriz ao natural.', category: 'celebridades' },
  { path: '/eliane-apresentadora-antes-depois-maquiagem', title: 'Eliane Apresentadora Antes e Depois da Maquiagem | eFuxico', description: 'Eliane apresentadora antes e depois da maquiagem. Ao natural.', category: 'celebridades' },
  { path: '/juliana-paes-antes-depois-maquiagem', title: 'Juliana Paes Antes e Depois da Maquiagem | eFuxico', description: 'Juliana Paes antes e depois da maquiagem. A atriz ao natural.', category: 'celebridades' },
  { path: '/ana-hickmann-antes-depois-maquiagem', title: 'Ana Hickmann Antes e Depois da Maquiagem | eFuxico', description: 'Ana Hickmann antes e depois da maquiagem. A modelo ao natural.', category: 'celebridades' },
  { path: '/carolina-ferraz-antes-depois-maquiagem', title: 'Carolina Ferraz Antes e Depois da Maquiagem | eFuxico', description: 'Carolina Ferraz antes e depois da maquiagem. A atriz ao natural.', category: 'celebridades' },
  
  // Série Duplo Sentido (rotas conforme App.tsx)
  { path: '/foto-duplo-sentido-crianca-praia', title: 'Criança na Praia: A Ilusão de Ótica que Viralizou | eFuxico', description: 'Descubra a foto viral da criança na praia que confundiu milhões de pessoas na internet.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-casal-barco', title: 'Casal no Barco: A Foto que Confundiu a Internet | eFuxico', description: 'A foto do casal no barco que gerou confusão na internet. Entenda a ilusão de ótica.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-nado-sincronizado', title: 'Nado Sincronizado: A Foto Esportiva que Confundiu | eFuxico', description: 'A incrível foto de nado sincronizado que criou uma ilusão de ótica surpreendente.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-jogador-basquete', title: 'Jogador de Basquete: A Ilusão de Ótica na NBA | eFuxico', description: 'A foto viral do jogador de basquete que criou uma ilusão de ótica impressionante.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-fonte-parque', title: 'Fonte no Parque: A Foto que Viralizou | eFuxico', description: 'A foto da fonte no parque que confundiu milhões na internet.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-casal-sofa', title: 'Casal no Sofá: A Ilusão de Ótica Romântica | eFuxico', description: 'A foto do casal no sofá que criou uma ilusão de ótica surpreendente.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-grupo-amigos', title: 'Grupo de Amigos: A Foto que Confundiu | eFuxico', description: 'A foto do grupo de amigos que viralizou por sua ilusão de ótica.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-telescopio', title: 'Telescópio: A Ilusão de Ótica Marítima | eFuxico', description: 'A foto do telescópio que criou uma ilusão de ótica impressionante.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-amigas-festa', title: 'Amigas na Festa: A Foto que Viralizou | eFuxico', description: 'A foto das amigas na festa que confundiu milhões de pessoas.', category: 'duplo-sentido' },
  { path: '/foto-duplo-sentido-selfie-espelho', title: 'Selfie no Espelho: A Foto de Quarto | eFuxico', description: 'A selfie no espelho que enganou a internet com sua ilusão de ótica.', category: 'duplo-sentido' },
  
  // Série Felinos (rotas conforme App.tsx)
  { path: '/leopardo-nebuloso-felino-florestas-asiaticas', title: 'Leopardo Nebuloso: O Felino das Florestas Asiáticas | eFuxico', description: 'Conheça o Leopardo Nebuloso, um dos felinos mais belos e ameaçados das florestas asiáticas.', category: 'felinos' },
  { path: '/gato-bravo-dourado-asia-felino', title: 'Gato Bravo Dourado da Ásia | eFuxico', description: 'Conheça o Gato Bravo Dourado da Ásia, um felino temperamental das florestas asiáticas.', category: 'felinos' },
  { path: '/gato-chileno-kodkod-felino', title: 'Gato Chileno: O Felino da América do Sul | eFuxico', description: 'Conheça o Gato Chileno, também conhecido como Kodkod, o menor felino das Américas.', category: 'felinos' },
  { path: '/gato-chines-deserto-felino', title: 'Gato Chinês do Deserto | eFuxico', description: 'Conheça o Gato Chinês do Deserto, um felino endêmico da China.', category: 'felinos' },
  { path: '/gato-de-pallas-manul-felino', title: 'Gato de Pallas (Manul) | eFuxico', description: 'Conheça o Gato de Pallas, também conhecido como Manul, o felino das estepes asiáticas.', category: 'felinos' },
  { path: '/gato-do-deserto-areia-felino', title: 'Gato do Deserto | eFuxico', description: 'Conheça o Gato do Deserto, o felino adaptado ao norte da África e Oriente Médio.', category: 'felinos' },
  { path: '/gato-do-mato-pequeno-felino-brasil', title: 'Gato do Mato Pequeno | eFuxico', description: 'Conheça o Gato do Mato Pequeno, um felino brasileiro ameaçado de extinção.', category: 'felinos' },
  { path: '/gato-dos-pampas-palheiro-felino', title: 'Gato dos Pampas | eFuxico', description: 'Conheça o Gato dos Pampas, o felino dos campos abertos da América do Sul.', category: 'felinos' },
  { path: '/gato-maracaja-felino-acrobata-brasil', title: 'Gato Maracajá | eFuxico', description: 'Conheça o Gato Maracajá, o felino acrobata das florestas brasileiras.', category: 'felinos' },
  { path: '/gato-marmorado-felino-asia', title: 'Gato Marmorado | eFuxico', description: 'Conheça o Gato Marmorado, o felino das florestas do sudeste asiático.', category: 'felinos' },
  { path: '/gato-pescador-felino-asia', title: 'Gato Pescador | eFuxico', description: 'Conheça o Gato Pescador, o felino semi-aquático da Ásia.', category: 'felinos' },
  { path: '/jaguarundi-felino-americas', title: 'Jaguarundi: O Gato Mourisco das Américas | eFuxico', description: 'Conheça o Jaguarundi, também conhecido como Gato Mourisco, um felino das Américas.', category: 'felinos' },
  { path: '/jaguatirica-felino-brasil', title: 'Jaguatirica: O Felino das Américas | eFuxico', description: 'Conheça a Jaguatirica, o terceiro maior felino das Américas.', category: 'felinos' },
  { path: '/leopardo-das-neves-felino-montanhas', title: 'Leopardo das Neves | eFuxico', description: 'Conheça o Leopardo das Neves, o fantasma das montanhas do Himalaia.', category: 'felinos' },
  { path: '/lince-do-canada-felino', title: 'Lince do Canadá | eFuxico', description: 'Conheça o Lince do Canadá, o felino das florestas boreais da América do Norte.', category: 'felinos' },
  { path: '/lince-euroasiatico-felino', title: 'Lince Euroasiático | eFuxico', description: 'Conheça o Lince Euroasiático, o maior lince do mundo.', category: 'felinos' },
  { path: '/lince-iberico-felino-europa', title: 'Lince Ibérico | eFuxico', description: 'Conheça o Lince Ibérico, o felino mais ameaçado da Europa.', category: 'felinos' },
  { path: '/serval-felino-africa', title: 'Serval: O Felino Saltador da África | eFuxico', description: 'Conheça o Serval, o felino de pernas longas das savanas africanas.', category: 'felinos' },
];

// Série Lugares Proibidos — gerada automaticamente
const lugaresProibidosRoutes = [
  ['ilha-da-queimada-grande-cobras-brasil', 'Ilha da Queimada Grande: A Ilha das Cobras do Brasil | Efuxico', 'Conheça a Ilha da Queimada Grande, no litoral de São Paulo, proibida pela Marinha brasileira por abrigar a jararaca-ilhoa, uma das cobras mais letais do mundo.'],
  ['ilha-sentinela-do-norte-india', 'Ilha Sentinela do Norte: A Tribo Mais Isolada do Mundo | Efuxico', 'Visite virtualmente a Ilha Sentinela do Norte, no Oceano Índico, lar dos sentinelenses — povo isolado há 60 mil anos e protegido por lei pelo governo da Índia.'],
  ['area-51-base-secreta-nevada-eua', 'Área 51: A Base Militar Mais Secreta do Mundo | Efuxico', 'Conheça a Área 51, base ultrassecreta da Força Aérea Americana em Nevada que alimenta teorias sobre OVNIs e tecnologias militares classificadas há mais de 70 anos.'],
  ['arquivos-secretos-do-vaticano', 'Arquivos Secretos do Vaticano: 85 km de Documentos | Efuxico', 'Descubra os Arquivos Apostólicos do Vaticano, com 85 km de prateleiras, 1.200 anos de história e acesso restrito a pesquisadores credenciados pela Santa Sé.'],
  ['ilha-de-surtsey-islandia-reserva-cientifica', 'Ilha de Surtsey: A Ilha Vulcânica Proibida da Islândia | Efuxico', 'Conheça Surtsey, ilha vulcânica nascida em 1963 na costa da Islândia, fechada ao público e dedicada exclusivamente a estudos científicos sobre colonização biológica.'],
  ['meca-arabia-saudita-cidade-sagrada', 'Meca: A Cidade Sagrada Proibida a Não-Muçulmanos | Efuxico', 'Conheça Meca, na Arábia Saudita, cidade mais sagrada do Islã onde a entrada é restrita por lei apenas a fiéis muçulmanos durante todo o ano.'],
  ['clube-33-disneyland-california', 'Clube 33: O Bar Secreto Bilionário da Disneyland | Efuxico', 'Descubra o Clube 33, restaurante e bar privado escondido dentro da Disneyland na Califórnia, com taxa de adesão de 50 mil dólares e lista de espera de 14 anos.'],
  ['bohemian-grove-californiamcalifornia', 'Bohemian Grove: O Encontro Secreto da Elite Mundial | Efuxico', 'Conheça o Bohemian Grove, acampamento privado de 1.090 hectares na Califórnia onde presidentes, CEOs e magnatas se reúnem anualmente sob sigilo absoluto.'],
  ['santuario-de-ise-japao-xintoismo', 'Santuário de Ise: O Templo Sagrado Proibido do Japão | Efuxico', 'Conheça o Santuário de Ise, no Japão, templo xintoísta com 2 mil anos de história cuja área interna é restrita à família imperial e aos sacerdotes consagrados.'],
  ['cavernas-de-lascaux-franca-arte-rupestre', 'Cavernas de Lascaux: A Arte Rupestre Proibida na França | Efuxico', 'Descubra as cavernas de Lascaux, no sudoeste da França, com pinturas rupestres de 17 mil anos fechadas ao público desde 1963 para evitar danos irreversíveis.'],
  ['mount-weather-bunker-virginia-eua', 'Mount Weather: O Bunker Antinuclear dos EUA | Efuxico', 'Conheça Mount Weather, instalação subterrânea da FEMA em Virginia projetada para abrigar o governo americano em caso de guerra nuclear ou catástrofe nacional.'],
  ['ilha-de-poveglia-italia-assombrada', 'Ilha de Poveglia: A Ilha Mais Assombrada do Mundo | Efuxico', 'Visite virtualmente Poveglia, ilha proibida na Laguna de Veneza onde funcionaram uma estação de quarentena para peste e um asilo psiquiátrico até 1968.'],
  ['zona-de-exclusao-de-chernobyl-ucrania', 'Zona de Exclusão de Chernobyl: 30 km Proibidos | Efuxico', 'Conheça a Zona de Exclusão de Chernobyl, perímetro de 30 km no norte da Ucrânia ainda contaminado pelo desastre nuclear de 1986, com acesso altamente controlado.'],
  ['north-brother-island-nova-york-eua', 'North Brother Island: A Ilha Proibida em Nova York | Efuxico', 'Conheça North Brother Island, ilha abandonada no East River entre o Bronx e Rikers Island, fechada ao público e transformada em santuário ecológico para aves.'],
  ['fort-knox-reserva-de-ouro-eua', 'Fort Knox: O Cofre de Ouro Mais Seguro do Planeta | Efuxico', 'Conheça Fort Knox, o lendário depósito de ouro dos Estados Unidos em Kentucky, com mais de 4.500 toneladas do metal precioso e segurança de nível militar.'],
  ['cofre-da-coca-cola-formula-secreta', 'Cofre da Coca-Cola: A Fórmula Secreta Trancada | Efuxico', 'Descubra o cofre da Coca-Cola em Atlanta, onde a fórmula original de 1886 é guardada sob extrema segurança e apenas dois executivos conhecem a receita completa.'],
  ['svalbard-global-seed-vault-noruega', 'Svalbard: O Cofre de Sementes do Fim do Mundo | Efuxico', 'Conheça o Svalbard Global Seed Vault, cofre subterrâneo no Ártico norueguês que armazena mais de 1 milhão de amostras de sementes para salvar a humanidade.'],
  ['metro-2-tuneis-secretos-moscou-russia', 'Metro-2: O Sistema Secreto de Metrô do Kremlin | Efuxico', 'Conheça o Metro-2, sistema paralelo de metrô supostamente construído por Stalin sob Moscou para conectar o Kremlin a bunkers secretos da era soviética.'],
  ['base-de-dulce-novo-mexico-eua', 'Base de Dulce: A Instalação Subterrânea Misteriosa | Efuxico', 'Conheça as alegações sobre a Base de Dulce, suposta instalação subterrânea no Novo México que alimenta teorias sobre experimentos secretos do governo americano.'],
  ['ilha-das-bonecas-xochimilco-mexico', 'Ilha das Bonecas de Xochimilco: A Mais Assombrosa | Efuxico', 'Conheça a Ilha das Bonecas, em Xochimilco no México, onde mais de mil bonecas deterioradas pendem de árvores em homenagem a uma trágica história infantil.'],
];

lugaresProibidosRoutes.forEach(([slug, title, description]) => {
  routes.push({ path: `/lugar-proibido/${slug}`, title, description, category: 'lugares-proibidos' });
});

// Série Objetos Cotidianos com Funções Secretas — gerada automaticamente
const objetosFuncoesRoutes = [
  ['furo-tampa-caneta-bic-funcao-secreta', 'Por que existe um furo na tampa da caneta Bic? | eFuxico', 'Descubra a função secreta do pequeno furo no topo da tampa da caneta Bic. Não é para a tinta — é um detalhe de engenharia que pode literalmente salvar vidas todos os anos.'],
  ['buraco-cabo-panela-funcao-secreta', 'Para que serve o furo no cabo da panela? | eFuxico', 'Aquele buraco no final do cabo da panela tem uma função genial que vai além de pendurar utensílios. Descubra o uso secreto que poucos cozinheiros conhecem.'],
  ['bolso-pequeno-jeans-funcao-secreta', 'Para que serve o bolso pequeno do jeans? | eFuxico', 'O bolsinho dentro do bolso do jeans tem mais de 150 anos de história. Saiba para que ele foi criado originalmente pela Levis e por que continua existindo até hoje.'],
  ['rebites-metal-jeans-funcao-secreta', 'Para que servem os rebites de metal nos jeans? | eFuxico', 'Os botões de metal nos cantos dos bolsos do jeans não são apenas decorativos. Conheca a função estrutural por trás dessa invenção patenteada em 1873.'],
  ['ponta-azul-borracha-lapis-funcao-secreta', 'Para que serve a parte azul da borracha de lápis? | eFuxico', 'Você cresceu acreditando que a parte azul da borracha apagava tinta de caneta? Descubra o que ela realmente faz e por que a maioria das pessoas usa errado.'],
  ['dispenser-tampa-tic-tac-funcao-secreta', 'Como usar a tampa do Tic Tac corretamente | eFuxico', 'A tampa da embalagem de Tic Tac é um dispenser perfeito de uma bala por vez, mas quase todo mundo agita o pote como se fosse maracá. Veja o método certo.'],
  ['setinha-painel-combustivel-funcao-secreta', 'Setinha do combustível: para que lado fica o tanque? | eFuxico', 'Nunca mais erre o lado do tanque ao parar no posto. A setinha discreta no painel do carro indica exatamente onde está a tampa de combustível.'],
  ['cilindro-ferrita-cabo-usb-funcao-secreta', 'Para que serve o cilindro nos cabos USB e de monitor? | eFuxico', 'Aquele cilindro grosso perto da extremidade dos cabos USB e de monitor não é peso aleatório. É uma bobina de ferrita que protege seus equipamentos eletrônicos.'],
  ['furo-chave-cadeado-funcao-secreta', 'Para que serve o furo na chave do cadeado? | eFuxico', 'Toda chave de cadeado tem um pequeno furo na ponta. Ele tem duas funções importantes que poucos usuários conhecem e que prolongam a vida do mecanismo.'],
  ['dentes-papel-aluminio-funcao-secreta', 'Como travar o rolo de papel alumínio na caixa | eFuxico', 'Sua caixa de papel alumínio tem abas laterais que travam o rolo dentro da caixa. Pare de perder o rolo no meio da gaveta e aprenda a usar o sistema certo.'],
  ['furos-laterais-converse-funcao-secreta', 'Para que servem os furos no Converse All Star? | eFuxico', 'Os dois pequenos ilhoses metálicos nas laterais do Converse All Star não estão ali só para ventilar o pé. Descubra a função original criada na década de 1920.'],
  ['furo-tampa-panela-funcao-secreta', 'Para que serve o furo na tampa de vidro da panela? | eFuxico', 'O pequeno furo no botão da tampa de vidro da panela tem função crítica para cozimentos: descubra como ele evita derramamento e melhora a textura da comida.'],
  ['ferrita-cabo-monitor-funcao-secreta', 'Cilindro grosso no cabo de monitor: para que serve? | eFuxico', 'Cabos de monitor, impressora e equipamentos de áudio profissional têm cilindros grandes próximos ao conector. Saiba a função vital deles na qualidade do sinal.'],
  ['marca-colorida-tubo-pasta-dente-funcao-secreta', 'O que significa a marca colorida do tubo de pasta de dente? | eFuxico', 'A barra colorida no fim do tubo de pasta de dente não revela a composição do produto, como muitos acreditam. Descubra o que ela realmente faz na fábrica.'],
  ['silica-gel-saquinho-do-not-eat-funcao-secreta', 'Para que serve o saquinho de sílica gel das embalagens? | eFuxico', 'O saquinho com bolinhas brancas escrito Do Not Eat que vem em sapatos, bolsas e eletrônicos tem função preciosa. Saiba o porquê e como reutilizar em casa.'],
  ['aba-lata-refrigerante-segurar-canudo-funcao-secreta', 'Para que serve a aba da lata de refrigerante? | eFuxico', 'A pequena argola da lata de refrigerante tem outra função além de abrir a bebida. Aprenda como ela vira um suporte natural para o canudo, evitando que ele flutue.'],
  ['ponta-trena-furo-buracos-pretos-funcao-secreta', 'Para que servem o furo e os pontos pretos da trena? | eFuxico', 'A ponta metálica da trena tem furo, dente serrilhado e marcas pretas espaçadas. Cada detalhe foi projetado para facilitar a vida de marceneiros e pedreiros.'],
  ['rolha-vinho-tampa-funcao-secreta', 'Para que serve a rolha de cortiça do vinho? | eFuxico', 'A rolha de cortiça do vinho não é apenas uma tampa: ela respira, envelhece o vinho e protege a bebida. Conheça os mistérios desse pequeno cilindro vegetal.'],
  ['codigo-embalagem-alimento-funcao-secreta', 'Para que serve o código gravado nas embalagens? | eFuxico', 'Aquele código de números e letras gravado no fundo das embalagens de alimento, remédio ou cosmético tem função vital. Saiba como ele pode salvar sua saúde.'],
  ['anel-plastico-tampa-garrafa-funcao-secreta', 'Para que serve o anel plástico da tampa da garrafa? | eFuxico', 'O pequeno anel de plástico que sobra na boca da garrafa depois de aberta tem função crítica: ele é seu primeiro indicador de segurança e proteção contra adulteração.'],
];

objetosFuncoesRoutes.forEach(([slug, title, description]) => {
  routes.push({ path: `/objeto-funcao/${slug}`, title, description, category: 'objetos-funcoes' });
});

// Série Fenômenos Naturais Impossíveis — gerada automaticamente
const fenomenosNaturaisRoutes = [
  ['relampago-catatumbo-venezuela-tempestade-eterna', 'Relâmpago de Catatumbo: a tempestade eterna da Venezuela | eFuxico', 'Conheça o Relâmpago de Catatumbo, fenômeno na foz do rio Catatumbo na Venezuela onde até 280 raios por hora caem sem trovão audível há séculos.'],
  ['pedras-deslizantes-vale-da-morte-california', 'Pedras Deslizantes do Vale da Morte: rochas que se movem | eFuxico', 'Conheça as Sailing Stones do Racetrack Playa, no Vale da Morte, Califórnia: pedras de até 320 kg que deslizam sozinhas pelo deserto deixando rastros.'],
  ['blood-falls-cataratas-de-sangue-antartida', 'Blood Falls: as cataratas de sangue da Antártida explicadas | eFuxico', 'Descubra Blood Falls, fluxo vermelho-sangue que escorre da geleira Taylor na Antártida — mistério oceanográfico que intrigou cientistas por mais de um século.'],
  ['luzes-de-hessdalen-noruega-fenomeno-inexplicavel', 'Luzes de Hessdalen: o fenômeno luminoso inexplicável da Noruega | eFuxico', 'Conheça as Luzes de Hessdalen, esferas luminosas que aparecem há décadas em vale norueguês e desafiam física, meteorologia e ufologia até hoje.'],
  ['taos-hum-zumbido-novo-mexico-eua', 'Taos Hum: o misterioso zumbido constante do Novo México | eFuxico', 'Descubra o Taos Hum, zumbido grave persistente ouvido por apenas 2% dos moradores da cidade de Taos, no Novo México, sem origem identificada desde os anos 1990.'],
  ['circulos-de-fadas-namibia-deserto-namib', 'Círculos de Fadas: o mistério dos anéis no deserto da Namíbia | eFuxico', 'Conheça os Círculos de Fadas, padrões circulares perfeitos que se espalham pelo deserto da Namíbia há séculos sem que a ciência consiga explicar plenamente.'],
  ['bolas-de-fogo-naga-rio-mekong-tailandia', 'Bolas de Fogo de Naga: o mistério das esferas no rio Mekong | eFuxico', 'Conheça as Bolas de Fogo de Naga, esferas luminosas que emergem todo ano do rio Mekong na Tailândia durante o fim do Pousada Budista de outubro.'],
  ['mar-de-estrelas-bioluminescencia-maldivas', 'Mar de Estrelas: o mistério da praia luminosa nas Maldivas | eFuxico', 'Conheça o Mar de Estrelas, fenômeno luminoso azul que transforma as praias das Maldivas em céu noturno e cuja intensidade ainda desafia previsões científicas.'],
  ['horsetail-fall-cascata-de-fogo-yosemite', 'Horsetail Fall: a cachoeira que vira fogo em Yosemite | eFuxico', 'Conheça o Firefall de Yosemite: por apenas duas semanas ao ano, a cachoeira Horsetail Fall ganha aparência de lava ao refletir o pôr-do-sol em El Capitan.'],
  ['floresta-torcida-gryfino-polonia', 'Floresta Torcida de Gryfino: o mistério dos pinheiros curvados | eFuxico', 'Conheça a Crooked Forest da Polônia: 400 pinheiros com troncos curvados em J perfeito plantados nos anos 1930 sem explicação científica até hoje.'],
  ['luzes-min-min-outback-australia', 'Luzes de Min Min: o fenômeno luminoso do interior da Austrália | eFuxico', 'Conheça as Luzes de Min Min, esferas luminosas que perseguem viajantes no outback australiano há mais de um século sem explicação consensual.'],
  ['moeraki-boulders-esferas-perfeitas-nova-zelandia', 'Moeraki Boulders: as esferas naturais perfeitas da Nova Zelândia | eFuxico', 'Conheça os Moeraki Boulders, rochas perfeitamente esféricas espalhadas em praia da Nova Zelândia, com até 2,2 metros de diâmetro e idade de 60 milhões de anos.'],
  ['chuva-vermelha-kerala-india', 'Chuva Vermelha de Kerala: a precipitação misteriosa da Índia | eFuxico', 'Em 2001, o estado de Kerala, na Índia, registrou chuvas com coloração vermelho-sangue por dois meses. Origem das partículas ainda divide cientistas.'],
  ['the-bloop-som-oceano-pacifico', 'The Bloop: o som submarino que confundiu a NOAA por 15 anos | eFuxico', 'Conheça The Bloop, som ultragrave detectado pela NOAA no Oceano Pacífico em 1997, audível a 5.000 km de distância, com origem oficial revisada recentemente.'],
  ['pilares-de-luz-canada-fenomeno-atmosferico', 'Pilares de Luz: as colunas luminosas no céu do Canadá | eFuxico', 'Conheça os Pilares de Luz: colunas verticais coloridas que aparecem no céu canadense em noites geladas e ainda intrigam pela perfeição geométrica.'],
];

fenomenosNaturaisRoutes.forEach(([slug, title, description]) => {
  routes.push({ path: `/fenomeno-natural/${slug}`, title, description, category: 'fenomenos-naturais' });
});

const errosHistoricosRoutes = [
  ['torre-de-pisa-erro-fundacao-arquitetura', 'Torre de Pisa: o erro histórico de engenharia que criou um ícone | eFuxico', 'Descubra como um erro de cálculo nas fundações da Torre de Pisa em 1173 transformou uma falha arquitetônica em um dos monumentos mais visitados do mundo.'],
  ['titanic-poucos-botes-salva-vidas-1912', 'Titanic 1912: o erro dos botes salva-vidas que matou 1.500 pessoas | eFuxico', 'Entenda por que o Titanic tinha botes salva-vidas apenas para 1/3 dos passageiros, um erro histórico que causou a morte de mais de 1.500 pessoas em 15 de abril de 1912.'],
  ['chernobyl-teste-seguranca-erro-1986', 'Chernobyl 1986: o erro do teste de segurança que causou o desastre nuclear | eFuxico', 'Descubra como um teste de segurança mal executado no reator 4 de Chernobyl causou a maior catástrofe nuclear da história em 26 de abril de 1986.'],
  ['hindenburg-hidrogenio-erro-1937', 'Hindenburg 1937: o erro do hidrogênio que matou a era dos dirigíveis | eFuxico', 'Entenda como o dirigível Hindenburg foi condenado a usar hidrogênio inflamável em vez de hélio, causando o desastre em Nova Jersey em 6 de maio de 1937.'],
  ['napoleao-invasao-russia-1812-inverno', 'Napoleão 1812: o erro da invasão da Rússia que destruiu a Grande Armée | eFuxico', 'Como Napoleão Bonaparte cometeu o erro histórico de invadir a Rússia em 1812 com 600 mil soldados e voltou com apenas 30 mil, iniciando o fim de seu império.'],
  ['operacao-barbarossa-hitler-uniao-sovietica-1941', 'Operação Barbarossa 1941: o erro de Hitler ao invadir a URSS | eFuxico', 'Descubra como Hitler cometeu o mesmo erro histórico de Napoleão ao invadir a União Soviética em 22 de junho de 1941, decisão que selaria o destino da Alemanha nazista.'],
  ['pearl-harbor-avisos-ignorados-1941', 'Pearl Harbor 1941: os avisos ignorados antes do ataque japonês | eFuxico', 'Como falhas de inteligência e avisos ignorados permitiram o ataque surpresa japonês a Pearl Harbor em 7 de dezembro de 1941 e a entrada dos EUA na Segunda Guerra.'],
  ['mars-climate-orbiter-erro-unidades-metricas-nasa-1999', 'Mars Climate Orbiter 1999: o erro de conversão métrica da NASA | eFuxico', 'Como uma simples confusão entre pés e metros fez a NASA perder a sonda Mars Climate Orbiter de US$ 327 milhões em 23 de setembro de 1999.'],
  ['tratado-versalhes-erro-1919-segunda-guerra-mundial', 'Tratado de Versalhes 1919: o erro histórico que causou a Segunda Guerra | eFuxico', 'Entenda como o Tratado de Versalhes assinado em 28 de junho de 1919 humilhou a Alemanha e plantou as bases da ascensão de Hitler e da Segunda Guerra Mundial.'],
  ['kodak-cameras-digitais-erro-estrategico', 'Kodak: o erro histórico da empresa que inventou a câmera digital e faliu | eFuxico', 'Como a Kodak inventou a câmera digital em 1975 e engavetou a tecnologia por medo de canibalizar seu negócio de filmes, cometendo um erro que a levou à falência em 2012.'],
];

errosHistoricosRoutes.forEach(([slug, title, description]) => {
  routes.push({ path: `/erro-historico/${slug}`, title, description, category: 'erros-historicos' });
});

const testesPersonalidadeRoutes = [
  ['teste-de-rorschach-manchas-tinta-personalidade', 'Teste de Rorschach: o que as manchas de tinta revelam sobre você | eFuxico', 'Descubra como o teste de Rorschach usa 10 manchas de tinta simétricas para revelar traços profundos da personalidade, emoções reprimidas e forma de pensar.'],
  ['teste-mbti-16-personalidades-myers-briggs', 'Teste MBTI: as 16 personalidades de Myers-Briggs explicadas | eFuxico', 'Entenda como o teste MBTI classifica pessoas em 16 tipos de personalidade (INTJ, ENFP, ISTP e outros) com base na tipologia de Carl Jung.'],
  ['teste-big-five-ocean-cinco-grandes-fatores-personalidade', 'Teste Big Five (OCEAN): os 5 grandes fatores da personalidade | eFuxico', 'Entenda o modelo Big Five ou OCEAN, considerado o padrão-ouro da psicologia científica para medir os 5 grandes fatores da personalidade humana.'],
  ['eneagrama-personalidade-9-tipos-autoconhecimento', 'Eneagrama: os 9 tipos de personalidade e como descobrir o seu | eFuxico', 'Conheça o Eneagrama da Personalidade, sistema com 9 tipos que revela sua motivação central, medos profundos e caminho de crescimento pessoal.'],
  ['teste-disc-comportamento-4-perfis-profissional', 'Teste DISC: os 4 perfis comportamentais D, I, S e C explicados | eFuxico', 'Entenda o teste DISC e os 4 perfis comportamentais (Dominância, Influência, Estabilidade e Conformidade) usados por milhões de empresas no mundo todo.'],
  ['teste-vocacional-riasec-holland-6-perfis-carreira', 'Teste RIASEC de Holland: descubra sua carreira ideal em 6 perfis | eFuxico', 'Descubra o teste RIASEC de John Holland, referência mundial em orientação vocacional, que classifica pessoas em 6 perfis de carreira e ambiente de trabalho.'],
  ['teste-de-cores-luscher-personalidade-preferencia-cor', 'Teste das Cores de Lüscher: o que sua cor favorita revela | eFuxico', 'Descubra o teste das cores de Max Lüscher, criado em 1947, que revela traços de personalidade, estado emocional e conflitos psicológicos pela preferência por cores.'],
  ['teste-tat-apercepcao-tematica-historias-personalidade', 'Teste TAT (Apercepção Temática): as histórias que revelam sua personalidade | eFuxico', 'Conheça o TAT, teste projetivo criado em Harvard em 1935 que analisa a personalidade através das histórias que você inventa sobre imagens ambíguas.'],
  ['teste-htp-casa-arvore-pessoa-desenho-personalidade', 'Teste HTP (Casa-Árvore-Pessoa): o que seus desenhos revelam | eFuxico', 'Entenda o teste HTP (House-Tree-Person), criado em 1948, que analisa personalidade através de três desenhos simples: uma casa, uma árvore e uma pessoa.'],
  ['teste-wartegg-desenho-8-quadrados-personalidade', 'Teste Wartegg: o que você desenha em 8 quadrados revela sobre você | eFuxico', 'Descubra o teste Wartegg, criado em 1939, que analisa personalidade a partir de desenhos que você completa em 8 pequenos quadrados com estímulos gráficos.'],
  ['teste-16pf-cattell-16-fatores-personalidade', 'Teste 16PF de Cattell: os 16 fatores da personalidade explicados | eFuxico', 'Entenda o teste 16PF criado por Raymond Cattell em 1949, que mede a personalidade em 16 fatores primários e é referência em psicologia científica.'],
  ['teste-de-zulliger-z-test-versao-rapida-rorschach', 'Teste de Zulliger (Z-Test): a versão rápida do Rorschach | eFuxico', 'Conheça o teste de Zulliger ou Z-Test, versão coletiva e rápida do Rorschach criada em 1948, muito usada em concursos e seleções psicológicas no Brasil.'],
  ['teste-palografico-personalidade-atencao-concentracao', 'Teste Palográfico: personalidade, atenção e concentração em traços | eFuxico', 'Descubra o Teste Palográfico, análise de traços verticais que revela atenção, concentração, emocionalidade e organização em concursos e seleções.'],
  ['teste-szondi-8-fotos-personalidade-inconsciente', 'Teste de Szondi: as 8 fotos que revelam impulsos inconscientes | eFuxico', 'Conheça o Teste de Szondi, criado em 1937, que analisa personalidade e impulsos inconscientes através de escolhas entre 48 fotografias de rostos.'],
  ['inventario-beck-depressao-teste-emocional', 'Inventário Beck (BDI): o teste padrão-ouro para avaliar saúde emocional | eFuxico', 'Descubra o Inventário Beck de Depressão (BDI), instrumento criado em 1961 e considerado padrão-ouro mundial para avaliar sintomas emocionais e depressivos.'],
];

testesPersonalidadeRoutes.forEach(([slug, title, description]) => {
  routes.push({ path: `/teste-personalidade/${slug}`, title, description, category: 'testes-personalidade' });
});

// Série 20 Segredos de Profissões
const segredosProfissoesRoutes = [
  ['segredos-medicos-nunca-contam-consultorio', 'Segredos de médicos: o que os doutores nunca contam aos pacientes | eFuxico', 'Descubra os segredos que médicos nunca contam sobre consultas, plantões, indústria farmacêutica e prontuários — verdades reais do dia a dia da medicina que impactam sua saúde.'],
  ['segredos-enfermeiros-plantao-hospital', 'Segredos de enfermeiros: o que a enfermagem nunca conta sobre plantões | eFuxico', 'Enfermeiros revelam os segredos do plantão hospitalar: escala esgotante, protocolos que salvam vidas, erros escondidos e a hierarquia oculta que domina o hospital brasileiro.'],
  ['segredos-pilotos-aviacao-comercial-cabine', 'Segredos de pilotos: o que a aviação comercial nunca conta aos passageiros | eFuxico', 'Pilotos comerciais revelam segredos da cabine: turbulência real, piloto automático, cochilos autorizados, atrasos programados e o que realmente acontece antes da decolagem.'],
  ['segredos-chefs-cozinha-restaurante', 'Segredos de chefs: verdades da cozinha profissional que ninguém conta | eFuxico', 'Chefs revelam os segredos da cozinha profissional: reaproveitamento, congelamento, pratos do dia, custo real do prato e o que acontece quando o cliente devolve a comida.'],
  ['segredos-advogados-tribunal-cliente', 'Segredos de advogados: verdades da advocacia que ninguém conta | eFuxico', 'Advogados revelam segredos do escritório e do tribunal: honorários, acordos, prazos processuais, ética profissional e o que realmente aumenta suas chances de vencer uma ação.'],
  ['segredos-professores-sala-aula-educacao', 'Segredos de professores: verdades da educação que ninguém conta | eFuxico', 'Professores revelam segredos da sala de aula: salário real, correção de provas em casa, indisciplina, sistema de notas e o impacto invisível na vida dos alunos.'],
  ['segredos-policiais-abordagem-plantao', 'Segredos de policiais: verdades da polícia que ninguém conta | eFuxico', 'Policiais revelam segredos do plantão: abordagem, escala esgotante, saúde mental, produtividade, corregedoria e o que a farda esconde do cidadão comum.'],
  ['segredos-bombeiros-resgate-incendio', 'Segredos de bombeiros: verdades do resgate e combate a incêndio | eFuxico', 'Bombeiros militares revelam segredos do quartel: escala, treinamento, resgate em altura, incêndio residencial, primeiros socorros e mitos que colocam vidas em risco.'],
  ['segredos-dentistas-consultorio-tratamento', 'Segredos de dentistas: verdades do consultório odontológico | eFuxico', 'Dentistas revelam segredos do consultório: convênios, custo real de implantes, clareamento, canal, ortodontia e o que realmente evita cárie e problema periodontal.'],
  ['segredos-programadores-desenvolvedores-software', 'Segredos de programadores: verdades da carreira em tecnologia | eFuxico', 'Desenvolvedores revelam segredos da carreira em tech: stack real x hype, code review, dívida técnica, home office, salários e o que separa júnior de sênior no mercado.'],
  ['segredos-jornalistas-redacao-noticia', 'Segredos de jornalistas: verdades da redação e da apuração | eFuxico', 'Jornalistas revelam segredos da redação: apuração, fontes, pressão de deadline, cliques, patrocínio disfarçado, fake news e o que separa notícia real de propaganda.'],
  ['segredos-vendedores-loja-comissao', 'Segredos de vendedores: técnicas de venda que ninguém conta | eFuxico', 'Vendedores revelam segredos da loja física e digital: gatilhos mentais, comissão, meta, upsell, cross-sell e as frases prontas que aumentam sua chance de comprar.'],
  ['segredos-corretores-imoveis-imobiliaria', 'Segredos de corretores de imóveis: verdades do mercado imobiliário | eFuxico', 'Corretores revelam segredos da compra e venda de imóveis: negociação, avaliação, comissão, financiamento, defeitos ocultos e o que fazer antes de assinar o contrato.'],
  ['segredos-baristas-cafeteria-cafe-especial', 'Segredos de baristas: verdades sobre café especial e cafeteria | eFuxico', 'Baristas revelam segredos da cafeteria: extração, moagem, temperatura, leite vaporizado, custo do grão especial e como preparar espresso profissional em casa.'],
  ['segredos-personal-trainer-academia-treino', 'Segredos de personal trainer: verdades sobre treino e resultado | eFuxico', 'Personal trainers revelam segredos da academia: hipertrofia real, emagrecimento, suplementação, recuperação, hormônios e o que separa treino que funciona de moda passageira.'],
  ['segredos-cabeleireiros-salao-beleza', 'Segredos de cabeleireiros: verdades do salão de beleza | eFuxico', 'Cabeleireiros revelam segredos do salão: química capilar, coloração, corte, escova, hidratação e o que realmente cuida do fio versus o que só vende produto.'],
  ['segredos-mecanicos-oficina-carro', 'Segredos de mecânicos: verdades da oficina automotiva | eFuxico', 'Mecânicos revelam segredos da oficina: revisão obrigatória, peça original, orçamento inflado, diagnóstico eletrônico e como identificar oficina séria de golpista.'],
  ['segredos-fotografos-fotografia-profissional', 'Segredos de fotógrafos: verdades da fotografia profissional | eFuxico', 'Fotógrafos revelam segredos do estúdio e do casamento: equipamento, luz, pós-produção, precificação e o que realmente separa fotografia amadora de trabalho profissional.'],
  ['segredos-engenheiros-civis-obra-construcao', 'Segredos de engenheiros civis: verdades da construção civil | eFuxico', 'Engenheiros civis revelam segredos da obra: projeto, fundação, concreto, cronograma, ART, medição de mestre de obra e o que fiscalizar para evitar prejuízos.'],
  ['segredos-motoristas-aplicativo-uber-99', 'Segredos de motoristas de aplicativo: verdades da Uber e 99 | eFuxico', 'Motoristas de app revelam segredos da corrida: cálculo da tarifa, ganho real por hora, taxa de cancelamento, avaliação, jornada esgotante e como funciona o algoritmo dinâmico.'],
];

segredosProfissoesRoutes.forEach(([slug, title, description]) => {
  routes.push({ path: `/segredo-profissao/${slug}`, title, description, category: 'segredos-profissoes' });
});

// Gerar links de navegação HTML (não React Router) para permitir crawling
function generateNavigationLinks() {
  // Navegação principal
  const mainNav = `
    <nav style="display:none;" aria-label="Navegação Principal">
      <a href="/">Home</a>
      <a href="/sobre/">Sobre</a>
      <a href="/contato/">Contato</a>
      <a href="/recentes/">Recentes</a>
      <a href="/tendencias/">Tendências</a>
      <a href="/hot/">Hot</a>
      <a href="/populares/">Populares</a>
      <a href="/privacidade/">Privacidade</a>
      <a href="/termos/">Termos</a>
      <a href="/felinos/">Felinos</a>
    </nav>`;
  
  // Links para todas as páginas de conteúdo
  const contentLinks = routes
    .filter(r => r.path !== '/')
    .map(r => {
      const href = r.path.endsWith('/') ? r.path : r.path + '/';
      return `<a href="${href}">${r.title.split('|')[0].trim()}</a>`;
    })
    .join('\n      ');
  
  return `
    <!-- Links ocultos para SEO - permite que crawlers descubram todas as URLs -->
    ${mainNav}
    <nav style="display:none;" aria-label="Todos os Artigos">
      ${contentLinks}
    </nav>
  `;
}

// Template HTML base para páginas estáticas
function generateStaticHTML(route, mainHtmlContent, scriptTag) {
  const canonical = route.path === '/' 
    ? 'https://efuxico.com.br/' 
    : `https://efuxico.com.br${route.path}/`;
  const ogUrl = canonical;
  
  // Links de navegação para SEO
  const seoLinks = generateNavigationLinks();
  
  // Conteúdo textual básico para SEO (word count > 0)
  const seoContent = `
    <noscript>
      <div style="padding: 40px; max-width: 800px; margin: 0 auto;">
        <header style="text-align: center; margin-bottom: 40px;">
          <a href="/" style="font-size: 24px; font-weight: bold; color: #FFC107; text-decoration: none;">eFuxico</a>
          <p style="margin-top: 10px;">Seu portal de entretenimento com as últimas notícias sobre celebridades, fofocas e tendências.</p>
        </header>
        
        <main>
          <h1>${route.title.split('|')[0].trim()}</h1>
          <p>${route.description}</p>
          
          <h2>Navegação</h2>
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/sobre/">Sobre Nós</a></li>
            <li><a href="/recentes/">Notícias Recentes</a></li>
            <li><a href="/tendencias/">Tendências</a></li>
            <li><a href="/hot/">Hot - Mais Comentado</a></li>
            <li><a href="/populares/">Mais Populares</a></li>
            <li><a href="/felinos/">18 Espécies de Felinos</a></li>
            <li><a href="/contato/">Contato</a></li>
          </ul>
          
          <h2>Séries Populares</h2>
          <h3>Celebridades Antes e Depois da Maquiagem</h3>
          <ul>
            <li><a href="/xuxa-meneghel-antes-depois-maquiagem/">Xuxa Meneghel</a></li>
            <li><a href="/sandy-cantora-antes-depois-maquiagem/">Sandy</a></li>
            <li><a href="/ludmilla-antes-depois-maquiagem/">Ludmilla</a></li>
            <li><a href="/luana-piovani-antes-depois-maquiagem/">Luana Piovani</a></li>
            <li><a href="/leticia-spiller-antes-depois-maquiagem/">Letícia Spiller</a></li>
            <li><a href="/giovanna-antonelli-antes-depois-maquiagem/">Giovanna Antonelli</a></li>
            <li><a href="/juliana-paes-antes-depois-maquiagem/">Juliana Paes</a></li>
            <li><a href="/ana-hickmann-antes-depois-maquiagem/">Ana Hickmann</a></li>
            <li><a href="/carolina-ferraz-antes-depois-maquiagem/">Carolina Ferraz</a></li>
          </ul>
          
          <h3>Fotos de Duplo Sentido</h3>
          <ul>
            <li><a href="/foto-duplo-sentido-crianca-praia/">Criança na Praia</a></li>
            <li><a href="/foto-duplo-sentido-casal-barco/">Casal no Barco</a></li>
            <li><a href="/foto-duplo-sentido-nado-sincronizado/">Nado Sincronizado</a></li>
            <li><a href="/foto-duplo-sentido-jogador-basquete/">Jogador de Basquete</a></li>
            <li><a href="/foto-duplo-sentido-casal-sofa/">Casal no Sofá</a></li>
            <li><a href="/foto-duplo-sentido-amigas-festa/">Amigas na Festa</a></li>
            <li><a href="/foto-duplo-sentido-selfie-espelho/">Selfie no Espelho</a></li>
          </ul>
          
          <h3>18 Espécies de Felinos</h3>
          <ul>
            <li><a href="/leopardo-nebuloso-felino-florestas-asiaticas/">Leopardo Nebuloso</a></li>
            <li><a href="/gato-bravo-dourado-asia-felino/">Gato Bravo Dourado da Ásia</a></li>
            <li><a href="/gato-chileno-kodkod-felino/">Gato Chileno (Kodkod)</a></li>
            <li><a href="/gato-de-pallas-manul-felino/">Gato de Pallas (Manul)</a></li>
            <li><a href="/gato-do-deserto-areia-felino/">Gato do Deserto</a></li>
            <li><a href="/gato-do-mato-pequeno-felino-brasil/">Gato do Mato</a></li>
            <li><a href="/gato-maracaja-felino-acrobata-brasil/">Gato Maracajá</a></li>
            <li><a href="/jaguatirica-felino-brasil/">Jaguatirica</a></li>
            <li><a href="/leopardo-das-neves-felino-montanhas/">Leopardo das Neves</a></li>
            <li><a href="/serval-felino-africa/">Serval</a></li>
          </ul>
        </main>
        
        <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; text-align: center;">
          <p>© 2025 eFuxico - Todos os Direitos Reservados</p>
          <p>
            <a href="/privacidade/">Política de Privacidade</a> | 
            <a href="/termos/">Termos de Uso</a> | 
            <a href="/contato/">Contato</a>
          </p>
        </footer>
      </div>
    </noscript>
  `;
  
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#FFC107" />
    
    <!-- SEO Meta Tags -->
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="efuxico, fofoca, celebridades, entretenimento, notícias, famosos, buzz, tendências, brasil" />
    <meta name="author" content="eFuxico - https://efuxico.com.br" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="pt-br" href="${canonical}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="https://efuxico.com.br/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="eFuxico" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@efuxico" />
    <meta name="twitter:creator" content="@efuxico" />
    <meta name="twitter:url" content="${ogUrl}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="https://efuxico.com.br/og-image.jpg" />
    
    <!-- Schema.org markup for Google -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "${route.title}",
      "description": "${route.description}",
      "url": "${canonical}",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@type": "WebSite",
        "name": "eFuxico",
        "url": "https://efuxico.com.br"
      },
      "publisher": {
        "@type": "Organization",
        "name": "eFuxico",
        "url": "https://efuxico.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://efuxico.com.br/logo.png"
        }
      }
    }
    </script>
${mainHtmlContent}
  </head>

  <body>
    <div id="root"></div>
    ${seoLinks}
    ${seoContent}
    ${scriptTag}
  </body>
</html>`;
}

// Função principal para gerar páginas estáticas
async function generateStaticPages() {
  console.log('🚀 Iniciando geração de páginas estáticas para SEO...\n');
  
  // Verificar se o diretório dist existe
  if (!fs.existsSync(distDir)) {
    console.error('❌ Diretório dist não encontrado. Execute npm run build primeiro.');
    process.exit(1);
  }
  
  // Ler o index.html original para extrair os scripts e styles
  const originalIndexPath = path.join(distDir, 'index.html');
  let mainHtmlContent = '';
  let scriptTag = '<script type="module" src="/assets/index.js"></script>';
  
  if (fs.existsSync(originalIndexPath)) {
    const originalHtml = fs.readFileSync(originalIndexPath, 'utf-8');
    // Extrair links de CSS do head
    const cssLinks = originalHtml.match(/<link[^>]*rel="stylesheet"[^>]*>/g) || [];
    const modulePreloads = originalHtml.match(/<link[^>]*rel="modulepreload"[^>]*>/g) || [];
    mainHtmlContent = '\n    ' + [...cssLinks, ...modulePreloads].join('\n    ');
    
    // Extrair o script principal com hash correto
    const scriptMatch = originalHtml.match(/<script[^>]*type="module"[^>]*src="[^"]*"[^>]*><\/script>/);
    if (scriptMatch) {
      scriptTag = scriptMatch[0];
    }
  }
  
  let created = 0;
  
  for (const route of routes) {
    const routePath = route.path === '/' ? '' : route.path;
    const dirPath = path.join(distDir, routePath);
    const filePath = path.join(dirPath, 'index.html');
    
    // Criar diretório se não existir
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Gerar HTML estático
    const html = generateStaticHTML(route, mainHtmlContent, scriptTag);
    fs.writeFileSync(filePath, html);
    
    console.log(`✅ Criado: ${route.path === '/' ? '/index.html' : route.path + '/index.html'}`);
    created++;
  }
  
  console.log(`\n🎉 ${created} páginas estáticas geradas com sucesso!`);
  console.log('📁 Todas as páginas estão prontas para indexação pelo Google.');
}

generateStaticPages().catch(console.error);
