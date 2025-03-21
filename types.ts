export enum locales {
  ARSA = "ar-SA", //Arabic (Saudi Arabia)
  DNBD = "bn-BD", //Bangla (Bangladesh)
  BNIN = "bn-IN", //Bangla (India)
  DADK = "da-DK", //Danish (Denmark)
  DEAT = "de-AT", //Austrian German
  DECH = "de-CH", //"Swiss" German
  DEDE = "de-DE", //Standard German (as spoken in Germany)
  ELGR = "el-GR", //Modern Greek
  ENAU = "en-AU", //Australian English
  ENCA = "en-CA", //Canadian English
  ENGB = "en-GB", //British English
  ENIE = "en-IE", //Irish English
  ENIN = "en-IN", //Indian English
  ENNZ = "en-NZ", //New Zealand English
  ENUS = "en-US", //US English
  ENZA = "en-ZA", //English (South Africa)
  ESRA = "es-AR", //Argentine Spanish
  ESCL = "es-CL", //Chilean Spanish
  ESCO = "es-CO", //Colombian Spanish
  ESES = "es-ES", //Castilian Spanish (as spoken in Central-Northern Spain)
  ESMX = "es-MX", //Mexican Spanish
  ESUS = "es-US", //American Spanish
  FAIR = "fa-IR", //Iranian (Iran)
  FIFI = "fi-FI", //Finnish (Finland)
  FRBE = "fr-BE", //Belgian French
  FRCA = "fr-CA", //Canadian French
  FRCH = "fr-CH", //"Swiss" French
  FRFR = "fr-FR", //Standard French (especially in France)
  HEIL = "he-IL", //Hebrew (Israel)
  HIIN = "hi-IN", //Hindi (India)
  HUHU = "hu-HU", //Hungarian (Hungary)
  IDID = "id-ID", //Indonesian (Indonesia)
  ITCH = "it-CH", //"Swiss" Italian
  ITIT = "it-IT", //Standard Italian (as spoken in Italy)
  JAJP = "ja-JP", //Japanese (Japan)
  KOKR = "ko-KR", //Korean (Republic of Korea)
  NLBE = "nl-BE", //Belgian Dutch
  NLNL = "nl-NL", //Standard Dutch (as spoken in The Netherlands)
  NONO = "no-NO", //Norwegian (Norway)
  PLPL = "pl-PL", //Polish (Poland)
  PTBR = "pt-BR", //Brazilian Portuguese
  PTPT = "pt-PT", //European Portuguese (as written and spoken in Portugal)
  RORO = "ro-RO", //Romanian (Romania)
  RURU = "ru-RU", //Russian (Russian Federation)
  SKSK = "sk-SK", //Slovak (Slovakia)
  SVSE = "sv-SE", //Swedish (Sweden)
  TAIN = "ta-IN", //Indian Tamil
  TALK = "ta-LK", //Sri Lankan Tamil
  THTH = "th-TH", //Thai (Thailand)
  TRTR = "tr-TR", //Turkish (Turkey)
  ZHCN = "zh-CN", //Mainland China, simplified characters
  ZHHK = "zh-HK", //Hong Kong, traditional characters
  ZHTW = "zh-TW", //Taiwan, traditional characters
}

export interface formatOptions {
  weekday: "short" | "long" | "narrow";
  month: "short" | "long" | "narrow" | "numeric" | "2-digit";
  day: "numeric" | "2-digit";
  year?: "numeric" | "2-digit"; // we can ommit this one
  firstDay?: "Sunday" | "Monday";
}

export interface calendar {
  month: string;
  calendarDates: Array<string>;
  calendarWeeks: Array<Array<string>>;
}
