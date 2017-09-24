import { InputsType } from '../../enums';

import { fromPairs } from 'lodash';

function parseInput([inputKey, inputProps]) {
  switch (inputProps.component) {
    case InputsType.AUTOCOMPLETE:
      return [inputKey, Object.assign({ serializeOnlyValue: false }, inputProps)];
    default:
      return [inputKey, inputProps];
  }
}

export function parse(inputs) {
  const parsedInputs = Object.entries(inputs).map(parseInput);
  return fromPairs(parsedInputs);
}
