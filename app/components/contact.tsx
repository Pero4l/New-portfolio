'use client';
import React, { useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '', project: '' });
  const [formStatus, setFormStatus] = React.useState({ type: '', message: '' });

  // useEffect(() => {
  //   console.log('EmailJS Config:', {
  //     serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  //     templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  //     publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  //   });
  //   emailjs.init({
  //     publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  //   });
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.project) {
      setFormStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending message...' });
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Prevent rate limit

    const templateParams = {
      to_name: 'Peter',
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      title: formData.project,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_nx0z82n",
        "template_pq8u786",
        templateParams,{
           publicKey:'7ItloHNh_Xlhubmsp'
        }
       
      )
      .then(
        (response) => {
          console.log('EmailJS success:', response.status, response.text);
          setFormStatus({ type: 'success', message: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '', project: '' });
          setTimeout(() => setFormStatus({ type: '', message: '' }), 3000);
        },
        (error) => {
          console.error('EmailJS error:', error);
          setFormStatus({ type: 'error', message: `Failed to send message: ${error.text || 'Unknown error'}` });
        }
      );
  };

  const testEmail = () => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          to_name: 'Peter',
          from_name: 'Test User',
          from_email: 'test@example.com',
          reply_to: 'test@example.com',
          message: 'This is a test message',
          title: 'Test Project',
          time: new Date().toLocaleString(),
        }
       
      )
      .then(
        (response) => console.log('Test success:', response.status, response.text),
        (error) => console.error('Test error:', error)
      );
  };

  return (
    <div>
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-spin-slow"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Ready to turn your vision into reality? Let's collaborate and create something extraordinary that leaves a lasting impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="">
                    <div className="group">
                      <label className="block text-white/70 text-sm font-medium mb-2 group-focus-within:text-purple-300 transition-colors">
                        Name
                      </label>
                      <input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        name="name"
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-white/70 text-sm font-medium mb-2 group-focus-within:text-purple-300 transition-colors">
                      Email Address
                    </label>
                    <input
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      name="email"
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-white/70 text-sm font-medium mb-2 group-focus-within:text-purple-300 transition-colors">
                      Project Type
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      <option value="" className="bg-gray-900">
                        Select project type
                      </option>
                      <option value="web-development" className="bg-gray-900">
                        Web Development
                      </option>
                      <option value="mobile-app" className="bg-gray-900">
                        Mobile App
                      </option>
                      <option value="ui-ux-design" className="bg-gray-900">
                        UI/UX Design
                      </option>
                      <option value="consultation" className="bg-gray-900">
                        Consultation
                      </option>
                      <option value="other" className="bg-gray-900">
                        Other
                      </option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-white/70 text-sm font-medium mb-2 group-focus-within:text-purple-300 transition-colors">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      name="message"
                      rows={6}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project, goals, timeline, and anything else you'd like me to know..."
                    />
                  </div>
                  {formStatus.message && (
                    <div
                      className={`flex items-center gap-2 p-4 rounded-lg ${
                        formStatus.type === 'success'
                          ? 'bg-green-500/20 text-green-400'
                          : formStatus.type === 'error'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                      <span>{formStatus.message}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    type="button"
                    onClick={testEmail}
                    className="w-full mt-4 p-2 bg-blue-500 text-white rounded"
                  >
                    Test Email
                  </button>
                </form>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Get In Touch
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, creative projects, or potential collaborations. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
                </p>
              </div>
              <div className="grid gap-6">
                <Link href="mailto:peteridiku10@gmail.com">
                  <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-1">Email Me</h4>
                        <p className="text-white/60">peteridiku10@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://wa.me/2349018555631">
                  <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                        <span className="text-blue-400 font-bold">💬</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-1">Let's Chat</h4>
                        <p className="text-white/60">Response within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6 text-center lg:text-left">Connect With Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { href: 'https://github.com/Pero4l', icon: Github, name: 'GitHub', color: 'from-gray-600 to-gray-800', hoverColor: 'hover:from-gray-500 hover:to-gray-700' },
                    {
                      href: 'https://www.linkedin.com/in/peter-idiku-911178338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                      icon: Linkedin,
                      name: 'LinkedIn',
                      color: 'from-blue-600 to-blue-800',
                      hoverColor: 'hover:from-blue-500 hover:to-blue-700',
                    },
                    { href: 'https://x.com/pero4l?s=21', icon: Twitter, name: 'Twitter', color: 'from-sky-600 to-sky-800', hoverColor: 'hover:from-sky-500 hover:to-sky-700' },
                    { href: 'mailto:peteridiku@gmail.com', icon: Mail, name: 'Email', color: 'from-purple-600 to-pink-600', hoverColor: 'hover:from-purple-500 hover:to-pink-500' },
                  ].map(({ icon: Icon, name, color, hoverColor, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className={`bg-gradient-to-r ${color} ${hoverColor} p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
                    >
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      <span className="text-white font-medium">{name}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 text-center">
                <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-3 animate-pulse"></div>
                <h4 className="font-semibold text-green-300 mb-2">Quick Response</h4>
                <p className="text-white/70 text-sm">I typically respond to messages within 6-12 hours during business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;