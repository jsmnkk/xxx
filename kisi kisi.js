function mtk(num = null) {
    if (num === null) {
        var res = `
SESUAI NOMOR URUT!
1.SPLSV
2.Mencari akar a = 1
3.Mencari akar a tidak sama dengan 1
4.Mencari X1 + X2 & X1 * X2
5.Mencari X1² + X2²
6.Mencari X1³ + X2³1
7.Mencari Diskriminan
8.Menentukan jenis akar 
9.Operasi bilangan bulat 

Penggunaan : mtk(nomor)
`;
        show_overlay(res);
    } else {
        if (num === 1) {
            var res = `--SPLSV--
Contoh:
-2/3X - 1 = 1 <- si A
-2/3X = 1 + 1 
(jika A = positif maka di tambah, jika negatif maka di kurang)
-2/3X = 2/1
(2 = 1+1)
-6x - 2
(Kali silang, 2x1=2 dan 2 x 3X = 6X)
-x = 2/6 = 1/3
(sama sama di bagi 2)
`;
        } else if (num === 2) {
            var res = `--Mencari akar a =1
                                                                                                               
`;
        } else if (num === 3) {
            var res = '';
        } else if (num === 4) {
            var res = `X1 + X2 & X1 * X2
X1 + X2 = -b/a
X1 * X2 = c/a
        `;
        } else if (num === 5) {
            var res = `5.Mencari X1² + X2²

Contoh:
a = 2;b=5;c=-3

X1² + X2² = (X1 + X2)² - 2 * (X1 * X2)

=(-5/2)² - 2 * -3/2
=25/4 + -3/1
(25 = -5²; 4 = 2²)
=(25/4 + 12)/4
(kali silang, 25X1=25; 3X4=12 lalu per 4 = 4 X 1)
=37/4
`;
        } else if (num === 6) {
            var res = `6.Mencari X1³ + X2³

Contoh:
X1³ + X2³ = (X1 + X2)³ - 3 * (X1 * X2)*(X1 + X2)
=(-5/2)³ - 3 * -3/2 * -5/2
=125/8 + 45/4
(125 = -5³; 8 = 2³; 45 = -3*-4*-5;4=2*2)
=500 -360/32
(kali silang)
=-140/32 = -70/16 = -15/8
(di bagi 2 sampai akhir)

`;
        } else if (num === 7) {
            var res = `7.Mencari Diskriminan
Contoh:
a=3
b=-4
c=3

D=b²-4 * a * c
=(5)² - 4 * (-3) * (-1)
=25-12
=13

Sifat:
1.D >= 0 : Akar bilangan riil
2.D > 0 : Akar bilangan riil yang berbeda
3.D = 0 : Akar yang kembar
4.D < 0 = Akar yang tidak riil (imajiner)
`;
        } else {
            var res = 'TIDAK DI TEMUKAN : ' + num;
        }
        show_overlay(res);
    };
};




