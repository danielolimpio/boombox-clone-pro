import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-muted-foreground mb-12">
            Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Assunto</label>
                  <Input placeholder="Sobre o que deseja falar?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea 
                    placeholder="Escreva sua mensagem aqui..." 
                    rows={6}
                  />
                </div>
                <Button size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground">contato@efuxico.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      São Paulo, SP<br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg mt-8">
                  <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
