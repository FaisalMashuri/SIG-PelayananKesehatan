-- --------------------------------------------------------
-- Host:                         localhost
-- Versi server:                 5.7.24 - MySQL Community Server (GPL)
-- OS Server:                    Win64
-- HeidiSQL Versi:               9.5.0.5332
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Membuang struktur basisdata untuk mygis
CREATE DATABASE IF NOT EXISTS `mygis` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mygis`;

-- membuang struktur untuk table mygis.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- Membuang data untuk tabel mygis.admin: ~5 rows (lebih kurang)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`id`, `username`, `password`, `fullname`) VALUES
	(2, 'eyyi', '21232f297a57a5a743894a0e4a801fc3', 'LiyanEyyi'),
	(3, 'meli', '81dc9bdb52d04dc20036dbd8313ed055', 'Nur Sadilah'),
	(4, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin'),
	(15, 'faisals', '$2b$10$jAOScFEt7EiLTv1SHs0qKecG81SF/7FHYxnAi/drYFCPZqphQ5Xri', 'meliana'),
	(16, 'isal', '$2b$10$AL7QmcShpZCijFz5uZJrLeQd6hghgsnc3w6wTjY8lGThBsOXJ80Ju', 'meliana');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- membuang struktur untuk table mygis.comment
CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `username` varchar(30) NOT NULL,
  `datetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Membuang data untuk tabel mygis.comment: ~8 rows (lebih kurang)
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` (`comment_id`, `message`, `username`, `datetime`) VALUES
	(1, 'Halo test test', 'dita', '2017-09-03 09:51:44'),
	(2, 'Bagus programnya beguna sekaliiiii', 'Lina', '2017-09-03 09:54:29'),
	(3, 'test', 'user', '2017-09-03 12:00:37'),
	(4, 'test aja', 'iya', '2017-09-03 12:09:45'),
	(5, 'test aja', 'iya', '2017-09-03 12:09:56'),
	(6, 'test buu tamu', 'rusidi', '2017-09-03 12:10:16'),
	(7, 'tets aja lah', 'bambang', '2017-09-03 12:12:21'),
	(8, 'tes tes ', 'hikal', '2017-09-03 12:12:53');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- membuang struktur untuk table mygis.distribusi_pelayanan
CREATE TABLE IF NOT EXISTS `distribusi_pelayanan` (
  `distribusi_pelayanan_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pelayanan_id` int(11) NOT NULL,
  `kelurahan_id` int(11) NOT NULL,
  `koordinat_x` varchar(20) DEFAULT NULL,
  `koordinat_y` varchar(20) DEFAULT NULL,
  `sarana_pelayanan` varchar(255) NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`distribusi_pelayanan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8;

