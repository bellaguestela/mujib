'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Leaf, Package, Users, Award, TrendingUp } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="MUJIB Logo" 
                className="h-12 w-auto rounded-lg shadow-md"
              />
              <span className="ml-3 text-2xl font-bold text-green-800">MUJIB</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-green-700">MUJIB</span>
                <br />
                Perdagangan Padi & Pupuk
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Mitra terpercaya untuk kebutuhan pertanian Anda. Menyediakan padi berkualitas dan pupuk terbaik untuk mendukung kesuksesan pertanian Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  Hubungi Kami
                  <ChevronRight className="ml-2" size={20} />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-amber-400 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Kualitas Terjamin</h3>
                  <p className="text-gray-600">Produk pertanian terbaik dengan harga kompetitif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang <span className="text-green-700">MUJIB</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan perdagangan padi dan pupuk yang berkomitmen untuk mendukung pertanian Indonesia dengan produk berkualitas dan layanan terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-8 text-center">
              <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Produk Berkualitas</h3>
              <p className="text-gray-600">Padi dan pupuk pilihan dengan kualitas terbaik untuk hasil panen maksimal</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-8 text-center">
              <Users className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Layanan Terpercaya</h3>
              <p className="text-gray-600">Tim profesional yang siap membantu kebutuhan pertanian Anda</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Harga Kompetitif</h3>
              <p className="text-gray-600">Harga terbaik dengan kualitas yang tidak tertandingi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600">Solusi lengkap untuk kebutuhan pertanian Anda</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-lg">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Perdagangan Padi</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Menyediakan berbagai jenis padi berkualitas tinggi dengan harga kompetitif. 
                Padi yang kami jual telah melalui proses seleksi ketat untuk memastikan kualitas terbaik.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Padi IR64</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Padi Ciherang</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Padi Merek</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Padi Organik</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-4 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Perdagangan Pupuk</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Menyediakan berbagai jenis pupuk berkualitas untuk meningkatkan hasil panen dan menjaga kesuburan tanah.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-600 mr-2" />Pupuk Urea</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-600 mr-2" />Pupuk NPK</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-600 mr-2" />Pupuk Organik</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-600 mr-2" />Pupuk KCL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Siap membantu kebutuhan pertanian Anda</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      KP.CISERO, Desa/Kelurahan Karangnunggal, Kec. Cibeber, Kab. Cianjur, Provinsi Jawa Barat
                    </p>
                    <p className="text-gray-600">Kode Pos: 43262</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">082233059539</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@mujib.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nama</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    placeholder="Pesan Anda..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.png" 
                  alt="MUJIB Logo" 
                  className="h-10 w-auto rounded"
                />
                <span className="ml-3 text-xl font-bold">MUJIB</span>
              </div>
              <p className="text-gray-400">
                Perusahaan perdagangan padi & pupuk terpercaya di Indonesia
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Perdagangan Padi</li>
                <li>Perdagangan Pupuk</li>
                <li>Konsultasi Pertanian</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>082233059539</li>
                <li>KP.CISERO, Karangnunggal, Cianjur</li>
                <li>info@mujib.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MUJIB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}