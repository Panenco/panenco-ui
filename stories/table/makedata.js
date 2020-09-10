import namor from 'namor';
import { Stamp } from 'components';
import React from 'react';
import { colors } from 'styles';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (num) => {
  // const statusChance = Math.random();

  return {
    firstName: namor.generate({ words: 1, numbers: 0 }).split('-')[0],
    lastName: namor.generate({ words: 1, numbers: 0 }).split('-')[0],
    status: <Stamp color={num % 3 === 0 ? colors.alert : colors.success}>Status</Stamp>, // eslint-disable-line
    progress: Math.floor(Math.random() * 100),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    num,
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];

    return range(len).map((_, i) => {
      return {
        ...newPerson(i),
      };
    });
  };

  return makeDataLevel();
}
