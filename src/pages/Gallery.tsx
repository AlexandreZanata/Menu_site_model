import { useLanguage } from '@/contexts/LanguageContext';
import { useMenu } from '@/contexts/MenuContext';
import { t } from '@/lib/i18n/translations';
import { dishImages } from '@/lib/assets';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export default function Gallery() {
  const { language } = useLanguage();
  const { dishes } = useMenu();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get all available dish images
  const galleryImages = dishes
    .filter((dish) => dish.available && dish.images[0])
    .map((dish) => ({
      src: dishImages[dish.images[0]],
      alt: dish.name[language],
    }));

  // Preload images for better UX
  useEffect(() => {
    galleryImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [galleryImages]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('gallery.title', language)}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('gallery.subtitle', language)}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-card cursor-pointer hover-lift"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth hover:scale-105"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-smooth"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
