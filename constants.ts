import { ProgramDay, Review, FAQItem, PricingPlan } from './types';

export const PRICE: PricingPlan = {
  current: 79,
  original: 399,
  currency: "zł"
};

export const DEADLINE_HOURS = 4; // Mock countdown duration

export const PAIN_POINTS = [
  "Lwia zmarszczka nadaje Twojej twarzy zmęczony wyraz",
  "Masz „ciężkie spojrzenie” i opadającą górną powiekę",
  "Zauważasz worki i obrzęki pod oczami",
  "Widzisz wyraźne zagłębienie pod oczami",
  "Pojawiają się kurze łapki",
  "Masz poziome zmarszczki na czole",
  "Codziennie budzisz się z opuchniętą twarzą",
  "Masz wrażenie, że Twoja twarz wygląda na zmęczoną, nawet gdy Ty nie jesteś"
];

export const PROGRAM: ProgramDay[] = [
  {
    day: 1,
    title: "Aktywacja „stref młodości” i przygotowanie twarzy",
    description: "Startujemy z bazową aktywacją, aby przygotować mięśnie i skórę do transformacji."
  },
  {
    day: 2,
    title: "Lwia zmarszczka i redukcja napięć",
    description: "Pracujemy ze „złym” wyrazem twarzy, rozluźniając spięte mięśnie czoła i brwi."
  },
  {
    day: 3,
    title: "Okolica oczu – opadająca powieka i rozluźnienie",
    description: "Kompleks na otwarcie spojrzenia i redukcję napięć wokół oczu."
  },
  {
    day: 4,
    title: "Czoło i efekt „wypoczętego spojrzenia”",
    description: "Wygładzamy strefę czoła i pracujemy nad lekkim, świeżym wyglądem."
  },
  {
    day: 5,
    title: "Taping – utrwalenie efektów",
    description: "Uczymy się aplikacji taśm (tapingu), aby utrwalić wynik pracy mięśniowej."
  },
  {
    day: 6,
    title: "Finałowy rytuał młodości",
    description: "Zbieramy techniki w całość dla regularnego stosowania i utrzymania efektów."
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Elena, 34 lata",
    text: "Nie wierzyłam, że w 6 dni coś może się zmienić. Ale mąż zapytał, czy byłam u kosmetyczki! Lwia zmarszczka stała się prawie niewidoczna.",
    rating: 5
  },
  {
    id: 2,
    name: "Marina, 42 lata",
    text: "Poranne obrzęki po prostu zniknęły. Oczy otworzyły się, jakbym znowu miała 25 lat. Dziękuję za proste wyjaśnienia!",
    rating: 5
  },
  {
    id: 3,
    name: "Irina, 29 lat",
    text: "Super format. 10 minut rano, póki parzy się kawa — i jestem piękna. Taping to dla mnie odkrycie roku.",
    rating: 5
  },
  {
    id: 4,
    name: "Natalia, 51 lat",
    text: "Czoło się wygładziło, nawet przestałam zasłaniać je grzywką. Polecam wszystkim koleżankom.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Nigdy nie robiłam face fitnessu, czy to dla mnie?",
    answer: "Tak, maraton jest przeznaczony dla początkujących. Szczegółowo wyjaśniam każde ćwiczenie, nie da się popełnić błędu."
  },
  {
    question: "Czy mogę ćwiczyć, jeśli mam botoks/wypełniacze?",
    answer: "Jeśli zabiegi były mniej niż 4 tygodnie temu — lepiej poczekać. Jeśli minęło więcej czasu — można, poprawi to krążenie i przedłuży efekt lub pomoże łagodnie wyjść z preparatu."
  },
  {
    question: "Ile czasu zajmują zajęcia?",
    answer: "Tylko 10–15 minut dziennie. Możesz to robić w dowolnym dogodnym czasie."
  },
  {
    question: "Czy potrzebuję specjalnego sprzętu?",
    answer: "Tylko twoje czyste ręce, lustro i trochę kremu/olejku. Na 5. dzień warto mieć taśmę kinezjologiczną (taping) (do kupienia w aptece), ale można przejść lekcję też bez niej."
  },
  {
    question: "Jak otrzymam dostęp?",
    answer: "Od razu po opłaceniu na Twój email przyjdzie link do panelu kursanta, gdzie już czekają pierwsze lekcje."
  },
  {
    question: "Co zrobić, jeśli pominę dzień?",
    answer: "Nic strasznego! Dostęp zostaje u Ciebie, możesz nadrobić w swoim tempie."
  }
];

export const BONUSES = [
  "PDF „SOS – sposoby na poranne obrzęki”",
  "Tracker zdrowych nawyków młodości",
  "Wideo-kompleks „Ekspresowa świeżość w 5 minut”"
];