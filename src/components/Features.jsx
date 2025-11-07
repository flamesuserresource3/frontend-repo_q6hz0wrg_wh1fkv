import React from 'react';
import { Users, Briefcase, Calendar, MessageSquare, Search, Shield, Database, Globe2 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Rich Alumni Profiles',
    description:
      'Showcase education, experience, skills, and achievements with privacy controls and verified badges.',
  },
  {
    icon: Briefcase,
    title: 'Jobs & Referrals',
    description:
      'Discover roles, post opportunities, and power warm introductions with a built-in referral flow.',
  },
  {
    icon: Calendar,
    title: 'Events & RSVPs',
    description:
      'Plan reunions, webinars, and meetups with ticketing, reminders, and calendar integrations.',
  },
  {
    icon: MessageSquare,
    title: 'Mentorship & Messaging',
    description:
      'One‑to‑one mentoring requests, topic channels, and smart matching by interests and skills.',
  },
  {
    icon: Search,
    title: 'Web Parser + Google CSE',
    description:
      'Search alumni mentions on the web via Google CSE with curated parsing and source cards.',
  },
  {
    icon: Shield,
    title: 'Secure Auth',
    description:
      'Email magic links with optional SSO and granular data access policies for institutions.',
  },
  {
    icon: Database,
    title: 'LinkedIn Manual Import',
    description:
      'Guide users to capture publicly available profile data and map fields into verified sections.',
  },
  {
    icon: Globe2,
    title: 'Global Chapters',
    description:
      'Organize members by city chapters with leaders, announcements, and meetups.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0a0b0f] py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">Key Features</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Eight major pillars designed to bring alumni, students, and institutions together.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur transition-transform hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-gradient-to-br from-orange-500/20 to-amber-400/20 p-2">
                  <Icon className="h-5 w-5 text-orange-300" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
