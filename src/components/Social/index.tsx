import React from 'react';

interface SocialLinksProps {
  showContact?: boolean;
}

const SocialLinks = ({ showContact }: SocialLinksProps) => {
  return (
    <div className="social-links">
      <a
        href="https://twitter.com/miguelquispecom"
        className="social-twitter"
        title="Sígueme en Twitter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-hidden="true"
          viewBox="0 0 20 17"
        >
          <path
            fillRule="evenodd"
            d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/quispemiguel/"
        className="social-linkedin "
        title="Conéctate conmigo en LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-hidden="true"
          viewBox="0 0 15 15"
        >
          <path
            fillRule="evenodd"
            d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            clipRule="evenodd"
          />
          <path d="M3 5.012H0V15h3V5.012Z" />
        </svg>
      </a>
      <a
        href="https://github.com/miguelquispe"
        className="social-github "
        title="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-hidden="true"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      {showContact && (
        <a
          href="mailto:hola@miguelquispe.com"
          className="social-contact "
          title="Escríbeme por correo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
