import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Termos de Uso - eFuxico</title>
        <meta name="description" content="Termos de Uso do eFuxico - Regras e condições para utilização do nosso site de entretenimento e notícias." />
        <link rel="canonical" href="https://efuxico.com.br/termos" />
        <meta property="og:title" content="Termos de Uso - eFuxico" />
        <meta property="og:description" content="Termos de Uso do eFuxico - Regras e condições para utilização do nosso site." />
        <meta property="og:url" content="https://efuxico.com.br/termos" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Termos de Uso</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 01 de novembro de 2025</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-4">
                Bem-vindo ao eFuxico (https://efuxico.com.br). Ao acessar e usar este site, você aceita e concorda em cumprir 
                estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, 
                está proibido de usar ou acessar este site.
              </p>
              <p>
                Reservamo-nos o direito de revisar e alterar estes Termos de Uso a qualquer momento, sem aviso prévio. 
                Ao continuar usando este site após a publicação de alterações, você concorda com as modificações realizadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Definições</h2>
              <p className="mb-4">Para fins destes Termos de Uso:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>"Site"</strong> refere-se ao eFuxico (https://efuxico.com.br) e todo seu conteúdo</li>
                <li><strong>"Nós"</strong>, <strong>"Nosso"</strong> referem-se ao eFuxico e seus operadores</li>
                <li><strong>"Você"</strong>, <strong>"Usuário"</strong> refere-se à pessoa que acessa ou usa o site</li>
                <li><strong>"Conteúdo"</strong> refere-se a textos, imagens, vídeos, áudios e outros materiais publicados no site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Descrição do Serviço</h2>
              <p className="mb-4">
                O eFuxico é uma plataforma digital de entretenimento que oferece conteúdo sobre:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Notícias e fofocas sobre celebridades</li>
                <li>Entretenimento e cultura pop</li>
                <li>Tendências e assuntos em alta</li>
                <li>Conteúdo de interesse geral para entretenimento</li>
              </ul>
              <p>
                Todo o conteúdo é fornecido exclusivamente para fins de entretenimento. As opiniões expressas nos artigos 
                são dos autores e não necessariamente refletem as opiniões do eFuxico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Licença de Uso</h2>
              <p className="mb-4">
                Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e usar o site 
                para uso pessoal e não comercial. Esta licença não inclui:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Modificar ou copiar os materiais</li>
                <li>Usar os materiais para fins comerciais ou exibição pública</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site</li>
                <li>Remover quaisquer direitos autorais ou outras notações proprietárias dos materiais</li>
                <li>Transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Propriedade Intelectual</h2>
              <p className="mb-4">
                Todo o conteúdo publicado no eFuxico, incluindo mas não se limitando a textos, gráficos, logos, ícones, 
                imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade do eFuxico ou de seus 
                fornecedores de conteúdo e está protegido pelas leis de direitos autorais brasileiras e internacionais.
              </p>
              <p className="mb-4">
                O logotipo eFuxico e todos os elementos visuais relacionados são marcas registradas ou marcas comerciais do 
                eFuxico. Você não pode usar essas marcas sem nossa permissão prévia por escrito.
              </p>
              <p>
                Respeitamos os direitos de propriedade intelectual de terceiros. Se você acredita que seu trabalho foi copiado 
                de forma que constitua violação de direitos autorais, entre em contato conosco imediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Conduta do Usuário</h2>
              <p className="mb-4">Ao usar o eFuxico, você concorda em NÃO:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Publicar conteúdo ilegal, ameaçador, abusivo, difamatório, obsceno ou invasivo de privacidade</li>
                <li>Representar falsamente sua afiliação com qualquer pessoa ou entidade</li>
                <li>Publicar conteúdo que infrinja direitos de propriedade intelectual de terceiros</li>
                <li>Transmitir vírus, cavalos de Troia ou qualquer código malicioso</li>
                <li>Coletar informações de outros usuários sem consentimento</li>
                <li>Interferir ou interromper o funcionamento do site ou servidores</li>
                <li>Usar o site para spam, phishing ou outras atividades fraudulentas</li>
                <li>Fazer scraping, mineração de dados ou uso de bots no site sem autorização</li>
                <li>Violar quaisquer leis ou regulamentos aplicáveis</li>
              </ul>
              <p>
                Reservamo-nos o direito de remover qualquer conteúdo que viole estes termos e suspender ou encerrar sua 
                conta a nosso exclusivo critério.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Conteúdo Gerado pelo Usuário</h2>
              <p className="mb-4">
                Você pode ter a oportunidade de publicar comentários, avaliações ou outros conteúdos no site. Ao publicar 
                conteúdo, você:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Garante que possui todos os direitos necessários sobre o conteúdo</li>
                <li>Concede ao eFuxico uma licença mundial, não exclusiva, livre de royalties para usar, reproduzir, modificar e exibir o conteúdo</li>
                <li>Concorda que seu conteúdo não viola direitos de terceiros</li>
                <li>Assume total responsabilidade pelo conteúdo publicado</li>
              </ul>
              <p>
                O eFuxico não garante a exatidão, integridade ou qualidade do conteúdo gerado por usuários e não é 
                responsável por qualquer conteúdo publicado por terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Links para Sites de Terceiros</h2>
              <p className="mb-4">
                Nosso site pode conter links para sites de terceiros que não são operados por nós. Não temos controle sobre 
                e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros.
              </p>
              <p>
                Recomendamos fortemente que você revise os Termos de Uso e Política de Privacidade de qualquer site de 
                terceiros que visitar. A inclusão de links não implica endosso ou recomendação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Publicidade e Patrocínio</h2>
              <p className="mb-4">
                O eFuxico pode exibir publicidade e conteúdo patrocinado. Alguns anúncios podem ser personalizados com base 
                em suas informações de navegação através de cookies e tecnologias similares.
              </p>
              <p className="mb-4">
                Utilizamos o Google AdSense para exibição de anúncios. O Google pode usar cookies para personalizar anúncios 
                com base em suas visitas ao nosso site e outros sites na Internet.
              </p>
              <p>
                Não somos responsáveis por produtos ou serviços anunciados por terceiros em nosso site. Qualquer transação 
                entre você e anunciantes é de sua exclusiva responsabilidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Isenção de Responsabilidade</h2>
              <p className="mb-4">
                O site e todo o conteúdo são fornecidos "no estado em que se encontram" sem garantias de qualquer tipo, 
                expressas ou implícitas, incluindo mas não se limitando a:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Garantias de comercialização ou adequação a um propósito específico</li>
                <li>Garantias de não violação de direitos de terceiros</li>
                <li>Garantias de exatidão, confiabilidade ou completude do conteúdo</li>
                <li>Garantias de disponibilidade contínua e ininterrupta do site</li>
              </ul>
              <p className="mb-4">
                <strong>Aviso Importante sobre Conteúdo:</strong> Todo o conteúdo do eFuxico é publicado exclusivamente para 
                fins de entretenimento. Não garantimos a veracidade, exatidão ou atualidade das informações publicadas. 
                As opiniões expressas são dos autores e não necessariamente refletem as posições do eFuxico.
              </p>
              <p>
                Não somos responsáveis por quaisquer erros, omissões ou resultados obtidos do uso das informações contidas 
                no site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Limitação de Responsabilidade</h2>
              <p className="mb-4">
                Na extensão máxima permitida pela lei aplicável, o eFuxico, seus diretores, funcionários, parceiros e 
                fornecedores não serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, 
                consequenciais ou punitivos, incluindo mas não se limitando a:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Perda de lucros, receitas ou dados</li>
                <li>Danos por perda de uso ou dados</li>
                <li>Custo de aquisição de serviços substitutos</li>
                <li>Interrupção de negócios</li>
                <li>Quaisquer outros danos comerciais ou perdas</li>
              </ul>
              <p>
                Esta limitação se aplica mesmo que tenhamos sido avisados da possibilidade de tais danos e independentemente 
                da fundamentação legal (contrato, responsabilidade civil ou outro).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Indenização</h2>
              <p>
                Você concorda em indenizar, defender e isentar o eFuxico, seus afiliados, diretores, funcionários e agentes 
                de e contra todas e quaisquer reclamações, danos, obrigações, perdas, responsabilidades, custos e despesas 
                (incluindo honorários advocatícios) decorrentes de:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Seu uso do site</li>
                <li>Violação destes Termos de Uso</li>
                <li>Violação de direitos de terceiros, incluindo direitos de propriedade intelectual</li>
                <li>Conteúdo que você publicar no site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Modificações do Serviço</h2>
              <p>
                Reservamo-nos o direito de modificar, suspender ou descontinuar o site (ou qualquer parte dele) a qualquer 
                momento, temporária ou permanentemente, com ou sem aviso prévio. Você concorda que não seremos responsáveis 
                perante você ou terceiros por qualquer modificação, suspensão ou descontinuação do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Rescisão</h2>
              <p className="mb-4">
                Podemos rescindir ou suspender seu acesso ao site imediatamente, sem aviso prévio ou responsabilidade, por 
                qualquer motivo, incluindo mas não se limitando a violação destes Termos de Uso.
              </p>
              <p>
                Após a rescisão, seu direito de usar o site cessará imediatamente. Todas as disposições destes Termos de Uso 
                que, por sua natureza, devam sobreviver à rescisão, sobreviverão, incluindo disposições de propriedade, 
                isenções de garantia, indenização e limitações de responsabilidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Lei Aplicável e Jurisdição</h2>
              <p className="mb-4">
                Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil, 
                sem considerar suas disposições sobre conflito de leis.
              </p>
              <p>
                Você concorda que qualquer disputa relacionada a estes Termos de Uso ou ao uso do site será resolvida 
                exclusivamente nos tribunais competentes de São Paulo, SP, Brasil, renunciando a qualquer outra jurisdição 
                que possa ter direito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">16. Disposições Gerais</h2>
              <h3 className="text-xl font-semibold mb-3">16.1 Acordo Completo</h3>
              <p className="mb-4">
                Estes Termos de Uso, juntamente com nossa Política de Privacidade, constituem o acordo completo entre você 
                e o eFuxico e substituem todos os acordos anteriores relacionados ao uso do site.
              </p>

              <h3 className="text-xl font-semibold mb-3">16.2 Divisibilidade</h3>
              <p className="mb-4">
                Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível, as demais disposições 
                permanecerão em pleno vigor e efeito.
              </p>

              <h3 className="text-xl font-semibold mb-3">16.3 Renúncia</h3>
              <p className="mb-4">
                Nossa falha em exercer ou fazer cumprir qualquer direito ou disposição destes Termos de Uso não constituirá 
                uma renúncia a tal direito ou disposição.
              </p>

              <h3 className="text-xl font-semibold mb-3">16.4 Cessão</h3>
              <p>
                Você não pode ceder ou transferir estes Termos de Uso sem nosso consentimento prévio por escrito. Podemos 
                ceder ou transferir estes termos a qualquer momento sem restrições.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">17. Contato</h2>
              <p className="mb-4">
                Se você tiver dúvidas sobre estes Termos de Uso ou questões relacionadas ao uso do site, entre em contato conosco:
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
                Ao utilizar o eFuxico, você reconhece ter lido, compreendido e concordado em estar vinculado a estes Termos de Uso. 
                Se você não concordar com estes termos, por favor, não use nosso site. Estes termos foram atualizados pela última 
                vez em 01 de novembro de 2025 e entram em vigor imediatamente.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
