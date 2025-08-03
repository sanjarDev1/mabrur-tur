import { useTranslation } from 'react-i18next';
import { Shield } from 'lucide-react';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Shield className="mr-3 text-primary-600" size={36} />
              {t('legal.privacyTitle')}
            </h1>
            <p className="text-gray-600">
              {t('legal.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Make a booking or inquiry</li>
                    <li>Contact us through our website or email</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in surveys or feedback</li>
                  </ul>
                  <p>
                    This may include your name, email address, phone number, travel preferences, and payment information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">2. {t('legal.dataProcessing')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Process and fulfill your booking requests</li>
                    <li>Communicate with you about your travel arrangements</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send you relevant travel information and updates</li>
                    <li>Improve our services and website functionality</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Service providers who assist in delivering our services</li>
                    <li>Hotels, transport providers, and other travel partners as necessary for your booking</li>
                    <li>Government authorities when required by law</li>
                    <li>Emergency contacts in case of travel incidents</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">4. Data Security</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p>Our security measures include:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure payment processing systems</li>
                    <li>Limited access to personal information</li>
                    <li>Regular security assessments and updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">5. {t('legal.userRights')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Under Uzbekistan's data protection regulations, you have the right to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Access your personal information we hold</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to the processing of your personal information</li>
                    <li>Withdraw consent for marketing communications</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at privacy@mabrurtravel.uz
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">6. Cookies and Tracking</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                  <p>We use cookies for:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Website functionality and user preferences</li>
                    <li>Analytics to improve our services</li>
                    <li>Marketing and advertising (with your consent)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">7. Contact Information</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p><strong>Mabrur Travel LLC</strong></p>
                    <p>123 Mustaqillik Street, Tashkent 100000, Uzbekistan</p>
                    <p>Email: privacy@mabrurtravel.uz</p>
                    <p>Phone: +998 99 313 98 98</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
