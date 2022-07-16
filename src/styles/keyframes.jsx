/** @jsxRuntime classic */
/** @jsx jsx */
//css
import { keyframes } from '@emotion/react';


export const fideIn = {
    up: keyframes`
      from, 0%, to {
          visibility: visible;
          opacity: 0;
          transform: translateY(20px);
      }
      100% {
          opacity: 1;
          transform: translateY(0);
    }
    `,
    down: keyframes`
      from, 0%, to {
          visibility: visible;
          opacity: 0;
          transform: translateY(0);
      }
      100% {
          opacity: 1;
          transform: translateY(20px);
    }
    `,
    in: keyframes`
      from, 0%, to {
          visibility: visible;
          opacity: 0;
      }
      100% {
          opacity: 1;
    }
    `,
}

export const fideOut = {
    up: keyframes`
      from, 0%, to {
          opacity: 1;
          transform: translateY(20px);
      }
      100% {
          visibility: hidden;
          opacity: 0;
          transform: translateY(0);
    }
    `,
    down: keyframes`
      from, 0%, to {
          opacity: 1;
          transform: translateY(0);
      }
      100% {
          visibility: hidden;
          opacity: 0;
          transform: translateY(20px);
    }
    `,
    out: keyframes`
      from, 0%, to {
          opacity: 1;
      }
      100% {
          visibility: hidden;
          opacity: 0;
    }
    `,
}

export const moveUp = {
    5: keyframes`
      from, 0%, to {
          transform: translateY(5px);
      }
      100% {
          transform: translateY(0);
    }
    `,
    10: keyframes`
      from, 0%, to {
          transform: translateY(10px);
      }
      100% {
          transform: translateY(0);
    }
    `,
    15: keyframes`
      from, 0%, to {
          transform: translateY(15px);
      }
      100% {
          transform: translateY(0);
    }
    `,
    20: keyframes`
      from, 0%, to {
          transform: translateY(20px);
      }
      100% {
          transform: translateY(0);
    }
    `,
}

export const moveDown = {
    5: keyframes`
      from, 0%, to {
          transform: translateY(0);
      }
      100% {
          transform: translateY(5px);
    }
    `,
    10: keyframes`
      from, 0%, to {
          transform: translateY(0);
      }
      100% {
          transform: translateY(10px);
    }
    `,
    15: keyframes`
      from, 0%, to {
          transform: translateY(0);
      }
      100% {
          transform: translateY(15px);
    }
    `,
    20: keyframes`
      from, 0%, to {
          transform: translateY(0);
      }
      100% {
          transform: translateY(20px);
    }
    `,
}
