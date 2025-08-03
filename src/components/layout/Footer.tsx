import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/tours', label: t('nav.tours') },
    { href: '/about', label: t('nav.about') },
    { href: '/staff', label: t('nav.staff') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const services = [
    { href: '/tours?category=cultural', label: t('tours.cultural') },
    { href: '/tours?category=historical', label: t('tours.historical') },
    { href: '/tours?category=adventure', label: t('tours.adventure') },
    { href: '/tours?category=religious', label: t('tours.religious') },
  ];

  const legal = [
    { href: '/terms', label: t('footer.termsOfService') },
    { href: '/privacy', label: t('footer.privacyPolicy') },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
                          <span className="text-xl font-bold text-gray-900 dark:text-white">MABRUR TUR</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">Toshkent shahri, Shayxontohur tumani, Sarxumdon MFY</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">+998 99 313 98 98</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">info@mabrurtur.uz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 mb-6">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="font-medium mb-3">{t('contact.socialMedia')}</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 dark:text-gray-500">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© {currentYear} "MABRUR TUR" MCHJ. {t('footer.rightsReserved')}.</p>
              <p className="mt-1">STİR: 312 325 197 | Ro'yxat raqami: 2899660</p>
              <p className="mt-1">Davlat ro'yxatidan o'tdi: 01.08.2025</p>
            </div>
            <div className="text-center md:text-right">
              <p>Manzil: Toshkent shahri, Shayxontohur tumani,</p>
              <p>Sarxumdon MFY, Gulobod mavzesi, 268-uy, 42-xonadon</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
