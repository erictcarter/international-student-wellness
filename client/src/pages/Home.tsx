import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Lock, Users, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900">Student Wellness</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#privacy" className="text-slate-600 hover:text-slate-900 transition">Privacy</a>
            <a href="#signup" className="text-slate-600 hover:text-slate-900 transition">Join Pilot</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Mental Health Support Built for International Students
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navigate the challenges of studying abroad with culturally-aware, private, and stigma-free mental health support. Your wellness journey, on your terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join the Pilot <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Your Wellness Matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Student Wellness?</h2>
            <p className="text-lg text-slate-600">Designed specifically for the international student experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Cultural Relevance */}
            <Card className="border-slate-200 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Culturally Relevant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Content and support tailored to the experiences of international students from Asia, Africa, Latin America, and beyond. No one-size-fits-all approach.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2: Privacy & Trust */}
            <Card className="border-slate-200 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Your Privacy, Protected</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Your university will never know you're using this platform. All data is encrypted, anonymized, and stored securely. Your trust is everything.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3: Accessible Support */}
            <Card className="border-slate-200 hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Always Available</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Get support 24/7 without the barriers of campus counseling. No waitlists, no judgment, no language barriers. Just genuine support when you need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Trust Section */}
      <section id="privacy" className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Privacy is Our Priority</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">What We Protect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">End-to-end encrypted conversations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Completely anonymized data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">No university access to your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">HIPAA and FERPA compliant</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Your Rights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Delete your account and all data anytime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Download your data in any format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Opt-out of any data collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Full transparency in our practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-up Section */}
      <section id="signup" className="py-16 md:py-24 px-4">
        <div className="container max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Join Our Pilot Program</h2>
            <p className="text-center text-slate-600 mb-8">
              Be among the first international students to access culturally-aware mental health support. Limited spots available.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-green-900 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  We've received your email. Check your inbox for next steps to join the pilot program.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  {loading ? "Joining..." : "Join the Pilot"}
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-auto">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">Student Wellness</span>
              </div>
              <p className="text-sm">Mental health support for international students.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#privacy" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2025 Student Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
