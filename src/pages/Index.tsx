import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import MonitoringDashboard from "@/components/MonitoringDashboard";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tech-dark to-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-tech-dark/80 backdrop-blur-md border-b border-tech-blue/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
              <Icon name="Activity" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">Sage Observability</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#main" className="hover:text-tech-cyan transition-colors">Главная</a>
            <a href="#solutions" className="hover:text-tech-cyan transition-colors">Решения</a>
            <a href="#products" className="hover:text-tech-cyan transition-colors">Продукты</a>
            <a href="#docs" className="hover:text-tech-cyan transition-colors">Документация</a>
            <a href="#contacts" className="hover:text-tech-cyan transition-colors">Контакты</a>
          </div>
          
          <Button className="tech-gradient hover-glow">
            Начать работу
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="main" className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 to-tech-cyan/10 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 tech-gradient text-white border-0 px-4 py-2">
              <Icon name="Zap" size={16} className="mr-2" />
              Новое поколение мониторинга
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-tech-cyan to-tech-blue bg-clip-text text-transparent">
              Технологическая платформа мониторинга
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Инновационные решения для отслеживания, анализа и оптимизации 
              ваших систем в режиме реального времени
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="tech-gradient hover-glow text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Демо-версия
              </Button>
              <Button size="lg" variant="outline" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark text-lg px-8 py-4">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Документация
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating tech elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 border border-tech-blue/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 border border-tech-cyan/30 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-tech-blue/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-tech-gray/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши решения</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Комплексные технологические решения для всех ваших потребностей в мониторинге
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-tech-dark/60 border-tech-blue/30 hover-glow hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Мониторинг производительности</CardTitle>
                <CardDescription className="text-gray-300">
                  Отслеживание метрик в реальном времени с прогнозной аналитикой
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-tech-dark/60 border-tech-cyan/30 hover-glow hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-tech-cyan to-tech-blue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Безопасность системы</CardTitle>
                <CardDescription className="text-gray-300">
                  Комплексная защита и мониторинг угроз безопасности
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-tech-dark/60 border-tech-blue/30 hover-glow hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Аналитика данных</CardTitle>
                <CardDescription className="text-gray-300">
                  Глубокий анализ данных с машинным обучением
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Dashboard Section */}
      <section className="py-16 bg-tech-gray/10">
        <div className="container mx-auto px-6">
          <MonitoringDashboard />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши продукты</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Инновационные инструменты для современного мониторинга
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-tech-cyan">Sage Monitor Pro</h3>
              <p className="text-lg text-gray-300">
                Профессиональная платформа мониторинга с передовыми возможностями 
                машинного обучения и предиктивной аналитики.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-tech-cyan" />
                  <span>Мониторинг в реальном времени</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-tech-cyan" />
                  <span>Интеллектуальные уведомления</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-tech-cyan" />
                  <span>Масштабируемая архитектура</span>
                </div>
              </div>
              
              <Button className="tech-gradient hover-glow">
                Узнать больше
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-tech-blue/20 to-tech-cyan/20 rounded-lg p-8 backdrop-blur-sm border border-tech-blue/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-tech-dark/80 rounded-lg p-4 text-center">
                    <Icon name="Activity" size={32} className="text-tech-cyan mx-auto mb-2" />
                    <div className="text-2xl font-bold text-tech-cyan">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                  <div className="bg-tech-dark/80 rounded-lg p-4 text-center">
                    <Icon name="Zap" size={32} className="text-tech-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-tech-blue">24/7</div>
                    <div className="text-sm text-gray-300">Monitoring</div>
                  </div>
                  <div className="bg-tech-dark/80 rounded-lg p-4 text-center">
                    <Icon name="Users" size={32} className="text-tech-cyan mx-auto mb-2" />
                    <div className="text-2xl font-bold text-tech-cyan">1000+</div>
                    <div className="text-sm text-gray-300">Clients</div>
                  </div>
                  <div className="bg-tech-dark/80 rounded-lg p-4 text-center">
                    <Icon name="Globe" size={32} className="text-tech-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-tech-blue">50+</div>
                    <div className="text-sm text-gray-300">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-16 bg-tech-gray/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Документация</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Полная документация и руководства для быстрого старта
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-tech-dark/40 border-tech-blue/20 hover-glow">
              <CardHeader>
                <Icon name="BookOpen" size={32} className="text-tech-cyan mb-4" />
                <CardTitle className="text-white">Быстрый старт</CardTitle>
                <CardDescription className="text-gray-300">
                  Начните работу за 5 минут с нашими простыми инструкциями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-tech-cyan text-tech-cyan">
                  Читать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-tech-dark/40 border-tech-cyan/20 hover-glow">
              <CardHeader>
                <Icon name="Code" size={32} className="text-tech-blue mb-4" />
                <CardTitle className="text-white">API Reference</CardTitle>
                <CardDescription className="text-gray-300">
                  Полная документация по API и примеры интеграции
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-tech-blue text-tech-blue">
                  Изучить
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-tech-dark/40 border-tech-cyan/20 hover-glow">
              <CardHeader>
                <Icon name="HelpCircle" size={32} className="text-tech-cyan mb-4" />
                <CardTitle className="text-white">Поддержка</CardTitle>
                <CardDescription className="text-gray-300">
                  Получите помощь от нашей команды экспертов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-tech-cyan text-tech-cyan">
                  Связаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Готовы начать? Наша команда поможет вам внедрить решение
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">contact@sage-observability.tech</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-cyan to-tech-blue rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Телефон</h3>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Офис</h3>
                  <p className="text-gray-300">Москва, ул. Тверская 1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-tech-dark/60 rounded-lg p-8 border border-tech-blue/30">
              <h3 className="text-2xl font-bold text-white mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 bg-tech-gray/30 border border-tech-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-tech-cyan focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 bg-tech-gray/30 border border-tech-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-tech-cyan focus:outline-none"
                />
                <textarea 
                  placeholder="Сообщение" 
                  rows={4}
                  className="w-full p-3 bg-tech-gray/30 border border-tech-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-tech-cyan focus:outline-none resize-none"
                ></textarea>
                <Button className="w-full tech-gradient hover-glow">
                  Отправить заявку
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-tech-blue/20 bg-tech-dark/80">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Sage Observability</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-tech-blue/20 text-center text-gray-400">
            <p>&copy; 2024 Sage Observability. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}