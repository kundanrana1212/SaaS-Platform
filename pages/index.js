// ✅ This is the base version of your homepage
import Head from 'next/head';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MultiStream – Stream Everywhere</title>
        <meta name="description" content="Multistream to YouTube, Facebook, Twitch, LinkedIn – All from one dashboard. Start streaming smarter." />
      </Head>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Stream to Every Platform at Once</h1>
          <p className="text-xl mb-8">YouTube, Facebook, Twitch, LinkedIn – all from a single dashboard</p>
          <Link href="/auth/signup">
            <a className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why MultiStream?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Stream Everywhere</h3>
            <p className="text-gray-600">Broadcast to YouTube, Facebook, Twitch, and LinkedIn — simultaneously.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-gray-600">Track views, engagement, and performance across platforms.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">No Tech Headache</h3>
            <p className="text-gray-600">No OBS setup needed. Just log in and start streaming.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Go Live?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Launch your first multistream in minutes — no downloads, no configs.
          </p>
          <Link href="/auth/signup">
            <a className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg">
              Start Free Trial
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} MultiStream. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
