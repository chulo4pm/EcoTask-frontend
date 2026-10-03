import { useState, useEffect } from "react";
import {
  Check,
  Leaf,
  CalendarDays,
  ClipboardCheck,
  Bell,
  Award,
  Users,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Building2,
  Hourglass,
  LogIn,
} from "lucide-react";

import Login from "./Login";
import Register from "./Register";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";
import OrganizerLogin from "./OrganizerLogin";
import OrganizerRegister from "./OrganizerRegister";
import OrganizerDashboard from "./OrganizerDashboard";

import ForgotPassword from "./ForgotPassword";
import VerifyResetCode from "./VerifyResetCode";
import ResetPassword from "./ResetPassword";
import PasswordResetSuccess from "./PasswordResetSuccess";

import volunteer from "./assets/voluteer.jpg";


/* =========================================================
   ECOTASK LOGO
========================================================= */

function EcoTaskLogo({ light = false }) {
  return (
    <div className="flex items-center font-black tracking-tight">
      <span
        className={`text-[26px] ${
          light ? "text-white" : "text-[#1f5133]"
        }`}
      >
        Ec
      </span>

      <div className="mx-[3px] flex h-[31px] w-[31px] items-center justify-center rounded-full border-[3px] border-[#4ade80] bg-[#075f2b]">
        <svg
          width="18"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19V5"
            stroke="#86EFAC"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M6.5 10.5L12 5L17.5 10.5"
            stroke="#86EFAC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span
        className={`text-[26px] ${
          light ? "text-white" : "text-[#1f5133]"
        }`}
      >
        Task
      </span>
    </div>
  );
}


/* =========================================================
   LANDING PAGE
========================================================= */