-- Membuang data untuk tabel mygis.distribusi_pelayanan: ~103 rows (lebih kurang)
/*!40000 ALTER TABLE `distribusi_pelayanan` DISABLE KEYS */;
INSERT INTO `distribusi_pelayanan` (`distribusi_pelayanan_id`, `pelayanan_id`, `kelurahan_id`, `koordinat_x`, `koordinat_y`, `sarana_pelayanan`, `keterangan`, `image`) VALUES
	(1, 2, 7, '-6.861159756539099', '115.28652650701906', 'Puskemas ARJASA', 'Selatan Alun-Alun Arjasa', 'default.jpg'),
	(2, 1, 7, '-6.873169737328773', '115.29079658377077', '(Mekar) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Kettep,\nTimur Sawah,\nNyangkreng', 'default.jpg'),
	(11, 1, 7, '-6.868568166328778', '115.28684837210085', '(Kuncup) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Mangong-mangong\nKamp. Wakaf\nTimur Alun-alun', 'default.jpg'),
	(12, 1, 7, '-6.8655004275953715', '115.29440147268679', '(Teratai) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Aeng Parao', 'default.jpg'),
	(13, 1, 7, '-6.8649891358835', '115.28358680593874', '(Kartika) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Arjasa Laok', 'default.jpg'),
	(14, 1, 15, '-6.8567018728090385', '115.28596860754396', '(Melati) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Pacinan\nPoran Lanjeng', 'default.jpg'),
	(15, 7, 7, '-6.859482063257357', '115.2850566564789', 'Tempat Praktek & Apotek Harapan Baru', 'Harapan Baru', 'default.jpg'),
	(16, 7, 7, '-6.860004012911687', '115.2870200334778', 'Toko Obat Arjasa Timur Alun-alun', 'Toko Obat Arjasa Timur Alun-alun\nFirman Hidayat', 'default.jpg'),
	(17, 7, 7, '-6.859631191788386', '115.28328639852907', 'Kangean Farma - Apotek Duko', 'Kangean Farma - Apotek Duko (Moh. Hosni)\n', 'default.jpg'),
	(18, 7, 7, '-6.859535323452373', '115.28382284033205', 'Klinik  Umum Laok Jang-jang', 'Klinik	-	Praktek Umum	Laok Jang-jang', 'default.jpg'),
	(19, 7, 12, '', '', 'Melati	- Apotek Laok Jang-jang', 'Melati	-	Apotek	Laok Jang-jang', 'default.jpg'),
	(20, 7, 7, '-6.8595246714138405', '115.28426272261049', 'Tempat Praktek', 'Wahyu Abadi	-	Tempat Praktek	Arjasa\n(dr. Winda)', 'default.jpg'),
	(21, 1, 15, '-6.85801207952451', '115.2864084898224', '(Kerapan) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Lambeng, Daya, Nyamplong, Ondung', 'default.jpg'),
	(22, 7, 15, '-6.859002721234212', '115.28654796469118', 'Toko Obat Kalikatak', 'Toko Obat	-	Obat obat	Kalikatak \n(Irham Fariansa)', 'default.jpg'),
	(23, 1, 8, '-6.83120005961635', '115.26837331640627', '(Pandhi) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Duko Laok', 'default.jpg'),
	(24, 4, 15, '-6.855167967686273', '115.28493863928225', 'Ponkesdes Nyaplong Ondung', 'Kalikatak Nyaplong Ondung', 'default.jpg'),
	(25, 4, 11, '', '', 'Ponkesdes', 'Kalisangka', 'default.jpg'),
	(27, 4, 13, '-6.852931013866384', '115.26288015234377', 'Ponkesdes Bilis-bilis', 'Bilis-bilis', ''),
	(28, 4, 10, '-6.8962621332780465', '115.23157340872194', 'Ponkesdes Angkatan', 'Angkatan', 'default.jpg'),
	(29, 4, 14, '', '', 'Ponkesdes Sumber Nangka', 'Sumber Nangka', 'default.jpg'),
	(30, 4, 5, '', '', 'Ponkesdes Paseraman', 'Paseraman', 'default.jpg'),
	(31, 4, 4, '', '', 'Ponkesdes Sawa Sumur', 'Sawa Sumur', 'default.jpg'),
	(32, 4, 18, '', '', 'Ponkesdes Pandeman', 'Pandeman', 'default.jpg'),
	(33, 4, 19, '', '', 'Ponkesdes Pabian', 'Pabian', 'default.jpg'),
	(34, 4, 1, '-6.865670858043917', '115.27026159155275', 'Ponkesdes Buddhi', 'Buddhi', 'default.jpg'),
	(35, 4, 16, '', '', 'Ponkesdes Angon-angon', 'Angon-angon', 'default.jpg'),
	(36, 4, 6, '-6.859151849915336', '115.28738481390383', 'Ponkesdes Kalinganyar', 'Kalinganyar', 'default.jpg'),
	(37, 4, 2, '-6.893088060625966', '115.31422836172487', 'Ponkesdes Gelaman', 'Gelaman', 'default.jpg'),
	(38, 4, 9, '-6.850596386076983', '115.29631646304324', 'Ponkesdes Kolo-kolo', 'Kolo-kolo', 'default.jpg'),
	(39, 4, 8, '-6.831114838242232', '115.28236371862795', 'Ponkesdes Duko ', 'Duko', 'default.jpg'),
	(40, 1, 14, '', '', '(Bungur) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Kamp. Barat', 'default.jpg'),
	(41, 1, 14, '', '', '(Anggrek) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Kamp. Barat', 'default.jpg'),
	(42, 2, 15, '-6.855402314621784', '115.2865694223633', 'Polindes KALIKATAK', 'KALIKATAK', 'default.jpg'),
	(43, 2, 8, '-6.870400278636331', '115.34630758154299', 'Polindes DUKO I', 'DUKO I', 'default.jpg'),
	(44, 2, 8, '-6.858755930704859', '115.28270157008365', 'Polindes DUKO II', 'DUKO II', 'default.jpg'),
	(45, 2, 8, '-6.865216358746004', '115.28597922949984', 'Polindes DUKO III', 'DUKO III', 'default.jpg'),
	(46, 2, 14, '', '', 'Polindes SUMBER NANGKA', 'SUMBER NANGKA', 'default.jpg'),
	(47, 2, 13, '-6.852504926234375', '115.26129228460695', 'Polindes BILIS – BILIS I', 'BILIS – BILIS I', ''),
	(48, 2, 12, '', '', 'Polindes BILIS – BILIS II', 'BILIS – BILIS II', 'default.jpg'),
	(49, 2, 9, '-6.8529185683492235', '115.29142411380008', 'Polindes PUSTU KOLO - KOLO', 'PUSTU KOLO - KOLO', 'default.jpg'),
	(50, 2, 10, '-6.894728355859335', '115.235006636261', 'Polindes ANGKATAN I', 'ANGKATAN I', 'default.jpg'),
	(51, 2, 10, '-6.902823236164819', '115.22874099600222', 'Polindes ANGKATAN II', 'ANGKATAN II', 'default.jpg'),
	(52, 2, 12, '', '', 'Polindes PUSTU LAOK JANG – JANG', 'PUSTU LAOK JANG – JANG ', 'default.jpg'),
	(53, 2, 11, '', '', 'Polindes KALISANGKA I', 'KALISANGKA I', 'default.jpg'),
	(54, 2, 11, '', '', 'Polindes KALISANGKA II', 'KALISANGKA II', 'default.jpg'),
	(55, 2, 16, '-6.858779028125009', '115.28738481390383', 'Polindes ANGON – ANGON I', 'ANGON – ANGON I', 'default.jpg'),
	(56, 2, 16, '-6.858182512653553', '115.28711659300234', 'Polindes ANGON – ANGON II', 'ANGON – ANGON II', 'default.jpg'),
	(57, 2, 6, '-6.860344877683293', '115.28759939062502', 'Polindes KALINGANYAR', 'KALINGANYAR', 'default.jpg'),
	(58, 2, 17, '', '', 'Polindes SAMBAKATI I', 'SAMBAKATI I', 'default.jpg'),
	(59, 2, 17, '', '', 'Polindes SAMBAKATI II', 'SAMBAKATI II', 'default.jpg'),
	(60, 2, 5, '', '', 'Polindes PASERAMAN I', 'PASERAMAN I', 'default.jpg'),
	(61, 2, 5, '', '', 'Polindes PASERAMAN II', 'PASERAMAN II', 'default.jpg'),
	(62, 2, 18, '-6.855174163465734', '115.31418265729144', 'Polindes PANDEMAN', 'PANDEMAN', 'default.jpg'),
	(63, 2, 4, '', '', 'Polindes SAWAH SUMUR I', 'SAWAH SUMUR I', 'default.jpg'),
	(64, 2, 4, '', '', 'Polindes SAWAH SUMUR II', 'SAWAH SUMUR II', 'default.jpg'),
	(65, 2, 19, '', '', 'Polindes PABIAN I', 'PABIAN I', 'default.jpg'),
	(66, 2, 19, '', '', 'Polindes PABIAN II', 'PABIAN II', 'default.jpg'),
	(67, 2, 2, '-6.890105691112828', '115.32130939352419', 'Polindes GELAMAN', 'GELAMAN', 'default.jpg'),
	(68, 2, 1, '-6.863923943052893', '115.26399595129396', 'Polindes BUDDI', 'BUDDI', 'default.jpg'),
	(69, 2, 3, '', '', 'Polindes PUSTU PAJENANGGER', 'PUSTU PAJENANGGER', 'default.jpg'),
	(70, 2, 3, '', '', 'Polindes POLINDES PAJENANGGER', 'POLINDES PAJENANGGER', 'default.jpg'),
	(71, 3, 7, '-6.858001427451922', '115.29405814993288', 'Rawat Inap, Apotek, Ruang Periksa', 'Yayasan Pondok Pesantren Salafiyah Syafi’iyah Al Hidayah', 'default.jpg'),
	(72, 3, 7, '-6.85731969431079', '115.2921698747864', 'Rawat Inap, Apotek, Ruang Periksa', 'Yayasan Pondok Pesantren Mambaul Ulum', 'default.jpg'),
	(73, 3, 15, '-6.855785791176786', '115.28412324774172', 'Rawat Inap, Apotek, Ruang Periksa', 'Yayasan Pondok Pesantren Muhamadiyah Islam', 'default.jpg'),
	(74, 3, 8, '-6.831242670297722', '115.27699930059816', 'Rawat Inap, Apotek, Ruang Periksa', 'Yayasan Pondok Pesantren Zainul Huda\nArjasa Laok', 'default.jpg'),
	(75, 3, 16, '-6.854273187418058', '115.28801781523134', 'Poskestren Pondok Pesantren Muhibbin', 'Yayasan Pondok Pesantren Muhibbin', 'default.jpg'),
	(76, 1, 15, '', '', '(Tanjung) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Utara Pasar', 'default.jpg'),
	(77, 1, 13, '-6.852707317907061', '115.26350242483522', '(Durian) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Kamp. Tengah', 'peta.PNG'),
	(78, 1, 15, '-6.8582783812618455', '115.28528196203615', '(Kalowang) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Kalowang', 'default.jpg'),
	(79, 1, 15, '-6.856147963195375', '115.28551799642946', '(Nyangkreng) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Nyangkreng-Kalikatak', 'default.jpg'),
	(80, 1, 8, '-6.834182798142683', '115.27498227941896', '(Teratai) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Nyaplong Ondung-Duko II', 'default.jpg'),
	(81, 1, 8, '-6.829666072559085', '115.26073438513185', '(Melati) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Tengah Parse Duko I', 'default.jpg'),
	(82, 1, 8, '-6.828600800875265', '115.25848132955934', '(Bunut) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Bunut-Duko III', 'default.jpg'),
	(83, 1, 13, '-6.8364837551481505', '115.25446874487307', '(Manggis) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Talage Lalang-Bilis Bilis I', ''),
	(84, 1, 13, '', '', '(Durian) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Durian-Bilis Bilis I', ''),
	(85, 1, 13, '-6.834097577300138', '115.23721677648928', '(Rambutan) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Ujung Baru-Bilis Bilis II', ''),
	(86, 1, 13, '-6.85114144325317', '115.2614639459839', '(Langsep) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Karang Lombi Bilis II', ''),
	(87, 1, 9, '-6.851832044106709', '115.29459984927371', '(Parse) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Parse-Kolo Kolo', 'default.jpg'),
	(88, 1, 9, '-6.854069003083498', '115.29236825137332', '(Sokon) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Sokon-Kolo Kolo', 'default.jpg'),
	(89, 1, 9, '-6.854069003083498', '115.29211075930789', '(Jambu) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Jambu-Kolo Kolo', 'default.jpg'),
	(91, 1, 9, '-6.860162', '115.28565200000003', '(Ketapang) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Ketapang-Kolo Kolo', 'default.jpg'),
	(92, 1, 9, '-6.853387264316844', '115.29228242068484', '(Aeng Bero) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Aeng Bero', ''),
	(93, 1, 10, '-6.887655873550571', '115.2207587419739', '(Sawo) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Temor Lorong - Angkatan I', 'default.jpg'),
	(94, 1, 10, '-6.890808679902384', '115.21844131338503', '(Nangka) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Laok Lorong - Angkatan I', 'default.jpg'),
	(95, 1, 10, '-6.895410035325095', '115.21629554617311', '(Manggis)KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Reng - Angkatan I', 'default.jpg'),
	(96, 1, 10, '-6.898903627191202', '115.2167246996155', '(Durian) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Durian- Angkatan I', 'default.jpg'),
	(97, 1, 10, '-6.89745506783724', '115.21105987417604', '(Mangga)KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Rabe-Angkatan II', 'default.jpg'),
	(98, 1, 10, '-6.890979101270153', '115.2141497789612', '(Nanas) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Apal-Angkatan II', 'default.jpg'),
	(99, 1, 10, '-6.88825235203556', '115.2254794298401', '(Sungai) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Laok Sungai-Angkatan II', 'default.jpg'),
	(100, 1, 10, '-6.902311984660984', '115.20917159902956', 'KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Angakatan II', 'default.jpg'),
	(101, 1, 10, '-6.905038652965727', '115.21346313345339', '(Air) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Air Betang Angkatan II', ''),
	(102, 1, 12, '', '', '(Nangka) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Nangka-Laok Jang Jang', 'default.jpg'),
	(103, 1, 12, '', '', '(Belimbing) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Belimbing-Laok Jang Jang', 'default.jpg'),
	(104, 1, 12, '', '', '(Ngomber) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Ngomber-Laok Jang Jang', 'default.jpg'),
	(105, 1, 11, '-6.854294491729683', '115.25293452131655', '(Kelapa) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Kelapa -Kalisangka I', 'default.jpg'),
	(110, 1, 3, '', '', '(Banjar) KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Banjar-Pajenangger', 'default.jpg'),
	(113, 6, 9, '-6.855432477691614', '115.29082329898074', 'KIA, KB, Pengobatan', 'Jhembhu', 'default.jpg'),
	(114, 6, 12, '', '', 'KIA, KB, Pengobatan', 'Barat Pasar', 'default.jpg'),
	(115, 6, 3, '', '', 'KIA, KB, Pengobatan', 'Telaga Kolpo', 'default.jpg'),
	(116, 5, 7, '-6.859288533198965', '115.2866015019913', 'Pel. Gawat Darurat, Poli Umum, Poli Anak, Poli Ibu/KB, Poli Gigi, Kebidanan, Rawat Inap, Radiologi, USG, Kes. Jiwa, Rekam Medik, Lab, Pusling, Ambulance', 'Selatan Alun alun Arjasa', 'default.jpg'),
	(117, 1, 34, '-6.890668419307357', '115.44804366259768', '(Kenanga)  KIA, Pel. Kesehatan, KB, Imunisasi dan Pojok Oralit', 'Batu Putih Atas', 'halo.jpg'),
	(120, 1, 10, '', '', 'Pagerungan kecil2', 'ini dubuat oleh user', ''),
	(121, 1, 10, ' ', '', 'Puskesmas ARJASA 3', 'Updated\r\n                            ', '');
