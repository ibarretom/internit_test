interface IProps extends React.HTMLAttributes<SVGElement> {}

export function Bullet({ className = "", ...rest }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="24"
      viewBox="0 0 46 24"
      fill="none"
      {...rest}
      className={`bullet ${className}`}
    >
      <g clipPath="url(#clip0_164_132)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-5.17292e-07 11.9337C0.54438 11.6685 0.816566 11.4033 1.22485 11.2707C8.16568 7.55802 14.9704 3.97791 21.9112 0.397798C22.7278 8.24381e-06 23.4083 8.27356e-06 24.2249 0.397798C31.0296 3.97791 37.9704 7.69062 44.9112 11.2707C45.1834 11.5359 45.5917 11.6685 46 11.9337C45.5917 12.1989 45.3195 12.4641 45.0473 12.5967C37.9704 16.3094 31.0296 19.8895 23.9527 23.6022C23.4083 23.8674 22.8639 24.1326 22.1834 23.7348C14.9704 19.8895 7.75739 16.1768 0.544376 12.3315C0.408279 12.1989 0.27219 12.1989 -5.17292e-07 11.9337Z"
          fill="#FFB41D"
        />
      </g>
      <defs>
        <clipPath id="clip0_164_132">
          <rect
            width="24"
            height="46"
            fill="white"
            transform="translate(46) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
