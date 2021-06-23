import { css } from 'linaria';
import { styled } from 'linaria/react';
import { breakpoints, gridLayout } from 'styles/breakpoints';

const breakPointPrev = (
  name: string,
  gridLayoutObject = gridLayout,
  breakPointNames = Object.keys(gridLayoutObject),
): number | null => {
  const n = breakPointNames.indexOf(name);

  if (n !== -1) {
    return n;
  }
  return null;
};

const breakPointMax = (name: string, gridLayoutObject = gridLayout): string | null => {
  const prev = breakPointPrev(name, gridLayoutObject);
  const corilationValue = 0.02; // Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
  if (prev !== null) {
    return `${parseInt(gridLayoutObject[name].bottom, 10) - corilationValue}px`;
  }
  return null;
};

const mediaBreakPointDown = (name, gridLayoutObject = gridLayout, content): any => {
  const max = breakPointMax(name, gridLayoutObject);
  if (max) {
    return {
      [`@media (min-width: ${max})`]: {
        ...content,
      },
    };
  }
  return {
    ...content,
  };
};

const mediaQueriesForColumn = () => {
  let mediaQueries = {
    '&.col-auto': {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%',
    },
  };
  Object.keys(gridLayout)
    .reverse()
    .forEach((key) => {
      const max = breakPointMax(key, gridLayout);
      const breakpoint = `@media (min-width: ${max})`;
      for (let i = 1; i <= gridLayout[key].gridSize; i += 1) {
        const hasBreakpoint = Object.prototype.hasOwnProperty.call(mediaQueries, breakpoint);
        const width = `${Math.round((i / 12) * 10e7) / 10e5}%`;
        const content = {
          [`&.col-${key}-${i}`]: {
            flexBasis: width,
            flexGrow: 0,
            maxWidth: width,
          },
        };
        const breakpointObject = mediaBreakPointDown(key, gridLayout, content);
        if (max && hasBreakpoint) {
          mediaQueries = {
            ...mediaQueries,
            [breakpoint]: {
              ...mediaQueries[breakpoint],
              ...breakpointObject[breakpoint],
            },
          };
        } else {
          mediaQueries = {
            ...mediaQueries,
            ...breakpointObject,
          };
        }
      }
    });

  return mediaQueries;
};

const mediaQueriesForContainer = () => {
  let mediaQueries = {};
  Object.keys(gridLayout).forEach((key) => {
    const content = {
      padding: `0 calc(${gridLayout[key].gutter || '24px'})`,
    };
    mediaQueries = {
      ...mediaQueries,
      ...mediaBreakPointDown(key, gridLayout, content),
    };
  });

  return {
    ...mediaQueries,
  };
};

const spacingForRow = () => {
  let spacingQueries = {
    '&.spacing-xs-auto-auto': {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
    },
  };
  let mediaQueries = {};
  for (let i = 0; i <= 10; i += 1) {
    for (let j = 0; j <= 10; j += 1) {
      const content = {
        [`&.spacing-xs-${i}-${j}`]: {
          boxSizing: 'border-box',
          display: 'flex',
          flexWrap: 'wrap',
          margin: `-${j * 4}px -${i * 4}px`,
          width: `calc(100% + ${i * 8}px)`,
          '& > div': {
            padding: `${j * 4}px ${i * 4}px`,
          },
        },
      };

      spacingQueries = {
        ...content,
        ...spacingQueries,
      };
    }
  }
  Object.keys(gridLayout)
    .reverse()
    .forEach((key) => {
      const max = breakPointMax(key, gridLayout);
      const breakpoint = `@media (min-width: ${max})`;
      if (max) {
        const content = {
          [`&.spacing-xs-auto-auto`]: {
            margin: `-${gridLayout[key].gutter} -${gridLayout[key].gutter}`,
            width: `calc(100% + ${gridLayout[key].gutter} * 2)`,
            '& > div': {
              padding: `${gridLayout[key].gutter} ${gridLayout[key].gutter}`,
            },
          },
        };
        const breakpointObject = mediaBreakPointDown(key, gridLayout, content);
        mediaQueries = {
          ...mediaQueries,
          [breakpoint]: {
            ...mediaQueries[breakpoint],
            ...breakpointObject[breakpoint],
          },
        };
      }
    });

  return { ...mediaQueries, ...spacingQueries };
};

export const container = css`
  width: ${breakpoints.lg};
  max-width: 100%;
  margin: 0 auto;
  ${mediaQueriesForContainer()};
`;

export const Row = styled.div`
  ${spacingForRow()};
`;

export const Col = styled.div`
  ${mediaQueriesForColumn()};
`;
