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
                <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using the services provided by Mabrur Travel LLC, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These terms comply with the tourism regulations of Uzbekistan as per Resolution No. 433, 2020, and other applicable laws governing tour operators in Uzbekistan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">2. {t('legal.electronicContract')}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Electronic contracts formed through our booking system are legally binding under Uzbekistan's Electronic Commerce Law. By submitting a booking form, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provide accurate and complete information</li>
                  <li>Accept electronic delivery of contract documents</li>
                  <li>Comply with payment terms and conditions</li>
                  <li>Acknowledge receipt of booking confirmation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">3. Service Terms</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Booking and Payment:</strong> All bookings require advance payment. Full payment terms will be provided upon booking confirmation.
                  </p>
                  <p>
                    <strong>Cancellation Policy:</strong> Cancellations must be made in writing. Cancellation fees apply according to our published policy.
                  </p>
                  <p>
                    <strong>Travel Insurance:</strong> We strongly recommend travel insurance. Mabrur Travel is not responsible for costs arising from unforeseen circumstances.
                  </p>
                  <p>
                    <strong>Changes to Itinerary:</strong> We reserve the right to modify itineraries due to weather, safety, or other operational considerations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">4. Licensing and Compliance</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Mabrur Travel LLC operates under license from the State Committee for Tourism Development of Uzbekistan. Our license number is LIC-TUR-987654.
                  </p>
                  <p>
                    All our guides are licensed and certified according to Uzbekistan tourism standards. We maintain appropriate insurance coverage as required by law.
                  </p>
                  <p>
                    This website and our services comply with Resolution No. 433 dated July 3, 2020, regarding tourism operator licensing requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our liability is limited to the value of services purchased. We are not liable for delays, cancellations, or changes due to circumstances beyond our control, including but not limited to weather, political situations, or force majeure events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">6. Governing Law</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  These terms are governed by the laws of the Republic of Uzbekistan. Any disputes shall be resolved in accordance with Uzbekistan jurisdiction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
