import { Text } from ".";
import { IFullScreenSliderTextProps } from ".";
export function LazerText({ ...rest }: IFullScreenSliderTextProps) {
  return (
    <Text {...rest}>
      <strong className="text-strong">lazer</strong> à um passo
    </Text>
  );
}
