'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Database, UserCheck, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="MUJIB Logo" 
                  className="h-10 w-auto rounded-lg shadow-md"
                />
                <span className="ml-3 text-2xl font-bold text-green-800">MUJIB</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-green-600 font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</Link>
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
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-green-600 font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Kebijakan Privasi <span className="text-green-700 font-semibold">MUJIB</span></p>
            <p className="text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="mr-3 text-green-600" size={24} />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Di <span className="font-semibold text-green-700">MUJIB</span>, kami sangat memperhatikan privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                Anda ketika menggunakan layanan perdagangan padi dan pupuk kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="mr-3 text-green-600" size={24} />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Bisnis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nama perusahaan (jika ada)</li>
                    <li>Jenis usaha pertanian</li>
                    <li>Riwayat pembelian</li>
                    <li>Preferensi produk</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="mr-3 text-green-600" size={24} />
                Penggunaan Informasi
              </h2>
              <p className="text-gray-600 mb-4">Kami menggunakan informasi yang Anda berikan untuk:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses dan mengelola pesanan Anda</li>
                <li>Menyediakan layanan pelanggan yang lebih baik</li>
                <li>Mengirimkan informasi produk dan penawaran khusus</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Memenuhi persyaratan hukum dan peraturan yang berlaku</li>
                <li>Mencegah aktivitas penipuan dan keamanan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="mr-3 text-green-600" size={24} />
                Keamanan Data
              </h2>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-green-700">MUJIB</span> berkomitmen untuk melindungi keamanan data pribadi Anda. 
                Kami menerapkan berbagai langkah keamanan teknis dan organisasi untuk mencegah akses tidak sah, 
                penggunaan yang tidak tepat, atau perubahan informasi pribadi Anda. Semua data disimpan dengan 
                enkripsi dan akses terbatas kepada personel yang berwenang.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Berbagi Informasi</h2>
              <p className="text-gray-600 mb-4">Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan Anda yang jelas</li>
                <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                <li>Dengan mitra bisnis tepercaya yang membantu kami menyediakan layanan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan <span className="font-semibold text-green-700">MUJIB</span> atau pelanggan kami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
              <p className="text-gray-600 mb-4">Sebagai pengguna layanan kami, Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file kecil 
                yang disimpan di browser Anda. Anda dapat mengatur browser untuk menolak cookies, namun ini dapat 
                mempengaruhi fungsionalitas website kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-green-700">MUJIB</span> dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. 
                Perubahan akan diberitahukan melalui website kami atau email. Penggunaan terus menerus layanan kami 
                setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan data pribadi Anda, 
                silakan hubungi kami:
              </p>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-gray-700"><strong>Perusahaan:</strong> MUJIB</p>
                <p className="text-gray-700"><strong>Alamat:</strong> KP.CISERO, Desa/Kelurahan Karangnunggal, Kec. Cibeber, Kab. Cianjur, Provinsi Jawa Barat 43262</p>
                <p className="text-gray-700"><strong>Telepon:</strong> 082233059539</p>
                <p className="text-gray-700"><strong>Email:</strong> privacy@mujib.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}