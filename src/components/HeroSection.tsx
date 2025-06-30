import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-luxury-dark via-gray-900 to-luxury-dark min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544829099-b9a0c5303bea?q=80&w=2070')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-luxury-gold"></div>
            <span className="text-luxury-gold font-open-sans text-sm uppercase tracking-wider">
              Премиум автосалон
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-luxury-white mb-6 leading-tight">
            Эксклюзивные
            <span className="text-luxury-gold block">Автомобили</span>
            Luxury класса
          </h1>

          <p className="text-xl text-luxury-gray font-open-sans mb-8 max-w-2xl">
            Персональный сервис, эксклюзивные марки и безупречное качество.
            Откройте для себя мир премиальных автомобилей с индивидуальным
            подходом к каждому клиенту.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-luxury-gold hover:bg-yellow-600 text-luxury-dark font-montserrat font-semibold px-8 py-4"
            >
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть коллекцию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-luxury-dark font-montserrat font-semibold px-8 py-4"
            >
              <Icon name="Users" size={20} className="mr-2" />
              VIP-консультация
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-luxury-gray/30">
            <div className="text-center md:text-left">
              <div className="text-3xl font-montserrat font-bold text-luxury-gold mb-2">
                500+
              </div>
              <div className="text-luxury-gray font-open-sans">
                Премиум автомобилей
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-montserrat font-bold text-luxury-gold mb-2">
                15+
              </div>
              <div className="text-luxury-gray font-open-sans">
                Эксклюзивных марок
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-montserrat font-bold text-luxury-gold mb-2">
                24/7
              </div>
              <div className="text-luxury-gray font-open-sans">
                VIP-поддержка
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-luxury-gold" />
      </div>
    </section>
  );
}
