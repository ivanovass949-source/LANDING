
import React, { useState, useEffect } from 'react';
import { IMAGES } from './constants';

interface Submission {
  id: number;
  name: string;
  phone: string;
  date: string;
}

const Navbar: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'glass-nav py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className={`font-serif text-xl md:text-2xl tracking-[0.3em] font-bold transition-colors duration-500 text-accent cursor-default`}>
          ЭНИГМИЯ
        </div>
        <div className={`hidden lg:flex space-x-10 text-[10px] tracking-[0.3em] font-semibold transition-colors duration-500 text-white`}>
          <a href="#concept" className="hover-link uppercase">Концепция</a>
          <a href="#amenities" className="hover-link uppercase">Благоустройство</a>
          <a href="#residences" className="hover-link uppercase">Резиденции</a>
          <a href="#contact" className="hover-link uppercase">Контакты</a>
        </div>
        <button 
          onClick={onOpenModal}
          className={`border px-7 py-3 text-[10px] tracking-[0.2em] transition-all duration-500 uppercase font-bold border-white/40 text-white hover:bg-white hover:text-primary`}
        >
          Связаться
        </button>
      </div>
    </nav>
  );
};

const Hero: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => (
  <header className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-primary">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-110 animate-[zoom_20s_infinite_alternate]"
      style={{ 
        backgroundImage: `url(${IMAGES.hero})`,
        filter: 'brightness(0.55) contrast(1.1)'
      }}
    ></div>
    <div className="absolute inset-0 hero-gradient"></div>

    <style>{`
      @keyframes zoom {
        from { transform: scale(1.02); }
        to { transform: scale(1.1); }
      }
    `}</style>

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-block mb-4 overflow-hidden">
          <p className="text-white/60 text-[11px] tracking-[0.6em] uppercase font-bold animate-fade-up">Exclusive Real Estate</p>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-accent mb-6 leading-[1.1] animate-fade-up delay-200 tracking-tighter">
          Энигмия.<br/>
          <span className="italic font-normal opacity-90 text-[0.85em]">Дом-скульптура</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-10 items-end animate-fade-up delay-400">
          <div className="border-l border-white/20 pl-6 hidden md:block">
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-sm">
              Архитектурная доминанта Москвы в Тверском районе. 92 уникальные резиденции и парящий мост на высоте 55 метров.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenModal}
              className="bg-white text-primary px-10 py-5 text-[11px] tracking-[0.3em] font-black hover:bg-accent transition-all text-center uppercase shadow-2xl"
            >
              Выбрать резиденцию
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; light?: boolean; center?: boolean }> = ({ title, subtitle, light, center }) => (
  <div className={`mb-12 md:mb-16 ${light ? 'text-white' : 'text-accent'} ${center ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-4 mb-4 ${center ? 'justify-center' : ''}`}>
      <div className="w-10 h-[1px] bg-white/30"></div>
      {subtitle && <p className={`text-[10px] tracking-[0.5em] uppercase font-black text-white/50`}>{subtitle}</p>}
    </div>
    <h2 className={`font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] ${center ? 'mx-auto' : ''} max-w-4xl tracking-tight`}>{title}</h2>
  </div>
);

