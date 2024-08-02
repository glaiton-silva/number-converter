function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) {
        factor = 0.5;
    }
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
    }
    return result;
}

function updateGradient() {
    const colors = [
        [245, 247, 250], // rgb(245, 247, 250)
        [195, 207, 226], // rgb(195, 207, 226)
        [161, 196, 253], // rgb(161, 196, 253)
        [251, 194, 235]  // rgb(251, 194, 235)
    ];
    
    let step = 0;
    const steps = 300;
    let currentIndex = 0;
    let nextIndex = 1;
    
    function update() {
        const c0_0 = colors[currentIndex];
        const c0_1 = colors[nextIndex];
        const istep = 1.0 / steps;
        const r = Math.round(c0_0[0] * (1 - step * istep) + c0_1[0] * (step * istep));
        const g = Math.round(c0_0[1] * (1 - step * istep) + c0_1[1] * (step * istep));
        const b = Math.round(c0_0[2] * (1 - step * istep) + c0_1[2] * (step * istep));
        const color1 = rgbToHex(r, g, b);
        const color2 = rgbToHex(r, g, b);
        
        document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
        
        step += 1;
        if (step > steps) {
            step = 0;
            currentIndex = nextIndex;
            nextIndex = (nextIndex + 1) % colors.length;
        }
        requestAnimationFrame(update);
    }
    update();
}

document.addEventListener("DOMContentLoaded", updateGradient);
