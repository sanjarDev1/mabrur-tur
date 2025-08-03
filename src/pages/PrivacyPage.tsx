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
                <h2 className="text-2xl font-semibold">1. {t('legal.infoCollectTitle')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    {t('legal.infoCollectText')}
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('legal.infoList1')}</li>
                    <li>{t('legal.infoList2')}</li>
                    <li>{t('legal.infoList3')}</li>
                    <li>{t('legal.infoList4')}</li>
                  </ul>
                  <p>
                    {t('legal.infoCollectDetails')}
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
                  <p>{t('legal.dataProcessingText')}</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('legal.dataList1')}</li>
                    <li>{t('legal.dataList2')}</li>
                    <li>{t('legal.dataList3')}</li>
                    <li>{t('legal.dataList4')}</li>
                    <li>{t('legal.dataList5')}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">3. {t('legal.dataSharingTitle')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    {t('legal.dataSharingText1')}
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('legal.sharingList1')}</li>
                    <li>{t('legal.sharingList2')}</li>
                    <li>{t('legal.sharingList3')}</li>
                  </ul>
                  <p>
                    {t('legal.dataSharingText2')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">4. {t('legal.retentionTitle')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    {t('legal.retentionText')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">5. {t('legal.contactPrivacyTitle')}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    {t('legal.contactPrivacyText')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
