const banks = [
  {
    card_no: 627381,
    bank_name: "ansar",
    bank_title: "بانک انصار",
    bank_logo: "",
    color: "#26eeb900",
  },
  {
    card_no: 636214,
    bank_name: "ayandeh",
    bank_title: "بانک آینده",
    bank_logo: "https://sjafarnia.github.io/bank-images/ayandeh.jpg",
    color: "#3388391d",
  },
  {
    card_no: 502938,
    bank_name: "dey",
    bank_title: "بانک دی",
    bank_logo: "https://sjafarnia.github.io/bank-images/dey.jpg",
    color: "#0dffffff",
  },
  {
    card_no: 627412,
    bank_name: "eghtesad_novin",
    bank_title: "بانک اقتصادنوین",
    bank_logo: "",
    color: "#1a662891",
  },
  {
    card_no: 628157,
    bank_name: "etebari_tosee",
    bank_title: "موسسه اعتباری توسعه",
    bank_logo: "",
    color: "#33000000",
  },
  {
    card_no: 505416,
    bank_name: "gardeshgari",
    bank_title: "بانک گردشگری",
    bank_logo: "",
    color: "#29344143",
  },
  {
    card_no: 639599,
    bank_name: "ghavvamin",
    bank_title: "بانک قوامین",
    bank_logo: "",
    color: "#1afff400",
  },
  {
    card_no: 627488,
    bank_name: "kar_afarin",
    bank_title: "بانک کارآفرین",
    bank_logo: "",
    color: "#333a881d",
  },
  {
    card_no: 502910,
    bank_name: "kar_afarin",
    bank_title: "بانک کارآفرین",
    bank_logo: "",
    color: "#333a881d",
  },
  {
    card_no: 603770,
    bank_name: "keshavarzi",
    bank_title: "بانک کشاورزی",
    bank_logo: "https://sjafarnia.github.io/bank-images/keshavarzi.jpg",
    color: "#29aa9a22",
  },
  {
    card_no: 639217,
    bank_name: "keshavarzi",
    bank_title: "بانک کشاورزی",
    bank_logo: "https://sjafarnia.github.io/bank-images/keshavarzi.jpg",
    color: "#29aa9a22",
  },
  {
    card_no: 628023,
    bank_name: "maskan",
    bank_title: "بانک مسکن",
    bank_logo: "https://sjafarnia.github.io/bank-images/maskan.jpg",
    color: "#1a000000",
  },
  {
    card_no: 639370,
    bank_name: "mehr_e_eghtesad",
    bank_title: "بانک مهر اقتصاد",
    bank_logo: "",
    color: "#1a656565",
  },
  {
    card_no: 606373,
    bank_name: "mehr_e_iranian",
    bank_title: "بانک قرض الحسنه مهر ایرانیان",
    bank_logo: "",
    color: "#1a209b1c",
  },
  {
    card_no: 603799,
    bank_name: "melli",
    bank_title: "بانک ملی ایران",
    bank_logo: "https://sjafarnia.github.io/bank-images/melli.jpg",
    color: "#1a00e0d7",
  },
  {
    card_no: 610433,
    bank_name: "mellat",
    bank_title: "بانک ملت",
    bank_logo: "https://sjafarnia.github.io/bank-images/mellat.jpg",
    color: "#1aba0b22",
  },
  {
    card_no: 991975,
    bank_name: "mellat",
    bank_title: "بانک ملت",
    bank_logo: "https://sjafarnia.github.io/bank-images/mellat.jpg",
    color: "#1aba0b22",
  },
  {
    card_no: 111111,
    bank_name: "ok",
    bank_title: "همه کارتخوان‌ها",
    bank_logo:
      "https://basemax.github.io/DetectIranianBankWeb/images/shetab.svg",
    color: "#1a00e0d7",
  },
  {
    card_no: 622106,
    bank_name: "parsian",
    bank_title: "بانک پارسیان",
    bank_logo: "",
    color: "#29980000",
  },
  {
    card_no: 502229,
    bank_name: "pasargad",
    bank_title: "بانک پاسارگاد",
    bank_logo: "https://sjafarnia.github.io/bank-images/pasargad.jpg",
    color: "#4d000000",
  },
  {
    card_no: 639347,
    bank_name: "pasargad",
    bank_title: "بانک پاسارگاد",
    bank_logo: "https://sjafarnia.github.io/bank-images/pasargad.jpg",
    color: "#4d000000",
  },
  {
    card_no: 627760,
    bank_name: "post_bank",
    bank_title: "پست بانک ایران",
    bank_logo: "",
    color: "#1a14763e",
  },
  {
    card_no: 589463,
    bank_name: "refah",
    bank_title: "بانک رفاه",
    bank_logo: "https://sjafarnia.github.io/bank-images/refah.jpg",
    color: "#0d000000",
  },
  {
    card_no: 627961,
    bank_name: "saanat_va_maadan",
    bank_title: "بانک صنعت و معدن",
    bank_logo: "",
    color: "#339b814c",
  },
  {
    card_no: 603769,
    bank_name: "saderat",
    bank_title: "بانک صادرات",
    bank_logo: "https://sjafarnia.github.io/bank-images/saderat.jpg",
    color: "#1a2d2a68",
  },
  {
    card_no: 621986,
    bank_name: "saman",
    bank_title: "بانک سامان",
    bank_logo: "https://sjafarnia.github.io/bank-images/saman.jpg",
    color: "#1a7dcdf1",
  },
  {
    card_no: 639607,
    bank_name: "sarmayeh",
    bank_title: "بانک سرمایه",
    bank_logo: "",
    color: "#29bd9ff5",
  },
  {
    card_no: 589210,
    bank_name: "sepah",
    bank_title: "بانک سپه",
    bank_logo: "",
    color: "#33ffc400",
  },
  {
    card_no: 504706,
    bank_name: "shahr",
    bank_title: "بانک شهر",
    bank_logo: "",
    color: "#29ffafb2",
  },
  {
    card_no: 502806,
    bank_name: "shahr",
    bank_title: "بانک شهر",
    bank_logo: "",
    color: "#29ffafb2",
  },
  {
    card_no: 639346,
    bank_name: "sina",
    bank_title: "بانک سینا",
    bank_logo: "",
    color: "#1a277eb5",
  },
  {
    card_no: 627353,
    bank_name: "tejarat",
    bank_title: "بانک تجارت",
    bank_logo: "https://sjafarnia.github.io/bank-images/tejarat.jpg",
    color: "#290fadc7",
  },
  {
    card_no: 585983,
    bank_name: "tejarat",
    bank_title: "بانک تجارت",
    bank_logo: "https://sjafarnia.github.io/bank-images/tejarat.jpg",
    color: "#290fadc7",
  },
  {
    card_no: 636949,
    bank_name: "tejarat",
    bank_title: "بانک حکمت",
    bank_logo: "",
    color: "#29563288",
  },
  {
    card_no: 627648,
    bank_name: "tosee_saderat",
    bank_title: "بانک توسعه صادرات",
    bank_logo: "",
    color: "#1f6d6900",
  },
  {
    card_no: 502908,
    bank_name: "tosee_taavon",
    bank_title: "بانک توسعه تعاون",
    bank_logo: "",
    color: "#290076ff",
  },
];

export const checkBank = (card_number: string) => {
  const onlyNum = (str: string) => str.replace(/[^.\d]/g, "");
  card_number = onlyNum(String(card_number));
  if (card_number.length < 6) return undefined;
  let card_number_prefix = parseInt(card_number.substring(0, 6));

  const bank = banks.filter((b) => b.card_no === card_number_prefix);
  return bank.length === 0 ? undefined : bank[0];
};
