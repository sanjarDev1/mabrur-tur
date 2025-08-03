import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <FileText className="mr-3 text-primary-600" size={36} />
              {t('legal.termsTitle')}
            </h1>
            <p className="text-gray-600">
              {t('legal.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">1. {t('legal.acceptanceTitle')}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.acceptanceText1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('legal.acceptanceText2')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">2. {t('legal.electronicContract')}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal.electronicContractText')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>{t('legal.electronicList1')}</li>
                  <li>{t('legal.electronicList2')}</li>
                  <li>{t('legal.electronicList3')}</li>
                  <li>{t('legal.electronicList4')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">3. {t('legal.serviceTermsTitle')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>{t('legal.bookingPayment')}</strong> {t('legal.bookingPaymentText')}
                  </p>
                  <p>
                    <strong>{t('legal.cancellationPolicy')}</strong> {t('legal.cancellationPolicyText')}
                  </p>
                  <p>
                    <strong>{t('legal.travelInsurance')}</strong> {t('legal.travelInsuranceText')}
                  </p>
                  <p>
                    <strong>{t('legal.itineraryChanges')}</strong> {t('legal.itineraryChangesText')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">4. {t('legal.licensingTitle')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    {t('legal.licensingText1')}
                  </p>
                  <p>
                    {t('legal.licensingText2')}
                  </p>
                  <p>
                    {t('legal.licensingText3')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">5. {t('legal.liabilityTitle')}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {t('legal.liabilityText')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">6. {t('legal.governingLawTitle')}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {t('legal.governingLawText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
