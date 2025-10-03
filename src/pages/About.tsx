import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n/translations';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const hours = [
    { day: t('hours.monday', language), time: '11:00 - 23:00' },
    { day: t('hours.tuesday', language), time: '11:00 - 23:00' },
    { day: t('hours.wednesday', language), time: '11:00 - 23:00' },
    { day: t('hours.thursday', language), time: '11:00 - 23:00' },
    { day: t('hours.friday', language), time: '11:00 - 00:00' },
    { day: t('hours.saturday', language), time: '11:00 - 00:00' },
    { day: t('hours.sunday', language), time: '11:00 - 22:00' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('about.title', language)}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.story', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hours */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-heading font-semibold">
                  {t('about.hours', language)}
                </h2>
              </div>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{item.day}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-heading font-semibold mb-4">
                {t('about.contact', language)}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">{t('about.location', language)}</p>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000 - Bela Vista
                      <br />
                      São Paulo, SP - CEP 01310-100
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">{t('about.phone', language)}</p>
                    <p className="text-muted-foreground">+55 (11) 98765-4321</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">{t('about.email', language)}</p>
                    <p className="text-muted-foreground">contato@saborverde.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center rounded-lg overflow-hidden">
                <p className="text-muted-foreground">
                  {language === 'pt' ? 'Mapa (Integração Google Maps)' : 'Map (Google Maps Integration)'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {language === 'pt' ? 'Nossa História' : 'Our Story'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {language === 'pt'
                ? 'O Sabor Verde nasceu do sonho de criar um espaço onde a gastronomia brasileira contemporânea pudesse brilhar. Nossa cozinha é uma celebração dos sabores locais, combinados com técnicas modernas e apresentação sofisticada.'
                : 'Sabor Verde was born from the dream of creating a space where contemporary Brazilian cuisine could shine. Our kitchen is a celebration of local flavors, combined with modern techniques and sophisticated presentation.'}
            </p>
            <p>
              {language === 'pt'
                ? 'Trabalhamos com produtores locais para garantir ingredientes da mais alta qualidade. Cada prato é preparado com atenção aos detalhes e paixão pela culinária.'
                : 'We work with local producers to ensure ingredients of the highest quality. Each dish is prepared with attention to detail and passion for cooking.'}
            </p>
            <p>
              {language === 'pt'
                ? 'Nossa equipe de chefs experientes traz anos de expertise culinária, combinando tradição e inovação em cada prato que servimos.'
                : 'Our team of experienced chefs brings years of culinary expertise, combining tradition and innovation in every dish we serve.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
