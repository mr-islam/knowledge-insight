<script>
  import CourseCard from "../components/CourseCard.svelte";
  import { t, locale, locales } from "svelte-intl-precompile";

  function scrollToTitle() {
    document
      .getElementById("section-title")
      .scrollIntoView({ behavior: "smooth" });
  }

  let courses = [
    {
      title: $t("courses.tajwid1.title"),
      desc: $t("courses.tajwid1.desc_short"),
      tags: ["nazari", "fard"],
      src: "/books/tajwid1.jpg",
      level: 1,
      id: "tajwid/qaida",
      book: $t("courses.tajwid1.book"),
      action: "now",
      price: "",
      registration: "",
    },
    {
      id: "tajwid/hidayatrahman",
      title: $t("Tajwid: Level 2"),
      desc: $t("Contuining learning the traits and places of letters"),
      tags: ["nazari"],
      src: "/books/hidayatrahman.jpg",
      level: 2,
      book: "Hidayah al-Rahman",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid/thani",
      title: $t("Tajwid: Level 3"),
      desc: $t("Add more depth to your knowledge of law,"),
      tags: ["nazari"],
      src: "/books/thani.jpg",
      level: 3,
      book: "Al-Mustawa al-Thani",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid/jazari",
      title: $t("Tajwid: Level 4"),
      desc: $t("Add more depth to your knowledge of law,"),
      tags: ["nazari"],
      src: "/books/mushaf.jpg",
      level: 4,
      book: "Sharh al-Jazariyyah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid/amma",
      title: $t("Open-book Recitation"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["amali"],
      src: "/books/mushaf.jpg",
      level: 1,
      book: "Juz 30: ʿAmma",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid/reading",
      title: $t("Open-book Recitation"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["amali"],
      src: "/books/mushaf.jpg",
      level: 3,
      book: "The Entire Quran",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid/reciting",
      title: $t("Reciting from Memory"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["amali"],
      src: "/books/mushaf.jpg",
      level: 4,
      book: "The Entire Quran for Ijaza",
      action: "later",
      price: "",
      registration: "",
    },
    {
      title: $t("courses.hadith1.title"),
      desc: $t("courses.hadith1.desc_short"),
      tags: ["hadith-matn"],
      src: "/books/hadith1.jpg",
      level: 1,
      id: "hadith/matn/nawawi",
      book: $t("courses.hadith1.book"),
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/adab",
      title: $t("Hadith: Text 2"),
      desc: $t("Bring light to your every action with Prophetic guidance"),
      tags: ["hadith-matn"],
      src: "/books/adab.jpg",
      level: 2,
      book: "Al-Adab al-Mufrad",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/riyad",
      title: $t("Hadith: Text 3"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/riyad.jpg",
      level: 3,
      book: "Riyad al-Salihin",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/bukhari",
      title: $t("Hadith: Text 4"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/bukhari.jpg",
      level: 4,
      book: "Sahih al-Bukhari",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/muslim",
      title: $t("Hadith: Text 4"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/muslim.jpg",
      level: 4,
      book: "Sahih Muslim",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/tirmidhi",
      title: $t("Hadith: Text 5"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/tirmidhi.jpg",
      level: 5,
      book: "Sunan al-Tirmidhi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/abudawud",
      title: $t("Hadith: Text 5"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/abudawud.jpg",
      level: 5,
      book: "Sunan Abu Dawud",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/ibnmajah",
      title: $t("Hadith: Text 5"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/ibnmajah.jpg",
      level: 5,
      book: "Sunan ibn Majah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/nasai",
      title: $t("Hadith: Text 4"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/nasai.jpg",
      level: 4,
      book: "Sunan al-Nasai",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/musnad",
      title: $t("Hadith: Text 5"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/musnad.jpg",
      level: 5,
      book: "Musnad Ahmad",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/darimi",
      title: $t("Hadith: Text 5"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/darimi.jpg",
      level: 5,
      book: "Sunan al-Darimi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/muwatta",
      title: $t("Hadith: Text 5"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith-matn"],
      src: "/books/muwatta.jpg",
      level: 5,
      book: "Al-Muwatta",
      action: "later",
      price: "",
      registration: "",
    },
    {
      title: $t("Fiqh: Worship 2"),
      desc: $t("Worshipping Allah Almighty the way He commanded."),
      tags: ["ahkam"],
      src: "/books/maslak.jpg",
      level: 2,
      id: "fiqh/maslak",
      book: "Maslak al-Najah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      title: $t("Fiqh: Worship 1"),
      desc: $t("Worshipping Allah Almighty the way He commanded."),
      tags: ["ahkam", "fard"],
      src: "/books/nuridah.jpg",
      level: 1,
      id: "fiqh/maslak",
      book: "Nur al-Idah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/quduri",
      title: $t("Fiqh: Interactions 1"),
      desc: $t("Being with Allah's creation the way He commanded."),
      tags: ["fard"],
      src: "/books/quduri.jpg",
      level: 1,
      book: "Al-Quduri",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/lubab",
      title: $t("Fiqh: Level 2"),
      desc: $t("Add more depth to your knowledge of law,"),
      tags: ["ahkam"],
      src: "/books/lubab.jpg",
      level: 2,
      book: "Al-Lubab",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/ulum/bayquni",
      title: $t("Hadith: Terminology 1"),
      desc: $t(
        "The tools to interact with Hadith and understand it's scholars"
      ),
      tags: ["hadith-ulum"],
      src: "/books/bayquni.jpg",
      level: 1,
      book: "Sharh al-Bayquni",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/ulum/nuzhah",
      title: $t("Hadith: Terminology 2"),
      desc: $t("Being with Allah's creation the way He commanded."),
      tags: ["hadith-ulum"],
      src: "/books/nuzhah.jpg",
      level: 2,
      book: "Nuzhah al-Nazar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/ulum/nuzhah",
      title: $t("Hadith: Terminology 3"),
      desc: $t("The work that changed the field"),
      tags: ["hadith-ulum"],
      src: "/books/mushaf.jpg",
      level: 3,
      book: "Muqaddimah Ibn al-Salah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/ahl-sunnah",
      title: $t("Beliefs: Essentials"),
      desc: $t("There is no belief without knowledge"),
      tags: ["fard"],
      src: "/books/sharhnazm.jpg",
      level: 0,
      book: "Aqida Ahl al-Sunnah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/majmu",
      title: $t("Beliefs: Level 1"),
      desc: $t("A masterful poem and explanation on beliefs"),
      tags: ["aqidah"],
      src: "/books/majmu.jpg",
      level: 2,
      book: "Nazm Aqida Ahl al-Sunnah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/tali",
      title: $t("Beliefs: Level 2"),
      desc: $t("One of the best explanations of this key text in creed."),
      tags: ["aqidah"],
      src: "/books/tali.jpg",
      level: 2,
      book: "Taliʿ al-Bushra",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/miftah",
      title: $t("Beliefs: Level 3"),
      desc: $t("A summary of over 50 works in Creed, this is a milestone"),
      tags: ["aqidah"],
      src: "/books/miftah.jpg",
      level: 3,
      book: "Miftah al-Jannah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/jawharah",
      title: $t("Beliefs: Level 3"),
      desc: $t("A summary of over 50 works in Creed, this is a milestone"),
      tags: ["aqidah"],
      src: "/books/jawharah.jpg",
      level: 4,
      book: "Jawharah al-Tawhid",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/taftazani",
      title: $t("Beliefs: Level 5"),
      desc: $t("Different views and the breadth of Islam are explored"),
      tags: ["aqidah"],
      src: "/books/taftazani.jpg",
      level: 5,
      book: "Sharh al-Nasafiyyah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/tahrir",
      title: $t("Beliefs: Level 6"),
      desc: $t("A deep dive and joruney through the range of views"),
      tags: ["aqidah"],
      src: "/books/tahrir.jpg",
      level: 6,
      book: "Tahrir al-Matalib",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/hidayah",
      title: $t("Fiqh: Level 4"),
      desc: $t("The mother book of the Madhhab"),
      tags: ["ahkam"],
      src: "/books/hidayah.jpg",
      level: 4,
      book: "Al-Hidayah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/rad",
      title: $t("Fiqh: Level 5"),
      desc: $t("The relied upon book for rulings and mastery"),
      tags: ["ahkam"],
      src: "/books/rad.jpg",
      level: 5,
      book: "Radd al-Muhtar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/maram",
      title: $t("Fiqh: Evidences 1"),
      desc: $t("The relied upon book for rulings and mastery"),
      tags: ["dalil"],
      src: "/books/maram.jpg",
      level: 2,
      book: "Sharh Bulugh al-Maram",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/ila",
      title: $t("Fiqh: Principles 1"),
      desc: $t("The definitive reference for hadith evidence for fiqh"),
      tags: ["dalil"],
      src: "/books/mushaf.jpg",
      level: 3,
      book: "Ila al-Sunan",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/ghamz",
      title: $t("Fiqh: Rules 3"),
      desc: $t("The standard across schools for this genre"),
      tags: ["qawaid"],
      src: "/books/ghamz.jpg",
      level: 3,
      book: "Ghamz al-Basair",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/isad",
      title: $t("Fiqh: Rules 2"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["qawaid"],
      src: "/books/isad.jpg",
      level: 2,
      book: "Sharh Uqud Rasm al-Mufti",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/sharhmanar",
      title: $t("Fiqh: Rules 2"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["usul"],
      src: "/books/sharhmanar.jpg",
      level: 2,
      book: "Sharh al-Manar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/talwih",
      title: $t("Fiqh: Rules 3"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["usul"],
      src: "/books/mushaf.jpg",
      level: 3,
      book: "Al-Talwih maʿa al-Tawdih ",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/zaydan",
      title: $t("Fiqh: Rules 1"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["qawaid"],
      src: "/books/zaydan.jpg",
      level: 1,
      book: "Al-Wajiz Fi al-Qawaid",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/zad",
      title: $t("Fiqh: Rules 2"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["usul"],
      src: "/books/zad.jpg",
      level: 2,
      book: "Zad al-Muktafi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/manar",
      title: $t("Fiqh: Rules 1"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["usul"],
      src: "/books/manar.jpg",
      level: 1,
      book: "Sharh al-Manar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir/zahir/durrah",
      title: $t("Tafsir: External 1"),
      desc: $t(
        "A contemporary tafsir that provides the cream of those before it"
      ),
      tags: ["zahir"],
      src: "/books/mushaf.jpg",
      level: 1,
      book: "Durrah al-Tafasir",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir/zahir/nasafi",
      title: $t("Tafsir: External 2"),
      desc: $t("A summary of some of the most important tafsir"),
      tags: ["zahir"],
      src: "/books/nasafi.jpg",
      level: 2,
      book: "Tafsir al-Nasafi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir/baydawi",
      title: $t("Tafsir: External 3"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["zahir"],
      src: "/books/mushaf.jpg",
      level: 3,
      book: "Tafsir al-Baydawi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir/qurtubi",
      title: $t("Tafsir: External 4"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["zahir"],
      src: "/books/mushaf.jpg",
      level: 4,
      book: "Tafsir al-Qurtubi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/ulum/tadrib",
      title: $t("Hadith: Terminology 4"),
      desc: $t("The level for complete campacity in hadith science"),
      tags: ["hadith-ulum"],
      src: "/books/tadrib.jpg",
      level: 4,
      book: "Tadrib al-Rawi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/tuhfah",
      title: $t("Spirituality"),
      desc: $t("A summary of Imam al-Ghazzali's Ihya"),
      tags: ["fard", "suluk"],
      src: "/books/tuhfah.jpg",
      level: 6,
      book: "Tuhfah al-Salikin",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/taj",
      title: $t("Spirituality"),
      desc: $t("A summary of Imam al-Ghazzali's Ihya"),
      tags: ["suluk"],
      src: "/books/taj.jpg",
      level: 2,
      book: "Taj al-Arus",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/fuyud",
      title: $t("Spirituality"),
      desc: $t(
        "An abridged collection of oaths the Holy Prophet ﷺ took from us"
      ),
      tags: ["fard", "suluk"],
      src: "/books/fuyud.jpg",
      level: 4,
      book: "Al-Fuyud al-Ahmadiyyah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/qasd",
      title: $t("Spirituality"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["suluk"],
      src: "/books/qasd.jpg",
      level: 5,
      book: "Sharh al-Muntaqa min al-Qawaid",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/uyub",
      title: $t("Spirituality"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["suluk"],
      src: "/books/mushaf.jpg",
      level: 3,
      book: "Uyub al-Nafs wa Adwiyatuha",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/bidayah",
      title: $t("Spirituality"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["suluk"],
      src: "/books/bidayah.jpg",
      level: 1,
      book: "Bidayah al-Hidayah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/manazil",
      title: $t("Spirituality"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["suluk"],
      src: "/books/mushaf.jpg",
      level: 7,
      book: "Manazil al-Saʾirin",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/himam",
      title: $t("Spirituality"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["suluk"],
      src: "/books/mushaf.jpg",
      level: 8,
      book: "Iqaz al-Himam",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/mabahith",
      title: $t("Spirituality"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["suluk"],
      src: "/books/mushaf.jpg",
      level: 6,
      book: "Sharh al-Mabahith al-Asliyyah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/wasaya",
      title: $t("Spirituality: Reaching 1"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["irfan"],
      src: "/books/mushaf.jpg",
      level: 1,
      book: "Al-Wasaya",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/naqsh",
      title: $t("Spirituality: Reaching 3"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["irfan"],
      src: "/books/mushaf.jpg",
      level: 3,
      book: "Naqsh al-Fusus",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/insankamil",
      title: $t("Spirituality: Reaching 3"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["irfan"],
      src: "/books/mushaf.jpg",
      level: 3,
      book: "Al-Insan al-Kamil",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/fusus",
      title: $t("Spirituality: Reaching 3"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["irfan"],
      src: "/books/mushaf.jpg",
      level: 4,
      book: "Fusus al-Hikam",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf/qawanin",
      title: $t("Spirituality: Reaching 2"),
      desc: $t("Insights and illuminations for all wayfarers"),
      tags: ["irfan"],
      src: "/books/qawanin.jpg",
      level: 2,
      book: "Qawanin Hikam al-Ishraq",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir/bahr",
      title: $t("Tafsir: Internal 1"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["ishari"],
      src: "/books/mushaf.jpg",
      level: 1,
      book: "Mukhtasar al-Bahr al-Madid",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir/waridat",
      title: $t("Tafsir: Internal 2"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["ishari"],
      src: "/books/mushaf.jpg",
      level: 2,
      book: "Al-Waridat al-Ilahiyyah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir/mawaqif",
      title: $t("Tafsir: Ishari 3"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["ishari"],
      src: "/books/mawaqif.jpg",
      level: 3,
      book: "Al-Mawaqif al-Ruhaniyyah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "other/isa",
      title: $t("Logic"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["other"],
      src: "/books/isa.jpg",
      level: 1,
      book: "Mughni al-Tullab",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "other/diwankurdi",
      title: $t("Inshad & Singing"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["other"],
      src: "/books/diwankurdi.jpg",
      level: 1,
      book: "Diwan al-Shaykh al-Kurdi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sirah/halabi",
      title: $t("Seerah 1"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["sirah"],
      src: "/books/halabi.jpg",
      level: 1,
      book: "Tahdhib al-Seerah al-Halabiyyah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sirah/wasail",
      title: $t("Shamail 1"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["sirah"],
      src: "/books/wasail.jpg",
      level: 1,
      book: "Wasail al-Wusul",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "program/youth",
      title: $t("A complete program spanning several books"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["program"],
      src: "/books/mushaf.jpg",
      level: 1,
      book: "Youth Program",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "program/women",
      title: $t("A complete program spanning several books"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["program"],
      src: "/books/mushaf.jpg",
      level: 1,
      book: "Women's Program",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq/um1",
      title: $t("A complete program spanning several books"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["natiq"],
      src: "/books/um1.jpg",
      level: 1,
      book: "Silsilah al-Lisan: 1",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq/um2",
      title: $t("A complete program spanning several books"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["natiq"],
      src: "/books/um2.jpg",
      level: 2,
      book: "Silsilah al-Lisan: 2",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq/um3",
      title: $t("A complete program spanning several books"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["natiq"],
      src: "/books/um3.jpg",
      level: 3,
      book: "Silsilah al-Lisan: 3",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq/um4",
      title: $t("A complete program spanning several books"),
      desc: $t("This is placeholder of some text, we need to write later"),
      tags: ["natiq"],
      src: "/books/um4.jpg",
      level: 4,
      book: "Silsilah al-Lisan: 4",
      action: "later",
      price: "",
      registration: "",
    },
  ];
  let searchTerm = "fard";
  $: console.log(searchTerm);
  $: filteredCourses = courses
    .filter((course) => {
      return course.tags.find((tag) => tag.includes(searchTerm));
    })
    .sort(function (a, b) {
      return a.level - b.level;
    });
</script>

<h1 id="courses">{$t("courses.title")}</h1>

<div id="grid">
  <button
    on:click={() => {
      setTimeout(scrollToTitle(), 100);
      searchTerm = "fard";
    }}
  >
    Obligatory Knowledge
  </button>
  <button
    href="#gallery"
    on:click={() => {
      searchTerm = "program";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Bundle Programs
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "nazari";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Quran Recitation & Tajwid
  </button>
  <button
    href="#gallery"
    on:click={() => {
      searchTerm = "natiq";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Arabic for Non-natives
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "nahw";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Arabic & Its Sciences
  </button>
  <button
    href="#gallery"
    on:click={() => {
      searchTerm = "aqidah";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Beliefs
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "ahkam";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Fiqh & Its Foundations
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "suluk";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Sprituality
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "zahir";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    The Quran & Its Sciences
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "matn";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Hadith & Its Sciences
  </button>
  <button
    href="#gallery"
    on:click={() => {
      setTimeout(scrollToTitle(), 100);
      searchTerm = "sirah";
    }}
  >
    Seerah & Shamail
  </button>
  <button
    href="#gallery"
    on:click={() => {
      searchTerm = "other";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Assorted Classes
  </button>
</div>

{#if searchTerm == "tasawwuf" || searchTerm == "suluk" || searchTerm == "irfan"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Spirituality
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="suluk" /><span
        >Self-purification & Suluk</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="irfan" /><span
        >Higher Understandings</span
      ></label
    >
  </p>
{:else if searchTerm == "tajwid" || searchTerm == "nazari" || searchTerm == "amali"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Tajwid
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="nazari" /><span
        >Theory & Rules</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="amali" /><span
        >Practical Recitation</span
      ></label
    >
  </p>
{:else if searchTerm == "tafsir" || searchTerm == "zahir" || searchTerm == "ishari" || searchTerm == "tajwid" || searchTerm == "nazari" || searchTerm == "amali"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Tafsir
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="zahir" /><span
        >External Tafsir</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="ishari" /><span
        >Ishari Tafsir</span
      ></label
    >
  </p>
{:else if searchTerm == "hadith" || searchTerm == "matn" || searchTerm == "ulum"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Hadith
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="matn" /><span
        >Hadith Texts</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="ulum" /><span
        >Hadith Sciences</span
      ></label
    >
  </p>
{:else if searchTerm == "fiqh" || searchTerm == "ahkam" || searchTerm == "usul" || searchTerm == "qawaid" || searchTerm == "dalil"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">Fiqh</h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="ahkam" /><span
        >Rulings</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="usul" /><span
        >Foundations</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="qawaid" /><span
        >Principles</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="dalil" /><span
        >Evidences</span
      ></label
    >
  </p>
{:else if searchTerm == "arabi" || searchTerm == "nahw" || searchTerm == "sarf" || searchTerm == "balaghah"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Arabic
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="nahw" /><span
        >nahw</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="sarf" /><span
        >sarf</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="balaghah" /><span
        >balaghah</span
      ></label
    >
  </p>
{:else}{/if}
<!-- <h3 id="section-title" style="text-align: center;">{searchTerm} Courses</h3> -->

{#if filteredCourses !== "islam"}
  {#if searchTerm == "fard"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Obligatory For Every Muslim
    </h3>
  {:else if searchTerm == "program"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Larger Programs
    </h3>
  {:else if searchTerm == "aqidah"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Beliefs
    </h3>
  {:else if searchTerm == "sirah"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Seerah & Shamail
    </h3>
  {:else if searchTerm == "natiq"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Arabic for Non-native Speakers
    </h3>
  {:else if searchTerm == "other"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Miscellaneous
    </h3>
  {/if}
  <div id="gallery">
    {#each filteredCourses as course}
      <CourseCard {...course} />
    {/each}
    <br />
  </div>
{/if}

<div style="" id="articles" />

<style>
  #section-title {
    padding-top: 10px;
  }
  div#grid > button {
    height: 100px;
    text-align: center;
    background: #f2ffe9;
    border-radius: 4px;
    border: 2px dashed #90d344;
    padding: 10px;
    font-weight: bold;
    justify-self: stretch;
    align-self: stretch;
  }
  div#grid > button:nth-child(odd) {
    background: #f9fff5;
  }
  div#grid > button:hover {
    background-color: #bef184;
    border: 2px solid #90d344;
    cursor: pointer;
  }
  a > span {
    vertical-align: middle;
  }
  div#grid {
    
    row-gap: 10px;
    column-gap: 10px;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-rows: repeat(3, minmax(100px, 1fr)); */
    margin: 0 20px;
    place-items: center;
    place-content: center;
  }
  div#gallery {
    min-width: 100%;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5vh 0;
    padding-bottom: 10vh;
  }
  @media only screen and (max-width: 600px) {
    div#grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    div#gallery {
      flex-direction: column;
    }
  }
  #tag-container {
    /* max-width: 100%; */
    /* overflow: scroll; */
    gap: 20%;
    text-align: center;
    user-select: none;
    flex-direction: row;
    margin-bottom: 25px;
    align-items: center;
    justify-items: center;
    /* font-size: smaller; */
    padding: 0 25px;
    scrollbar-color: gold white;
  }
  #tag-container > div {
    padding-bottom: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  #tag-container > div > label > span {
    min-width: 10vw;
    min-height: 5vh;
  }
  #tag-container::-webkit-scrollbar {
    margin-top: 20px;
    height: 10px;
  }
  #tag-container::-webkit-scrollbar-track {
    background: white;
  }
  #tag-container::-webkit-scrollbar-thumb {
    background-color: gold;
    border-radius: 6px;
    /* border: 2px solid rgba(71, 119, 0, 0.493) */
  }
  #tag-container input[type="radio"] {
    display: none;
  }

  #tag-container span {
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    padding: 20px;
    text-transform: capitalize;
    background-color: #fbfff9;
    border: 2px dashed #90d344;
    border-radius: 4px;
    color: #273912;
  }
  #tag-container span:hover {
    background-color: #ebffde;
  }

  #tag-container input[type="radio"]:checked + span {
    background-color: #ebffde;
    border: 2px solid #90d344;

    color: black;
  }

  /*  */
  #sub-container {
    margin-top: 30px;
    /* display: flex; */
    /* max-width: 100%; */
    /* overflow: scroll; */
    text-align: center;
    user-select: none;
    flex-direction: row;
    margin-bottom: 25px;
    align-items: center;
    justify-items: center;
    font-size: smaller;

    scrollbar-color: gold white;
  }
  #sub-container input[type="radio"] {
    display: none;
  }

  #sub-container span {
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    text-transform: capitalize;
    /* background-color: #fbfff9; */
    /* border: 2px dashed #90d344; */
    border-radius: 4px;
    color: #273912;
  }
  #sub-container span:hover {
    /* background-color: #ebffde; */
  }

  #sub-container input[type="radio"]:checked + span {
    background-color: rgb(255, 242, 172);
    border: 2px solid gold;

    color: black;
  }
</style>
