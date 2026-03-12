"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Clock3,
  FolderOpen,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Recurring Progress Flights",
    description:
      "Scheduled drone site visits that create a clear visual record of construction progress from start to finish.",
    icon: Clock3,
  },
  {
    title: "Aerial Photo Documentation",
    description:
      "High-resolution site imagery for internal updates, owner reporting, stakeholder communication, and archive documentation.",
    icon: Camera,
  },
  {
    title: "Video Progress Updates",
    description:
      "Short aerial video clips that help teams show momentum, highlight milestones, and present jobsite activity clearly.",
    icon: FolderOpen,
  },
  {
    title: "Southwest Florida Coverage",
    description:
      "Local service for builders, developers, and contractors across Southwest Florida with a focus on consistency and responsiveness.",
    icon: MapPinned,
  },
];

const benefits = [
  "Consistent visual tracking across every phase of construction",
  "Cleaner communication with owners, teams, and stakeholders",
  "Organized photo history for reporting and reference",
  "Professional aerial updates without adding workload to your team",
  "Flexible recurring scheduling based on project needs",
  "Fast turnaround and dependable local service",
];

const industries = [
  "General Contractors",
  "Home Builders",
  "Developers",
  "Project Managers",
  "Commercial Construction",
  "Private Owners",
];

function PrimaryButton({ children, href = "#contact" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="btn btn-primary">
      {children}
    </a>
  );
}

function SecondaryButton({ children, href = "#services" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="btn btn-secondary">
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-glow hero-glow-orange" />
        <div className="hero-glow hero-glow-blue" />

        <div className="container">
          <nav className="nav-bar">
            <div className="brand-wrap">
              <Image
                src="/logo.png"
                alt="TrueSite logo"
                width={220}
                height={64}
                className="brand-logo"
                priority
              />
              <div>
                <div className="brand-title">TrueSite</div>
                <div className="brand-subtitle">Aerial Construction Progress Documentation</div>
              </div>
            </div>

            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#why">Why TrueSite</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="pill">
                Southwest Florida drone documentation for active construction sites
              </div>

              <h1 className="hero-title">
                Clear aerial progress tracking for construction projects.
              </h1>

              <p className="hero-copy">
                TrueSite provides recurring drone photography and video documentation that helps builders,
                developers, and project teams monitor progress, communicate updates, and maintain a clean
                visual record of each jobsite.
              </p>

              <div className="hero-actions">
                <PrimaryButton>Book a Site Visit</PrimaryButton>
                <SecondaryButton href="#contact">View Sample Deliverables</SecondaryButton>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">Recurring</div>
                  <div className="stat-label">Scheduled progress visits</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">Fast</div>
                  <div className="stat-label">Organized turnaround</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">Local</div>
                  <div className="stat-label">Southwest Florida coverage</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hero-preview-wrap"
            >
              <div className="preview-glow" />
              <div className="preview-card">
                <div className="preview-topbar">
                  <div className="window-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                </div>

                <div className="preview-content">
                  <div className="mini-card">
                    <div className="mini-card-header">
                      <Building2 className="icon orange" />
                      <div className="mini-card-title">What clients get</div>
                    </div>
                    <div className="mini-list">
                      <div>• Consistent overhead jobsite visuals</div>
                      <div>• Easy progress updates for stakeholders</div>
                      <div>• Organized documentation by visit and phase</div>
                      <div>• Professional presentation of active projects</div>
                    </div>
                  </div>

                  <div className="mini-card mini-card-highlight">
                    <div className="eyebrow">Best fit</div>
                    <div className="mini-big-copy">
                      Builders and developers needing recurring site visibility
                    </div>
                  </div>

                  <div className="mini-card mini-card-placeholder">
                    Use this section for a sample site image, drone still, client testimonial, or branded
                    deliverable preview.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="section container">
        <div className="section-intro">
          <div className="section-kicker">Services</div>
          <h2 className="section-title">
            Designed for construction teams that want better visibility.
          </h2>
          <p className="section-copy">
            TrueSite is built around simple, repeatable aerial documentation that helps keep projects visible
            and easy to communicate.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card">
                <div className="service-icon-wrap">
                  <Icon className="icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="why" className="section section-dark">
        <div className="container why-grid">
          <div>
            <div className="section-kicker">Why TrueSite</div>
            <h2 className="section-title">
              Your team gets a cleaner view of what is happening on site.
            </h2>
            <p className="section-copy">
              Instead of relying on scattered photos or inconsistent updates, TrueSite provides a repeatable
              system for capturing jobsite progress and organizing deliverables in a way that is easy to
              review and share.
            </p>
            <div className="trust-line">
              <ShieldCheck className="icon orange" />
              <span>
                Professional, dependable, and built around recurring construction documentation.
              </span>
            </div>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit} className="benefit-card">
                <CheckCircle2 className="icon orange benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="audience-card">
          <div className="audience-grid">
            <div>
              <div className="section-kicker">Who it is for</div>
              <h2 className="section-title">Ideal for teams managing active jobsites.</h2>
              <p className="section-copy">
                Whether you need better internal visibility or more polished updates for owners and
                stakeholders, TrueSite helps bring structure to jobsite reporting.
              </p>
            </div>

            <div className="industries-grid">
              {industries.map((item) => (
                <div key={item} className="industry-chip">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section container contact-section">
        <div className="contact-card">
          <div className="contact-kicker">Next step</div>
          <h2 className="section-title contact-title">
            Need recurring drone documentation for an active project?
          </h2>
          <p className="section-copy contact-copy">
            Let’s talk through your site, visit frequency, and what kind of aerial updates would be most
            useful for your team.
          </p>

          <div className="hero-actions">
            <PrimaryButton>
              Schedule a Call <ArrowRight className="icon-inline" />
            </PrimaryButton>
            <SecondaryButton>Request Sample Gallery</SecondaryButton>
          </div>

          <p className="contact-note">
            Replace these buttons with your Calendly link, email, phone number, portfolio gallery, or quote
            request form.
          </p>
        </div>
      </section>
    </main>
  );
}
