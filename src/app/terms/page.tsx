'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, FileText, ShoppingCart, Package, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-green-600 font-medium">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-green-600 font-medium">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Terms and Conditions Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-xl text-gray-600">Syarat dan Ketentuan <span className="text-green-700 font-semibold">MUJIB</span></p>
            <p className="text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="mr-3 text-green-600" size={24} />
                Penerimaan Syarat dan Ketentuan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di <span className="font-semibold text-green-700">MUJIB</span>. Dengan mengakses dan menggunakan layanan perdagangan padi dan pupuk kami, 
                Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, 
                jangan gunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Package className="mr-3 text-green-600" size={24} />
                Deskripsi Layanan
              </h2>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold text-green-700">MUJIB</span> menyediakan layanan perdagangan meliputi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Penjualan berbagai jenis padi berkualitas (IR64, Ciherang, Merek, Organik)</li>
                <li>Penjualan berbagai jenis pupuk (Urea, NPK, Organik, KCL)</li>
                <li>Konsultasi pertanian dan rekomendasi produk</li>
                <li>Layanan pengiriman untuk wilayah tertentu</li>
                <li>Informasi harga pasar dan tren pertanian</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <ShoppingCart className="mr-3 text-green-600" size={24} />
                Proses Pemesanan dan Pembayaran
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pemesanan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Pemesanan dapat dilakukan melalui telepon, email, atau langsung ke lokasi kami</li>
                    <li>Minimal order untuk pengiriman adalah 1 ton</li>
                    <li>Konfirmasi ketersediaan stok akan dilakukan sebelum proses pembayaran</li>
                    <li>Harga dapat berubah sewaktu-waktu mengikuti kondisi pasar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pembayaran</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Pembayaran dapat dilakukan tunai atau transfer bank</li>
                    <li>Untuk order besar, tersedia sistem pembayaran cicilan</li>
                    <li>Pembayaran harus dilunasi sebelum pengiriman untuk pelanggan baru</li>
                    <li>Pelanggan tetap dapat diberikan sistem kredit dengan persetujuan manajemen</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman dan Penerimaan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pengiriman</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Pengiriman dilakukan pada hari kerja (Senin-Sabtu)</li>
                    <li>Biaya pengiriman disesuaikan dengan jarak dan jumlah order</li>
                    <li>Waktu pengiriman perkiraan 1-3 hari tergantung lokasi</li>
                    <li>Pelanggan bertanggung jawab menyediakan akses untuk pengiriman</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Penerimaan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Pelanggan harus memeriksa kondisi produk saat penerimaan</li>
                    <li>Klaim kerusakan harus diajukan maksimal 24 jam setelah penerimaan</li>
                    <li>Penerimaan dianggap sah jika tidak ada keluhan dalam waktu yang ditentukan</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kualitas Produk dan Garansi</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Semua produk yang dijual <span className="font-semibold text-green-700">MUJIB</span> telah melalui proses quality control</li>
                <li>Kami menjamin kualitas produk sesuai dengan spesifikasi yang disepakati</li>
                <li>Produk yang tidak memenuhi spesifikasi dapat dikembalikan atau ditukar</li>
                <li>Garansi tidak berlaku untuk kerusakan akibat penyimpanan atau penggunaan yang salah</li>
                <li>Kami menyediakan sertifikat kualitas untuk produk tertentu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="mr-3 text-green-600" size={24} />
                Kewajiban Pelanggan
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap untuk pemesanan</li>
                <li>Memenuhi kewajiban pembayaran sesuai dengan kesepakatan</li>
                <li>Menyediakan fasilitas yang memadai untuk penerimaan barang</li>
                <li>Melaporkan masalah atau keluhan secara tertulis dalam waktu yang ditentukan</li>
                <li>Mematuhi semua peraturan yang berlaku terkait penggunaan produk</li>
                <li>Tidak menggunakan produk untuk tujuan ilegal atau melawan hukum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold text-green-700">MUJIB</span> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Keterlambatan pengiriman akibat force majeure (bencana alam, kerusuhan, dll)</li>
                <li>Kerusakan produk akibat penyimpanan atau penggunaan yang salah oleh pelanggan</li>
                <li>Perbedaan hasil panen yang dipengaruhi oleh faktor eksternal lainnya</li>
                <li>Kehilangan keuntungan atau peluang bisnis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privasi dan Keamanan Data</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami melindungi privasi dan keamanan data pribadi Anda sesuai dengan Kebijakan Privasi kami. 
                Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan data Anda sesuai dengan kebijakan tersebut.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-green-700">MUJIB</span> berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. 
                Perubahan akan diberitahukan melalui website atau komunikasi langsung. 
                Penggunaan terus menerus layanan setelah perubahan menunjukkan penerimaan Anda terhadap syarat yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Sengketa akan diselesaikan secara musyawarah dan kekeluargaan</li>
                <li>Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui mediasi</li>
                <li>Sebagai upaya terakhir, sengketa dapat dibawa ke pengadilan di Cianjur</li>
                <li>Hukum yang berlaku adalah hukum Republik Indonesia</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-gray-700"><strong>Perusahaan:</strong> MUJIB</p>
                <p className="text-gray-700"><strong>Alamat:</strong> KP.CISERO, Desa/Kelurahan Karangnunggal, Kec. Cibeber, Kab. Cianjur, Provinsi Jawa Barat 43262</p>
                <p className="text-gray-700"><strong>Telepon:</strong> 082233059539</p>
                <p className="text-gray-700"><strong>Email:</strong> info@mujib.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}