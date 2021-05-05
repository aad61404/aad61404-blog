function chirp(n) {
    return n > 1 ? chirp(n-1) +"-chirp" : 'chirp';
}

assert(chirp(3) == 'chirp-chirp-chirp','Calling the named function comes naturally');

console.log(chirp(3));