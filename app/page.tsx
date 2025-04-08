import { Card } from "@/components/ui/card";
import { Book, Search, Heart, Bell, Home as HomeIcon, Youtube, BookOpen } from "lucide-react";
import { DownloadButton } from "@/components/DownloadButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center">
          <Book className="h-16 w-16 mb-6 text-primary" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Verse Joy</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your personal journey through scripture, with daily verses, insights, and spiritual guidance right at your fingertips.
        </p>
        <DownloadButton />
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Book strokeWidth={1.5} />}
            title="Daily Verse"
            description="Start each day with an inspiring verse, complete with commentary and context."
          />
          <FeatureCard
            icon={<HomeIcon strokeWidth={1.5} />}
            title="Home Widget"
            description="Keep your daily verse visible on your home screen for constant inspiration."
          />
          <FeatureCard
            icon={<BookOpen strokeWidth={1.5} />}
            title="Context Commentary"
            description="Understand the historical and spiritual context of each verse with detailed commentary."
          />
          <FeatureCard
            icon={<Youtube strokeWidth={1.5} />}
            title="Video Sermons"
            description="Watch relevant sermon clips and biblical teachings for deeper understanding."
          />
          <FeatureCard
            icon={<Heart strokeWidth={1.5} />}
            title="Favorites"
            description="Save and organize your most meaningful verses for easy access."
          />
          <FeatureCard
            icon={<Bell strokeWidth={1.5} />}
            title="Daily Notifications"
            description="Never miss your daily scripture with customizable reminders."
          />
        </div>
      </section>

      {/* Commentary & Sermon Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur">
            <div className="flex">
              <BookOpen className="h-10 w-10 text-primary mb-4" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Deep Dive Commentary</h3>
            <p className="text-muted-foreground mb-6">
              Access scholarly insights and historical context for every verse. Our commentary helps you understand:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Historical background</li>
              <li>• Original language meanings</li>
              <li>• Cross-references to other passages</li>
              <li>• Modern-day applications</li>
            </ul>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur">
            <div className="flex">
              <Youtube className="h-10 w-10 text-primary mb-4" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Video Sermons</h3>
            <p className="text-muted-foreground mb-6">
              Enhance your understanding with curated video content:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Daily sermon snippets</li>
              <li>• Verse-specific teachings</li>
              <li>• Biblical scholars&apos; insights</li>
              <li>• Topical sermon series</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-3xl mx-auto p-8 bg-card/50 backdrop-blur">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of others who have made Verse Joy their daily companion for spiritual growth.
          </p>
          <DownloadButton />
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2024 Verse Joy. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors">
      <div className="flex text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}