/*!40000 ALTER TABLE `distribusi_pelayanan` ENABLE KEYS */;

-- membuang struktur untuk table mygis.kecamatan
CREATE TABLE IF NOT EXISTS `kecamatan` (
  `kecamatan_id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `nama_kecamatan` varchar(255) NOT NULL,
  `kode_kecamatan` varchar(255) NOT NULL,
  `kode_pos` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`kecamatan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Membuang data untuk tabel mygis.kecamatan: ~3 rows (lebih kurang)
/*!40000 ALTER TABLE `kecamatan` DISABLE KEYS */;
INSERT INTO `kecamatan` (`kecamatan_id`, `nama_kecamatan`, `kode_kecamatan`, `kode_pos`) VALUES
	(1, 'ARJASA', '69491', NULL),
	(2, '	KANGAYAN', '69492', NULL),
	(3, '	SAPEKEN', '69493', NULL);
/*!40000 ALTER TABLE `kecamatan` ENABLE KEYS */;

-- membuang struktur untuk table mygis.kelurahan
CREATE TABLE IF NOT EXISTS `kelurahan` (
  `kelurahan_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `kecamatan_id` int(11) NOT NULL,
  `nama_kelurahan` varchar(255) NOT NULL,
  `kode_kelurahan` varchar(255) NOT NULL,
  `kode_pos` varchar(10) DEFAULT NULL,
  `koordinat_x` varchar(20) DEFAULT NULL,
  `koordinat_y` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`kelurahan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- Membuang data untuk tabel mygis.kelurahan: ~37 rows (lebih kurang)
/*!40000 ALTER TABLE `kelurahan` DISABLE KEYS */;
INSERT INTO `kelurahan` (`kelurahan_id`, `kecamatan_id`, `nama_kelurahan`, `kode_kelurahan`, `kode_pos`, `koordinat_x`, `koordinat_y`) VALUES
	(1, 1, 'BUDDI', '35.29.24.0001', NULL, '-6,94508', '115,283'),
	(2, 1, 'GELAMAN', '35.29.24.0002', NULL, '-6,92068', '115,323'),
	(3, 1, 'PAJANANGGER', '35.29.24.0003', NULL, '-6,96648', '115,36'),
	(4, 1, 'SAWAHSUMUR', '35.29.24.0010', NULL, '-6,90046', '115,36'),
	(5, 1, 'PASERAMAN', '35.29.24.0011', NULL, '-6,89013', '115,328'),
	(6, 1, 'KALINGANYAR', '35.29.24.0012', NULL, '-6,86841', '115,299'),
	(7, 1, 'ARJASA', '35.29.24.0013', NULL, '-6,86657', '115,288'),
	(8, 1, 'DUKO', '35.29.24.0014', NULL, '-6,86273', '115,277'),
	(9, 1, 'KOLO KOLO', '35.29.24.0015', NULL, '-6,90314', '115,24'),
	(10, 1, 'ANGKATAN', '35.29.24.0016', NULL, '-6,89337', '115,234'),
	(11, 1, 'KALISANGKA', '35.29.24.0017', NULL, '-6,85565', '115,254'),
	(12, 1, 'LAOK JANGJANG', '35.29.24.0018', NULL, '-6,85725', '115,265'),
	(13, 1, 'BILIS BILIS', '35.29.24.0019', NULL, '-6,84123', '115,249'),
	(14, 1, 'SUMBERNANGKA', '35.29.24.0020', NULL, '-6,85662', '115,271'),
	(15, 1, 'KALIKATAK', '35.29.24.0021', NULL, '-6,84413', '115,287'),
	(16, 1, 'ANGON ANGON', '35.29.24.0022', NULL, '-6,84401', '115,301'),
	(17, 1, 'SAMBAKATI', '35.29.24.0023', NULL, '-6,84757', '115,311'),
	(18, 1, 'PANDEMAN', '35.29.24.0024', NULL, '-6,85206', '115,328'),
	(19, 1, 'PABIAN', '35.29.24.0025', NULL, '-6,83751', '115,331'),
	(29, 3, 'PAGERUNGAN BESAR', '35.29.25.0001', NULL, '-5,55407', '114,413'),
	(30, 3, 'PAGERUNGAN KECIL', '35.29.25.0002', NULL, '-5,56787', '114,436'),
	(31, 3, 'PALIAT', '35.29.25.0003', NULL, '-5,07578', '114,6'),
	(34, 2, 'BATU PUTIH', '', NULL, NULL, NULL),
	(35, 2, 'CANGKARAMAAN', '', NULL, NULL, NULL),
	(36, 2, 'DAANDUNG', '', NULL, NULL, NULL),
	(37, 2, 'JUKONG JUKONG', '', NULL, NULL, NULL),
	(38, 2, 'KANGAYAN', '', NULL, NULL, NULL),
	(39, 2, 'SAOBI', '', NULL, NULL, NULL),
	(40, 2, 'TEMBAYANGAN', '', NULL, NULL, NULL),
	(41, 2, 'TIMUR JANG JANG', '', NULL, NULL, NULL),
	(42, 2, 'TORJEK', '', NULL, NULL, NULL),
	(43, 3, 'SABUNTAN', '', NULL, NULL, NULL),
	(44, 3, 'SAKALA', '', NULL, NULL, NULL),
	(45, 3, 'SAPEKEN', '', NULL, NULL, NULL),
	(46, 3, 'SASIIL', '', NULL, NULL, NULL),
	(47, 3, 'SEPANJANG', '', NULL, NULL, NULL),
	(48, 3, 'TANJUNGKIAOK', '', NULL, NULL, NULL);
/*!40000 ALTER TABLE `kelurahan` ENABLE KEYS */;

-- membuang struktur untuk table mygis.pelayanan
CREATE TABLE IF NOT EXISTS `pelayanan` (
  `pelayanan_id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `nama_layanan` char(50) NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `icon` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`pelayanan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Membuang data untuk tabel mygis.pelayanan: ~7 rows (lebih kurang)
/*!40000 ALTER TABLE `pelayanan` DISABLE KEYS */;
INSERT INTO `pelayanan` (`pelayanan_id`, `nama_layanan`, `keterangan`, `icon`) VALUES
	(1, 'Posyandu', 'Layanan untuk memonitor kesehatan ibu dan balita', '1'),
	(2, 'Polindes', 'Poliklinik desa yang digunakan melayani periksa dan membeli obat masyarakat setempat', '2'),
	(3, 'Poskentren', 'Pos kesehatan yang terletak di pesantren. Melayani penghuni pesantren', '3'),
	(4, 'Ponkesdes', 'Posko kesehatan untuk desa', '4'),
	(5, 'Puskesmas Induk', 'Puskesmas Kecamatan', '5'),
	(6, 'Puskesmas Pembantu', 'Puskesmas penunjang kerja Puskesmas Induk', '6'),
	(7, 'Layanan Luar', 'Tempat jual obat & Praktek Umum', '7');
/*!40000 ALTER TABLE `pelayanan` ENABLE KEYS */;

-- membuang struktur untuk table mygis.photo
CREATE TABLE IF NOT EXISTS `photo` (
  `photo_id` int(11) NOT NULL,
  `distribusi_pelayanan_id` int(11) NOT NULL,
  `namafile` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`photo_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Membuang data untuk tabel mygis.photo: 0 rows
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