function LandingPage({ onGetStarted, onLogin, onAdmin, onOrganizer }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#f5faf6] text-[#12351f]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#061c10]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-16">

          {/* LOGO */}

          <button
            onClick={() => scrollToSection("home")}
            className="shrink-0"
          >
            <EcoTaskLogo light />
          </button>


          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center gap-8 md:flex">

            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-semibold text-white transition hover:text-green-400"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-semibold text-white/80 transition hover:text-green-400"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-semibold text-white/80 transition hover:text-green-400"
            >
              Key Features
            </button>

            <button
              onClick={() => scrollToSection("contacts")}
              className="text-sm font-semibold text-white/80 transition hover:text-green-400"
            >
              Contacts
            </button>

          </div>


          {/* DESKTOP ACTIONS */}

          <div className="hidden items-center gap-3 md:flex">

            <button
              onClick={onLogin}
              className="flex items-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <LogIn size={16} />
              Log In
            </button>

            <button
              onClick={onOrganizer}
              className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-green-400"
            >
              <Building2 size={16} />
              Organizer
            </button>

          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </nav>


        {/* MOBILE MENU */}

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#061c10] px-6 py-5 md:hidden">

            <div className="flex flex-col gap-2">

              <button
                onClick={() => scrollToSection("home")}
                className="rounded-lg px-4 py-3 text-left text-sm font-semibold text-white hover:bg-white/10"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="rounded-lg px-4 py-3 text-left text-sm font-semibold text-white hover:bg-white/10"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="rounded-lg px-4 py-3 text-left text-sm font-semibold text-white hover:bg-white/10"
              >
                Key Features
              </button>

              <button
                onClick={() => scrollToSection("contacts")}
                className="rounded-lg px-4 py-3 text-left text-sm font-semibold text-white hover:bg-white/10"
              >
                Contacts
              </button>

              <div className="my-2 h-px bg-white/10" />

              <button
                onClick={onLogin}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-left text-sm font-semibold text-green-300 hover:bg-white/10"
              >
                <LogIn size={17} />
                Volunteer Log In
              </button>

              <button
                onClick={onOrganizer}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-left text-sm font-semibold text-green-300 hover:bg-white/10"
              >
                <Building2 size={17} />
                Organizer
              </button>

            </div>

          </div>
        )}

      </header>


      {/* =====================================================
          HOME
      ===================================================== */}

      <main>

        <section
          id="home"
          className="relative min-h-screen scroll-mt-[76px] overflow-hidden bg-[#00140d] pt-[76px]"
        >

          {/* BACKGROUND IMAGE */}

          <div className="absolute inset-0">
            <img
              src={volunteer}
              alt="Volunteers helping the environment"
              className="h-full w-full object-cover object-center"
            />
          </div>


          {/* GREEN OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#00150d] via-[#002417]/90 to-[#002416]/60" />

          <div className="absolute inset-0 bg-black/20" />


          {/* HERO CONTENT */}

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-[1400px] items-center px-6 py-20 md:px-10 lg:px-16">

            <div className="max-w-3xl">

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-green-400 md:text-sm">
                Welcome to EcoTask
              </p>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Making Every Task
                <br />
                <span className="text-green-400">
                  Better for the Planet.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                EcoTask makes it easier for community members to discover,
                join, and keep track of environmental activities in one place.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <button
                  onClick={onGetStarted}
                  className="flex items-center gap-2 rounded-lg bg-green-500 px-7 py-4 text-sm font-bold text-black shadow-lg transition hover:bg-green-400 active:scale-95"
                >
                  Join as Volunteer
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={onOrganizer}
                  className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 active:scale-95"
                >
                  <Building2 size={18} />
                  I'm an Organizer
                </button>

              </div>

              <p className="mt-6 text-sm text-white/70">
                Already a volunteer?{" "}
                <button
                  onClick={onLogin}
                  className="font-semibold text-green-400 underline-offset-4 transition hover:text-green-300 hover:underline"
                >
                  Log in here
                </button>
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="scroll-mt-[76px] bg-white px-6 py-24 md:px-10 lg:px-16"
        >

          <div className="mx-auto max-w-[1200px]">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}

              <div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700">
                  <Leaf size={15} />
                  About EcoTask
                </div>

                <h2 className="text-4xl font-extrabold leading-tight text-[#12351f] md:text-5xl">
                  Turning environmental
                  <span className="text-green-600">
                    {" "}action into community impact.
                  </span>
                </h2>

                <p className="mt-6 text-base leading-7 text-gray-600">
                  EcoTask is a web-based platform designed to help communities
                  organize and participate in environmental activities.
                  Instead of searching through different platforms for schedules,
                  locations, registration details, and tasks, volunteers can
                  access everything in one place.
                </p>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  The platform connects volunteers and activity organizers while
                  making participation easier to manage and track.
                </p>

              </div>


              {/* RIGHT */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#eff8f1] p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                    <Users size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-[#12351f]">
                    Community Driven
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Connect volunteers and organizers through shared
                    environmental activities.
                  </p>
                </div>


                <div className="rounded-2xl bg-[#eff8f1] p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                    <MapPin size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-[#12351f]">
                    Local Activities
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Discover activities and volunteer opportunities in
                    different communities.
                  </p>
                </div>


                <div className="rounded-2xl bg-[#eff8f1] p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                    <ClipboardCheck size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-[#12351f]">
                    Organized Tasks
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Know what tasks need to be completed before joining
                    an activity.
                  </p>
                </div>


                <div className="rounded-2xl bg-[#eff8f1] p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                    <ShieldCheck size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-[#12351f]">
                    Verified Organizers
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Organizers are reviewed and approved by the EcoTask
                    admin before they can post activities.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            KEY FEATURES
        ===================================================== */}

        <section
          id="features"
          className="scroll-mt-[76px] bg-[#f3f8f4] px-6 py-24 md:px-10 lg:px-16"
        >

          <div className="mx-auto max-w-[1200px]">

            <div className="mx-auto max-w-2xl text-center">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700">
                <Leaf size={15} />
                Key Features
              </div>

              <h2 className="text-4xl font-extrabold text-[#12351f] md:text-5xl">
                Everything you need to
                <span className="text-green-600">
                  {" "}make an impact.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                EcoTask brings important environmental activity tools
                together in one simple platform.
              </p>

            </div>


            {/* FEATURE CARDS */}

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* CARD 1 */}

              <div className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <MapPin size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#12351f]">
                  Discover Activities
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Find environmental activities based on location,
                  schedule, and available volunteer opportunities.
                </p>

              </div>


              {/* CARD 2 */}

              <div className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Users size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#12351f]">
                  Join Activities
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Register for environmental activities and become part
                  of community-led initiatives.
                </p>

              </div>


              {/* CARD 3 */}

              <div className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <CalendarDays size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#12351f]">
                  Manage Your Schedule
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Keep track of upcoming environmental activities and
                  avoid missing important schedules.
                </p>

              </div>


              {/* CARD 4 */}

              <div className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <ClipboardCheck size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#12351f]">
                  Track Participation
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Monitor completed tasks and keep a record of your
                  environmental participation.
                </p>

              </div>


              {/* CARD 5 */}

              <div className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Bell size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#12351f]">
                  Receive Announcements
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Stay updated with activity announcements, reminders,
                  and important community information.
                </p>

              </div>


              {/* CARD 6 */}

              <div className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Award size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#12351f]">
                  Earn Certificates
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Receive a participation certificate from the organizer
                  after completing an activity, downloadable as a PDF.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACTS
        ===================================================== */}

        <section
          id="contacts"
          className="scroll-mt-[76px] bg-white px-6 py-24 md:px-10 lg:px-16"
        >

          <div className="mx-auto max-w-[1200px]">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* CONTACT INTRO */}

              <div>

                <h2 className="text-4xl font-extrabold leading-tight text-[#12351f] md:text-5xl">
                  Have questions?
                  <br />
                  <span className="text-green-600">
                    We'd love to hear from you.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
                  For questions, suggestions, or information about EcoTask,
                  you can reach out through our contact details.
                </p>


                {/* CONTACT DETAILS */}

                <div className="mt-9 space-y-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <Mail size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Email
                      </p>

                      <p className="mt-1 font-semibold text-[#12351f]">
                        ecotask@example.com
                      </p>
                    </div>

                  </div>


                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <Phone size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Phone
                      </p>

                      <p className="mt-1 font-semibold text-[#12351f]">
                        +63 900 000 0000
                      </p>
                    </div>

                  </div>


                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Location
                      </p>

                      <p className="mt-1 font-semibold text-[#12351f]">
                        Pangasinan, Philippines
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* CALL TO ACTION */}

              <div className="relative overflow-hidden rounded-3xl bg-[#00140d] p-10 text-white shadow-xl md:p-12">

                <img
                  src={volunteer}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-[#00150d]/90 via-[#002417]/80 to-[#075f2b]/70" />

                <div className="relative z-10">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-300">
                    <Leaf size={15} />
                    Get Involved
                  </div>

                  <h3 className="text-3xl font-extrabold leading-tight md:text-4xl">
                    Ready to make a difference?
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-7 text-white/80">
                    Create a free volunteer account and join environmental
                    activities in your community today.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    <button
                      onClick={onGetStarted}
                      className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-green-400 active:scale-95"
                    >
                      Join as Volunteer
                      <ArrowRight size={17} />
                    </button>

                    <button
                      onClick={onLogin}
                      className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20 active:scale-95"
                    >
                      <LogIn size={17} />
                      Log In
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#061c10] px-6 py-10 text-white md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <EcoTaskLogo light />

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
              Making environmental participation easier,
              one task at a time.
            </p>

          </div>


          <div className="flex flex-wrap gap-6 text-sm text-white/65">

            <button
              onClick={() => scrollToSection("home")}
              className="transition hover:text-green-400"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="transition hover:text-green-400"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("features")}
              className="transition hover:text-green-400"
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("contacts")}
              className="transition hover:text-green-400"
            >
              Contacts
            </button>

          </div>

        </div>


        <div className="mx-auto mt-8 flex max-w-[1200px] flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <span>© 2026 EcoTask. All rights reserved.</span>

          <button
            onClick={onAdmin}
            className="flex items-center gap-1.5 transition hover:text-green-400"
          >
            <ShieldCheck size={13} />
            Admin Portal
          </button>
        </div>

      </footer>

    </div>
  );
}


