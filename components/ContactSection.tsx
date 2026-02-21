'use client';

const FATHER_EMAIL = 'Santosh1976patil@gmail.com';
const MOTHER_EMAIL = 'Pallu8283patil@gmail.com';
const FATHER_PHONE = '+91 8652860101';
const MOTHER_PHONE = '+91 8087760007';

const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-primary">
    <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
  </svg>
);

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col h-[80vh] md:h-[60vh] px-4 py-12 md:p-12 w-full justify-center items-center gap-6"
    >
      <h2 className="font-heading underline font-bold text-3xl text-center w-full">Contact</h2>
      <div className="parents-contact w-full max-w-[1000px] font-body">
        <div className="flex-col flex gap-4 md:gap-16 justify-between md:flex-row">
          <div className="flex-1 flex-col border-2 border-[#00B1CA]/50">
            <div className="bg-[#00B1CA]/10 text-primary p-2 font-semibold border-b-2 border-[#00B1CA]/50">
              Santosh Patil (Sparsh&apos;s Father)
            </div>
            <div className="p-2">
              <table>
                <tbody>
                  <tr className="!h-fit py-2">
                    <td className="w-16">Phone</td>
                    <td className="flex items-center justify-start gap-3">
                      <a className="inline" href="tel:8652860101">
                        +91 8652860101
                      </a>
                      <span
                        className="inline cursor-pointer"
                        title="Copy phone to clipboard"
                        onClick={() => navigator.clipboard.writeText(FATHER_PHONE)}
                      >
                        <CopyIcon />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td className="flex items-center justify-start gap-3">
                      <a className="underline" href="mailto:Santosh1976patil@gmail.com">
                        Santosh1976patil@gmail.com
                      </a>
                      <span
                        className="inline cursor-pointer"
                        title="Copy email to clipboard"
                        onClick={() => navigator.clipboard.writeText(FATHER_EMAIL)}
                      >
                        <CopyIcon />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex-1 flex-col border-2 border-[#00B1CA]/50">
            <div className="bg-[#00B1CA]/10 text-primary p-2 font-semibold border-b-2 border-[#00B1CA]/50">
              Pallavi Patil (Sparsh&apos;s Mother)
            </div>
            <div className="p-2">
              <table>
                <tbody>
                  <tr>
                    <td className="w-16">Phone</td>
                    <td className="flex items-center justify-start gap-3">
                      <a className="inline" href="tel:8087760007">
                        +91 8087760007
                      </a>
                      <span
                        className="inline cursor-pointer"
                        title="Copy phone number to clipboard"
                        onClick={() => navigator.clipboard.writeText(MOTHER_PHONE)}
                      >
                        <CopyIcon />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td className="flex items-center justify-start gap-3">
                      <a href="mailto:Pallu8283patil@gmail.com" className="underline">
                        Pallu8283patil@gmail.com
                      </a>
                      <span
                        className="inline cursor-pointer"
                        title="Copy email to clipboard"
                        onClick={() => navigator.clipboard.writeText(MOTHER_EMAIL)}
                      >
                        <CopyIcon />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p className="font-body">
        Feel free to reach out to us on our provided contacts regarding any opportunities that you
        might have for Sparsh
      </p>
    </section>
  );
}
