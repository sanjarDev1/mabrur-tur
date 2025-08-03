import { useTranslation } from 'react-i18next';
import { Award, Clock, Languages, MapPin } from 'lucide-react';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import type { Staff } from '@/types';

export default function StaffPage() {
  const { t } = useTranslation();

  // Mock staff data
  const staff: Staff[] = [
    {
      id: '1',
      name: 'Aziz Karimov',
      position: 'Senior Tour Guide',
      image: '/api/placeholder/200/200',
      certifications: ['Licensed Tour Guide', 'First Aid Certified', 'Cultural Heritage Specialist'],
      workingHours: '08:00 - 17:00',
      specializations: ['Historical Tours', 'Cultural Heritage', 'Architecture'],
      languages: ['Uzbek', 'English', 'Russian'],
      experience: 8
    },
    {
      id: '2',
      name: 'Malika Abdullayeva',
      position: 'Cultural Specialist',
      image: '/api/placeholder/200/200',
      certifications: ['Licensed Guide', 'UNESCO Heritage Training', 'Museum Specialist'],
      workingHours: '09:00 - 18:00',
      specializations: ['Art History', 'Traditional Crafts', 'Museum Tours'],
      languages: ['Uzbek', 'English', 'French'],
      experience: 6
    },
    {
      id: '3',
      name: 'Bobur Rahimov',
      position: 'Adventure Guide',
      image: '/api/placeholder/200/200',
      certifications: ['Mountain Guide License', 'Wilderness First Aid', 'Rock Climbing Instructor'],
      workingHours: '07:00 - 19:00',
      specializations: ['Mountain Tours', 'Trekking', 'Adventure Sports'],
      languages: ['Uzbek', 'English', 'German'],
      experience: 10
    },
    {
      id: '4',
      name: 'Nargiza Salimova',
      position: 'Religious Tourism Specialist',
      image: '/api/placeholder/200/200',
      certifications: ['Islamic Heritage Guide', 'Religious Tourism Certificate', 'Historical Research'],
      workingHours: '08:30 - 17:30',
      specializations: ['Islamic Heritage', 'Religious Sites', 'Pilgrimage Tours'],
      languages: ['Uzbek', 'Arabic', 'English'],
      experience: 7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('staff.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('staff.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="mr-2 text-primary-500" size={16} />
                    <span>{member.experience} years experience</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2 text-primary-500" size={16} />
                    <span>{member.workingHours}</span>
                  </div>
                  
                  <div className="flex items-start text-sm text-gray-600">
                    <Languages className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" size={16} />
                    <span>{member.languages.join(', ')}</span>
                  </div>
                  
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" size={16} />
                    <span>{member.specializations.join(', ')}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">{t('staff.certifications')}</h4>
                  <ul className="space-y-1">
                    {member.certifications.map((cert, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <Award className="mr-2 mt-0.5 text-green-500 flex-shrink-0" size={12} />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
