// from https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array/11935263
export const getRandomSubarray = (arr, size) => {
    let shuffled = arr.slice(0)
    let i = arr.length
    while (i--) {
        let index = Math.floor((i + 1) * Math.random());
        let temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}
