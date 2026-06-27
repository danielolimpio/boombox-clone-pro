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
