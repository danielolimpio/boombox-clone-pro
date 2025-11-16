# eFuxico - Portal de Entretenimento

Portal de notícias focado em entretenimento, celebridades, curiosidades e muito mais.

**URL**: https://efuxico.com.br

## Estrutura do Projeto

Este é um projeto React + TypeScript + Vite, com as seguintes funcionalidades:

- **Categorias**: Curiosidades, Celebridades, Entretenimento, Questionários, Tecnologia
- **Seções**: Recentes, Tendências, Hot, Populares
- **Sistema de Tags**: Organização por tags relacionadas
- **SEO Otimizado**: Sitemap.xml, robots.txt, meta tags completas
- **Design Responsivo**: Totalmente adaptado para mobile

## Tecnologias Utilizadas

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router
- React Helmet

## Como Desenvolver Localmente

```sh
# Clonar o repositório
git clone <YOUR_GIT_URL>

# Navegar até o diretório do projeto
cd <YOUR_PROJECT_NAME>

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## Como Fazer Build

```sh
npm run build
```

## Deploy

O projeto está configurado com GitHub Actions para deploy automático via FTP na Hostinger. 
Cada push na branch `main` dispara o deploy automaticamente.

## Estrutura de Pastas

```
src/
├── components/     # Componentes reutilizáveis (Header, Footer, PostCard, etc.)
├── pages/          # Páginas do site (Index, Category, Recent, etc.)
├── hooks/          # Custom hooks
└── lib/            # Utilitários

public/
├── robots.txt      # Configuração para crawlers
├── sitemap.xml     # Mapa do site
├── og-image.jpg    # Imagem de compartilhamento social
├── logo.png        # Logo do site
└── .htaccess       # Configurações Apache
```

## SEO e Otimizações

- ✅ Sitemap.xml atualizado automaticamente
- ✅ Robots.txt configurado para otimização de crawlers
- ✅ Open Graph e Twitter Cards para redes sociais
- ✅ Schema.org markup para rich snippets
- ✅ .htaccess com compressão Gzip e cache
- ✅ Cabeçalhos de segurança (X-Frame-Options, CSP, etc.)
- ✅ HTTPS redirect automático
- ✅ Favicon e Apple Touch Icon

## Contato

- **Telefone**: (12) 98251-9116
- **Email**: contato@efuxico.com.br
- **Endereço**: A. Julia Freire, 1200 - João Pessoa - PB
