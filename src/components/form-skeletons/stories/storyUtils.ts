export function getGroupFieldStoryOptions() {
  return [
    `Assire var Anahid`,
    `Francesca Findabair`,
    `Fringilla Vigo`,
    `Ida Emean aep Sivney`,
    `Keira Metz`,
    `Margarita Laux-Antille`,
    `Philippa Eilhart`,
    `Sabrina Glevissig`,
    `Sheala de Tancarville`,
    `Triss Merigold`,
    `Yennefer of Vengerberg`,
  ].map(name => {
    return {
      label: name,
      value: name.toLowerCase().replace(/\s/g, `-`),
    }
  })
}
