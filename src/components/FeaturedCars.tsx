import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const featuredCars = [
  {
    id: 1,
    brand: "Rolls-Royce",
    model: "Phantom VIII",
    year: 2024,
    price: "35 000 000",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070",
    features: ["V12 6.75L", "Автопилот", "Массаж сидений"],
    status: "limited",
  },
  {
    id: 2,
    brand: "Bentley",
    model: "Continental GT",
    year: 2024,
    price: "18 500 000",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?q=80&w=2070",
    features: ["W12 TSI", "AWD", "Карбон"],
    status: "new",
  },
  {
    id: 3,
    brand: "Mercedes-AMG",
    model: "S 63 E Performance",
    year: 2024,
    price: "12 800 000",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070",
    features: ["V8 4.0L Hybrid", "630 л.с.", "MBUX"],
    status: "available",
  },
];

export default function FeaturedCars() {
  return (
    <section className="py-20 bg-gradient-to-b from-luxury-dark to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-luxury-gold"></div>
            <span className="text-luxury-gold font-open-sans text-sm uppercase tracking-wider">
              Эксклюзивная коллекция
            </span>
            <div className="w-12 h-0.5 bg-luxury-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-luxury-white mb-6">
            Featured <span className="text-luxury-gold">Автомобили</span>
          </h2>
          <p className="text-xl text-luxury-gray font-open-sans max-w-3xl mx-auto">
            Тщательно отобранные автомобили премиум класса от ведущих мировых
            производителей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <Card
              key={car.id}
              className="bg-gray-800/50 border-luxury-gray/20 overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={
                      car.status === "limited"
                        ? "destructive"
                        : car.status === "new"
                          ? "default"
                          : "secondary"
                    }
                    className={`${car.status === "limited" ? "bg-red-600" : car.status === "new" ? "bg-luxury-gold text-luxury-dark" : "bg-green-600"}`}
                  >
                    {car.status === "limited"
                      ? "Лимитированная серия"
                      : car.status === "new"
                        ? "Новинка"
                        : "В наличии"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="opacity-80 hover:opacity-100"
                  >
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-montserrat font-bold text-luxury-white mb-1">
                    {car.brand}
                  </h3>
                  <p className="text-luxury-gray font-open-sans">
                    {car.model} • {car.year}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-luxury-gold/30 text-luxury-gold"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-montserrat font-bold text-luxury-gold">
                      ₽{car.price}
                    </p>
                  </div>
                  <Button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-dark font-semibold">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark font-montserrat font-semibold px-8"
          >
            <Icon name="Car" size={20} className="mr-2" />
            Посмотреть всю коллекцию
          </Button>
        </div>
      </div>
    </section>
  );
}
