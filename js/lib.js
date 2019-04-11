export function bonus(items) {
    let sumBonus = 0;
    console.log(typeof(items));
    for (const item of items) {
       const limit = 10000;
       if (item > limit) {
       sumBonus += (item - limit) * 0.05;
       }
    }
    return sumBonus;
}