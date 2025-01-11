export const questions = {
      grammar: [
        {
          question: "Pilih terjemahan yang benar untuk 'Hello!'",
          options: ["Selamat pagi!", "Halo!", "Selamat siang!", "Selamat malam!"],
          correctAnswer: 1,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'Thank you'",
          options: ["Tolong", "Maaf", "Terima kasih", "Permisi"],
          correctAnswer: 2,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'My name is...'",
          options: ["Nama saya...", "Saya dari...", "Senang bertemu dengan Anda", "Apa kabar?"],
          correctAnswer: 0,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'How are you?'",
          options: ["Siapa nama Anda?", "Dari mana asal Anda?", "Apa kabar?", "Berapa umur Anda?"],
          correctAnswer: 2,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'Excuse me'",
          options: ["Maaf", "Permisi", "Terima kasih", "Tolong"],
          correctAnswer: 1,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'What is your name?'",
          options: ["Siapa nama Anda?", "Dari mana asal Anda?", "Berapa umur Anda?", "Apa kabar?"],
          correctAnswer: 0,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'Where are you from?'",
          options: ["Siapa nama Anda?", "Dari mana asal Anda?", "Berapa umur Anda?", "Apa kabar?"],
          correctAnswer: 1,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'How old are you?'",
          options: ["Siapa nama Anda?", "Dari mana asal Anda?", "Berapa umur Anda?", "Apa kabar?"],
          correctAnswer: 2,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'I like...'",
          options: ["Saya suka...", "Saya tidak suka...", "Saya bisa...", "Saya mau..."],
          correctAnswer: 0,
          type: "grammar",
        },
        {
          question: "Pilih terjemahan yang benar untuk 'I don't like...'",
          options: ["Saya suka...", "Saya tidak suka...", "Saya bisa...", "Saya mau..."],
          correctAnswer: 1,
          type: "grammar",
        },
      ],
      vocabulary: [
        {
          question: "Pilih kata yang benar untuk 'Satu'",
          options: ["One", "Two", "Three", "Four"],
          correctAnswer: 0,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Dua'",
          options: ["One", "Two", "Three", "Four"],
          correctAnswer: 1,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Merah'",
          options: ["Red", "Blue", "Green", "Yellow"],
          correctAnswer: 0,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Biru'",
          options: ["Red", "Blue", "Green", "Yellow"],
          correctAnswer: 1,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Hijau'",
          options: ["Red", "Blue", "Green", "Yellow"],
          correctAnswer: 2,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Kuning'",
          options: ["Red", "Blue", "Green", "Yellow"],
          correctAnswer: 3,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Hitam'",
          options: ["Black", "White", "Orange", "Purple"],
          correctAnswer: 0,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Putih'",
          options: ["Black", "White", "Orange", "Purple"],
          correctAnswer: 1,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Orange'",
          options: ["Black", "White", "Orange", "Purple"],
          correctAnswer: 2,
          type: "vocabulary",
        },
        {
          question: "Pilih kata yang benar untuk 'Ungu'",
          options: ["Black", "White", "Orange", "Purple"],
          correctAnswer: 3,
          type: "vocabulary",
        },
      ],
      sound: [
        {
          id: 26,
          type: 'sound',
          question: "Dengarkan dan pilih kata yang benar:",
          audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/th/thank_en_us_1.mp3",
          options: ["Thank you", "Tank you", "Think you", "Tink you"],
          correctAnswer: 0
        },
        {
          id: 27,
          type: 'sound',
          question: "Dengarkan dan pilih kata dengan bunyi yang sama:",
          audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/pl/please_en_us_1.mp3",
          options: ["Please", "Plays", "Place", "Plus"],
          correctAnswer: 0
        },
        {
          id: 28,
          type: 'sound',
          question: "Dengarkan dan pilih kata yang benar:",
          audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/he/hello_en_us_1.mp3",
          options: ["Hello", "Halo", "Hollow", "Hellow"],
          correctAnswer: 0
        },
        {
          id: 29,
          type: 'sound',
          question: "Dengarkan dan pilih kata yang benar:",
          audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/go/goodbye_en_us_1.mp3",
          options: ["Goodbye", "Good buy", "Good bye", "Good by"],
          correctAnswer: 0
        },
        {
          id: 30,
          type: 'sound',
          question: "Dengarkan dan pilih kata yang benar:",
          audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/ni/nice_en_us_1.mp3",
          options: ["Nice", "Mice", "Rice", "Dice"],
          correctAnswer: 0
        },
      ],
      reading: [
        {
          question: "Baca dan pilih terjemahan yang benar: 'The sky is blue.'",
          options: ["Langit berwarna merah.", "Langit berwarna biru.", "Langit berwarna hijau.", "Langit berwarna kuning."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'She is wearing a red dress.'",
          options: ["Dia mengenakan gaun biru.", "Dia mengenakan gaun merah.", "Dia mengenakan gaun hijau.", "Dia mengenakan gaun kuning."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'I like coffee.'",
          options: ["Saya suka teh.", "Saya suka kopi.", "Saya suka susu.", "Saya suka jus."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'I don't like spiders.'",
          options: ["Saya suka laba-laba.", "Saya tidak suka laba-laba.", "Saya suka kucing.", "Saya tidak suka anjing."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'I can swim.'",
          options: ["Saya bisa berlari.", "Saya bisa berenang.", "Saya bisa terbang.", "Saya bisa melompat."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'I want to learn English.'",
          options: ["Saya mau belajar matematika.", "Saya mau belajar Bahasa Inggris.", "Saya mau belajar sains.", "Saya mau belajar sejarah."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'I need some water.'",
          options: ["Saya perlu sedikit makanan.", "Saya perlu sedikit air.", "Saya perlu sedikit buku.", "Saya perlu sedikit uang."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'There are five apples on the table.'",
          options: ["Ada tiga apel di meja.", "Ada lima apel di meja.", "Ada tujuh apel di meja.", "Ada sepuluh apel di meja."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'He bought three books.'",
          options: ["Dia membeli dua buku.", "Dia membeli tiga buku.", "Dia membeli empat buku.", "Dia membeli lima buku."],
          correctAnswer: 1,
          type: "reading",
        },
        {
          question: "Baca dan pilih terjemahan yang benar: 'We need ten chairs.'",
          options: ["Kami membutuhkan delapan kursi.", "Kami membutuhkan sembilan kursi.", "Kami membutuhkan sepuluh kursi.", "Kami membutuhkan sebelas kursi."],
          correctAnswer: 2,
          type: "reading",
        },
      ],
    };
