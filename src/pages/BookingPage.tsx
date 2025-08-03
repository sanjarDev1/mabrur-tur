import Button from '@/components/ui/Button';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import type { BookingForm } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { z } from 'zod';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  tourId: z.string(),
  travelDate: z.string().min(1, 'Travel date is required'),
  participants: z.number().min(1, 'At least 1 participant is required'),
  notes: z.string().optional(),
});

export default function BookingPage() {
  const { t } = useTranslation();
  const { tourId } = useParams();
  const [step, setStep] = useState<'form' | 'payment' | 'confirmation'>('form');
  const [bookingId, setBookingId] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      tourId: tourId || '',
      participants: 1,
    },
  });

  const onSubmit = async (data: BookingForm) => {
    try {
      // Mock API call using form data
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Example usage: log the data (remove in production)
      console.log('Booking form submitted:', data);

      // Generate mock booking ID
      const newBookingId = 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setBookingId(newBookingId);
      setStep('payment');
    } catch (error) {
      console.error('Booking submission failed:', error);
    }
  };

  const handlePayment = () => {
    // Mock payment processing
    setTimeout(() => {
      setStep('confirmation');
    }, 1500);
  };

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">{t('booking.confirmationTitle')}</h2>
            <p className="text-gray-600 mb-4">{t('booking.confirmationMessage')}</p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600">{t('booking.bookingId')}</p>
              <p className="text-lg font-mono font-bold">{bookingId}</p>
            </div>
            <Button variant="primary" onClick={() => window.location.href = '/'}>
              {t('booking.returnHome')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'payment') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">{t('booking.paymentTitle')}</h1>

            <div className="grid gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePayment}
                className="flex items-center justify-center"
              >
                <CreditCard className="mr-2" size={20} />
                {t('booking.payWithClick')}
              </Button>

              <Button
                variant="primary"
                size="lg"
                onClick={handlePayment}
                className="flex items-center justify-center"
              >
                <CreditCard className="mr-2" size={20} />
                {t('booking.payWithPayme')}
              </Button>

              <Button
                variant="primary"
                size="lg"
                onClick={handlePayment}
                className="flex items-center justify-center"
              >
                <CreditCard className="mr-2" size={20} />
                {t('booking.payWithApelsin')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">{t('booking.title')}</h1>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">{t('booking.bookingInfo')}</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label={t('booking.fullName')}
                  {...register('fullName')}
                  error={errors.fullName?.message}
                  placeholder={t('booking.fullNamePlaceholder')}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label={t('booking.phone')}
                    {...register('phone')}
                    error={errors.phone?.message}
                    placeholder={t('booking.phonePlaceholder')}
                  />

                  <Input
                    label={t('booking.email')}
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                    placeholder={t('booking.emailPlaceholder')}
                  />
                </div>

                <Input
                  label={t('booking.selectedTour')}
                  {...register('tourId')}
                  error={errors.tourId?.message}
                  placeholder={t('booking.tourIdPlaceholder')}
                  disabled
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label={t('booking.travelDate')}
                    type="date"
                    {...register('travelDate')}
                    error={errors.travelDate?.message}
                  />

                  <Input
                    label={t('booking.participants')}
                    type="number"
                    min="1"
                    max="20"
                    {...register('participants', { valueAsNumber: true })}
                    error={errors.participants?.message}
                  />
                </div>

                <Textarea
                  label={t('booking.notes')}
                  {...register('notes')}
                  placeholder={t('booking.notesPlaceholder')}
                  rows={4}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? t('common.loading') : t('booking.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
