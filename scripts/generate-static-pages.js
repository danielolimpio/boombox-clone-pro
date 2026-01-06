/**
 * Script para gerar páginas HTML estáticas para SEO
 * Baseado na estrutura do The Art of Yoga
 * 
 * Este script é executado após o build do Vite e cria
 * pastas físicas com index.html para cada rota do site.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Lista completa de todas as rotas do site eFuxico
const routes = [
  // Páginas institucionais
  { path: '/', title: 'eFuxico - Entretenimento, Celebridades e Fofocas | Portal de Notícias', description: 'eFuxico - Seu portal de entretenimento com as últimas notícias sobre celebridades, fofocas, tendências e muito mais.' },
  { path: '/sobre', title: 'Sobre o eFuxico | Conheça Nossa História', description: 'Conheça o eFuxico, seu portal de entretenimento favorito. Saiba mais sobre nossa história e equipe.' },
  { path: '/contato', title: 'Contato | eFuxico', description: 'Entre em contato com a equipe do eFuxico. Envie suas sugestões, críticas e dúvidas.' },
  { path: '/privacidade', title: 'Política de Privacidade | eFuxico', description: 'Política de privacidade do eFuxico. Saiba como tratamos seus dados pessoais.' },
  { path: '/termos', title: 'Termos de Uso | eFuxico', description: 'Termos de uso do site eFuxico. Leia nossos termos e condições.' },
  
  // Páginas de navegação
  { path: '/recentes', title: 'Notícias Recentes | eFuxico', description: 'As últimas notícias e fofocas do mundo das celebridades. Fique por dentro de tudo.' },
  { path: '/tendencias', title: 'Tendências | eFuxico', description: 'O que está em alta no mundo do entretenimento. Confira as tendências do momento.' },
  { path: '/hot', title: 'Hot - O Mais Comentado | eFuxico', description: 'Os assuntos mais comentados e polêmicos do mundo das celebridades.' },
  { path: '/populares', title: 'Mais Populares | eFuxico', description: 'Os conteúdos mais populares do eFuxico. O que todo mundo está lendo.' },
  { path: '/felinos', title: '18 Espécies de Felinos ao Redor do Mundo | eFuxico', description: 'Conheça 18 espécies fascinantes de felinos selvagens ao redor do mundo, incluindo os que vivem no Brasil.' },
  
  // Série Celebridades Antes e Depois
  { path: '/xuxa-meneghel-antes-depois-maquiagem', title: 'Xuxa Meneghel Antes e Depois da Maquiagem | eFuxico', description: 'Veja a transformação incrível de Xuxa Meneghel antes e depois da maquiagem. Celebridades ao natural.' },
  { path: '/sandy-cantora-antes-depois-maquiagem', title: 'Sandy Cantora Antes e Depois da Maquiagem | eFuxico', description: 'Confira Sandy antes e depois da maquiagem. A cantora brasileira ao natural.' },
  { path: '/ludmilla-antes-depois-maquiagem', title: 'Ludmilla Antes e Depois da Maquiagem | eFuxico', description: 'Ludmilla antes e depois da maquiagem. Veja a cantora ao natural.' },
  { path: '/luana-piovani-antes-depois-maquiagem', title: 'Luana Piovani Antes e Depois da Maquiagem | eFuxico', description: 'Luana Piovani antes e depois da maquiagem. A atriz ao natural.' },
  { path: '/leticia-spiller-antes-depois-maquiagem', title: 'Letícia Spiller Antes e Depois da Maquiagem | eFuxico', description: 'Letícia Spiller antes e depois da maquiagem. A atriz ao natural.' },
  { path: '/giovanna-antonelli-antes-depois-maquiagem', title: 'Giovanna Antonelli Antes e Depois da Maquiagem | eFuxico', description: 'Giovanna Antonelli antes e depois da maquiagem. A atriz ao natural.' },
  { path: '/eliane-apresentadora-antes-depois-maquiagem', title: 'Eliane Apresentadora Antes e Depois da Maquiagem | eFuxico', description: 'Eliane apresentadora antes e depois da maquiagem. Ao natural.' },
  { path: '/juliana-paes-antes-depois-maquiagem', title: 'Juliana Paes Antes e Depois da Maquiagem | eFuxico', description: 'Juliana Paes antes e depois da maquiagem. A atriz ao natural.' },
  { path: '/ana-hickmann-antes-depois-maquiagem', title: 'Ana Hickmann Antes e Depois da Maquiagem | eFuxico', description: 'Ana Hickmann antes e depois da maquiagem. A modelo ao natural.' },
  { path: '/carolina-ferraz-antes-depois-maquiagem', title: 'Carolina Ferraz Antes e Depois da Maquiagem | eFuxico', description: 'Carolina Ferraz antes e depois da maquiagem. A atriz ao natural.' },
  
  // Série Duplo Sentido
  { path: '/foto-duplo-sentido-crianca-praia-ilusao', title: 'Criança na Praia: A Ilusão de Ótica que Viralizou | eFuxico', description: 'Descubra a foto viral da criança na praia que confundiu milhões de pessoas na internet.' },
  { path: '/foto-duplo-sentido-casal-barco', title: 'Casal no Barco: A Foto que Confundiu a Internet | eFuxico', description: 'A foto do casal no barco que gerou confusão na internet. Entenda a ilusão de ótica.' },
  { path: '/foto-duplo-sentido-nado-sincronizado', title: 'Nado Sincronizado: A Foto Esportiva que Confundiu | eFuxico', description: 'A incrível foto de nado sincronizado que criou uma ilusão de ótica surpreendente.' },
  { path: '/foto-duplo-sentido-jogador-basquete', title: 'Jogador de Basquete: A Ilusão de Ótica na NBA | eFuxico', description: 'A foto viral do jogador de basquete que criou uma ilusão de ótica impressionante.' },
  { path: '/foto-duplo-sentido-mulher-espelho', title: 'Mulher no Espelho: A Foto que Viralizou | eFuxico', description: 'A foto da mulher no espelho que confundiu milhões na internet.' },
  { path: '/foto-duplo-sentido-casal-sofa', title: 'Casal no Sofá: A Ilusão de Ótica Romântica | eFuxico', description: 'A foto do casal no sofá que criou uma ilusão de ótica surpreendente.' },
  { path: '/foto-duplo-sentido-amigos-festa', title: 'Amigos na Festa: A Foto que Confundiu | eFuxico', description: 'A foto dos amigos na festa que viralizou por sua ilusão de ótica.' },
  { path: '/foto-duplo-sentido-pier-luneta', title: 'Telescópio no Pier: A Ilusão de Ótica Marítima | eFuxico', description: 'A foto do telescópio no pier que criou uma ilusão de ótica impressionante.' },
  { path: '/foto-duplo-sentido-amigas-festa', title: 'Amigas na Festa: A Foto que Viralizou | eFuxico', description: 'A foto das amigas na festa que confundiu milhões de pessoas.' },
  { path: '/foto-duplo-sentido-selfie-espelho', title: 'Selfie no Espelho: A Foto de Quarto | eFuxico', description: 'A selfie no espelho que enganou a internet com sua ilusão de ótica.' },
  
  // Série Felinos
  { path: '/leopardo-nebuloso-felino-florestas-asiaticas', title: 'Leopardo Nebuloso: O Felino das Florestas Asiáticas | eFuxico', description: 'Conheça o Leopardo Nebuloso, um dos felinos mais belos e ameaçados das florestas asiáticas.' },
  { path: '/gato-dourado-asiatico-felino-temperamental', title: 'Gato Bravo Dourado da Ásia | eFuxico', description: 'Conheça o Gato Bravo Dourado da Ásia, um felino temperamental das florestas asiáticas.' },
  { path: '/gato-chileno-felino-america-sul', title: 'Gato Chileno: O Felino da América do Sul | eFuxico', description: 'Conheça o Gato Chileno, também conhecido como Kodkod, o menor felino das Américas.' },
  { path: '/gato-chines-deserto-felino-endemico', title: 'Gato Chinês do Deserto | eFuxico', description: 'Conheça o Gato Chinês do Deserto, um felino endêmico da China.' },
  { path: '/gato-de-pallas-manul-felino-estepes', title: 'Gato de Pallas (Manul) | eFuxico', description: 'Conheça o Gato de Pallas, também conhecido como Manul, o felino das estepes asiáticas.' },
  { path: '/gato-do-deserto-felino-norte-africa', title: 'Gato do Deserto | eFuxico', description: 'Conheça o Gato do Deserto, o felino adaptado ao norte da África e Oriente Médio.' },
  { path: '/gato-do-mato-pequeno-felino-brasil', title: 'Gato do Mato Pequeno | eFuxico', description: 'Conheça o Gato do Mato Pequeno, um felino brasileiro ameaçado de extinção.' },
  { path: '/gato-dos-pampas-felino-america-sul', title: 'Gato dos Pampas | eFuxico', description: 'Conheça o Gato dos Pampas, o felino dos campos abertos da América do Sul.' },
  { path: '/gato-maracaja-felino-florestas-brasil', title: 'Gato Maracajá | eFuxico', description: 'Conheça o Gato Maracajá, o felino acrobata das florestas brasileiras.' },
  { path: '/gato-marmorado-felino-asia-sudeste', title: 'Gato Marmorado | eFuxico', description: 'Conheça o Gato Marmorado, o felino das florestas do sudeste asiático.' },
  { path: '/gato-pescador-felino-asia-umida', title: 'Gato Pescador | eFuxico', description: 'Conheça o Gato Pescador, o felino semi-aquático da Ásia.' },
  { path: '/jaguarundi-felino-americas', title: 'Jaguarundi: O Gato Mourisco das Américas | eFuxico', description: 'Conheça o Jaguarundi, também conhecido como Gato Mourisco, um felino das Américas.' },
  { path: '/jaguatirica-felino-americas', title: 'Jaguatirica: O Felino das Américas | eFuxico', description: 'Conheça a Jaguatirica, o terceiro maior felino das Américas.' },
  { path: '/leopardo-das-neves-felino-himalaia', title: 'Leopardo das Neves | eFuxico', description: 'Conheça o Leopardo das Neves, o fantasma das montanhas do Himalaia.' },
  { path: '/lince-do-canada-felino-america-norte', title: 'Lince do Canadá | eFuxico', description: 'Conheça o Lince do Canadá, o felino das florestas boreais da América do Norte.' },
  { path: '/lince-euroasiatico-felino-europa-asia', title: 'Lince Euroasiático | eFuxico', description: 'Conheça o Lince Euroasiático, o maior lince do mundo.' },
  { path: '/lince-iberico-felino-europa', title: 'Lince Ibérico | eFuxico', description: 'Conheça o Lince Ibérico, o felino mais ameaçado da Europa.' },
  { path: '/serval-felino-africa', title: 'Serval: O Felino Saltador da África | eFuxico', description: 'Conheça o Serval, o felino de pernas longas das savanas africanas.' },
];

// Template HTML base para páginas estáticas
function generateStaticHTML(route, mainHtmlContent) {
  const canonical = route.path === '/' ? 'https://efuxico.com.br' : `https://efuxico.com.br${route.path}`;
  const ogUrl = canonical;
  
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
    <script type="module" src="/assets/index.js"></script>
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
  
  if (fs.existsSync(originalIndexPath)) {
    const originalHtml = fs.readFileSync(originalIndexPath, 'utf-8');
    // Extrair links de CSS do head
    const cssLinks = originalHtml.match(/<link[^>]*rel="stylesheet"[^>]*>/g) || [];
    const modulePreloads = originalHtml.match(/<link[^>]*rel="modulepreload"[^>]*>/g) || [];
    mainHtmlContent = '\n    ' + [...cssLinks, ...modulePreloads].join('\n    ');
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
    const html = generateStaticHTML(route, mainHtmlContent);
    fs.writeFileSync(filePath, html);
    
    console.log(`✅ Criado: ${route.path === '/' ? '/index.html' : route.path + '/index.html'}`);
    created++;
  }
  
  console.log(`\n🎉 ${created} páginas estáticas geradas com sucesso!`);
  console.log('📁 Todas as páginas estão prontas para indexação pelo Google.');
}

generateStaticPages().catch(console.error);
