import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Shared icon renderer.
 */
const BaseIcon = ({ children, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
};

const FaGithub = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M9 19c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3a3.5 3.5 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-6A4.6 4.6 0 0 0 18 7.5 4.2 4.2 0 0 0 17.9 4S16.8 3.7 15 5a12.5 12.5 0 0 0-6 0C7.2 3.7 6.1 4 6.1 4A4.2 4.2 0 0 0 6 7.5a4.6 4.6 0 0 0-1.5 3.3c0 4.7 2.7 5.7 5.3 6A3.5 3.5 0 0 0 9 19v3" />
    </BaseIcon>
  );
};

const FaLinkedin = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5" />
      <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" />
      <path d="M12 16v-3a2 2 0 1 1 4 0v3" />
    </BaseIcon>
  );
};

const FaXTwitter = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M4 4l16 16" />
      <path d="M20 4L8 18" />
    </BaseIcon>
  );
};

const FaInstagram = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
};

const FaArrowUpRightFromSquare = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <rect x="4" y="8" width="12" height="12" rx="2" />
    </BaseIcon>
  );
};

const FaCode = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M8 9 4 12l4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </BaseIcon>
  );
};

const FaGraduationCap = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="m2 10 10-5 10 5-10 5-10-5Z" />
      <path d="M6 12v4c0 1 2.7 3 6 3s6-2 6-3v-4" />
    </BaseIcon>
  );
};

const FaBug = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M9 9V6a3 3 0 1 1 6 0v3" />
      <rect x="8" y="9" width="8" height="10" rx="4" />
      <path d="M4 10h4" />
      <path d="M16 10h4" />
      <path d="M4 14h4" />
      <path d="M16 14h4" />
    </BaseIcon>
  );
};

export {
  FaArrowUpRightFromSquare,
  FaBug,
  FaCode,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
};
