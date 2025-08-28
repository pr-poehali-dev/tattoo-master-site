import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const galleryImages = [
    {
      id: 1,
      src: '/img/5d9de3cf-ade1-430f-a6d0-cd51198496b1.jpg',
      category: 'Геометрия',
      title: 'Геометрическая композиция'
    },
    {
      id: 2,
      src: '/img/cc310b0f-4e40-46e6-b95f-e8e88a8a4b40.jpg',
      category: 'Реализм',
      title: 'Портрет'
    },
    {
      id: 3,
      src: '/img/0eb13389-11bf-45f8-b983-ca31c97352ac.jpg',
      category: 'Традишнл',
      title: 'Роза и череп'
    }
  ];

  const categories = ['Все', 'Геометрия', 'Реализм', 'Традишнл'];

  const workSteps = [
    {
      step: '01',
      title: 'Консультация',
      description: 'Обсуждаем идею, размер и расположение татуировки'
    },
    {
      step: '02',
      title: 'Эскиз',
      description: 'Создаю индивидуальный эскиз под ваши пожелания'
    },
    {
      step: '03',
      title: 'Согласование',
      description: 'Дорабатываем эскиз до идеального результата'
    },
    {
      step: '04',
      title: 'Нанесение',
      description: 'Профессиональное выполнение в стерильных условиях'
    }
  ];

  const priceList = [
    {
      service: 'Консультация и эскиз',
      price: '2 000 ₽'
    },
    {
      service: 'Маленькая татуировка (до 5 см)',
      price: '3 000 ₽'
    },
    {
      service: 'Средняя татуировка (5-15 см)',
      price: '8 000 ₽'
    },
    {
      service: 'Большая татуировка (от 15 см)',
      price: 'от 15 000 ₽'
    },
    {
      service: 'Час работы',
      price: '4 000 ₽'
    }
  ];

  const filteredImages = selectedCategory === 'Все' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold tracking-tight">TATTOO ARTIST</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-sm hover:text-gray-600 transition-colors">Обо мне</a>
              <a href="#gallery" className="text-sm hover:text-gray-600 transition-colors">Галерея</a>
              <a href="#process" className="text-sm hover:text-gray-600 transition-colors">Этапы работы</a>
              <a href="#pricing" className="text-sm hover:text-gray-600 transition-colors">Прайс</a>
            </nav>
            <Button className="bg-black text-white hover:bg-gray-800">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Искусство<br />на теле
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаю уникальные татуировки с 2015 года. 
            Индивидуальный подход к каждому клиенту.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light mb-12 text-center">Галерея работ</h3>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-black text-white" 
                    : "border-black text-black hover:bg-black hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{image.title}</h4>
                    <Badge variant="outline">{image.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-light mb-6">Обо мне</h3>
              <p className="text-lg text-gray-600 mb-6">
                Меня зовут Александр, я профессиональный тату-мастер с более чем 8-летним опытом работы. 
                Специализируюсь на геометрии, реализме и традиционных стилях.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Каждая татуировка для меня — это произведение искусства, созданное специально для вас. 
                Работаю только с качественными материалами и соблюдаю все стандарты безопасности.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={20} />
                  <span>Сертифицированный мастер</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} />
                  <span>Стерильные условия работы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} />
                  <span>Более 500 довольных клиентов</span>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <Icon name="User" size={120} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light mb-12 text-center">Этапы работы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl font-light text-gray-400 mb-4">{step.step}</div>
                  <h4 className="text-xl font-medium mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light mb-12 text-center">Прайс-лист</h3>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {priceList.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium">{item.service}</span>
                      <span className="text-xl font-light">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    Итоговая стоимость зависит от сложности и размера работы. 
                    Точную цену обсуждаем на консультации.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-light mb-6">Свяжитесь со мной</h3>
          <p className="text-xl text-gray-300 mb-8">
            Готов обсудить вашу будущую татуировку
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={20} />
              <span>tattoo@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Instagram" size={20} />
              <span>@tattoo_master</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Посмотреть Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 Tattoo Artist. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;