import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: "Key",
      title: "Изготовление ключей",
      description: "Дубликаты автомобильных ключей любой сложности"
    },
    {
      icon: "Cpu",
      title: "Программирование чипов",
      description: "Прошивка и программирование иммобилайзеров"
    },
    {
      icon: "Wrench",
      title: "Ремонт замков",
      description: "Профессиональный ремонт автомобильных замков"
    },
    {
      icon: "Clock",
      title: "Быстрое изготовление",
      description: "Изготовление ключей за 15-30 минут"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">АвтоКлючМастер</h2>
            </div>
            <a href="tel:+79276077711">
              <Button 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
              >
                <Icon name="Phone" className="mr-2" size={18} />
                +7 927 607-77-11
              </Button>
            </a>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20" />
        
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/82a27de6-a702-44b3-8568-3731c924fa19/files/a23f8f75-0fdf-4d70-9aaa-de871447f826.jpg" 
            alt="Workshop" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Автоключи<br />любой сложности
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto opacity-90">
            Профессиональное изготовление и программирование автомобильных ключей
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить консультацию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр услуг по работе с автомобильными ключами и замками
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши работы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Примеры выполненных работ — от простых дубликатов до программирования сложных систем
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: "https://cdn.poehali.dev/projects/82a27de6-a702-44b3-8568-3731c924fa19/files/a97c609e-c3d1-4764-ae23-2d493bfcbf5e.jpg",
                title: "Коллекция автоключей",
                description: "Работаем с ключами всех марок автомобилей"
              },
              {
                image: "https://cdn.poehali.dev/projects/82a27de6-a702-44b3-8568-3731c924fa19/files/1fe4106a-7df2-4114-bf02-62b765717040.jpg",
                title: "Программирование",
                description: "Современное оборудование для чип-ключей"
              },
              {
                image: "https://cdn.poehali.dev/projects/82a27de6-a702-44b3-8568-3731c924fa19/files/2c190b1a-7cc2-4c49-a8d6-4215344dd670.jpg",
                title: "Точная нарезка",
                description: "Прецизионное изготовление ключей"
              }
            ].map((work, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{work.title}</h3>
                  <p className="text-muted-foreground">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { icon: "Shield", number: "10+", text: "Лет опыта" },
              { icon: "Users", number: "5000+", text: "Довольных клиентов" },
              { icon: "Award", number: "100%", text: "Гарантия качества" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={stat.icon} size={36} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
              <p className="text-muted-foreground text-lg">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            <Card className="border-none shadow-2xl animate-scale-in">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                    <Textarea
                      placeholder="Опишите вашу проблему или вопрос..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="text-base resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex flex-col md:flex-row justify-around gap-6 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Телефон</div>
                        <div className="font-semibold text-foreground">+7 (999) 123-45-67</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Адрес</div>
                        <div className="font-semibold text-foreground">ул. Примерная, д. 123</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">АвтоКлючМастер</h3>
            <p className="text-white/70">Профессиональное изготовление автомобильных ключей</p>
          </div>
          <div className="text-white/60 text-sm">
            © 2024 АвтоКлючМастер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;