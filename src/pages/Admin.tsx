import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMenu } from '@/contexts/MenuContext';
import { t } from '@/lib/i18n/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Upload, Eye, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Admin() {
  const { language } = useLanguage();
  const { exportData, importData, dishes, categories } = useMenu();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'demo123') {
      setIsAuthenticated(true);
      toast({ title: language === 'pt' ? 'Acesso autorizado' : 'Access granted' });
    } else {
      toast({ 
        title: language === 'pt' ? 'Senha incorreta' : 'Incorrect password',
        variant: 'destructive'
      });
    }
  };

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `menu-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast({ title: t('common.success', language) });
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string);
          importData(data);
          toast({ title: t('common.success', language) });
        } catch (error) {
          toast({ title: t('common.error', language), variant: 'destructive' });
        }
      };
      reader.readAsText(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              {t('admin.title', language)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder={t('admin.password', language) + ' (demo123)'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {t('admin.login', language)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-heading font-bold">{t('admin.title', language)}</h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            {t('admin.logout', language)}
          </Button>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'pt' ? 'Estatísticas' : 'Statistics'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">{categories.length}</div>
                  <div className="text-sm text-muted-foreground">{t('admin.categories', language)}</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">{dishes.length}</div>
                  <div className="text-sm text-muted-foreground">{t('admin.dishes', language)}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{language === 'pt' ? 'Gerenciar Dados' : 'Manage Data'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={handleExport} className="w-full" variant="outline">
                <Download className="mr-2 w-4 h-4" />
                {t('admin.export', language)}
              </Button>
              <div>
                <Input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                  id="import-file"
                />
                <Button asChild className="w-full" variant="outline">
                  <label htmlFor="import-file" className="cursor-pointer">
                    <Upload className="mr-2 w-4 h-4" />
                    {t('admin.import', language)}
                  </label>
                </Button>
              </div>
              <Button asChild className="w-full">
                <a href="/menu" target="_blank">
                  <Eye className="mr-2 w-4 h-4" />
                  {t('admin.preview', language)}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
