import Button from '@/components/ui/Button';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import { ArrowRight, Award, Calendar, MapPin, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import toursData from '../data/toursData';

export default function HomePage() {
  const { t } = useTranslation();

  // Используем реальные данные для featured tours
  const featuredTours = toursData.filter(tour => tour.featured).slice(0, 3);

  const stats = [
    { number: '3+', label: t('home.experienceYears') },
    { number: '2,500+', label: t('home.happyClients') },
    { number: '500+', label: t('home.toursCompleted') },
    { number: '15+', label: t('home.licensedGuides') },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: t('home.licensedCertified'),
      description: t('home.licensedCertifiedDesc')
    },
    {
      icon: Users,
      title: t('home.expertGuides'),
      description: t('home.expertGuidesDesc')
    },
    {
      icon: Calendar,
      title: t('home.flexibleScheduling'),
      description: t('home.flexibleSchedulingDesc')
    },
    {
      icon: MapPin,
      title: t('home.authenticExperiences'),
      description: t('home.authenticExperiencesDesc')
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tours">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/booking">
                <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                  {t('hero.bookNow')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tours */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('home.featuredToursTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('home.featuredToursSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  ${tour.price}
                </div>
              </div>

              <CardHeader>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`tours.tourTitles.${tour.id}`, tour.title)}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {t(`tours.tourDescriptions.${tour.id}`, tour.description)}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{tour.duration} {t('tours.days')}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex space-x-2">
                  <Link to={`/tours/${tour.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      {t('tours.viewDetails')}
                    </Button>
                  </Link>
                  <Link to={`/booking/${tour.id}`} className="flex-1">
                    <Button variant="primary" className="w-full">
                      {t('tours.bookNow')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/tours">
            <Button variant="primary" size="lg">
              {t('home.viewAllTours')}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.whyChooseUsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.whyChooseUsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {t('home.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                {t('contact.getInTouch')}
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="accent" size="lg">
                {t('hero.bookNow')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}