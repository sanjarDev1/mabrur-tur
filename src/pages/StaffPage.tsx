import { useTranslation } from "react-i18next";
import { Award, Clock, Languages, MapPin } from "lucide-react";
import Card, { CardContent, CardHeader } from "@/components/ui/Card";
import type { Staff } from "@/types";

export default function StaffPage() {
  const { t } = useTranslation();

  // Mock staff data with translation keys
  const staff: Staff[] = [
    {
      id: "1",
      name: t('staff.staffData.dostonbek.name'),
      position: t('staff.staffData.dostonbek.position'),
      image: "/Dostonbek.jpg",
      certifications: t('staff.staffData.dostonbek.certifications', { returnObjects: true }) as string[],
      workingHours: "08:00 - 17:00",
      specializations: t('staff.staffData.dostonbek.specializations', { returnObjects: true }) as string[],
      languages: t('staff.staffData.dostonbek.languages', { returnObjects: true }) as string[],
      experience: 8,
    },
    {
      id: "2",
      name: t('staff.staffData.qobiljon.name'),
      position: t('staff.staffData.qobiljon.position'),
      image: "/Qobiljon.jpg",
      certifications: t('staff.staffData.qobiljon.certifications', { returnObjects: true }) as string[],
      workingHours: "09:00 - 18:00",
      specializations: t('staff.staffData.qobiljon.specializations', { returnObjects: true }) as string[],
      languages: t('staff.staffData.qobiljon.languages', { returnObjects: true }) as string[],
      experience: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("staff.title")}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t("staff.subtitle")}
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
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>

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
                    <Languages
                      className="mr-2 mt-0.5 text-primary-500 flex-shrink-0"
                      size={16}
                    />
                    <span>{member.languages.join(", ")}</span>
                  </div>

                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin
                      className="mr-2 mt-0.5 text-primary-500 flex-shrink-0"
                      size={16}
                    />
                    <span>{member.specializations.join(", ")}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t("staff.certifications")}
                  </h4>
                  <ul className="space-y-1">
                    {member.certifications.map((cert, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <Award
                          className="mr-2 mt-0.5 text-green-500 flex-shrink-0"
                          size={12}
                        />
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
