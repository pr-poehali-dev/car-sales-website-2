import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-luxury-dark text-luxury-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Car" size={32} className="text-luxury-gold" />
          <h1 className="text-2xl font-montserrat font-bold">ELITE MOTORS</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="font-open-sans hover:text-luxury-gold transition-colors"
          >
            Главная
          </a>
          <a
            href="#"
            className="font-open-sans hover:text-luxury-gold transition-colors"
          >
            Luxury Авто
          </a>
          <a
            href="#"
            className="font-open-sans hover:text-luxury-gold transition-colors"
          >
            Индивидуальный подбор
          </a>
          <a
            href="#"
            className="font-open-sans hover:text-luxury-gold transition-colors"
          >
            Финансирование
          </a>
          <a
            href="#"
            className="font-open-sans hover:text-luxury-gold transition-colors"
          >
            Контакты
          </a>
        </nav>

        <Button
          variant="outline"
          className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark"
        >
          <Icon name="Phone" size={16} className="mr-2" />
          Связаться
        </Button>

        <button className="md:hidden">
          <Icon name="Menu" size={24} />
        </button>
      </div>
    </header>
  );
}
