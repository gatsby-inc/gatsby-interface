const shortOptions = ["Ahemmusa", "Erabenimsun", "Urshilaku", "Zainab"]

const midOptions = [
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
]

const longOptions = [
  "Addadshashanammu",
  "Ald Daedroth",
  "Ald Sotha",
  "Almurbalarammi",
  "Anudnabia",
  "Ashalmawia",
  "Ashalmimilkala",
  "Ashunartes",
  "Ashurnibibi",
  "Assalkushalit",
  "Assarnatamat",
  "Assernerairan",
  "Assurdirapal",
  "Assurnabitashpi",
  "Bal Fell",
  "Bal Ur",
  "Dushariran",
  "Ebernanit",
  "Esutanamus",
  "Ibishammus",
  "Ihinipalit",
  "Kaushtarari",
  "Kushtashpi",
  "Magas Volar",
  "Maelkashishi",
  "Onnissiralis",
  "Ramimilk",
  "Shashpilamat",
  "Tusenend",
  "Ularradallaku",
  "Yansirramus",
  "Yasammidan",
  "Zaintiraris",
  "Zergonipal",
]

type OptionsSize = "short" | "mid" | "long"

const optionsByLength: Record<OptionsSize, string[]> = {
  short: shortOptions,
  mid: midOptions,
  long: longOptions,
}

export function getGroupFieldStoryOptions(size: OptionsSize = "mid") {
  return optionsByLength[size].map(name => {
    return {
      label: name,
      value: name.toLowerCase().replace(/\s/g, `-`),
    }
  })
}
