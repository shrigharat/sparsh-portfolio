import CopyButton from './CopyButton';

const FATHER_EMAIL = 'Santosh1976patil@gmail.com';
const MOTHER_EMAIL = 'Pallu8283patil@gmail.com';
const FATHER_PHONE = '+91 8652860101';
const MOTHER_PHONE = '+91 8087760007';

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" className="fill-current opacity-50 flex-shrink-0">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" className="fill-current opacity-50 flex-shrink-0">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

interface ContactCardProps {
  name: string;
  relation: string;
  phone: string;
  email: string;
  phoneHref: string;
}

function ContactCard({ name, relation, phone, email, phoneHref }: ContactCardProps) {
  return (
    <div
      className="flex-1 bg-white border border-gray-100 hover:border-[#00b1ca]/50 transition-colors overflow-hidden"
      style={{ borderTop: '3px solid #00b1ca' }}
    >
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[#00b1ca] font-semibold mb-1">
          {relation}
        </p>
        <h3 className="font-heading font-bold text-[#003d47] text-lg">{name}</h3>
      </div>

      <div className="px-5 py-4 flex flex-col gap-3">
        <div className="flex items-center gap-3 text-[#003d47]">
          <PhoneIcon />
          <a href={`tel:${phoneHref}`} className="font-body text-[13px] flex-1 hover:text-[#00b1ca] transition-colors">
            {phone}
          </a>
          <CopyButton text={phone} />
        </div>

        <div className="flex items-center gap-3 text-[#003d47]">
          <EmailIcon />
          <a href={`mailto:${email}`} className="font-body text-[13px] flex-1 hover:text-[#00b1ca] transition-colors truncate">
            {email}
          </a>
          <CopyButton text={email} />
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center py-16 gap-10 bg-white overflow-hidden"
    >
      <span
        className="absolute top-0 right-2 font-heading font-bold text-[#00b1ca] leading-none select-none pointer-events-none"
        style={{ fontSize: '200px', opacity: 0.035 }}
      >
        05
      </span>

      <div className="w-[90%] z-10">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#00b1ca] font-semibold mb-2">
          Get In Touch
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003d47]">
          Contact
        </h2>
        <div className="w-12 h-[3px] bg-[#00b1ca] mt-3" />
      </div>

      <div className="w-[90%] z-10 flex flex-col md:flex-row gap-5">
        <ContactCard
          name="Santosh Patil"
          relation="Sparsh's Father"
          phone={FATHER_PHONE}
          email={FATHER_EMAIL}
          phoneHref="8652860101"
        />
        <ContactCard
          name="Pallavi Patil"
          relation="Sparsh's Mother"
          phone={MOTHER_PHONE}
          email={MOTHER_EMAIL}
          phoneHref="8087760007"
        />
      </div>

      <p className="font-body text-[13px] text-gray-400 w-[90%] z-10">
        Feel free to reach out regarding any opportunities for Sparsh.
      </p>
    </section>
  );
}
