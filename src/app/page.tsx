'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import {
  Menu,
  X,
  GraduationCap,
  BookOpen,
  FlaskConical,
  Trophy,
  Users,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Atom,
  Calculator,
  Microscope,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Facebook,
  Instagram,
  Twitter,
  ExternalLink,
} from 'lucide-react'

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
    { href: '#developers', label: 'Developers' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/rtpmdshslogo3x3 (2).png"
              alt="RTPM-DSHS Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                RTPM-DSHS
              </h1>
              <p className="text-xs text-gray-600">Dumaguete Science High School</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Section with Slider
function HeroSection() {
  const sliderImages = [
    { src: '/images/IMG_20200824_060521-01 (1).jpg', alt: 'School Main Building' },
    { src: '/images/IMG_20190809_063842 (4).jpg', alt: 'School Campus' },
    { src: '/images/IMG_20200824_060616-01.jpg', alt: 'School Grounds' },
    { src: '/images/IMG_20190630_093558-01.jpg', alt: 'School Facilities' },
    { src: '/images/IMG_20200824_060757-01.jpg', alt: 'Building 3' },
  ]

  const plugin = useCallback(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  )

  return (
    <section id="home" className="relative min-h-screen pt-16 md:pt-20">
      {/* Slider Background */}
      <div className="absolute inset-0 pt-16 md:pt-20">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin()]}
          className="h-full"
        >
          <CarouselContent className="h-full">
            {sliderImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-white/30 text-white" />
          <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-white/30 text-white" />
        </Carousel>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 py-20">
        <img
          src="/images/rtpmdshslogo3x3 (2).png"
          alt="School Logo"
          className="h-24 w-24 md:h-32 md:w-32 mb-6 drop-shadow-2xl animate-pulse"
        />
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-5xl leading-tight drop-shadow-lg">
          Ramon Teves Pastor Memorial
          <br />
          <span className="text-emerald-300">Dumaguete Science High School</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-2 italic">
          Scientia et Vita
        </p>
        <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl">
          Nurturing Future Scientists and Leaders Since 1987
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
        <ChevronDown className="absolute bottom-8 h-8 w-8 animate-bounce text-white/70" />
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our School
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6" />
        </div>

        {/* History */}
        <Card className="mb-8 overflow-hidden">
          <CardHeader className="bg-emerald-600 text-white">
            <CardTitle className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              Brief History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed">
              The <strong>Ramon Teves Pastor Memorial - Dumaguete Science High School (RTPM-DSHS)</strong> 
              {' '}was established in <strong>1987</strong> to provide quality science and mathematics 
              education to the intellectually gifted students of Dumaguete City and Negros Oriental. 
              Located at Maria Asuncion Village, Daro, Dumaguete City, the school has grown from a 
              modest facility into a recognized center for advanced science education in Central Visayas.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Named in honor of the late philanthropist <strong>Ramon Teves Pastor</strong>, the school 
              continues his legacy of supporting educational excellence. Over the decades, RTPM-DSHS has 
              produced countless graduates who have excelled in various fields of science, technology, 
              engineering, and mathematics.
            </p>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-t-4 border-t-emerald-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-emerald-700">
                <Eye className="h-6 w-6" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;We dream of Filipinos who passionately love their country and whose values and 
                competencies enable them to realize their full potential and contribute meaningfully 
                to building the nation. As a learner-centered public institution, the Department of 
                Education continuously improves itself to better serve its stakeholders.&rdquo;
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-amber-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-amber-600">
                <Target className="h-6 w-6" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;To protect and promote the right of every Filipino to quality, equitable, 
                culture-based, and complete basic education where students learn in a child-friendly, 
                gender-sensitive, safe, and motivating environment. Teachers facilitate learning and 
                constantly nurture every learner.&rdquo;
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <Card className="mb-8">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <CardTitle className="flex items-center gap-3">
              <Heart className="h-6 w-6" />
              Core Values
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-lg bg-red-50 border border-red-100">
                <p className="font-bold text-red-700 text-lg">Maka-Diyos</p>
                <p className="text-sm text-gray-600 mt-1">God-fearing</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                <p className="font-bold text-blue-700 text-lg">Maka-Tao</p>
                <p className="text-sm text-gray-600 mt-1">People-oriented</p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                <p className="font-bold text-green-700 text-lg">Makakalikasan</p>
                <p className="text-sm text-gray-600 mt-1">Nature-loving</p>
              </div>
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
                <p className="font-bold text-amber-700 text-lg">Makabansa</p>
                <p className="text-sm text-gray-600 mt-1">Patriotic</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-800">
              <MapPin className="h-6 w-6 text-emerald-600" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-700">
                  <strong>Address:</strong> Maria Asuncion Village, Daro, Dumaguete City, 
                  Negros Oriental, Philippines
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>City:</strong> Dumaguete City - The City of Gentle People
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Region:</strong> Central Visayas (Region VII)
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-video rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.0867!2d123.3078!3d9.3056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMTgnMjAuMiJOIDEyM8KwMTgnMjguMSJF!5e0!3m2!1sen!2sph!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Map"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Programs Section
function ProgramsSection() {
  const programs = [
    {
      title: 'Junior High School',
      grades: 'Grades 7-10',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'A comprehensive curriculum focused on advanced science and mathematics education, preparing students for higher learning.',
      subjects: ['Advanced Mathematics', 'Integrated Science', 'Research Methods', 'Computer Science', 'English', 'Filipino', 'Social Studies'],
      color: 'emerald',
    },
    {
      title: 'Senior High School - STEM',
      grades: 'Grades 11-12',
      icon: <FlaskConical className="h-8 w-8" />,
      description: 'Science, Technology, Engineering, and Mathematics strand designed for students pursuing careers in science and technology fields.',
      subjects: ['General Physics', 'General Chemistry', 'Pre-Calculus', 'Basic Calculus', 'Statistics & Probability', 'Research Project'],
      color: 'blue',
    },
  ]

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our curriculum is designed to nurture scientifically-inclined minds and prepare students 
            for excellence in higher education and future careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className={`bg-gradient-to-r ${
                program.color === 'emerald' 
                  ? 'from-emerald-600 to-teal-600' 
                  : 'from-blue-600 to-cyan-600'
              } text-white`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    {program.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <p className="text-white/80 text-sm">{program.grades}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">Key Subjects:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className={`${
                          program.color === 'emerald' 
                            ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' 
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-emerald-50 border border-emerald-100">
            <Atom className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">Science Labs</h3>
            <p className="text-sm text-gray-600 mt-1">Modern laboratories for experiments</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-100">
            <Calculator className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">Math Center</h3>
            <p className="text-sm text-gray-600 mt-1">Advanced mathematics programs</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-100">
            <Microscope className="h-10 w-10 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">Research</h3>
            <p className="text-sm text-gray-600 mt-1">Student research opportunities</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-amber-50 border border-amber-100">
            <Lightbulb className="h-10 w-10 text-amber-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">Innovation</h3>
            <p className="text-sm text-gray-600 mt-1">STEM projects and competitions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const galleryImages = [
    { src: '/images/IMG_20200824_060521-01 (1).jpg', caption: 'Main School Building' },
    { src: '/images/IMG_20190809_063842 (4).jpg', caption: 'School Campus Overview' },
    { src: '/images/IMG_20200824_060616-01.jpg', caption: 'School Grounds' },
    { src: '/images/IMG_20200824_060757-01.jpg', caption: 'Building 3' },
    { src: '/images/IMG_20190630_093558-01.jpg', caption: 'Campus Activities' },
    { src: '/images/IMG_20190630_094516-01.jpg', caption: 'School Events' },
    { src: '/images/IMG_20190630_094648.jpg', caption: 'Student Activities' },
    { src: '/images/IMG_20190630_095938-01 (1).jpg', caption: 'School Facilities' },
  ]

  const achievements = [
    { title: 'Regional Science Fair', year: 'Various Years', icon: <Trophy className="h-5 w-5" /> },
    { title: 'Mathematics Competitions', year: 'Multiple Awards', icon: <Calculator className="h-5 w-5" /> },
    { title: 'Research Presentations', year: 'National Level', icon: <Microscope className="h-5 w-5" /> },
    { title: 'Academic Excellence', year: 'Consistent Top Performers', icon: <GraduationCap className="h-5 w-5" /> },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery & Activities
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a glimpse of our vibrant campus life, school events, and achievements.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Achievements & Recognitions
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                    {achievement.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{achievement.title}</p>
                    <p className="text-xs text-gray-500">{achievement.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with us through any of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-emerald-600 text-white">
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Maria Asuncion Village, Daro, Dumaguete City, Negros Oriental, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Phone className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(035) 225-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">rtpmdshs@deped.gov.ph</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Instagram className="h-5 w-5 text-pink-600" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Twitter className="h-5 w-5 text-sky-500" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Stay connected and updated with our latest news and events.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-lg text-center">
                  <div className="text-emerald-600 mb-2">
                    <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-emerald-700">Message Sent!</h3>
                  <p className="text-sm text-emerald-600 mt-1">Thank you for contacting us. We&apos;ll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Developers Section
function DevelopersSection() {
  return (
    <section id="developers" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Developers
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            The team behind this school website project.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-32 bg-gradient-to-r from-emerald-600 to-teal-600" />
            <CardContent className="p-6 text-center -mt-16 relative">
              <Avatar className="h-28 w-28 mx-auto border-4 border-white shadow-lg">
                <AvatarImage 
                  src="/images/645255510_26225830483702346_7274968518812314217_n.jpg" 
                  alt="Bracil G. Cimafranca" 
                />
                <AvatarFallback className="text-2xl">BGC</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Bracil G. Cimafranca</h3>
              <p className="text-emerald-600 font-medium">ICT Teacher</p>
              <p className="text-sm text-gray-500 mt-1">Ramon Teves Pastor Memorial - Dumaguete Science High School</p>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <a 
                    href="mailto:bracil.cimafranca@deped.gov.ph" 
                    className="text-sm hover:text-emerald-600 transition-colors"
                  >
                    bracil.cimafranca@deped.gov.ph
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Badge className="bg-emerald-100 text-emerald-700">Developer</Badge>
                <Badge className="bg-blue-100 text-blue-700">Designer</Badge>
                <Badge className="bg-purple-100 text-purple-700">Educator</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Info */}
        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-2">
                <strong>Project:</strong> Creative Tech 8 Final Project - Group Website
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Purpose:</strong> Example website for student reference
              </p>
              <p className="text-gray-600 text-sm mt-4">
                This website serves as a sample project for the Creative Tech 8 class, 
                demonstrating proper website structure, design principles, and content organization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/rtpmdshslogo3x3 (2).png"
                alt="RTPM-DSHS Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold">RTPM-DSHS</h3>
                <p className="text-sm text-gray-400">Dumaguete Science High School</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Nurturing future scientists and leaders since 1987. Providing quality 
              science education to the youth of Dumaguete City and Negros Oriental.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Programs', 'Gallery', 'Contact', 'Developers'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Maria Asuncion Village, Daro, Dumaguete City</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>rtpmdshs@deped.gov.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ramon Teves Pastor Memorial - Dumaguete Science High School. 
            All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Developed with passion by the ICT Department
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <GallerySection />
      <ContactSection />
      <DevelopersSection />
      <Footer />
    </main>
  )
}