/* =========================================================
   REGISTRATION SUCCESS
========================================================= */

function RegistrationSubmitted({ onBack }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">

      <div className="absolute inset-0">
        <img
          src={volunteer}
          alt="Volunteers helping the environment"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#00150d]/95 via-[#00351f]/80 to-[#002417]/60" />

      <div className="relative z-20 mx-6 w-full max-w-md rounded-xl bg-white px-8 py-9 text-center shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-500">
          <Check
            size={34}
            strokeWidth={2}
            className="text-green-500"
          />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-[#215b36]">
          Registration Submitted!
        </h2>

        <p className="mt-4 text-sm leading-6 text-gray-700">
          Your volunteer account has been successfully registered.
        </p>

        <p className="mt-3 text-sm leading-6 text-gray-700">
          You can now log in to your EcoTask account.
        </p>

        <button
          onClick={onBack}
          className="mt-7 w-full rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-green-400 active:scale-95"
        >
          Back to Login
        </button>

      </div>
    </div>
  );
}


/* =========================================================
   ORGANIZER APPLICATION SUBMITTED
========================================================= */

function OrganizerSubmitted({ onBack }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">

      <div className="absolute inset-0">
        <img
          src={volunteer}
          alt="Volunteers helping the environment"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#00150d]/95 via-[#00351f]/80 to-[#002417]/60" />

      <div className="relative z-20 mx-6 w-full max-w-md rounded-xl bg-white px-8 py-9 text-center shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-400 bg-amber-50">
          <Hourglass size={30} className="text-amber-500" />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-[#215b36]">
          Application Submitted!
        </h2>

        <p className="mt-4 text-sm leading-6 text-gray-700">
          Your organizer account and documents were sent to the EcoTask admin for review.
        </p>

        <p className="mt-3 text-sm leading-6 text-gray-700">
          You can log in anytime to check your status. You'll be able to post activities once the admin approves your account.
        </p>

        <button
          onClick={onBack}
          className="mt-7 w-full rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-green-400 active:scale-95"
        >
          Go to Organizer Login
        </button>

      </div>
    </div>
  );
}


