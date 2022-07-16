export const BREAK_POINT = {
    s: 600,
    sm: 780,
    m: 1025,
    l: 1200,
}

export const windowSize = () => {
    // console.log(window.innerWidth);
    return window.innerWidth;
}

export const getBreakPoint = () => {
    let size = windowSize();
    if(size < BREAK_POINT.s){
        return 1;
    }else if (size < BREAK_POINT.m) {
        return 2;
    }else {
        return 3;
    }
}


export const replaceNumber = (str) => {
    return Number(str.replace('px', ''));
}

export const handleResize = (callback) => {
    //リサイズの処理（リサイズ完了後に処理）
    let timeoutID = 0;
    let delay = 500;

    window.addEventListener('resize', () => {
        clearTimeout(timeoutID);

        timeoutID = setTimeout(() => {
            callback();
        }, delay);
    }, false);
}
