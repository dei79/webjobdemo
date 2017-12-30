/*
 * A multi instance webjob
 */

let delay = 3;

function worker() {

    setTimeout(() => {

        console.log('Hello World')

        // do it again
        worker();
    }, delay * 1000);
}

console.log('Starting WebJob Worker with ' + delay + ' seconds delay');
worker();
