import { useTranslation } from 'react-i18next';
import { Award, MapPin, Phone, Mail, FileText, Users } from 'lucide-react';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import type { CompanyInfo } from '@/types';

export default function AboutPage() {
  const { t } = useTranslation();

  const companyInfo: CompanyInfo = {
    legalName: 'MABRUR TUR MAS\'ULIYATI CHEKLANGAN JAMIYAT',
    registrationNumber: '2899660',
    licenseNumber: 'MABRUR TUR MCHJ',
    tin: '312 325 197',
    address: 'Toshkent shahri, Shayxontohur tumani, Sarxumdon MFY, Gulobod mavzesi, 268-uy, 42-xonadon',
    phone: '+998 99 313 98 98',
    email: 'info@mabrurtur.uz',
    workingHours: '09:00 - 18:00 (Dushanba - Juma)'
  };

  const stats = [
    { icon: Users, number: '3+', label: t('home.experienceYears') },
    { icon: Award, number: '2,500+', label: t('home.happyClients') },
    { icon: FileText, number: '500+', label: t('home.toursCompleted') },
    { icon: Users, number: '15+', label: t('home.licensedGuides') },
  ];

  const certifications = [
    t('about.cert1'),
    t('about.cert2'),
    t('about.cert3'),
    t('about.cert4')
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="container-custom pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Legal Information */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FileText className="mr-3 text-primary-600" size={24} />
                {t('about.companyInfo')}
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('about.legalName')}
                  </label>
                  <p className="text-gray-900">{companyInfo.legalName}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('about.registrationNumber')}
                  </label>
                  <p className="text-gray-900">{companyInfo.registrationNumber}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('about.licenseNumber')}
                  </label>
                  <p className="text-gray-900">{companyInfo.licenseNumber}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('about.tin')}
                  </label>
                  <p className="text-gray-900">{companyInfo.tin}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('about.address')}
                  </label>
                  <p className="text-gray-900 flex items-start">
                    <MapPin className="mr-2 mt-0.5 text-primary-600 flex-shrink-0" size={16} />
                    {companyInfo.address}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.phoneNumber')}
                    </label>
                    <p className="text-gray-900 flex items-center">
                      <Phone className="mr-2 text-primary-600" size={16} />
                      {companyInfo.phone}
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.emailAddress')}
                    </label>
                    <p className="text-gray-900 flex items-center">
                      <Mail className="mr-2 text-primary-600" size={16} />
                      {companyInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission & Certifications */}
          <div className="space-y-8">
            {/* Mission */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Award className="mr-3 text-primary-600" size={24} />
                  {t('about.mission')}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </CardContent>
            </Card>

            {/* Director Message */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Users className="mr-3 text-primary-600" size={24} />
                  {t('about.directorMessage')}
                </h2>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('about.directorTitle')}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {t('about.directorExperience')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t('about.directorEducation')}
                  </p>
                </div>
                <blockquote className="text-gray-700 leading-relaxed italic text-center border-l-4 border-primary-600 pl-4">
                  {t('about.directorQuote')}
                </blockquote>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Award className="mr-3 text-primary-600" size={24} />
                  {t('about.certifications')}
                </h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="mr-3 mt-0.5 text-green-600 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
