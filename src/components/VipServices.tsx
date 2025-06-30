import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Crown",
    title: "VIP-клиентский сервис",
    description:
      "Персональный менеджер, индивидуальный подход и круглосуточная поддержка для наших VIP-клиентов",
    features: [
      "Персональный менеджер",
      "24/7 поддержка",
      "Эксклюзивные предложения",
    ],
  },
  {
    icon: "Search",
    title: "Индивидуальный подбор",
    description:
      "Найдем автомобиль вашей мечты по любым параметрам, включая редкие и эксклюзивные модели",
    features: [
      "Поиск по всему миру",
      "Редкие модели",
      "Техническая экспертиза",
    ],
  },
  {
    icon: "RefreshCw",
    title: "Trade-in программы",
    description:
      "Выгодный обмен вашего автомобиля на новый с максимальной оценкой и минимальными формальностями",
    features: ["Честная оценка", "Быстрое оформление", "Доплата наличными"],
  },
  {
    icon: "CreditCard",
    title: "Премиум финансирование",
    description:
      "Индивидуальные условия кредитования и лизинга с минимальными ставками для VIP-клиентов",
    features: ["Льготные ставки", "Гибкие условия", "Быстрое одобрение"],
  },
  {
    icon: "Shield",
    title: "Сертификация и гарантии",
    description:
      "Полная проверка автомобилей, расширенная гарантия и страхование премиум класса",
    features: ["200+ проверок", "Расширенная гарантия", "Страхование КАСКО"],
  },
  {
    icon: "Truck",
    title: "Доставка и сервис",
    description:
      "Доставка автомобиля в любую точку мира, техническое обслуживание и детейлинг",
    features: [
      "Мировая доставка",
      "Сервисное обслуживание",
      "Премиум детейлинг",
    ],
  },
];

export default function VipServices() {
  return (
    <section className="py-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-luxury-gold"></div>
            <span className="text-luxury-gold font-open-sans text-sm uppercase tracking-wider">
              Премиум сервисы
            </span>
            <div className="w-12 h-0.5 bg-luxury-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-luxury-dark mb-6">
            VIP <span className="text-luxury-gold">Услуги</span>
          </h2>
          <p className="text-xl text-luxury-gray font-open-sans max-w-3xl mx-auto">
            Эксклюзивный сервис мирового уровня для самых взыскательных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-luxury-gray/20 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-luxury-gold"
                  />
                </div>

                <h3 className="text-xl font-montserrat font-bold text-luxury-dark mb-4">
                  {service.title}
                </h3>

                <p className="text-luxury-gray font-open-sans mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-luxury-gray font-open-sans"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-luxury-gold mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark font-semibold"
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-luxury-dark to-gray-800 rounded-2xl p-12">
          <h3 className="text-3xl font-montserrat font-bold text-luxury-white mb-4">
            Станьте VIP-клиентом
          </h3>
          <p className="text-luxury-gray font-open-sans mb-8 max-w-2xl mx-auto">
            Получите доступ к эксклюзивным автомобилям, персональному сервису и
            привилегиям премиум класса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-luxury-gold hover:bg-yellow-600 text-luxury-dark font-montserrat font-semibold px-8"
            >
              <Icon name="Crown" size={20} className="mr-2" />
              Стать VIP-клиентом
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-luxury-dark font-montserrat font-semibold px-8"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