/* =========================================================
   MAIN APP
========================================================= */

/* =========================================================
   REMEMBER THE CURRENT PAGE (survives a browser refresh)
========================================================= */

const PAGE_KEY = "ecotaskPage";
const RESET_FROM_KEY = "ecotaskResetFrom";

// Dashboards need a saved login; without one, refresh goes to the landing page.
const DASHBOARD_AUTH = {
  dashboard: "userInfo",
  admin: "adminInfo",
  organizer: "organizerInfo",
};

const isLoggedIn = (storageKey) => {
  try {
    return Boolean(JSON.parse(localStorage.getItem(storageKey) || "{}").token);
  } catch {
    return false;
  }
};

const getInitialPage = () => {
  let saved = "";
  try { saved = sessionStorage.getItem(PAGE_KEY) || ""; } catch { /* private mode */ }
  if (!saved) return "landing";
  const authKey = DASHBOARD_AUTH[saved];
  if (authKey && !isLoggedIn(authKey)) return "landing";
  return saved;
};

const readResetFrom = () => {
  try { return sessionStorage.getItem(RESET_FROM_KEY) || "login"; } catch { return "login"; }
};

function App() {
  const [page, setPage] = useState(getInitialPage);

  // Save the page every time it changes, so a refresh reopens it.
  useEffect(() => {
    try { sessionStorage.setItem(PAGE_KEY, page); } catch { /* private mode */ }
  }, [page]);
  const [userEmail, setUserEmail] = useState("");

  // Forgot password: the code confirmed on "Check Your Email",
  // passed to the Reset Password page.
  const [resetCode, setResetCode] = useState("");

  // Which login page started "Forgot Password" ("login" or "organizer-login"),
  // so the reset pages send the user back to the right one.
  const [resetFrom, setResetFrom] = useState(readResetFrom);

  useEffect(() => {
    try { sessionStorage.setItem(RESET_FROM_KEY, resetFrom); } catch { /* private mode */ }
  }, [resetFrom]);

  // Log out: delete the saved token so it can't be reused, then go home.
  const logoutVolunteer = () => {
    localStorage.removeItem("userInfo");
    setPage("landing");
  };

  const logoutAdmin = () => {
    localStorage.removeItem("adminInfo");
    setPage("landing");
  };

  const logoutOrganizer = () => {
    localStorage.removeItem("organizerInfo");
    setPage("landing");
  };

  /* ORGANIZER PAGES */

  if (page === "organizer-login") {
    return (
      <OrganizerLogin
        onBack={() => setPage("landing")}
        onRegister={() => setPage("organizer-register")}
        onLogin={() => setPage("organizer")}
        onForgotPassword={() => {
          setResetFrom("organizer-login");
          setPage("forgot-password");
        }}
      />
    );
  }

  if (page === "organizer-register") {
    return (
      <OrganizerRegister
        onBack={() => setPage("landing")}
        onLogin={() => setPage("organizer-login")}
        onRegistered={() => setPage("organizer-submitted")}
      />
    );
  }

  if (page === "organizer-submitted") {
    return <OrganizerSubmitted onBack={() => setPage("organizer-login")} />;
  }

  if (page === "organizer") {
    return <OrganizerDashboard onLogout={logoutOrganizer} />;
  }

  /* USER DASHBOARD */

  if (page === "dashboard") {
    return <UserDashboard onLogout={logoutVolunteer} />;
  }


  /* ADMIN LOGIN */

  if (page === "admin-login") {
    return (
      <AdminLogin
        onBack={() => {
          setPage("landing");
        }}
        onAdminLogin={() => {
          setPage("admin");
        }}
      />
    );
  }


  /* ADMIN DASHBOARD */

  if (page === "admin") {
    return (
      <AdminDashboard
        onLogout={logoutAdmin}
      />
    );
  }


  /* LOGIN */

  if (page === "login") {
    return (
      <Login
        onBack={() => {
          setPage("landing");
        }}
        onRegister={() => {
          setPage("register");
        }}
        onLogin={() => {
          setPage("dashboard");
        }}
        onForgotPassword={() => {
          setResetFrom("login");
          setPage("forgot-password");
        }}
      />
    );
  }


  /* REGISTER */

  if (page === "register") {
    return (
      <Register
        onBack={() => {
          setPage("landing");
        }}
        onLogin={() => {
          setPage("login");
        }}
        onRegister={() => {
          setPage("registration-submitted");
        }}
      />
    );
  }

  /* REGISTRATION SUCCESS */

  if (page === "registration-submitted") {
    return (
      <RegistrationSubmitted
        onBack={() => {
          setPage("login");
        }}
      />
    );
  }


  /* FORGOT PASSWORD */

  if (page === "forgot-password") {
    return (
      <ForgotPassword
        onBack={() => {
          setPage(resetFrom);
        }}
        onSendCode={(email) => {
          setUserEmail(email);
          setResetCode("");
          setPage("verification-code");
        }}
      />
    );
  }


  /* VERIFICATION CODE (checks the code with the server) */

  if (page === "verification-code") {
    return (
      <VerifyResetCode
        email={userEmail}
        onBack={() => {
          setPage("forgot-password");
        }}
        onVerified={(code) => {
          setResetCode(code);
          setPage("reset-password");
        }}
      />
    );
  }


  /* RESET PASSWORD (only asks for the new password) */

  if (page === "reset-password") {
    return (
      <ResetPassword
        email={userEmail}
        code={resetCode}
        onBack={() => {
          setPage("verification-code");
        }}
        onResetSuccess={() => {
          setResetCode("");
          setPage("password-success");
        }}
      />
    );
  }


  /* PASSWORD RESET SUCCESS */

  if (page === "password-success") {
    return (
      <PasswordResetSuccess
        onBackToLogin={() => {
          setPage(resetFrom);
        }}
      />
    );
  }


  /* LANDING PAGE */

  return (
    <LandingPage
      onGetStarted={() => {
        setPage("register");
      }}
      onLogin={() => {
        setPage("login");
      }}
      onAdmin={() => {
        setPage("admin-login");
      }}
      onOrganizer={() => {
        setPage("organizer-login");
      }}
    />
  );
}


export default App;
