import { forwardRef } from "react";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  mask?: TMasks;
}

export const Input = forwardRef<HTMLInputElement, IProps>(
  ({ id, mask, className = "", value = "", ...rest }, ref) => {
    const valueOrMasked = mask && masks[mask] ? masks[mask](value) : value;
    const emptyOrDirty = valueOrMasked ? "input__floating-label--dirty" : "";

    return (
      <input
        id={id}
        ref={ref}
        className={`${emptyOrDirty} ${className}`}
        value={valueOrMasked}
        {...rest}
      />
    );
  }
);

type TMasks = "phone" | "email";

const masks: {
  [k in TMasks]: (value: string | number | readonly string[]) => string;
} = {
  phone: function formatPhoneNumber(value) {
    let valueWithOnlyNumbers = value.toString().replace(/\D/g, "");

    if (!valueWithOnlyNumbers) return valueWithOnlyNumbers;

    if (valueWithOnlyNumbers.length >= 11)
      valueWithOnlyNumbers = valueWithOnlyNumbers.slice(0, 11);

    const match = valueWithOnlyNumbers.match(
      /^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})$/
    );

    if (!match) valueWithOnlyNumbers;

    let formatted = "";

    if (match![1]) formatted += `(${match![1]}`;
    if (match![2]) formatted += `) ${match![2]}`;
    if (match![3]) formatted += ` ${match![3]}`;
    if (match![4]) formatted += `-${match![4]}`;

    return formatted.trim();
  },
  email: function formatEmail(value) {
    const lettersAndDots = Array.from({ length: 26 }, (_, index) =>
      String.fromCharCode(97 + index)
    );
    lettersAndDots.push(".");

    const lowercasedValue = value.toString().toLowerCase();

    if (!value.toString().includes("@")) return lowercasedValue;

    const [username, domainAndDot] = lowercasedValue.split("@");

    if (!domainAndDot) return lowercasedValue;

    return [username, domainAndDot.replace(/[^a-zA-Z.]/g, "")].join("@");
  },
};
