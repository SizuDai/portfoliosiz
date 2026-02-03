import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6">Have an idea?</p>
          <h2 className="font-display text-6xl md:text-9xl font-extrabold uppercase tracking-tighter mb-12 text-slate-900 dark:text-white">Let's Talk</h2>
          <a
            href="mailto:sizansmith.lamichhane@gmail.com"
            className="text-lg md:text-2xl font-medium border-b-2 border-primary hover:text-primary transition-colors pb-1 text-slate-900 dark:text-white"
          >
            sizansmith.lamichhane@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-primary">mail</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Email</p>
              <p className="text-sm text-slate-900 dark:text-slate-300">sizansmith.lamichhane@gmail.com</p>
            </div>
          </div>
          {/* Phone and Location hidden as per request */}
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-[10px] uppercase tracking-widest">
            © {currentYear} Sizan Smith Lamichhane • Motion & Design Portfolio
          </div>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/sizansmith"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <img
                alt="Instagram"
                className="w-5 dark:invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqImzbsp86DPA6zGQc7kABFXZYWWEMXk7wnfo0lDL9av99fsR_TZ0j-XM9fso_iZUaXQv3hpSqipPNa3djYhuIZe3AP-X06ZOdHEt1tvZj3ua5dXFeuYcdyVpTibQlH7C0Uh84_ngzs1l_q7sgFNPusTaNpUWxd8cW1ILB7MoEmNEyeVsTrBS43-lY2eWPHtW90Dm8M13-lTk_w_kWPLmSXf7dlq_Du559vEApieitoS7Rn5nwG0SdeeYyTqUtEeCMVclzLVCkF_ZJ"
              />
            </a>
            <a
              href="https://linkedin.com/in/sizansmith"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <img
                alt="LinkedIn"
                className="w-5 dark:invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqC9Rb2PNMsjDQXOseG1T4aQ3IJVgUU6Ac5FeRdJ8ayAFsbKbyyv_H3dtAMjvZF4nOYdQsHeT1ybig1-Oaz5dtdlYpewVhDr9QOA1HLrqZcxtNbTRwDnKVR6M2vocHpZhc8yanO5vYAVhud9WwjpHsk484Py6YRlmDRHolmT9AHACYH_bZ9sa48qs8829FpqsosZ3Pv2fVqEro5V__ynhCK0qZdk-Umi2Rzgra6JOx74YwihmYdfhgFMXizt3QNEetCReFTiISiO_s"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;