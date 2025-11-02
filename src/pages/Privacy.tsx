import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Política de Privacidade - eFuxico</title>
        <meta name="description" content="Política de Privacidade do eFuxico - Saiba como coletamos, usamos e protegemos suas informações pessoais." />
        <link rel="canonical" href="https://efuxico.com.br/privacidade" />
        <meta property="og:title" content="Política de Privacidade - eFuxico" />
        <meta property="og:description" content="Política de Privacidade do eFuxico - Saiba como coletamos, usamos e protegemos suas informações pessoais." />
        <meta property="og:url" content="https://efuxico.com.br/privacidade" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 01 de novembro de 2025</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
              <p className="mb-4">
                Bem-vindo ao eFuxico (https://efuxico.com.br). Esta Política de Privacidade descreve como coletamos, usamos, 
                armazenamos e protegemos suas informações pessoais quando você visita e utiliza nosso site. Ao acessar ou usar 
                o eFuxico, você concorda com os termos desta política.
              </p>
              <p>
                Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais de acordo com a Lei Geral 
                de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Informações Fornecidas Voluntariamente</h3>
              <p className="mb-4">Quando você interage com nosso site, podemos coletar:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Comentários e opiniões publicadas</li>
                <li>Informações de perfil de redes sociais (quando você escolhe se conectar através delas)</li>
                <li>Qualquer outra informação que você opte por fornecer através de formulários de contato</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Informações Coletadas Automaticamente</h3>
              <p className="mb-4">Ao navegar em nosso site, coletamos automaticamente:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Endereço IP</li>
                <li>Tipo e versão do navegador</li>
                <li>Sistema operacional</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Referências de origem (sites de onde você veio)</li>
                <li>Data e hora de acesso</li>
                <li>Dados de cookies e tecnologias similares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Como Usamos Suas Informações</h2>
              <p className="mb-4">Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Fornecer, operar e manter nosso site</li>
                <li>Melhorar, personalizar e expandir nosso conteúdo</li>
                <li>Entender e analisar como você usa nosso site</li>
                <li>Desenvolver novos produtos, serviços, funcionalidades e recursos</li>
                <li>Comunicar-nos com você, diretamente ou através de parceiros, incluindo atendimento ao cliente</li>
                <li>Enviar atualizações, novidades e materiais promocionais (com seu consentimento)</li>
                <li>Detectar e prevenir fraudes e abusos</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
              <p className="mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação. Cookies são pequenos 
                arquivos de texto armazenados em seu dispositivo que nos ajudam a:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Lembrar suas preferências e configurações</li>
                <li>Entender como você interage com nosso conteúdo</li>
                <li>Fornecer conteúdo personalizado</li>
                <li>Analisar tendências e padrões de navegação</li>
                <li>Administrar o site e melhorar sua funcionalidade</li>
              </ul>
              <p className="mb-4">
                Você pode configurar seu navegador para recusar cookies ou alertá-lo quando cookies estiverem sendo enviados. 
                No entanto, algumas funcionalidades do site podem não funcionar adequadamente sem cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Compartilhamento de Informações</h2>
              <p className="mb-4">Não vendemos suas informações pessoais. Podemos compartilhar suas informações com:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Prestadores de Serviços:</strong> Empresas que nos auxiliam na operação do site (hospedagem, análise de dados, marketing)</li>
                <li><strong>Parceiros de Publicidade:</strong> Google AdSense e outros parceiros publicitários para exibição de anúncios relevantes</li>
                <li><strong>Cumprimento Legal:</strong> Quando exigido por lei ou para proteger nossos direitos legais</li>
                <li><strong>Transferência de Negócios:</strong> Em caso de fusão, aquisição ou venda de ativos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Google AdSense</h2>
              <p className="mb-4">
                Utilizamos o Google AdSense para exibir anúncios em nosso site. O Google utiliza cookies para exibir anúncios 
                com base em suas visitas anteriores a este site ou outros sites. Você pode desativar o uso de cookies pelo Google 
                visitando a página de configurações de anúncios do Google.
              </p>
              <p>
                Terceiros, incluindo o Google, usam cookies para exibir anúncios com base em visitas anteriores de um usuário 
                ao nosso site ou outros sites na Internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Segurança dos Dados</h2>
              <p className="mb-4">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas incluem:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Criptografia de dados em trânsito (SSL/TLS)</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo de sistemas</li>
                <li>Backup regular de dados</li>
                <li>Treinamento de equipe sobre práticas de segurança</li>
              </ul>
              <p>
                No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro. Portanto, 
                não podemos garantir segurança absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Seus Direitos (LGPD)</h2>
              <p className="mb-4">De acordo com a LGPD, você tem os seguintes direitos:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados</li>
                <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
                <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor</li>
                <li><strong>Eliminação:</strong> Solicitar a eliminação de dados tratados com base em seu consentimento</li>
                <li><strong>Revogação de Consentimento:</strong> Revogar o consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Se opor ao tratamento de dados em certas circunstâncias</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: contato@efuxico.com.br
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Retenção de Dados</h2>
              <p>
                Retemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta 
                Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei. 
                Quando seus dados não forem mais necessários, serão excluídos ou anonimizados de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Links para Sites de Terceiros</h2>
              <p>
                Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade 
                ou pelo conteúdo desses sites. Recomendamos que você revise as políticas de privacidade de cada site que visitar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Privacidade de Menores</h2>
              <p>
                Nosso site não é direcionado a menores de 18 anos. Não coletamos intencionalmente informações pessoais de 
                menores. Se tomarmos conhecimento de que coletamos dados de um menor sem o consentimento dos pais, tomaremos 
                medidas para remover essas informações de nossos servidores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Alterações a Esta Política</h2>
              <p className="mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações 
                publicando a nova política nesta página e atualizando a data de "Última atualização" no topo do documento.
              </p>
              <p>
                Recomendamos que você revise esta política periodicamente para se manter informado sobre como estamos protegendo 
                suas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contato</h2>
              <p className="mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre nossas práticas de tratamento de dados, 
                entre em contato conosco:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="mb-2"><strong>eFuxico</strong></p>
                <p className="mb-2">E-mail: contato@efuxico.com.br</p>
                <p className="mb-2">Website: https://efuxico.com.br</p>
                <p>Endereço: São Paulo, SP - Brasil</p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t">
              <p className="text-sm text-muted-foreground italic">
                Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
                e demais legislações aplicáveis. Ao utilizar o eFuxico, você declara ter lido, compreendido e concordado com os termos 
                desta política.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