const Architecture: React.FC = () => (
  <section id="concept" className="bg-primary">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 animate-fade-up">
          <div className="relative group overflow-hidden shadow-2xl rounded-sm">
            <img src={IMAGES.architecture_main} alt="Фасад Энигмия" className="w-full h-[450px] md:h-[650px] object-cover transition-transform duration-[3s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading title="Живая Пластика Города" subtitle="Концепция" />
          <p className="text-white/80 leading-relaxed mb-10 text-lg md:text-xl font-light max-w-lg">
            Проект «Энигмия» от бюро ADM переосмысляет архитектурный ландшафт. Плавные линии фасадов создают динамичный силуэт, переходящий в современную классику.
          </p>
          <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/10">
            <div>
              <p className="text-2xl font-serif text-white mb-1">ADM</p>
              <p className="text-[9px] tracking-widest uppercase text-white/40 font-bold">Архитекторы</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-white mb-1">4.2м</p>
              <p className="text-[9px] tracking-widest uppercase text-white/40 font-bold">Потолки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LandscapingVisual: React.FC = () => (
  <section id="amenities" className="relative h-screen flex items-center overflow-hidden bg-primary p-0">
    <div className="absolute inset-0 z-0">
      <img 
        src={IMAGES.bridge_view} 
        alt="Сад в небе - Immersive View" 
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/40"></div>
    </div>
    
    <div className="absolute bottom-16 left-6 md:left-12 z-10 animate-fade-up">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-[1px] bg-white/50"></div>
        <span className="text-[10px] tracking-[0.5em] uppercase font-black text-white/80">Благоустройство</span>
      </div>
      <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tighter text-glow">Сад в небе</h2>
    </div>
  </section>
);

const LandscapingDetails: React.FC = () => (
  <section className="bg-primary flex items-center overflow-hidden py-32">
    <div className="container mx-auto px-6 md:px-12">
      <div className="max-w-6xl">
        <SectionHeading title="55 метров над Москвой" subtitle="Life at the peak" light />
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
              Приватная экосистема на вершине мегаполиса. Здесь тишина облаков встречается с ароматами вечнозеленого сада и панорамными видами на Кремль и Сити.
            </p>
            <p className="text-white/60 text-base font-light leading-relaxed">
              Уникальный формат эксплуатируемой кровли доступен только для резидентов. Это место для утренних медитаций, деловых встреч или вечернего отдыха в кругу близких.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Лаунж-террасы", desc: "Уютные ниши с мягкой мебелью" },
              { title: "Кинотеатр 55м", desc: "Просмотры под открытым небом" },
              { title: "Бар Sunset", desc: "Авторские коктейли на закате" },
              { title: "Зона Йоги", desc: "Медитации на свежем воздухе" }
            ].map((item, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-all duration-500 cursor-default shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-[10px] text-white/20 font-black tracking-widest">A{i+1}</span>
                </div>
                <h4 className="text-white text-sm tracking-widest uppercase font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-[11px] text-white/40 font-medium tracking-wide leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Residences: React.FC = () => {
  const types = [
    { name: "Студии", area: "от 42 м²", price: "от 980 000 ₽" },
    { name: "1-спальные резиденции", area: "от 54 м²", price: "от 950 000 ₽" },
    { name: "2-спальные резиденции", area: "от 88 м²", price: "от 920 000 ₽" },
    { name: "3-спальные резиденции", area: "от 124 м²", price: "от 890 000 ₽" },
    { name: "Пентхаусы", area: "от 180 м²", price: "По запросу" },
  ];

  const handleArrowClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="residences" className="bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Коллекция Резиденций" subtitle="Выбор" />
        
        <div className="flex flex-col border-t border-white/20">
          {types.map((t, idx) => (
            <div 
              key={idx} 
              onClick={handleArrowClick}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 border-b border-white/10 hover:bg-white/5 transition-all duration-500 px-6 md:px-10 cursor-pointer"
            >
              <div className="flex items-center gap-8 mb-6 md:mb-0">
                <span className="text-[12px] tracking-widest text-white/30 font-black">0{idx + 1}</span>
                <h3 className="font-serif text-2xl md:text-4xl text-accent group-hover:translate-x-3 transition-transform duration-500">{t.name}</h3>
              </div>
              
              <div className="flex items-center gap-x-12 md:gap-x-16">
                <div className="flex flex-wrap gap-x-12 md:gap-x-16 items-center">
                  <div className="min-w-[120px] md:min-w-[140px]">
                    <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 mb-2 font-bold">Площадь</p>
                    <p className="text-base md:text-lg font-light text-white">{t.area}</p>
                  </div>
                  <div className="min-w-[160px] md:min-w-[180px]">
                    <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 mb-2 font-bold">Стоимость за м²</p>
                    <p className="text-base md:text-lg font-bold text-white group-hover:text-accent transition-colors">{t.price}</p>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div 
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500"
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-[10px] tracking-[0.6em] text-white/40 uppercase max-w-lg mx-auto leading-relaxed font-semibold">
            Все резиденции сдаются с предчистовой отделкой или готовыми интерьерными решениями от ведущих бюро.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC<{ onSubmit: (name: string, phone: string) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      onSubmit(name, phone);
      setName('');
      setPhone('');
    }
  };

  return (
    <section id="contact" className="bg-primary text-white py-40 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="reveal">
            <SectionHeading title="Начните Свою Историю" subtitle="Контакты" light />
            <div className="space-y-14 mt-12">
              <div>
                <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-black mb-3">Офис продаж</p>
                <p className="text-2xl md:text-4xl font-serif tracking-tight leading-none italic mb-3">г. Москва, ул. Лесная</p>
                <p className="text-white/50 text-sm font-light uppercase tracking-widest">Тверской район</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-black mb-3">Телефон</p>
                <p className="text-2xl md:text-4xl font-serif tracking-tight leading-none text-accent">+7 (495) 123-45-67</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-black mb-3">Режим работы</p>
                <p className="text-lg font-light opacity-70 uppercase tracking-widest italic font-medium">Ежедневно 10:00 — 21:00</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-12 md:p-16 border border-white/10 rounded-sm reveal shadow-2xl">
            <h3 className="font-serif text-3xl mb-12 italic text-center text-accent">Запросить презентацию</h3>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="relative border-b border-white/20 group">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  placeholder="Ваше имя *" 
                  className="w-full bg-transparent py-4 text-white focus:outline-none placeholder:text-white/30 font-light text-xl transition-all focus:border-white" 
                />
              </div>
              <div className="relative border-b border-white/20 group">
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required 
                  placeholder="Номер телефона *" 
                  className="w-full bg-transparent py-4 text-white focus:outline-none placeholder:text-white/30 font-light text-xl transition-all focus:border-white" 
                />
              </div>
              <button type="submit" className="w-full bg-white text-primary py-6 text-[11px] tracking-[0.5em] font-black uppercase hover:bg-accent transition-all shadow-xl mt-10 active:scale-95">
                Отправить запрос
              </button>
              <p className="text-[10px] text-center text-white/30 uppercase tracking-[0.3em] leading-relaxed font-bold">
                Персональный менеджер свяжется с вами в течение 10 минут.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeedbackModal: React.FC<{ isOpen: boolean; onClose: () => void; onSubmit: (name: string, phone: string) => void }> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      onSubmit(name, phone);
      setName('');
      setPhone('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-primary/95 backdrop-blur-2xl transition-all duration-500">
      <div className="relative w-full max-w-md bg-primary p-12 text-white shadow-2xl animate-fade-up border border-white/10">
        <button onClick={onClose} className="absolute top-8 right-8 text-white/30 hover:text-white text-2xl transition-colors">✕</button>
        <h2 className="font-serif text-2xl md:text-4xl text-center mb-12 uppercase tracking-[0.2em] leading-snug italic text-accent">Заказать<br/>звонок</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative border-b border-white/10">
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              placeholder="Ваше имя *" 
              className="w-full bg-transparent py-4 text-white focus:outline-none placeholder:text-white/30 font-light text-lg" 
            />
          </div>
          <div className="relative border-b border-white/10">
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required 
              placeholder="Номер телефона*" 
              className="w-full bg-transparent py-4 text-white focus:outline-none placeholder:text-white/30 font-light text-lg" 
            />
          </div>
          <button type="submit" className="w-full bg-white text-primary py-5 text-[10px] tracking-[0.4em] font-black uppercase hover:bg-accent transition-all shadow-lg mt-8 active:scale-95">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

const FloatingPhone: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="fixed bottom-10 right-10 z-[150] w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
    title="Заказать звонок"
  >
    <div className="absolute inset-0 rounded-full animate-ping bg-white/20 pointer-events-none"></div>
    <svg className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:rotate-12 transition-transform relative z-10" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  </button>
);

const AdminDashboard: React.FC<{ submissions: Submission[]; onClear: () => void }> = ({ submissions, onClear }) => (
  <section className="bg-black text-white py-16 border-t border-white/10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8">
        <SectionHeading title="Лиды" subtitle="Admin" light />
        <button 
          onClick={onClear}
          className="text-[10px] tracking-widest uppercase border border-white/30 text-white/50 px-5 py-2.5 hover:bg-white hover:text-black transition-all font-bold"
        >
          Очистить базу
        </button>
      </div>
      <div className="overflow-x-auto rounded-sm border border-white/10 bg-white/5">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-white/30 border-b border-white/10">
              <th className="px-8 py-5">Дата</th>
              <th className="px-8 py-5">Имя</th>
              <th className="px-8 py-5">Телефон</th>
              <th className="px-8 py-5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-[12px] font-medium">
            {submissions.map((s) => (
              <tr key={s.id} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                <td className="px-8 py-5 opacity-40">{s.date}</td>
                <td className="px-8 py-5 text-accent">{s.name}</td>
                <td className="px-8 py-5 text-white/90">{s.phone}</td>
                <td className="px-8 py-5 text-right"><span className="opacity-40 uppercase tracking-tighter">New Lead</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('enigmia_leads');
    if (saved) setSubmissions(JSON.parse(saved));
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true' || params.has('admin')) setIsAdmin(true);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          const offset = 80; 
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [submissions]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (name: string, phone: string) => {
    const newSubmission: Submission = {
      id: Date.now(),
      name,
      phone,
      date: new Date().toLocaleString('ru-RU'),
    };
    const updated = [newSubmission, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('enigmia_leads', JSON.stringify(updated));
    alert('Ваша заявка принята. Менеджер свяжется с вами.');
  };

  const handleClear = () => {
    if (window.confirm('Удалить все заявки?')) {
      setSubmissions([]);
      localStorage.removeItem('enigmia_leads');
    }
  };

  return (
    <div className="bg-primary min-h-screen selection:bg-accent selection:text-primary">
      <Navbar onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <Architecture />
      <LandscapingVisual />
      <LandscapingDetails />
      <Residences />
      <ContactSection onSubmit={handleSubmit} />

      {isAdmin && submissions.length > 0 && <AdminDashboard submissions={submissions} onClear={handleClear} />}

      <footer className="bg-primary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="font-serif text-2xl tracking-[0.5em] font-bold text-white cursor-default">ЭНИГМИЯ</div>
            <p className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-bold text-center">
              © 2024 — Moscow Architectural Sculpture
            </p>
            <div className="flex gap-10">
              <a href="#" className="text-[9px] tracking-[0.4em] text-white/30 uppercase hover:text-white transition-colors font-bold">Privacy</a>
              <a href="#" className="text-[9px] tracking-[0.4em] text-white/30 uppercase hover:text-white transition-colors font-bold">Legal</a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingPhone onClick={handleOpenModal} />
      <FeedbackModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
