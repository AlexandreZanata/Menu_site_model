import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Reservations() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate reservation submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: t('reservations.success', language),
        description: language === 'pt' 
          ? 'Entraremos em contato em breve para confirmar sua reserva.' 
          : 'We will contact you soon to confirm your reservation.',
      });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-2">
              {t('reservations.success', language)}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === 'pt'
                ? 'Sua reserva foi recebida! Entraremos em contato em breve para confirmar os detalhes.'
                : 'Your reservation has been received! We will contact you soon to confirm the details.'}
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              {language === 'pt' ? 'Fazer Nova Reserva' : 'Make Another Reservation'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('reservations.title', language)}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === 'pt'
              ? 'Reserve sua mesa e garanta uma experiência inesquecível'
              : 'Reserve your table and guarantee an unforgettable experience'}
          </p>
        </div>

        {/* Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">
              {language === 'pt' ? 'Detalhes da Reserva' : 'Reservation Details'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    {t('reservations.date', language)}
                  </Label>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" />
                    {t('reservations.time', language)}
                  </Label>
                  <Input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="guests" className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4" />
                    {t('reservations.guests', language)}
                  </Label>
                  <Input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="20"
                    required
                  />
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">{t('reservations.name', language)}</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t('reservations.email', language)}</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t('reservations.phone', language)}</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="notes">{t('reservations.notes', language)}</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder={
                      language === 'pt'
                        ? 'Alguma observação especial? (alergias, aniversário, etc.)'
                        : 'Any special notes? (allergies, birthday, etc.)'
                    }
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                {t('reservations.submit', language)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
