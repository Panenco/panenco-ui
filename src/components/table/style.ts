import { styled } from 'linaria/react';
import { transparentize } from 'polished';

export const Styles = styled.div`
  /* padding: 1rem; */
  table {
    /* width: 100%; */
  }
  .mainTable {
    border-spacing: 0;
    /* border: 1px solid black; */
    border: 1px solid ${(props: any): string => props.theme.colors.border};
    border-radius: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    max-width: 100%;
    color: ${(props: any): string => props.theme.colors.primary};

    .bodyTr {
      position: relative;
      vertical-align: center;
      :nth-of-type(odd) {
        background-color: ${(props: any): string => transparentize(0.4, props.theme.colors.border)};
      }
    }

    .headerTr {
      background-color: #fff !important;
      position: relative;
    }
  }

  th,
  td {
    margin: 0;
    padding: 10px;
    text-align: left;
    /* border-bottom: 1px solid black;
      border-right: 1px solid black; */
    white-space: nowrap;

    :last-child {
      border-right: 0;
    }
  }

  .bodyMainHiddenTd {
    padding-left: 0px;
    &InnerData {
      padding-left: 36px;
    }
  }

  .tableHeaderWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &SortedBox {
      margin-left: 5px;
      display: flex;
      flex-direction: column;

      &Icon {
        color: ${(props: any): string => props.theme.colors.secondary};
        width: 10px;
        height: 10px;
        &Active {
          color: ${(props: any): string => props.theme.colors.accent500};
        }
      }
    }
  }
  .header {
    &FilterBox {
      display: flex;
      align-items: flex-start;

      &Icon {
        color: ${(props: any): string => props.theme.colors.secondary};
        margin-right: 5px;
      }
    }
  }
`;
