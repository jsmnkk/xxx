function b(num = null) {
    if (num === null) {
        var res = `--BAHASA INDONESIA--

1.STRUKTUR DARI TESK HASIL OBSERVASI
2.TUJUAN LHO
3.YANG DI MAKSUD INFORMATIF
4.LHO DI SAJIKAN SESUAI DENGAN...YANG DI DAPATKAN
5.APA YANG DIMAKSUD KALIMAT DEFINISI DAN DESKRIPSI
6.STRUKTUR TESK EKSPOSISI
7.APA YANG DIMAKSUD DENGAN KALIMAT TIDAK EFEKTIF
8.TMABAHAN

`
        show_overlay(res);
    } else {
        if (num === 1) {
            var res = `STRUKTUR LHO

Teks laporan hasil observasi disusun dengan struktur sebagai berikut

1.pernyataan umum atau klasifikasi berisi pendahuluan atau pengantar hal umum mengenai objek yang akan disampaikan atau menjelaskan secara garis besar.
2.deskripsi bagian berisi uraian detail mengenai objek yang disampaikan.
3.deskripsi manfaat berisi manfaat atau kegunaannya dalam kehidupan.
`
        } else if (num === 2) {
            var res = `--TUJUAN LHO--

Tujuan Teks Laporan Hasil Observasi secara umum adalah untuk menyajikan fakta-fakta yang telah terbukti secara ilmiah melalui pengamatan. Penyajian ini bertujuan agar pembaca bisa mendapatkan informasi serta penjelasan dari kacamata keilmuan.

Selain tujuan umum tersebut, Teks Laporan Hasil Observasi juga memiliki tujuan spesifik lainnya, yakni sebagai berikut:

●   Bertujuan untuk mengatasi suatu persoalan.
●   Bertujuan untuk menemukan metode atau teknik terbaru.
●   Bertujuan untuk mengambil keputusan yang paling efektif.
●   Bertujuan untuk mengetahui bagaimana perkembangan suatu masalah.
●   Bertujuan untuk menguji suatu hipotesa.`
        } else if (num === 3) {
            var res = `--INFORMATIF--
            
Yang dimaksud Informatif adalah segala sesuatu yang bersifat memberi informasi atau menerangkan.
(MENGANDUNG INFORMASI)`
        } else if (num === 4) {
            var res = `Laporan hasil observasi disajikan dengan tujuan MENDESKRIPSIKAN SESUATU.
            
Tujuan teks laporan hasil observasi disajikan secara fakta atau sesuai dengan kenyataan adalah karena teks laporan hasil observasi hanya menyampaikan informasi yang diperoleh sebagaimana adanya dan hasil dari laporan tersebut dijadikan dasar dari penelitian lainnya.

Penjelasan:

Teks laporan hasil observasi adalah teks yang disusun dari hasil pengamatan sebagaimana adanya. Teks ini dijadikan sumber atau referensi penelitian lainnya, sehingga harus disajikan sesuai fakta atau sesuai dengan kenyataan`
        } else if (num === 5) {
            var res = `--KALIMAT DEFINISI & DESKRIPSI
            
Pengertian kalimat deskripsi adalah kalimat yang menggunakan verba sebagai deskriptif.

Pengertian kalimat definisi adalah kalimat yang menggunakan verba definitif.

Pembahasan
Kalmat definisi adalah kalimat yang menggunakan verba definitif, seperti adalah dan merupakan

Kalimat deskripsi adalah kalimat yang menggunakan verba sebagai deskriptif, seperti terdiri dari, terbuat dari`
        } else if (num === 6) {
            var res = `--STRUKTUR TEKS EKSPOSISI--

Struktur Teks Eksposisi
Teks eksposisi terdiri dari tiga struktur. Antara lain tesis, argumen, dan penegasan ulang. Berikut penjelasan dari masing-masing struktur.

1. Tesis

Tesis berisi pendapat yang dikemukakan oleh penulis. Tesis ini terletak pada awal paragraf atau sebagai pembuka kalimat yang disampaikan kepada pembaca.

2. Argumen

Argumen berisikan bukti yang merujuk pada fakta dan data yang kuat untuk mendukung pernyataan atau pendapat yang disampaikan dalam tesis. Pada bagian ini, penulis menyampaikan pengembangan dari pendapat yang dikemukakan.

3. Penegasan Ulang

Penegasan ulang adalah bagian akhir dari teks eksposisi atau sering disebut kesimpulan. Bagian ini berisikan tentang penegasan ulang pendapat yang disampaikan sebelumnya.

Baca artikel detikedu, "7 Contoh Teks Eksposisi Beserta Struktur dan Jenisnya" selengkapnya https://www.detik.com/edu/detikpedia/d-5695340/7-contoh-teks-eksposisi-beserta-struktur-dan-jenisnya.

Download Apps Detikcom Sekarang https://apps.detik.com/detik/`
        } else if (num === 7) {
            var res = `--KALIMAT TIDAK EFEKTIF--

Kalimat efektif adalah kalimat yang mampu menyampaikan pesan dari penulisnya dengan baik dan tepat akibat tidak terjadinya kesalahan penulisan, tata bahasa, maupun ejaan.

Kalimat tidak efektif adalah kalimat yang tidak atau kurang mampu menyampaikan pesan dari penulisnya dengan baik dan tepat akibat terjadinya kesalahan penulisan, tata bahasa, maupun ejaan.
`
        } else {
            var res = 'TIDAK ADA (-)'
        }
        show_overlay(res);
    }
}
