export interface LanguageCode{
  code:string;
  name:string;
}

export interface Translation {
  ok: boolean;
  text_lang: string;
  translated_text: string;
}
