
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'What We Do', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Work With Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex flex-col">
              <span className="text-xl font-bold text-roof-red leading-none uppercase tracking-tight">Roofing</span>
              <span className="text-xs font-semibold text-text-black tracking-widest uppercase">Greater Antwerp</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-roof-red border-b-2 border-roof-red'
                    : 'text-text-black hover:text-roof-red'
                } px-1 py-2 text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 bg-roof-red text-white px-5 py-2.5 rounded font-bold hover:bg-red-800 transition-colors shadow-md"
            >
              <Phone size={18} />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="text-roof-red p-2 border border-roof-red rounded">
                <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-black hover:text-roof-red p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-red-50 text-roof-red'
                    : 'text-text-black hover:bg-gray-50'
                } block px-3 py-4 text-base font-semibold border-l-4 ${isActive(link.path) ? 'border-roof-red' : 'border-transparent'}`}
              >
                {link.name}