// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

//My solution

function rgb(r, g, b) {
    let res = [];
    let hr = hexColour(r);
    let hg = hexColour(g);
    let hb = hexColour(b);

    if (hr.toString().length === 1) {
        res.push('0', hr)
    } else {
        res.push(hr)
    }
    if (hg.toString().length === 1) {
        res.push('0', hg)
    } else {
        res.push(hg)
    }
    if (hb.toString().length === 1) {
        res.push('0', hb)
    } else {
        res.push(hb)
    }


    return res.join('').toUpperCase()
}

function hexColour(c) {
    if (c < 256 && c > 0) {
        return Math.abs(c).toString(16);
    } else if (c > 255) {
        return Math.abs(255).toString(16);
    }
    return 0;
}
