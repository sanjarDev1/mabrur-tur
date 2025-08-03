import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import type { ContactForm } from '@/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Contact form submitted:', data);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Contact form submission failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('contact.getInTouch')}
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold mb-2">{t('contact.getInTouch')}</h2>
                <p className="text-gray-600">
                  {t('contact.getInTouchMessage')}
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-green-700">{t('contact.messageSentSuccess')}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label={t('contact.name')}
                    {...register('name')}
                    error={errors.name?.message}
                    placeholder={t('contact.fullNamePlaceholder')}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t('contact.email')}
                      type="email"
                      {...register('email')}
                      error={errors.email?.message}
                      placeholder={t('contact.emailPlaceholder')}
                    />
                    
                    <Input
                      label={t('contact.phone')}
                      {...register('phone')}
                      error={errors.phone?.message}
                      placeholder={t('contact.phonePlaceholder')}
                    />
                  </div>

                  <Textarea
                    label={t('contact.message')}
                    {...register('message')}
                    error={errors.message?.message}
                    placeholder={t('contact.messagePlaceholder')}
                    rows={5}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    {isSubmitting ? t('common.loading') : t('contact.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold mb-4">{t('contact.contactInfo')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{t('contact.address')}</h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {t('contact.addressFull')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{t('contact.phoneNumber')}</h3>
                      <p className="text-gray-600">+998 99 313 98 98</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{t('contact.emailAddress')}</h3>
                      <p className="text-gray-600">info@mabrurtur.uz</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{t('contact.workingHours')}</h3>
                      <p className="text-gray-600">
                        {t('contact.workingHoursMon')}<br />
                        {t('contact.workingHoursSat')}<br />
                        {t('contact.workingHoursSun')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold mb-2">{t('contact.ourLocation')}</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0986!2d69.23006138209591!3d41.3238121111655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzI1LjciTiA2OcKwMTMnNDguMiJF!5e0!3m2!1sen!2s!4v1641891234567!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('contact.officeLocation')}
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
