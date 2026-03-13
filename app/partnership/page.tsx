import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const formats = [
  {
    icon: "🏒",
    title: "Титульный партнёр",
    description: "Логотип в названии турнира, максимальная видимость на всех площадках и материалах.",
  },
  {
    icon: "🎥",
    title: "Медиапартнёр",
    description: "Интеграции в трансляции, видеоархив, контент в социальных сетях.",
  },
  {
    icon: "👕",
    title: "Экипировочный партнёр",
    description: "Брендированный мерч, форма, атрибутика турнира.",
  },
  {
    icon: "🏨",
    title: "Партнёр по размещению",
    description: "Официальная гостиница турнира, специальные условия для команд.",
  },
];

export default function PartnershipPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Партнёрство</SectionTitle>
          <p className="text-muted mt-4 max-w-xl text-lg">
            Станьте частью международного хоккейного движения. Мы предлагаем несколько форматов сотрудничества.
          </p>
        </div>
      </div>

      {/* Formats */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {formats.map((f) => (
            <div key={f.title} className="bg-card rounded-xl border border-border p-6 flex gap-5">
              <span className="text-3xl flex-shrink-0">{f.icon}</span>
              <div>
                <h3 className="text-white font-bold uppercase text-base mb-2">{f.title}</h3>
                <p className="text-muted text-sm">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="bg-card rounded-xl border border-accent/30 p-10 text-center">
          <h2 className="text-3xl font-black uppercase text-white mb-3">Обсудим сотрудничество</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted mb-8 max-w-md mx-auto">
            Свяжитесь с нами, чтобы обсудить детали и найти оптимальный формат партнёрства.
          </p>
          <Button href="mailto:info@69hockey.com" size="lg">Написать нам</Button>
        </div>
      </div>
    </div>
  );
}
