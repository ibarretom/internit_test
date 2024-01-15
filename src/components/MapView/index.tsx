import { forwardRef } from "react";

interface IProps extends React.SVGProps<SVGSVGElement> {
  market1Ref?: React.LegacyRef<SVGRectElement>;
  market2Ref?: React.LegacyRef<SVGRectElement>;
  petRef?: React.LegacyRef<SVGRectElement>;
}

export const MapView = forwardRef<SVGSVGElement, IProps>(
  ({ market1Ref, market2Ref, petRef, ...rest }: IProps, ref) => {
    return (
      <svg
        {...rest}
        width="1163"
        height="1102"
        viewBox="0 0 1163 1102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={ref}
      >
        <g clipPath="url(#clip0_10_18)">
          <rect width="1163" height="1102" fill="url(#pattern0)" />
          <rect
            x="793"
            y="679"
            width="97"
            height="49"
            fill="#D9D9D9"
            opacity="0"
            className="map_market"
            ref={market1Ref}
          />
          <rect
            x="770"
            y="794"
            width="97"
            height="49"
            fill="#D9D9D9"
            opacity="0"
            className="map_market"
            ref={market2Ref}
          />
          <rect
            x="431"
            y="767"
            width="97"
            height="49"
            fill="#D9D9D9"
            opacity="0"
            className="map_pet"
            ref={petRef}
          />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_10_18"
              transform="scale(0.000859845 0.000907441)"
            />
          </pattern>
          <clipPath id="clip0_10_18">
            <rect width="1163" height="1102" fill="white" />
          </clipPath>
          <image
            id="image0_10_18"
            width="1163"
            height="1102"
          />
        </defs>
      </svg>
    );
  }
);