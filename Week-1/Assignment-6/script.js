function delayedResultPromise (nl, n2, delayTime) {
    // using promise to implement
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            resolve(nl + n2);
        }, delayTime);
    });
}

delayedResultPromise (4, 5, 3000) . then (console.log);
// 9 (4+5) will be shown in the console after 3 seconds

async function main () {
    // call delayedResultPromise here and get the result using async/await.
    const result = await delayedResultPromise(-5, 10, 2000);  // 5 (-5+10) will be shown in the console after 2 seconds
    console.log(result);

}

main(); // result will be shown in the console after ‹delayTime> seconds
