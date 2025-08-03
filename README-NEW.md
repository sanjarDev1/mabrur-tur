# 🏛️ Mabrur Travel - Licensed Tour Operator Website

A comprehensive, multi-language tour operator website built with React, TypeScript, and Tailwind CSS, specifically designed to meet official licensing requirements in Uzbekistan according to Resolution No. 433, 2020.

## 🌟 Features

### 🌍 Multi-language Support
- **3 Languages**: Uzbek (🇺🇿), Russian (🇷🇺), English (🇬🇧)
- Dynamic content switching without page reload
- Implemented with react-i18next

### 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS for modern, responsive UI
- Shadcn-inspired component library
- Cross-browser compatibility

### 🎯 Core Pages & Features

#### 🏠 Homepage
- Hero section with call-to-action
- Featured tours showcase
- Company statistics
- Why choose us section

#### 🗺️ Tours Page
- Complete tour listings with search & filter
- Category filtering (Cultural, Historical, Adventure, Religious)
- Tour details with pricing and duration
- Booking integration

#### 📋 Booking System
- Multi-step booking form
- Form validation with Zod schema
- Payment integration (Click, Payme, Apelsin)
- Booking confirmation system

#### 👥 Licensed Staff Page
- Staff profiles with certifications
- Working hours and specializations
- Language proficiencies
- Professional credentials

#### ℹ️ About Us Page
- Company legal information
- License and registration details
- Mission and certifications
- Contact information

#### 📞 Contact Page
- Contact form with validation
- Company location and details
- Google Maps integration placeholder
- Multiple contact methods

#### ⚖️ Legal Compliance
- Terms of Service page
- Privacy Policy page
- Electronic contract clauses
- GDPR-compliant data handling

### 🔧 Technical Features

#### 🛠️ Tech Stack
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + custom components
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Internationalization**: react-i18next

#### 🏗️ Architecture
- Component-based architecture
- TypeScript for type safety
- Custom UI component library
- Modular page structure
- Centralized state management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mabrur-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # Basic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   └── layout/          # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── ToursPage.tsx
│   ├── BookingPage.tsx
│   ├── StaffPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── TermsPage.tsx
│   └── PrivacyPage.tsx
├── i18n/               # Internationalization
│   ├── index.ts
│   └── locales/
│       ├── en.json
│       ├── ru.json
│       └── uz.json
├── types/              # TypeScript definitions
├── lib/                # Utility functions
└── App.tsx             # Main app component
```

## 🌐 Internationalization

The website supports three languages with complete translations:

- **Uzbek (uz)** - Default language
- **Russian (ru)** - Secondary language
- **English (en)** - International language

### Adding New Translations

1. Add new keys to all locale files in `src/i18n/locales/`
2. Use the `useTranslation` hook in components:
   ```tsx
   const { t } = useTranslation();
   return <h1>{t('hero.title')}</h1>;
   ```

## 🎨 UI Components

### Custom Component Library
- **Button**: Multiple variants (primary, secondary, accent, outline)
- **Card**: Flexible card component with header/content/footer
- **Input**: Form input with validation support
- **Textarea**: Multi-line input component

### Styling System
- **Tailwind CSS**: Utility-first CSS framework
- **Custom classes**: Consistent design system
- **Responsive design**: Mobile-first approach
- **Color scheme**: Primary (blue) and accent (orange) colors

## 📊 Compliance Features

### Government Requirements (Resolution No. 433, 2020)
- ✅ Company legal information display
- ✅ License number and registration details
- ✅ Staff qualifications and certifications
- ✅ Contact information and working hours
- ✅ Terms of service in all languages
- ✅ Privacy policy compliance
- ✅ Electronic contract capabilities

### Data Protection
- GDPR-compliant privacy policy
- Secure form handling
- User consent management
- Data processing transparency

## 🔌 Integration Points

### Payment Systems
- **Click**: Uzbekistan's popular payment system
- **Payme**: Mobile payment platform
- **Apelsin**: Digital wallet integration

### Future Integrations
- Google Maps API for location services
- Email service for notifications
- CMS for content management
- Analytics tracking

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
Create a `.env` file for configuration:
```env
VITE_API_URL=your_api_url
VITE_MAPS_API_KEY=your_google_maps_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions about this tour operator website:

- **Email**: info@mabrurtravel.uz
- **Phone**: +998 (71) 123-45-67
- **Address**: 123 Mustaqillik Street, Tashkent 100000, Uzbekistan

---

## 🏛️ Legal Compliance Notice

This website template is designed to meet the tourism operator licensing requirements in Uzbekistan as specified in Resolution No. 433 dated July 3, 2020. It includes all necessary information disclosure requirements for licensed tour operators.

**License Information:**
- Company: Mabrur Travel LLC
- Registration: REG-123456789
- Tourism License: LIC-TUR-987654
- Tax ID: 123456789

---

*Built with ❤️ for the tourism industry in Uzbekistan*
