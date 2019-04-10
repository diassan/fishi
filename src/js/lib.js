export function bonus(items) {
    let SumBonus = 0;
    console.log(typeof(items));
    for (const item of items) {
       const limit = 10000;
       if (item > limit) {
       SumBonus += (item - limit) * 0.05;
       }
    }
    return SumBonus;
}