function ipal(num = null, part = null) {
    if (num === null) {
        var res = `--IPAL--
Sesuai nomor!
1.Kanon
-Kanonisasi
-Kanonisasi PL dan PB
2.Penciptaan
3.Segambar dan serupa
-Spiritual
-Jiwa
-Hati
4.Penolong
5.Kejadian 3:15
-Meremukkan kepala
-Meremukkan tumit
6.Nuh,Abraham,Yakub,Yehuda dan Yusuf
`
    } else {
        if (num === 1) {
            var res = `KANONISASI & KANONISASI PL & PB
1. Istilah dan pengertian Kanon
Kata Yunani” Kanon” berasal dari bahasa semit/Ibrani Yakni “qaneh” (Ayub, 40:21; I Raja-raja 14: 15)
Qaneh (gelagah/ batang papyrus, sejenis tanaman serat/ tebu manis
Gelagah dipakai sebagai tongkat pengukur/ kayu penggaris
Jadi kanon juga bisa disebut sebagai Ukuran/ buluh pengukur
Kanon adalah tolak ukur atau patokan. Kanon juga berarti keputusan berwibawa dari sebuah dewan gereja
Kanonisasi adalah proses dimana kitab-kitab dikumpulkan dan disatukan pada satu titik tertentu dan selanjutnya menyediakan bagi manusia Firman Allah yang tuntas dan sempuna. 
Jadi dengan demikian kanon berarti suatu daftar tetap yang menyatakan bahwa hanya kitab-kitab inilah yang diperhitungkan sebagai kitab suci yang berwibawa.
Alkitab= Bible berasal dari bahasa latin. kata Yunani yang berarti dokumen-dokumen
Alkitab (bahasa Inggris: Bible) adalah sebutan untuk sekumpulan naskah yang dipandang suci dalam Yudaisme dan Kekristenan. Kata "Alkitab" yang digunakan dalam bahasa Indonesia berasal dari bahasa Arab, dan juga digunakan umat Muslim untuk menyebut Al-Qur'an.[1] Alkitab merupakan sekumpulan kitab suci yang ditulis pada waktu yang berlainan, oleh para penulis yang berbeda di lokasi-lokasi yang berbeda. Umat Yahudi dan Kristiani (Kristen) memandang kitab-kitab dalam Alkitab sebagai hasil dari pengilhaman ilahi, dan sebagai catatan otoritatif mengenai hubungan antara Allah dengan manusia. Alkitab dibagi dalam 2 bagian yakni Perjanjian Lama dan Perjanjian Baru
Perjajian Lama adalah bagian pertama dari Alkitab Kristen, yang utamanya berdasarkan pada Alkitab Ibrani, berisikan suatu kumpulan tulisan keagamaan karya bangsa Israel kuno. 
Alkitab berbahasa Latin yang digunakan sebelum Vulgata biasanya disebut Vetus Latina, atau " Alkitab Latin kuno", atau kadang-kadang "Vulgata Latin kuno".
Kitab-kitab suci pertama kali diterjemahkan ke dalam bahasa Yunani antara tahun 280–130 SM, di Aleksandria. Terjemahan-terjemahan Yunani awal ini – konon ditugaskan oleh Ptolemaios II Philadelphos – disebut Septuaginta (artinya "Tujuh puluh"), suatu sebutan yang berasal dari jumlah penerjemah yang diduga terlibat di dalamnya (maka singkatannya "LXX"). Septuaginta ini menjadi dasar dari Perjanjian Lama dalam Gereja Ortodoks Timur.
Akhirnya ditetapkan bahwa Alkitab berisi 66 kitab, yang terdiri dari dua bagian besar, yaitu Perjanjian Lama dan Perjanjian Baru. Perjanjian Lama terdiri dari 39 kitab dan Perjanjian Baru terdiri dari 27 kitab. Teks asli Perjanjian Lama ditulis dalam bahasa Ibrani; sedangkan Perjanjian Baru ditulis dalam bahasa Yunani Koine atau Yunani klasik.
2. Selama proses pembuatannya
· Alkitab ditulis dengan tangan diatas kulit dan papyrus (sejenis tumbuhan yang dapat dibuat sebagai bahan kertas)
· Umumnya dalam bentuk gulungan (Karman ,2007)
· Alkitab yang digunakan sebagian besar orang dibagi atas dua kumpulan, yaitu 
v Perjanjian Lama dan Perjanjian Baru
 Perjanjian lama dituls dalam bahasa ibrani( dengan beberapa dalam bahas Aram)
 Perjanian Baru dalam bahasa Yunani
 Kitab-kitab yang diselidiki, dan dinyatakan melalui syarat ( diterma dan mencapai standar yang seharusnya) serta diakui, telah diilhamkan oleh Allah sendiri
Ada dua (2) pembagian dalam kanon Alkitab yaitu:
· Kanon Perjanjian Lama dan Kanon Perjanjian Baru
Perjanjian lama terdapat 3 (tiga) penjelasan kapan Perjanjian Lama terbentuk yakni
v Zaman Ezra (400 M)
v Masa sinagoge Agung dibawa dorogan Ezra ( aba ke 4 SM)
v Masa konsilipaa abi di Jamnia (90-100M), (Karman, 2007)
3. Kriteria kanonisasi Alkitab Perjajian Lama
1) Ditulis seorang nabi Tuhan yang dinyatakan Alkitab sebagai nabi yang benar, seorang nabi yang memiliki karunia khusus.
2) merupakan kitab yang selalu dibaca pada pertemuan-pertemuan ibadah bangsa Yahudi.
3) sudah terbukti digunakan Tuhan Yesus sebagai referensi dalam khotbah-Nya atau menerimanya sebagai Firman Tuhan (Mat. 5:18; 8:17; 12:39,40; Luk. 4:17-18; 11:29; 24:27,44 dll).
 Perjanjian Lama susunan kitabnya ( terbagi 2 ) yaitu: Kanon Ibrani dan kanon Yunani
Sejak mulannya Perjanjian Lama disusun sesuai dengan kanon Yunani, yang mana kitab tersebut dibagi dalam 4 bagian besar sesuai dengan isinya. 
Kanon Yunani= susunan Alkitab Bahasa Yunani/Perjajian Lama
1. Taurat 
§ Kejadian,Keluaran, Imamat, Bilangan,Ulangan)
2. Sejarah
Dibagi lagi dalam 2 bagian yaitu:
o Sejarah pertama( Yosua, hakim-hakim, rut, 1 Samuel, 2 Samuel, 1 Raja-raja, 2 Raja-raja
o Sejarah kedua ( 1 Tawarikh, 2 Tawarikh, Ezra, Nehemia, ester
3. Sastra (Ayub, Mazmur, Amsl, Penghotbah, kidung Agung)
4. Nubuat (dibagi dalam 2 bagian yakni Nabi besar dan Nabi kecil)
Nabi besar yakni, Yesaya, Yermia, Ratapan, Yehezkiel dan Daniel)
Nabi Kecil yakni, Hosea, Yoel, Amos, Oaja, Yunus, Mikha, Nahum, Habakuk, Zefanya, Hagai, Zakaria, Maleakhi
4. Kriteria Perjanjian Baru
v Ditulis oleh rasul-rasul Tuhan atau yang menjadi saksi mata langsung
v Tidak bertentangan dengan wahyu Allah dalam Perjanjian Lama
v Diterima oleh masyarakat kristen, memiiki sifat-sifat rohaniah, berpusat pada kristus
v Diterima oleh masyarakat kristen, memiiki sifat-sifat rohania, berpusat pada Kristus dan diilhami oleh Roh Kudus
v Cocok dibaca didepan umum
v Bersifat universal
Jika tidak memenuhi syarat ini maka tidak dapat dimasukan ke dalam Alkitab dan diakui sebagai Firman Allah
Sesuai dengan ajaran para rasul
Proses penerimaan kitab sebagai kanon Perjajian Baru (Thiessen, 2003)
§ Pada akhir abad kedua, 20 kitab sudah diterima ( surat Ibrani, 2 abn 3 Yohanes, 2 etus, yudas, Yakobus, dan wahyu yang belum diterma. 
§ Paa abd ke-40 semua kitab diterima dalam kanon peranjian baru khususnya oleh gereja barat
§ Masalah kanon sudah diselesaikan seelah konsili Damasin di Roma padatahun 382 dan konsili kartago ketiga t. 3977
§ Pada tahun 500 seluruh gereja bebatasan Yunani menerima Perjanjian Baru
5. Tahapan pembentukan kanonisasi Perjajian Lama sesuai dengan dengan data yang teredia adalah...
1. Ucapan yang berotoritas
2. Dokumen-dokumen tetulis yang resmi
3. Kumpulan-kumpulan kitab yang berwibawa
Secara tradisional, kitab-kitab suci Yahudi dibagi menjadi tiga bagian besar yang menunjukan perbedaan dalam isi sekaligus memperlihatkan tahap-hap pembentukan kanon
1) kitab Taurat ( ibr.Tora)
2) Kitab Nabi-nabi (Naviim)
3) Kitab-kitab (Ibr. Ketuvim)
6. Tahapan pembentukan kanon Perjanjian Baru
Menurut pegamatan ada tiga ahap dalam pembentukan kanon perjanjian baru yakni:
1) Mula-mula tulisan-tulisan itu dikutip secara tersendiri yang tidakmenjadikannya sebgai bahan perdebatan namun lebih memnetingkan nilaikesaksia meeka
2) Para penulis seperti Irenius dan origenes yangtelibat dalam perdebatan , merasa perlu untuk membela kekasaan mereka, tetapi tidak dalam ranga mencari dukungn keputusan sebuh ereja tertentu
3) Keputusan konsili yang mempertimbankan pandangan para pemimpin dari masa sebelunya serta masa u dan menetapkan suatupemisahan resmi antra tulisan-tlisan kanonik dan apokrifa.
`;
        } else if (num === 2) {
            var res = `2.Penciptaan

Kejadian 1:1–2:4

The Ancient of Days ("Yang Lanjut Usia" karya William Blake, 1794)
Latar belakang
Ada yang memandang bahwa alam semesta yang diciptakan dalam catatan Kejadian 1:1–2:4 tampaknya mempunyai kemiripan dengan Kemah Suci yang dicatat dalam Keluaran 35–40, dan ini merupakan prototipe Bait Allah di Yerusalem, sekaligus sebagai pusat pemujaan Yahweh melalui para imam. Karenanya, dan karena kisah penciptaan di wilayah Timur Tengah lainnya juga mencapai klimaks pada pendirian suatu kuil atau rumah pemujaan bagi ilah-pencipta, Kejadian 1 dapat ditafsirkan sebagai pembangunan alam semesta sebagai rumah Allah, di mana Bait Allah di Yerusalem merupakan pencerminan di bumi.[2]

Penggunaan angka dalam teks kuno sering bersifat numerologis daripada faktual - yaitu, angka-angka itu digunakan karena mempunyai makna simbolis bagi pengarangnya.[3] Angka "tujuh", melambangkan kesempurnaan ilahi, meresap ke dalam Kejadian 1:

ayat 1:1 terdiri dari tujuh (7) kata
ayat 1:2 terdiri dari 14 (= 2 x 7) kata
Kejadian 2:1–3 terdiri dari 35 (= 5 x 7) kata
"Elohim" disebutkan 35 kali
"langit/cakrawala" dan "bumi" masing-masing disebutkan 21 kali
Frasa the phrases "dan jadilah demikian" and "Allah melihat bahwa semuanya itu baik" masing-masing termuat 7 kali.[4]
Hari pertama
Kejadian 1:1-5
1:1   Pada mulanya Allah menciptakan langit dan bumi.
1:2   Bumi belum berbentuk dan kosong; gelap gulita menutupi samudera raya,
dan Roh Allah melayang-layang di atas permukaan air.
1:3   Berfirmanlah Allah: "Jadilah terang." Lalu terang itu jadi.
1:4   Allah melihat bahwa terang itu baik, lalu dipisahkan-Nyalah terang itu dari gelap.
1:5   Dan Allah menamai terang itu siang, dan gelap itu malam.

Jadilah petang dan jadilah pagi, itulah hari pertama.
Catatan hari pertama
Frasa pembuka
Kalimat pembuka pada Kejadian 1:1 umumnya diterjemahkan sebagaimana yang dimuat di atas. Ada sejumlah sarjana yang menganggap bahwa kalimat itu sebenarnya dapat diterjemahkan paling sedikit dalam 3 cara:

sebagai pernyataan bahwa alam semesta mempunyai awal yang absolut ("Pada mulanya Allah menciptakan langit dan bumi");
sebagai pernyataan menggambarkan keadaan dunia ketika Allah mulai mencipta ("Ketika pada mulanya Allah menciptakan langit dan bumi, bumi belum berbentuk dan kosong.");
mirip dengan versi kedua tetapi menganggap seluruh informasi pada Kejadian 1:2 sebagai latar belakang ("etika pada mulanya Allah menciptakan langit dan bumi, bumi belum berbentuk dan kosong... Allah berkata, Jadilah terang!").[5]
Akhir-akhir ini cukup gencar dikemukakan bahwa versi kedua adalah yang sesungguhnya dimaksudkan oleh para pengarang dari golongan "Priestly".

"menciptakan" (bara)
Kata kerja "bara" ("menciptakan") hanya digunakan untuk Allah, (manusia tidak terlibat dalam tindakan bara), dan ini berkaitan dengan penetapan peranan, karena dalam penciptaan manusia pertama sebagai "laki-laki dan perempuan" (yaitu, pengalokasian jenis kelamin). Dengan kata lain, kekuasaan Allah ditunjukkan bukan hanya dengan penciptaan zat, melainkan penetapan nasib.[6]

"langit dan bumi"
Salah satu tafsiran menyatakan bahwa frasa "langit dan bumi" adalah kesatuan yang menunjukkan "segala sesuatu", yaitu "alam semesta". Ini terjadi dalam 3 tingkatn, dunia yang didiami kehidupan berada di tengah, langit di atas dan alam di bawah bumi di bagian bawah, seluruhnya dikelilingi oleh "lautan" air kekacauan (= chaois). Ini dikaitkan dengan mitos Bebel Tiamat.[7] Dalam mitos itu, bumi digambarkan sebagai piringan datar, dikelilingi oleh gunung-gunung dan lautan. Di atasnya terdapat cakrawala, suatu kubah kokoh tembus pandang yang berpijak pada pengunungan, memungkinkan manusia untuk melihat birunya air di atasnya, dengan "jendela-jendela" yang dapat memasukkan hujan, serta memuat matahari, bulan dan bintang-bintang. Air yang di bawah bumi, bersandarkan pada tiang-tiang yang terendam di bawah bumi sebagai Sheol, tempat kediaman orang-orang mati.[8]

"belum berbentuk dan kosong" (tohu wa-bohu)
Kalima pembuka Kejadian 1 dilanjutkan oleh: "(Dan) bumi belum berbentuk dan kosong..." Frasa "belum berbentuk dan kosong" merupakan terjemahan dari frasa Ibrani "tohu wa-bohu", (bahasa Ibrani: תֹהוּ וָבֹהוּ‎), yaitu keadaan "kacau" (=chaos), yang kemudian ditata oleh tindakan penciptaan (bara).[9] Tohu mengandung makna "kekosongan, kesia-siaan"; biasa digunakan untuk menggambarkan padang pasir liar; bohu tidak diketahui pasti maknanya dan diduga dibuat supaya seirama dan menguatkan tohu.[10] Frasa ini juga muncul dalam Yeremia 4:23 di mana nabi Yeremia memperingatkan umat Israel bahwa pemberontakan terhadap Allah akan membawa kembalinya kegelapan dan kekacauan, "seakan-akan bumi belum diciptakan (atau dikembalikan ke keadaan sebelum penciptaan; uncreated)".[11]

"kedalaman" (tehom)
Pembukaan pada Kejadian 1 memuat pernyataan "gelap gulita menutupi samudera raya". Frasa "samudera raya" sebenarnya diterjemahkan dari kata bahasa Ibrani: תְהוֹם‎ (tehôm), yang bermakna "kedalaman". Kegelapan (khō-šeḵ) dan kedalaman (tehom) merupakan dua dari tiga unsur kekacauan (chaos) yang dinyatakan dengan istilah tohu wa-bohu (yang ketiga adalah "bumi yang belum berbentuk"). Dalam mitos Babel "Enuma Elish", istilah "kedalaman" dipersonifikasi sebagai dewi Tiamat, musuh dewa Marduk;[9] di sini sebagai "air purba" yang tidak berbentuk yang melingkupi dunia tempat kehidupan, kemudian dilepaskan pada saat air bah (mitologi), ketika "semua sumber-sumber air di kedalaman memancar ke luar" dari air yang di bawah bumi dan dari "tingkap-tingkap" di langit.[12]

"Roh Allah" (Rûach Elohim)
"Roh" (Rûach) Allah "melayang-layang" (bukan "berjalan-jalan") di atas permukaan "air", sebelum penciptaan terang. Rûach (רוּחַ) mempunyai makna "angin, roh, napas", dan elohim dapat berarti "besar, agung" maupun "allah, ilah". Jadi, ruach elohim dapat bermakna "angin Allah" atau "napas Allah" atau "Roh Allah" atau sekadar "angin topan raksasa" .[13] Dalam Mazmur 18:16 dan bagian Alkitab lain digambarkan bahwa "angin ribut" adalah "napas Allah" dan angin Allah muncul kembali pada kisah "air bah" (Nuh) untuk memulihkan bumi. Konsep "Roh Allah" tidak benar-benar jelas dalam Alkitab Ibrani. Victor Hamilton dalam komentarinya mengenai Kitab Kejadian lebih memilih makna "Roh Allah", tetapi tidak setuju dengan identifikasi istilah ini sebagai "Roh Kudus" pada teologi Kristen.[14]

terang (or)
Hari pertama ditandai dengan penciptaan "terang" (dan diimplikasikan juga penciptaan "waktu"). Tindakan pertama Allah adalah penciptaan "terang" yang utuh. Dengan demikian kegelapan dan terang dipisahkan menjadi "malam" dan "siang". Urutannya ("petang" sebelum "pagi") menyatakan bahwa ini merupakan "hari liturgi". Allah mengucapkan perintah dan menamai unsur-unsur dunia pada saat Ia menciptakan mereka. Pada budaya Timur Dekat kuno, tindakan penamaan juga dikaitkan dengan tindakan penciptaan. Pada sastra Mesir kuno, allah pencipta memberi nama segala sesuatu. "Enuma Elish" dimulai pada saat segala sesuatu belum ada yang dberi nama.[15] Penciptaan Allah dengan kata (=firman) juga menyiratkan perbandingan dengan seorang raja, yang cukup bertitah untuk menjalankan tindakan.[16]

Hari kedua
Kejadian 1:6-8
1:6   Berfirmanlah Allah: "Jadilah cakrawala di tengah segala air untuk memisahkan air dari air."
1:7   Maka Allah menjadikan cakrawala dan Ia memisahkan air yang ada di bawah cakrawala itu dari air yang ada di atasnya.
Dan jadilah demikian.
1:8   Lalu Allah menamai cakrawala itu langit.

Jadilah petang dan jadilah pagi, itulah hari kedua.
Catatan hari kedua
"cakrawala" (rāqîa)
Rāqîa, atau cakrawala (= bentangan), diturunkan dari akar kata rāqa, suatu kata kerja yang dipakai untuk menggambarkan tindakan "memukuli bongkahan logam sampai menjadi lempengan tipis".[17] Cakrawala diciptakan pada hari kedua dan kemudian diisi dengan benda-benda langit pada hari keempat. Ditafsirkan sebagai kubah solid yang memisahkan dunia di bawah dengan langit serta air yang di atas. Hal ini mirip dengan kepercayaan Mesir kuno dan Mesopotamia pada zaman dahulu.[18] Dalam Kejadian 1:17 bintang-bintang ditempatkan pada raqia. Dalam mitos Babel, langit terbuat dari berbagai batu permata (bandingkan dengan Keluaran 24:10 di mana para penatua Israel "melihat Allah Israel; kaki-Nya berjejak pada sesuatu yang buatannya seperti lantai dari batu nilam dan yang terangnya seperti langit yang cerah"), dengan bintang-bintang dipahat pada permukaannya.[19]

Hari ketiga
Kejadian 1:7-13
1:9   Berfirmanlah Allah: "Hendaklah segala air yang di bawah langit berkumpul pada satu tempat, sehingga kelihatan yang kering."
Dan jadilah demikian.
1:10   Lalu Allah menamai yang kering itu darat, dan kumpulan air itu dinamai-Nya laut.
Allah melihat bahwa semuanya itu baik.
1:11   Berfirmanlah Allah: "Hendaklah tanah menumbuhkan tunas-tunas muda, tumbuh-tumbuhan yang berbiji, segala jenis pohon buah-buahan yang menghasilkan buah yang berbiji, supaya ada tumbuh-tumbuhan di bumi."
Dan jadilah demikian.
1:12   Tanah itu menumbuhkan tunas-tunas muda, segala jenis tumbuh-tumbuhan yang berbiji dan segala jenis pohon-pohonan yang menghasilkan buah yang berbiji.
Allah melihat bahwa semuanya itu baik.
1:13   Jadilah petang dan jadilah pagi, itulah hari ketiga.

Catatan hari ketiga
Pada hari ketiga, air surut dan membuat suatu lingkaran lautan mengelilingi satu benua tanah kering.[20] Pada akhir hari ketiga, Allah telah menciptakan lingkungan yang merupakan landasan penciptaan selanjutnya yaitu terang, langit, laut dan bumi.[21] Tiga tahapan alam semesta berikutnya diisi menurut urutan penciptaan yaitu: langit, laut dan bumi.

Menurut catatan ini tidak digunakan kata "menciptakan" atau "membuat" bagi tumbuh-tumbuhan, melainkan hanya ada perintah bagi tanah untuk menumbuhkan mereka. Ada tafsiran teologi yang melihat bahwa Allah telah memberikan kemampuan bagi tanah (atau bumi) yang asalnya gersang, untuk menumbuhkan tumbuh-tumbuhan dan setelah diperintahkan oleh Allah, kemampuan itu dinyatakan.[22]

Hari keempat
Kejadian 1:14-19
1:14   Berfirmanlah Allah:

"Jadilah benda-benda penerang pada cakrawala untuk memisahkan siang dari malam.
Biarlah benda-benda penerang itu menjadi tanda yang menunjukkan masa-masa yang tetap dan hari-hari dan tahun-tahun,
1:15   dan sebagai penerang pada cakrawala biarlah benda-benda itu menerangi bumi."

Dan jadilah demikian.
1:16   Maka Allah menjadikan kedua benda penerang yang besar itu, yakni yang lebih besar untuk menguasai siang dan yang lebih kecil untuk menguasai malam, dan menjadikan juga bintang-bintang.
1:17   Allah menaruh semuanya itu di cakrawala untuk menerangi bumi,
1:18   dan untuk menguasai siang dan malam, dan untuk memisahkan terang dari gelap.

Allah melihat bahwa semuanya itu baik.
1:19   Jadilah petang dan jadilah pagi, itulah hari keempat.

Catatan hari keempat
"menguasai" (memshalah)
Pada hari keempat istilah "menguasai" (memshalah) diperkenalkan: benda-benda langit itu akan "menguasai" siang dan malam, serta menjadi tanda yang menunjukkan masa-masa yang tetap dan hari-hari dan tahun-tahun. Hal ini dianggap sesuatu yang penting bagi para pengarang dari golongan "Priestly", karena hari-hari raya keagamaan diselenggarakan menurut siklus matahari dan bulan.[23] Pada hari keenam, manusia kemudian diciptakan untuk menguasai seluruh ciptaan sebagai wakil Allah.

"Benda-benda penerang" (mə-’ō-rōṯ)
Allah menempatkan "benda-benda penerang" (mə-’ō-rōṯ; bentuk tunggal ma-or) di cakrawala untuk "menguasai" siang dan malam.[24] Secara khusus, Allah menciptakan "benda penerang yang lebih besar," "benda penerang yang lebih kecil," dan bintang-bintang. Menurut Victor Hamilton, kebanyakan sarjana setuju bahwa penggunaan pilihan kata "benda penerang yang lebih besar" (bahasa Inggris: greater light) and "benda penerang yang lebih kecil" (bahasa Inggris: lesser light), daripada istilah yang lebih eksplisit "matahari" dan "bulan", merupakan suatu retorik anti-mitologi yang dimaksudkan untuk melawan kepercayaan yang meluas zaman dahulu bahwa matahari dan bulan sendiri adalah dewa-dewa.[25]

Hari kelima
Kejadian 1:20-23
1:20   Berfirmanlah Allah:

"Hendaklah dalam air berkeriapan makhluk yang hidup,
dan hendaklah burung beterbangan di atas bumi melintasi cakrawala."
1:21   Maka Allah menciptakan binatang-binatang laut yang besar

dan segala jenis makhluk hidup yang bergerak, yang berkeriapan dalam air,
dan segala jenis burung yang bersayap.
Allah melihat bahwa semuanya itu baik.
1:22   Lalu Allah memberkati semuanya itu, firman-Nya:

"Berkembangbiaklah dan bertambah banyaklah serta penuhilah air dalam laut,
dan hendaklah burung-burung di bumi bertambah banyak."
1:23   Jadilah petang dan jadilah pagi, itulah hari kelima.

Catatan hari kelima
"binatang laut" (tanin)
Pada mitos Mesir dan Mesopotamia kuno dikisahkan bahwa allah pencipta harus berperang melawan "monster-monster laut" sebelum dapat membuat langit dan bumi. Sebaliknya pada Kejadian 1:21, kata tanin, kadang diterjemahkan sebagai "binatang laut" atau "makhluk raksasa", dianggap paralel dengan binatang-binatang besar Rahab dan Lewiatan pada Mazmur 74:13, dan Yesaya 27:1 serta Yesaya 51:9, tetapi tidak ada tanda-tanda adanya peperangan, dan tanin adalah sekadar makhluk yang diciptakan oleh Allah.[26]

Hari keenam
Kejadian 1:24-31; 2:1
1:24   Berfirmanlah Allah: "Hendaklah bumi mengeluarkan segala jenis makhluk yang hidup, ternak dan binatang melata dan segala jenis binatang liar."

Dan jadilah demikian.
1:25   Allah menjadikan segala jenis binatang liar dan segala jenis ternak dan segala jenis binatang melata di muka bumi.

Allah melihat bahwa semuanya itu baik.
1:26   Berfirmanlah Allah:

"Baiklah Kita menjadikan manusia menurut gambar dan rupa Kita,
supaya mereka berkuasa atas ikan-ikan di laut dan burung-burung di udara dan atas ternak dan atas seluruh bumi dan atas segala binatang melata yang merayap di bumi."
1:27   Maka Allah menciptakan manusia itu menurut gambar-Nya,

menurut gambar Allah diciptakan-Nya dia; laki-laki dan perempuan diciptakan-Nya mereka.
1:28   Allah memberkati mereka, lalu Allah berfirman kepada mereka:

"Beranakcuculah dan bertambah banyak;
penuhilah bumi dan taklukkanlah itu,
berkuasalah atas ikan-ikan di laut dan burung-burung di udara
dan atas segala binatang yang merayap di bumi."
1:29   Berfirmanlah Allah:

Lihatlah, Aku memberikan kepadamu segala tumbuh-tumbuhan yang berbiji di seluruh bumi dan segala pohon-pohonan yang buahnya berbiji; itulah akan menjadi makananmu.
1:30   Tetapi kepada segala binatang di bumi dan segala burung di udara dan segala yang merayap di bumi, yang bernyawa, Kuberikan segala tumbuh-tumbuhan hijau menjadi makanannya."

Dan jadilah demikian.
1:31   Maka Allah melihat segala yang dijadikan-Nya itu, sungguh amat baik.

Jadilah petang dan jadilah pagi, itulah hari keenam.
2:1   Demikianlah diselesaikan langit dan bumi dan segala isinya.

Catatan hari keenam
"jenis (min)
Frasa "segala jenis" dalam istilah Ibrani sebenarnya bermakna "menurut jenisnya" (lə-mî-nāh, bahasa Inggris: according to (one's) kind)", dimana huruf "lamed" merupakan kata depan yang berarti "menurut", dan kata minah adalah bentuk jamak dari min yang berarti "jenis". Tampaknya ini kemudian menjadi dasar hukum di dalam Taurat yang menekankan kekudusan melalui pemisahan.[22]

"manusia" (adam)
Pada Kejadian 1:26 Allah berfirman "Baiklah Kita menjadikan manusia", kata "manusia" di sini dalam bahasa Ibrani adalah adam; dalam bentuk kata benda generik, "umat manusia", dan tidak menyiratkan bahwa yang diciptakan adalah seorang laki-laki. Setelah muncul pertama kali, selanjutnya kata ini ditulis sebagai ha-adam ("manusia itu"; di mana huruf 'ha' adalah kata sandang). Ini dijelaskan juga pada Kejadian 1:27 di mana tertulis "Allah menciptakan manusia itu menurut gambar-[Nya], menurut gambar Allah diciptakan-Nya dia; laki-laki dan perempuan diciptakan-Nya mereka", kata "manusia itu" juga tidak bermakna khusus sebagai "laki-laki".[27]

"menurut gambar" (bə-tse-lem)
Manusia diciptakan (bara) menurut gambar Allah (bə-tse-lem Elohim; di mana "bə" adalah kata depan "menurut", "tselem" berarti "gambar"). Pada bagian awal ayat 27 tertulis bə-ṣal-mōw yang berati "menurut gambarnya".

Frasa ini dapat ditafsirkan bermacam-macam, termasuk:

Mempunyai kualitas spiritual Allah seperti intelek, kehendak, dan sebagainya;
Mempunyai bentuk fisik Allah;
Kombinasi dua hal di atas;
Merupakan perwujudan Allah di dunia dan dapat menjalin hubungan dengan-Nya;
Merupakan wakil Allah di bumi.[28]
"Baiklah Kita menjadikan" (na-‘ă-śeh)
Catatan pada Kejadian 1:26 bahwa Allah berfirman "Baiklah Kita menjadikan manusia" menimbulkan sejumlah teori, di mana dua yang paling menonjol adalah "Kita" di sini adalah kata ganti jamak keagungan untuk raja-raja (majestic plural),[29] atau mencerminkan suatu "dewan ilahi" di mana Allah bertahta sebagai raja dan mengusulkan penciptaan manusia kepada para ilahi yang lebih rendah kedudukannya.[30]

tumbuhan sebagai makanan
Pada Kejadian 1:29-30 Allah berkata kepada binatang dan manusia bahwa Ia memberikan kepada manusia segala tumbuh-tumbuhan yang berbiji di seluruh bumi dan segala pohon-pohonan yang buahnya berbiji sebagai makanan, serta kepada segala binatang di bumi dan segala burung di udara dan segala yang merayap di bumi, yang bernyawa, diberikan segala tumbuh-tumbuhan hijau menjadi makanannya. – Jadi disiratkan di sini bahwa pada waktu penciptaan, semua binatang dan manusia adalah vegetarian. Hanya kemudian, setelah air bah, manusia diizinkan untuk makan daging. Ada anggapan bahwa pengarang golongan "Priestly" tampaknya memandang ke masa lampau yang ideal di mana manusia hidup dalam damai di antara mereka sendiri dan dengan dunia binatang, dan hal ini dapat dicapai kembali melalui kehidupan pengorbanan dalam harmoni bersama Allah.[31]

"sungguh amat baik" (ṭōḇ mə-’ōḏ)
Setelah selesai, "Allah melihat segala yang dijadikan-Nya itu, sungguh amat baik." (Kejadian 1:31). Ini menyiratkan bahwa apa yang ada sebelum Penciptaan ("tohu wa-bohu," "kegelapan," "tehom") tidaklah "amat baik".Israel Knohl menyampaikan hipotesis bahwa sumber "Priestly" memuat dikotomi ini untuk menjelaskan masalah kejahatan.[32]

Hari ketujuh
Kejadian 2:2-4
2:2   Ketika Allah pada hari ketujuh telah menyelesaikan pekerjaan yang dibuat-Nya itu,

berhentilah Ia pada hari ketujuh dari segala pekerjaan yang telah dibuat-Nya itu.
2:3   Lalu Allah memberkati hari ketujuh itu dan menguduskannya,

karena pada hari itulah Ia berhenti dari segala pekerjaan penciptaan yang telah dibuat-Nya itu.
2:4(a)   Demikianlah riwayat langit dan bumi pada waktu diciptakan.

Catatan hari ketujuh
Penciptaan diikuti oleh istirahat atau perhentian. Pada sastra Timur Dekat kuno, istirahat ilahi diperoleh dalam kuil pemujaan sebagai hasil munculnya tatanan (order) di atas kekacauan (chaos). Istirahat dapat dipandang sebagai suatu "pelepasan" (disengagement), setelah pekerjaan penciptaan sudah selesai, tetapi juga suatu "pengikatan" (engagement), karena Allah sekarang hadir dalam bait-Nya untuk memelihara suatu alam semesta yang kokoh dan tertata.[33]

Kejadian 2:4-25

"Penciptaan dalam tujuh hari" (dari "1493 Nuremberg Chronicle")
Penciptaan laki-laki
Kejadian 2:4-7
2:4(b)   Ketika TUHAN Allah menjadikan bumi dan langit, --
2:5   belum ada semak apapun di bumi, belum timbul tumbuh-tumbuhan apapun di padang, sebab TUHAN Allah belum menurunkan hujan ke bumi, dan belum ada orang untuk mengusahakan tanah itu;
2:6   tetapi ada kabut naik ke atas dari bumi dan membasahi seluruh permukaan bumi itu--
2:7   ketika itulah TUHAN Allah membentuk manusia itu dari debu tanah dan menghembuskan nafas hidup ke dalam hidungnya; demikianlah manusia itu menjadi makhluk yang hidup.

Catatan penciptaan laki-laki
"membentuk" (yatsar)
Dalam Kejadian 1 kata khas untuk tindakan Allah adalah bara, "menciptakan", termasuk dalam hal penciptaan manusia (ayat 26-27), tetapi dalam Kejadian 2 kata yang dipakai dalam kaitan dengan manusia pertama adalah "membentuk" (yatsar), yaitu kata yang digunakan dalam konteks seorang pembuat periuk yang membuat periuk dari tanah liat.[34]

"nafas hidup" (niš-maṯ khay-yîm)
Allah menghembuskan nafas-Nya, "nafas hidup" (niš-maṯ khay-yîm), ke dalam "tanah liat" (adamah) itu sehingga menjadi "makhluk yang hidup" (nefesh hayah). "Nefesh" adalah suatu kata yang berarti "kehidupan", "vitalitas", "kepribadian yang hidup". Manusia (adam) sama-sama menjadi nefesh dengan semua makhluk, tetapi teks ini mencatat bahwa pemberian kehidupan ini hanya dilakukan Allah untuk manusia.[35]

Penciptaan taman Eden
Kejadian 2:8-17
2:8   Selanjutnya TUHAN Allah membuat taman di Eden, di sebelah timur;

disitulah ditempatkan-Nya manusia yang dibentuk-Nya itu.
2:9   Lalu TUHAN Allah menumbuhkan berbagai-bagai pohon dari bumi,

yang menarik dan yang baik untuk dimakan buahnya;
dan pohon kehidupan di tengah-tengah taman itu,
serta pohon pengetahuan tentang yang baik dan yang jahat.
2:10   Ada suatu sungai mengalir dari Eden untuk membasahi taman itu,

dan dari situ sungai itu terbagi menjadi empat cabang.
2:11   Yang pertama, namanya Pison,

yakni yang mengalir mengelilingi seluruh tanah Hawila, tempat emas ada.
2:12   Dan emas dari negeri itu baik; di sana ada damar bedolah dan batu krisopras.
2:13   Nama sungai yang kedua ialah Gihon,

yakni yang mengalir mengelilingi seluruh tanah Kush.
2:14   Nama sungai yang ketiga ialah Tigris,

yakni yang mengalir di sebelah timur Asyur. Dan sungai yang keempat ialah Efrat.
2:15   TUHAN Allah mengambil manusia itu

dan menempatkannya dalam taman Eden
untuk mengusahakan dan memelihara taman itu.
2:16   Lalu TUHAN Allah memberi perintah ini kepada manusia:

"Semua pohon dalam taman ini boleh kaumakan buahnya dengan bebas,
2:17   tetapi pohon pengetahuan tentang yang baik dan yang jahat itu, janganlah kaumakan buahnya,

sebab pada hari engkau memakannya, pastilah engkau mati."
Catatan penciptaan taman Eden
"Eden", di mana Allah menempatkan Taman Eden, diturunkan dari akar kata yang berarti "kesuburan". Manusia pertama ditempatkan untuk bekerja di taman ajaib Allah yang subur.[36]

"Pohon kehidupan" merupakan motif yang juga ada pada mitos Mesopotamia. Dalam Epos Gilgames sang pahlawan diberi sebuah tumbuhan yang bernama "orang menjadi muda pada usia tua", tetapi seekor ular mencuri tumbuhan itu daripadanya.[37]

Penciptaan perempuan
Kejadian 2:18-25
2:18   TUHAN Allah berfirman:

"Tidak baik, kalau manusia itu seorang diri saja.
Aku akan menjadikan penolong baginya, yang sepadan dengan dia."
2:19   Lalu TUHAN Allah membentuk dari tanah segala binatang hutan dan segala burung di udara.

Dibawa-Nyalah semuanya kepada manusia itu untuk melihat, bagaimana ia menamainya;
dan seperti nama yang diberikan manusia itu kepada tiap-tiap makhluk yang hidup,
demikianlah nanti nama makhluk itu.
2:20   Manusia itu memberi nama kepada segala ternak, kepada burung-burung di udara dan kepada segala binatang hutan,

tetapi baginya sendiri ia tidak menjumpai penolong yang sepadan dengan dia.
2:21   Lalu TUHAN Allah membuat manusia itu tidur nyenyak;

ketika ia tidur, TUHAN Allah mengambil salah satu rusuk daripadanya,
lalu menutup tempat itu dengan daging.
2:22   Dan dari rusuk yang diambil TUHAN Allah dari manusia itu,

dibangun-Nyalah seorang perempuan,
lalu dibawa-Nya kepada manusia itu.
2:23   Lalu berkatalah manusia itu:

"Inilah dia, tulang dari tulangku dan daging dari dagingku.
Ia akan dinamai perempuan, sebab ia diambil dari laki-laki."
2:24   Sebab itu seorang laki-laki akan meninggalkan ayahnya dan ibunya

dan bersatu dengan isterinya,
sehingga keduanya menjadi satu daging.
2:25   Mereka keduanya telanjang, manusia dan isterinya itu,

tetapi mereka tidak merasa malu.
Catatan penciptaan perempuan
Perempuan pertama itu dinamai ishah (= "perempuan, wanita") dengan penjelasan bahwa ia diambil dari ish (= "laki-laki"). Tradisi eksegetika yang bertahan lama menafsirkan bahwa penggunaan rusuk dari sisi seorang laki-laki menekankan bahwa laki-laki dan perempuan mempunyai derajat yang sama, karena perempuan diciptakan dari bahan yang sama dengan laki-laki, dan diberi kehidupan dengan cara yang sama dengan laki-laki.[38] Sesungguhnya kata yang diterjemahkan sebagai "rusuk" dapat pula diterjemahkan sebagai "sisi", "kamar" atau "tiang penyangga".[39]

Di kemudian hari, setelah kisah taman Eden berakhir, perempuan itu mendapat nama "Hawa" (Hawwah), yang dalam bahasa Ibrani berarti "hidup", dari akar kata yang juga berarti "ular".[40]`
        } else if (num === 3) {
            var res = `SEGAMBAR & SERUPA


Pandangan yang benar mengenai siapa manusia tertulis dalam kitab Kejadian 1:26-27. Manusia diciptakan menurut gambar dan rupa Allah. Bila dipertanyakan: Dalam hal mana manusia segambar dengan Allah? Pertanyaan ini sebenarnya sukar untuk dijawab. Tetapi segambar disini pasti lebih menunjuk kepada unsur rohaniah atau batiniahnya, sebab Allah adalah Roh (Yoh 4:24). Tetapi bila dipersoalkan bentuk apakah yang sering ditampilkan Tuhan di Kerajaan Sorga atau dimanapun, maka jawaban yang paling logis adalah bentuk manusia seperti kita ini. Itulah sebabnya Tuhan memilih bentuk fisik seperti ini sebagai bentuk yang paling sempurna (Kej 1:31).
Kata-kata yang digunakan untuk gambar dan rupa didalam teks asli Alkitab yaitu dalam bahasa Ibrani adalah tselem dan demuth. Tselem hendak menunjuk gambar dalam arti unsur-unsur dasar yang dimiliki Allah juga dimiliki manusia yaitu pikiran, perasaan, kehendak, kekekalan dan hakekat kerja. Adapun Demuth adalah keserupaan yang menunjuk kepada kualitas atas unsur-unsur tersebut. Keserupaan dengan Allah yang dimiliki manusia bukan sesuatu yang statis tetapi bisa progresif.
Banyak penjelasan para theolog mengenai dua kata tersebut. Tetapi pada umumnya kata tselem dan demuth diartikan tunggal (bersinonim), bahwa manusia diciptakan segambar dengan Allah (Ing, In His own image. Latin, Imago Dei similitudo).
Segambar dengan Allah diartikan sederhana sebagai “mirip seperti Tuhan sendiri”. Gambar Allah atas manusia inilah yang memberi nilai pada manusia (The image of God is what makes man). Gambar Allah merupakan sesuatu yang interen didalam diri manusia, sesuatu yang tidak dapat dilepaskan dari diri manusia. Itulah sebabnya walaupun manusia sudah jatuh dalam dosa, tidak dinyatakan bahwa gambar Allah (tselem)itu tidak hilang sama sekali (Kej 9:6; Yak 3:9). Pengertian ini penting, sebab dalam proses keselamatan, gambar Allah yang rusak ini akan dipulihkan kembali (restituio imaginis Dei – Pemulihan gambar Allah).
Di dalam diri manusia terdapat unsur-unsur yang juga ada di dalam diri Allah, tentu dalam diri Allah skalanya sempurna. Manusia memiliki kecerdasan (rasio) atau intelektual. Hal ini memampukan manusia rasionalisasi, berpikir, berlogika, menganalisa dan lain sebagainya. Oleh karena keberadaan (eksisteni) inilah maka para penganut teori evolusi menyatakan bahwa manusia adalah binatang menyusui yang cerdas, dalam hal ini mereka hanya memandang dari satu sisi saja. Pikiran harus digunakan semaksimal mungkin untuk mengenal Tuhan dan mengelola hasil karya-Nya.
Manusia memiliki perasaan dan emosi. Hal inilah yang membuat manusia dapat memiliki rasa sayang, benci, cemburu, cinta, marah, dan lain-lain. Perasaan inilah yang membuat manusia dapat berinteraksi atau hubungan timbal balik dengan Tuhan dan sesama dalam satu suasana hubungan yang saling  mempengaruhi.
Manusia diciptakan dari apa yang tidak ada menjadi ada, baik bahan maupun idenya. Kata ini artinya menciptakan tanpa bahan. Dalam bahasa Ibrani salah satu kata untuk diciptakan, yang digunakan dalam kitab Kejadian adalah”bara”. Manusia diciptakan dari apa yang tidak ada (Latin, Creatio ex nihilo).
Manusia diciptakan dengan cara yang sangat unik, tidak seperti ciptaan-Nya yang lain. Manusia diciptakan dengan tangan Tuhan sendiri (Kej 2:7). Kata menciptakan atau membentuk dalam Kejadian 2:7 adalah “yatser “(Ibr), yang mengandung pengertian aktivitas yang kreatif. Allah membentuk yang juga berarti mengukir (to carve). Didalam kata yatser mengandung unsur seni. Allah menghembuskan nafas ke lubang hidung manusia, sehingga manusia menjadi makhluk hidup (nismat chayim)
Bila seseorang sadar bahwa ia adalah hasil karya Tuhan maka ia akan cenderung mengabdi kepada Tuhan. Sama seperti seorang anak yang sadar bahwa ia menjadi besar dan berprestasi karena orang tua, maka ia akan cenderung mengabdi kepada orang tua. Manusia akhir jaman tidak mau tahu bahwa langit dan bumi diciptakan oleh Tuhan termasuk manusia didalamnya (2 Pet 3:5). Kelompok manusia seperti itu pasti hidup dalam pemberontakan kepada Tuhan. Kesadaran bahwa manusia adalah makhluk ciptaan mendorong seseorang membangun terus menerus hubungan yang proporsional atau yang benar dengan Tuhan sebagai Pencipta. Hal ini dapat menghindarkan praktek memutarbalikkan hirarki (urut-urutan prioritas hidup). Urutan pertama dalam hidup adalah Tuhan, bukan materi atau sesuatu yang lain. Memang seharusnya segala sesuatu yang dilakukan harus bagi Tuhan, sebab segala sesuatu dari Dia, oleh Dia dan bagi Dia (Rom 11:36; 1 Kor 10:31).
Manusia tidak berhak hidup untuk dirinya sendiri, manusia harus hidup hanya bagi Dia yang menciptakannya. Bila tidak demikian berarti suatu pemberontakan terhadap Penciptanya. Pendewasaan rohani harus menggiring umat kepada kesadaran ini. Pada tingkat kedewasaan tertentu kita akan memiliki pengakuan demikian: Allah ada bukan untukku, tetapi aku ada untuk Tuhan .
`
        } else if (num === 4) {
            var res = `PENOLONG

Dalam Kejadian 2:18, dinyatakan bahwa TUHAN Allah berfirman: “Tidak baik, kalau manusia itu seorang diri saja. Aku akan menjadikan penolong baginya, yang sepadan dengan dia.”
Apakah arti penolong di sini? Penolong menunjukkan bahwa suami membutuhkan bahkan “bergantung” pada dukungan dan pertolongan istri. Eit, jangan salah mengerti dulu, bukan berarti bahwa seolah-olah suami harus berada di “bawah ketiak” sang istri. Karena firman Tuhan juga berkata “laki-laki tidak diciptakan untuk perempuan, tetapi perempuan untuk laki-laki” (1Kor. 11:9). Namun ini juga tidak menunjukkan bahwa laki-laki lebih superior atau lebih tinggi daripada perempuan. Allah menciptakan perempuan menjadi seorang penolong yang “sepadan” (literal = koresponden kepada) bagi laki-laki. Allah mendesain laki-laki membutuhkan perempuan dan perempuan membutuhkan laki-laki (lihat 1Kor.11:11). Kedua-duanya adalah manusia yang equal dan juga memiliki sekaligus peranan berbeda untuk sama-sama menggenapi panggilan Allah dalam hidup mereka sebagai pasangan.
Allah tidak menciptakan Hawa dari debu. Allah menciptakan Hawa dari tulang rusuk Adam. Mengapa? Ini untuk menunjukkan kepada Adam bahwa istrinya adalah bagian dari dia, equal dengan dia, bukan ciptaan yang lebih rendah. Seorang laki-laki harus mengasihi istrinya seperti dirinya sendiri (Ef. 5:28-29). Perempuan tidak diambil dari kepala Adam sehingga dapat memerintah atas laki-laki, tidak juga dari kaki sehingga dia dapat direndahkan oleh laki-laki, tetapi diambil dari rusuknya sehingga dia dapat melindunginya dan menjaganya selalu dekat di hatinya.
Dengan tidak menciptakan perempuan secara bersamaan dengan laki-laki, Allah membuat Adam menjadi kepala, menjadi yang lebih dahulu, menjadi yang aktif merasa memerlukan istri. Adam tidak menemukan pasangan yang sepadan di dalam dunia ini, karena tidak ada manusia lain, dan Adam mengetahui, bahwa binatang tidaklah sepadan dengannya. Ketika Hawa dibawa ke hadapan Adam, Adam langsung menyadari bahwa Hawa adalah bagian darinya dan menamainya “perempuan” karena diambil dari laki-laki. Perempuan (Ibr: ishshah), diambil dari laki (ibr: ish), merupakan suatu anugerah yang sangat elok bagi kebutuhan Adam yang terdalam. Jadi seperti apakah seharusnya pasangan hidup kita? Sudah jelas dia adalah bagian dari hidup kita yang equal: bersama-sama saling menunjang, saling bahu membahu hidup menjalankan panggilan Tuhan secara bersama.
Menemukan pasangan yang sepadan hanya bermodalkan romantic love, yaitu jatuh cinta pada pandangan pertama, tidaklah menjadi satu acuan bahwa dia adalah pasangan hidup kita. Hanya sekadar mengandalkan falling in love yang lebih banyak bermain di romantic love dan bukan berlandaskan kebenaran, tidak membawa kita memiliki pasangan hidup yang sepadan.
Ishak dalam menemukan pasangan yang sepadan, dia tunduk kepada kebenaran yang diajarkan oleh ayahnya Abraham. Sesuai dengan pesan ayahnya, Ishak menikah dengan perempuan yang berasal dari keluarganya. Perhatikan bahwa Ishak menikah dengan Ribka bukan karena cinta pada pandangan pertama. Ribka dibawa ke Ishak oleh hamba Abraham yang diminta kembali ke negeri Abraham untuk menemukan seorang gadis yang pantas untuk Ishak. “Berkatalah Abraham kepada hambanya yang paling tua dalam rumahnya, yang menjadi kuasa atas segala kepunyaannya, katanya: Baiklah letakkan tanganmu di bawah pangkal pahaku, supaya aku mengambil sumpahmu demi TUHAN, Allah yang empunya langit dan yang empunya bumi, bahwa engkau tidak akan mengambil untuk anakku seorang istri dari antara perempuan Kanaan yang di antaranya aku diam. Tetapi engkau harus pergi ke negeriku dan kepada sanak saudaraku untuk mengambil seorang istri bagi Ishak, anakku” (Kejadian 24:2-4).`
        } else if (num === 5) {
            var res = `KEJADIAN 3:15

[Berfirmanlah TUHAN Allah kepada ular itu:] "Aku akan mengadakan permusuhan antara engkau dan perempuan ini, antara keturunanmu dan keturunannya; keturunannya akan meremukkan kepalamu, dan engkau akan meremukkan tumitnya.
`
        } else if (num === 6) {
            var res = `Nuh, Abraham, Yakub, Yehuda dan Yusuh

-----NUH-------
Nuh adalah anak laki-laki Lamekh, yang dilahirkan pada ketika Lamekh berumur 182 tahun.[11] Dia dilahirkan 1.056 tahun setelah Adam.[12] Dari 10 generasi setelah Adam, Nuh adalah orang ketiga yang mempunyai umur terpanjang, sampai 950 tahun.[13] Namanya juga tercatat dalam silsilah Yesus di Lukas 3:36.
Nuh digambarkan sbg orang yang mempunyai di antara orang-orang lain yang hidup di seratus tahunnya. Peristiwa 6:8 mencatat, "Tetapi Nuh mendapat kasih karunia di mata Tuhan". Pada ketika itu, manusia hidup bergelimang dosa sehingga Allah memutuskan sbg menjatuhkan hukuman dengan bersabda "Diri sendiri hendak memusnahkan mereka bersama-sama dengan bumi" [14]. Hendak tetapi, Allah tidak menghancurkan segala-galanya. Dia memerintahkan Nuh sbg mendirikan suatu bahtera akbar sbg menyelamatkan beberapa makhluk ciptaan-Nya.
Setelah bahtera itu habis, Kitab Peristiwa menggambarkan bahwa air merendam bumi selama 150 hari lamanya dan setelah itu air mulai surut. Nuh menunggu sampai bumi benar-benar kering sebelum membuka pintu bahtera. Nuh kemudian keluar bersama keluarga dan semua binatang yang mempunyai di dalam bahtera tersebut.
Setelah Nuh diselamatkan, Allah menyelenggarakan perjanjian dengan Nuh dan memberkatinya [15]. Inilah perjanjian yang pertama dikenal dan bersifat universal karena mencakup seluruh umat manusia. Di kemudian hari, Allah menyelenggarakan perjanjian pula dengan Abraham, tetapi perjanjian itu diasumsikan bersifat lebih khusus.

Etimologi
Nama Nuh berasal dari Ibrani נֹחַ, נוֹחַ(Nōăḥ), yang berfaedah "hinggap", "menentramkan", "berhenti", atau "istirahat" (2 Raja-raja 2:15; Ratapan 5:5; Ulangan 5:14). Guna nama Nuh berlandaskan asal kata tersebut adalah "sabat", "istirahat", dan "penghiburan". [12]

Keluarga
Alkitab hanya mencatat Nuh mempunyai tiga orang anak, Sem, Ham dan Yafet yang dilahirkan setelah Nuh berumur 500 tahun[16], sebelum air bah terjadi. Ketika Sem berusia 100 tahun, dua tahun setelah air bah, dia dikaruniai Arpakhsad[17]. Oleh karenanya Sem hanya berusia 98 ketika banjir datang. Ham dituturkan sbg yang termuda [18].
Nama istri Nuh tidak dinamakan dalam Alkitab, menurut Kitab Yobel (termasuk dalam kanon Gereja Ortodoks Ethiopia) namanya adalah Emzara.
Tradisi Yahudi menulis nama istri Nuh adalah Naama (atau Naamah), putri Lamekh dan saudara perempuan Tubal-Kain.[19] Demikian pula Komentator Alkitab Ibrani, Rashi, yang hidup pada seratus tahun ke-11 M, dalam komentarinya tentang Sefer Bereishis 4:22.[20]
Suatu Midrash dari seratus tahun pertengahan, yang dikenal sbg "Kitab Yasar" (Book of Jasher 5:15), juga menuliskan nama istri Nuh adalah Naamah, putri Henokh.[21]
---------------------------

-------ABRAHAM--------
Menurut Alkitab, Abraham dipanggil Allah dari Mesopotamia ke negeri Kanaan, sekitar tahun 2000 SM.[10] Di sana dia menyelenggarakan perjanjian: Abraham dimohon mengakui bahwa Yahweh yaitu Tuhan dan otoritas tertinggi satu-satunya dan universal, dan untuk itu Abraham akan diberkati dengan keturunan yang tak terhitung banyaknya. Kehidupannya yang dikisahkan dalam Kitab Peristiwa (pasal 11–25) mampu mencerminkan bermacam tradisi.
Nama aslinya yaitu Abram (bahasa Ibrani: אַבְרָם, Standar Avram Tiberias ʾAḇrām ; "bapa (ab) yang terpuji" atau "bapa[-ku] dipuji/dimuliakan" (bandingkan Abiram). Belakangan dalam hidupnya dia dikenal dengan nama "Abraham", seringkali dinamakan pula sebagai av hamon (goyim) "bapak dari banyak (bangsa)

Abraham bernama asli Abram. Dia yaitu anak Terah, berasal dari Ur-Kasdim. Abram lahir ketika Terah berusia 130 tahun (mengingat Abram berusia 75 tahun ketika Terah wafat pada usia 205 tahun). Lalu Terah membawa Abram, anaknya, serta cucunya, Lot, yaitu anak Haran, dan Sarai, menantunya, isteri Abram, anaknya; dia berangkat bersama-sama dengan mereka dari Ur-Kasdim untuk pergi ke tanah Kanaan, lalu sampailah mereka ke Haran, dan menetap di sana. Umur Terah mempunyai 205 tahun; lalu dia mati di Haran.[16] Setelah itu, Abram dan istrinya Sarai, Lot (anak dari saudara laki-laki Abram, Haran), dan semua pengikutnya, kemudian pergi ke Kanaan. Abram berumur 75 tahun, ketika dia berangkat dari Haran. TUHAN memerintahkan Abram untuk pergi ke "negeri yang akan Kutunjukkan kepadamu", dan berjanji untuk memberkatinya dan membuatnya bangsa yang akbar.[17] Karena percaya akan janji-Nya ini, Abram pergi ke Sikhem, dan menerima janji baru bahwa negeri itu akan diberikan pada keturunannya. Setelah membangun sebuah mezbah untuk memperingati perjanjian ini, dia pergi dan memasang kemah di selang Betel dan Ai, di mana dia membangun sebuah mezbah lagi dan "memanggil nama TUHAN."[18]

Di sini dia tinggal untuk beberapa waktu, sampai ketika mempunyai perselisihan selang gembala-gembalanya dan gembala-gembala Lot. Abram mengusulkan pada Lot bahwa mereka berpisah, dan mengijinkan keponakannya untuk memilih semakin dahulu. Lot memilih tanah yang subur di sebelah timur sungai Yordan, sementara Abram, setelah menerima janji lagi dari TUHAN, pergi ke Mamre, tidak jauh Hebron, dan mendirikan mezbah lagi untuk TUHAN.

Berdoa untuk Sodom
Dalam kisah mengenai Lot dan pemusnahan Sodom dan Gomora, Abram muncul ketika dia memohon pada TUHAN untuk mengasihani Sodom.[19] Di kala itu, TUHAN menyebut untuk Abram bahwa Dia akan turun dan melihat, apakah benar-benar mereka telah berkelakuan seperti keluh-kesah orang yang telah sampai kepada-Nya atau tidak.[19]

Di Mesir
Karena kelaparan yang hebat, Abram dan keluarganya pergi ke Mesir (Peristiwa 26:11, 41:57, 42:1), di mana dia takut bahwa kecantikan istrinya akan menawan hati orang-orang Mesir. Karenanya dia berdusta bahwa Sarai yaitu saudara perempuannya. Ini tidak menyelamatkannya dari Firaun, yang mengambilnya untuk harem pribadinya dan memberi Abram banyak ternak dan budak. Tapi ketika TUHAN menimpakan tulah yang hebat pada Firaun, Abram dan Sarai meninggalkan Mesir.

Hagar dan Ismael
Karena Sarai tidak mampu mengandung, janji Tuhan bahwa keturunan Abraham akan mewarisi tanah perjanjian tampak seperti absurd. Sarai, sesuai dengan adat kala itu, memberi orang bawahan perempuannya yang bernama Hagar untuk Abram. Ketika Hagar mengandung anak Abram, dia dihasilkan menjadi sombong dan merendahkan Sarai. Sarai mengusirnya ke padang gurun. Hagar dijanjikan bahwa keturunannya akan dihasilkan menjadi sangat banyak, "sehingga tidak mampu dihitung karena banyaknya." Maka Hagar kembali dan melahirkan anaknya Ismael yang adalah putra Abram yang pertama. Hagar dan Ismael kemudian ditolak dari Abram oleh Sarai selamanya (Peristiwa 21).

Dalam agama Kristen dan Yahudi dikatakan bahwa yang dinamakan keturunan Abraham yaitu berasal dari Ishak (Peristiwa 21:12 Tetapi Allah berfirman untuk Abraham: "Janganlah sebal hatimu karena hal anak dan budakmu itu; dalam segala yang dituturkan Sara untukmu, haruslah engkau mendengarkannya, karena yang akan dinamakan keturunanmu ialah yang berasal dari Ishak.) Walaupun Ismael lahir sebelum Ishak tetapi yaitu anak yang dilahirkan dari budak perempuan, yaitu Hagar, wanita Mesir yang dihasilkan menjadi budak untuk keluarga Abraham—pelayan untuk Sara. Menurut hukum budaya istiadat pada waktu itu, yang terhitung sebagai anak yaitu dari istri yang berlaku, dalam hal ini maka Ishak-lah yang sangat berhak dinamakan sebagai mahir waris.

Perjanjian sunat
Nama Abraham diberikan pada Abram (dan Sara pada Sarai) pada waktu yang sama dengan perjanjian sunat (Peristiwa 17), yang dipraktikkan dalam agama Yahudi dan Islam sampai hari ini. Sekarang Abraham dijanjikan bukan saja keturunan yang banyak, melainkan juga bahwa keturunan ini akan berasal dari Sara, dan juga bahwa negeri di mana dia tinggal akan dihasilkan menjadi milik keturunannya. Perjanjian ini dipenuhi lewat Ishak, walaupun Tuhan berjanji bahwa Ismael akan dihasilkan menjadi bangsa yang akbar pula. Perjanjian sunat (tidak seperti janji-janji lainnya) mempunyai dua sisi dan bersyarat: bila Abraham dan keturunannya memenuhi janji mereka, TUHAN akan dihasilkan menjadi Tuhan mereka dan memberi mereka negeri tersebut.

Ujian iman Abraham
Beberapa waktu setelah lahir Ishak, Abraham diperintahkan Tuhan untuk mengorbankan Ishak di gunung Moria. Sebelum Abraham sempat mematuhi hal ini, dia dicegah seorang malaikat dan dia mengorbankan seekor domba jantan. Sebagai imbalan akan kepatuhannya ini dia menerima janji lain bahwa dia akan membuat keturunannya "sangat banyak seperti bintang di langit dan seperti pasir di tepi laut", dan bahwa mereka "akan menduduki kota-kota musuhnya."

Sara wafat
Sara wafat dalam usia lanjut, 127 tahun. Kala itu Ishak masih berusia 36 tahun dan belum menikah. Untuk menguburkan istrinya itu, Abraham melakukan pembelian sebidang tanah ladang beserta suatu gua yang bernama gua Makhpela dari Efron bin Zohar, orang Het itu. Sesudah itu Abraham menguburkan Sara, isterinya, di dalam gua ladang Makhpela itu, di sebelah timur Mamre, yaitu Hebron di tanah Kanaan.[20]

Istri ketiga, Ketura
Abraham mengambil pula seorang isteri, namanya Ketura. Perempuan itu melahirkan untuknya Zimran, Yoksan, Medan, Midian, Isybak dan Suah. Yoksan memperanakkan Syeba dan Dedan. Keturunan Dedan ialah orang Asyur, orang Letush dan orang Leum. Anak-anak Midian ialah Efa, Efer, Henokh, Abida dan Eldaa. Itulah semuanya keturunan Ketura.[21]

Warisan Abraham
Abraham memberikan segala harta miliknya untuk Ishak, tetapi untuk anak-anaknya yang diperolehnya dari gundik-gundiknya dia memberikan pemberian; kemudian dia menyuruh mereka—masih pada waktu dia hidup—meninggalkan Ishak, anaknya, dan pergi ke sebelah timur, ke Tanah Timur.[22]

Pengahabisan hayat
Abraham sampai umur 175 tahun lalu dia meninggal. Dia mati pada waktu telah putih rambutnya, tua dan suntuk umur, maka dia dikumpulkan untuk kaum leluhurnya. Dan putra-putranya, Ishak dan Ismael, menguburkan dia dalam gua Makhpela, di padang Efron bin Zohar, orang Het itu, padang yang letaknya di sebelah timur Mamre, yang telah dibeli Abraham dari bani Het; di sanalah terkubur Abraham dan Sara isterinya.[23]

Berabad-abad kemudian makam ini dihasilkan menjadi tempat kunjungan agama dan umat Islam membangun Masjid Ibrahim di tempat ini.

Perhitungan waktu
Selisih usia
Abraham semakin muda dari
Terah: 130 tahun[24]
Abraham semakin tua dari
Sara: 9 tahun[25]
Ismael: 86 tahun[26]
Ishak: Seratus tahun[27]
Masa hidup
Abraham berusia 75 tahun ketika berangkat dari Haran ke tanah Kanaan,[28] setelah Terah, ayahnya, mati pada usia 205 tahun.[29]
Abraham berusia 85 tahun ketika Sara memberikan Hagar orang bawahannya untuk Abraham agar mendapat anak; waktu itu mereka sudah tinggal di Kanaan 10 tahun.[30]
Abram berusia 86 tahun ketika Hagar melahirkan Ismael untuknya.[31]
Abraham berusia 99 tahun ketika disunat.[32]
Abraham berusia seratus tahun ketika Sara melahirkan Ishak untuknya.[33]
Abraham mati pada usia 175 tahun, ketika Ishak berusia 75 tahun, Ismael 89 tahun,[34] sedangkan Esau dan Yakub, cucu-cucu kembar Abraham dari Ishak dan Ribka, kala itu berusia 15 tahun.[35]
David Rohl memperkirakan Abraham hidup sekitar tahun-tahun 2000-1825 SM dan raja Mesir yang ditemui Abraham yaitu Nebkaure Khety IV dari Dinasti kesepuluh Mesir.[36]
------------------------

-----YAKUB-------
Pada suatu hari, ketika Esau pulang berburu dan merasa sangat lelah dan lapar, ia mencium bau masakan yang sangat lezat yang dimasak oleh Yakub. Ia ingin mencicipi sedikit saja masakan itu, namun Yakub menolaknya. "Juallah dulu kepadaku hak kesulungan-mu," kata Yakub. Tanpa berpikir panjang, Esau menyetujuinya, bahkan dengan sumpah.[3]
Kitab Kejadian tidak serta-merta mempersalahkan Yakub dalam hal ini, melainkan lebih menyalahkan Esau karena ia telah "memandang ringan hak kesulungan itu."
Ketika Ishak semakin lanjut usianya, Yakub yang merasa belum yakin akan hak kesulungan yang telah dicurinya itu, kembali berulah dengan pertolongan ibunya. Ia mencuri berkat kesulungan Ishak dengan menyamar sebagai Esau (Kejadian 27). Akibatnya, Esau murka dan berniat membunuh Yakub. Karena itu Yakub melarikan diri ke rumah pamannya, Laban, di Padan-Aram, Mesopotamia.
----------------------


`
        }
        show_overlay(res);
    }
}
