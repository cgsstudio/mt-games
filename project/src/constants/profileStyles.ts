export const PROFILE_TYPOGRAPHY = {
  PAGE_TITLE: "font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]",
  LABEL: "block text-[13px] uppercase mb-1 text-[#758695] barlow-bold",
  INPUT: "w-full py-3 px-6 bg-[#050d19] rounded-[6px] border-[2px] border-[#161f29] text-[#9d9a9a]/80 focus:outline-none focus:border-[#d540f3] orbitron-medium text-[20px] leading-none",
  MODAL_TITLE: "text-[#fff0c9] text-lg leading-[1.2] barlow-condensed-medium",
  UPLOAD_TEXT: "text-[#fff0c9] text-base text-center barlow-semibold"
} as const;

export const FORM_FIELDS = [
  { name: 'username', label: 'USER NAME:', type: 'text' },
  { name: 'email', label: 'EMAIL:', type: 'email' },
  { name: 'confirmEmail', label: 'CONFIRM EMAIL:', type: 'email' },
  { name: 'password', label: 'NEW PASSWORD:', type: 'password' },
  { name: 'confirmPassword', label: 'CONFIRM PASSWORD:', type: 'password' }
] as const;
