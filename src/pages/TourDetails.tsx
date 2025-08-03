import { Calendar, MapPin, Star, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import toursData from '../data/toursData';

export default function TourDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const tour = toursData.find((tour) => tour.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{t('Tour not found')}</h2>
          <Link to="/tours" className="text-blue-600 underline">{t('Back to tours')}</Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container-custom section-padding max-w-3xl mx-auto">
        <div className="mb-6 relative">
          <img 
            src={tour.image} 
            alt={t(`tours.tourTitles.${tour.id}`, tour.title)} 
            className="rounded-lg w-full h-72 object-cover shadow" 
          />
          {tour.featured && (
            <div className="absolute top-4 left-4 bg-accent-500 text-white rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <Star size={16} /> {t('tours.featured')}
            </div>
          )}
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 text-primary-600 dark:text-primary-400 font-bold shadow">
            ${tour.price}
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">
          {t(`tours.tourTitles.${tour.id}`, tour.title)}
        </h1>
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <span className={`px-3 py-1 rounded-full font-medium ${getDifficultyColor(tour.difficulty)}`}>
            {t(`tours.${tour.difficulty}`)}
          </span>
          <span className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
            <MapPin size={16} /> {tour.location}
          </span>
          <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full">
            <Calendar size={16} /> {tour.duration} {t('tours.days')}
          </span>
          <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full">
            <Users size={16} /> {t('tours.maxParticipants')}: {tour.maxParticipants}
          </span>
          <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full capitalize">
            {t(`tours.${tour.category}`)}
          </span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {t(`tours.tourDescriptions.${tour.id}`, tour.description)}
        </p>
        {(t(`tours.includesList.${tour.id}`, { returnObjects: true }) as string[])?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t('tours.includes')}</h2>
            <ul className="list-disc list-inside text-gray-600">
              {(t(`tours.includesList.${tour.id}`, { returnObjects: true }) as string[]).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {tour.itinerary && tour.itinerary.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t('tours.itinerary')}</h2>
            <ul className="list-decimal list-inside text-gray-600">
              {tour.itinerary.map((item: { description: string }, idx: number) => (
                <li key={idx}>{item.description}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex gap-4 mt-8">
          <Link to={`/booking/${tour.id}`}>
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition">
              {t('tours.bookNow')}
            </button>
          </Link>
          <Link to="/tours">
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              {t('tours.backToList')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}