
📘 VIVI – WEB APPLICATION (BİREBİR KLON)

Cursor Geliştirme Dokümantasyonu

1. PROJENİN AMACI (ÇOK KRİTİK)

Bu proje, mevcut VIVI Beauty & Aesthetics Academy mobil uygulamasının UI, UX, ekran akışları, metinler, renkler, ikonlar ve kullanıcı deneyimi dahil olmak üzere %100 birebir web versiyonunun geliştirilmesini amaçlar.

❗ KESİNLİKLE:
	•	UI değiştirilmeyecek
	•	Renk, spacing, font, buton boyutu, ikon yerleri aynen korunacak
	•	Metinler birebir aynı olacak
	•	Yeni özellik EKLENMEYECEK
	•	Var olan akış DEĞİŞTİRİLMEYECEK

⸻

2. TEKNOLOJİ STACK (SABİT)

Cursor bu stack dışına çıkmayacak:
	•	Framework: Next.js 14 (App Router)
	•	Dil: TypeScript
	•	Styling: Tailwind CSS (pixel-perfect)
	•	State Management: Zustand
	•	Auth: Firebase Auth (Email + Google)
	•	Database: Firebase Firestore
	•	Payments: Stripe
	•	Icons: Lucide / Heroicons (mobildeki ikonlara birebir)
	•	Responsive: Mobile-first (webde mobil hissi korunacak)

⸻

3. TASARIM VE GÖRSEL KURALLAR

Tema
	•	Arka plan: #000000 (saf siyah)
	•	Primary renk: Pink / Magenta tonları (mobilde kullanılan HEX birebir alınacak)
	•	Text:
	•	Başlıklar: Beyaz
	•	Açıklamalar: Gri ton
	•	Button:
	•	Rounded
	•	Gradient veya solid pembe
	•	Hover / active efektleri mobil hissine yakın olacak

❗ Cursor, göz kararı tasarım yapmayacak, ekran görüntülerini referans alacak.

⸻

4. SAYFA & ROUTE HARİTASI (BİREBİR)

🔐 Auth

/login
/register
/forgot-password

	•	Email + Password
	•	Google ile giriş
	•	Logo alanı: VIVI – Beauty • Aesthetics • Academy
	•	Metinler birebir aynı

⸻

🏠 Home

/

	•	Welcome, {username}
	•	Search bar
	•	Categories (Lip Workshop)
	•	Course list
	•	Cart icon (sağ üst)

⸻

📚 Courses

/courses
/course/[id]

Course Card:
	•	Title: Lips
	•	Author: quexperts
	•	Rating: 0.0 ⭐⭐⭐⭐⭐ (0)
	•	Price: $20.00
	•	Favorite icon

Course Detail:
	•	Favorite / Buy butonları
	•	Description
	•	Contents list
	•	Language info

⸻

❤️ Favorites

/favorites

	•	Boş state:
	•	“No favorites yet”
	•	“Add some courses to your favorites!”

⸻

▶ My Courses

/my-courses

	•	Satın alınan kurs yoksa:
	•	“No purchased courses yet”
	•	Açıklama metni birebir

⸻

🛒 Cart

/cart

	•	Ürün listesi
	•	Subtotal
	•	Checkout butonu
	•	Remove icon

⸻

👤 Profile

/profile

	•	User name
	•	Email
	•	Role: Student
	•	FAQ
	•	Contact
	•	About Vivi
	•	Log Out

⸻

❓ FAQ

/profile/faq

Sorular aynen:
	•	Where can I see the courses I’ve completed?
	•	How can I reset my password?
	•	Can I change my profile picture?
	•	Are certificates available for all courses?
	•	How do I change the app language?

⸻

📩 Contact

/profile/contact

	•	Mail: vivibeautyacademy@gmail.com
	•	Website: https://viviacademy.de/
	•	Metin birebir

⸻

5. STATE & DATA MODELLERİ

User

{
  id: string
  name: string
  email: string
  role: "student"
}

Course

{
  id: string
  title: string
  author: string
  price: number
  rating: number
  reviewCount: number
  isFavorite: boolean
}

Cart

{
  items: Course[]
  subtotal: number
}


⸻

6. NAVIGATION (ÇOK ÖNEMLİ)
	•	Alt tab bar birebir
	•	Aktif tab pembe
	•	Icon + text yerleri aynı
	•	Mobil uygulamadaki UX aynen korunacak

⸻

7. CURSOR İÇİN ANA PROMPT (EN ÖNEMLİ KISIM)

👉 BUNU AYNEN CURSOR’A YAPIŞTIR

You are a senior frontend engineer.

Your task is to build a pixel-perfect web clone of an existing mobile app.
NO design changes are allowed.

Rules:
- UI must be identical
- Colors, spacing, fonts, button sizes must match exactly
- Text content must be copied 1:1
- Navigation flow must not change
- Do not improve or redesign anything
- Use Next.js 14 + TypeScript + Tailwind
- Mobile-first layout
- Dark theme only
- Implement all pages and routes exactly as documented

If something is unclear, do NOT guess.
Ask before proceeding.

Start by creating the project structure and layout components.


⸻

8. TESLİM KRİTERLERİ

✔ Mobil ile yan yana açıldığında fark olmaması
✔ Aynı hissiyat
✔ Aynı akış
✔ Aynı metin
✔ Aynı boş state’ler

⸻
