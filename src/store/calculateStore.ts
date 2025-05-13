import {makeAutoObservable, reaction} from 'mobx';
import COUNTRIES from '../localData/currencies.json';
import {TCountry, TResult} from './types';

class CalculateStore {
  fromCountry = {
    name: 'US Dollar',
    symbol: '$',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'USD',
    namePlural: 'US dollars',
    countryCodeISO2: 'US',
    flagSrc: 'https://flagcdn.com/h40/us.png',
  };
  toCountry = {
    name: 'Russian Ruble',
    symbol: 'RUB',
    symbolNative: '₽.',
    decimalDigits: 2,
    rounding: 0,
    code: 'RUB',
    namePlural: 'Russian rubles',
    countryCodeISO2: 'RU',
    flagSrc: 'https://flagcdn.com/h40/ru.png',
  };
  amount = '1';
  result: Partial<TResult> = {
    value: null,
    symbolNative: null,
  };
  isLoading = true;
  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
    reaction(
      () => [this.fromCountry.code, this.toCountry.code],
      () => this.convert(),
      {fireImmediately: true},
    );
  }
  setFromCountry(val: TCountry) {
    this.fromCountry = val;
  }

  setToCountry(val: TCountry) {
    this.toCountry = val;
  }
  setAmount(val: string) {
    this.amount = val;
  }
  setResult(val: TResult) {
    this.result = val;
  }
  setIsLoading(val: boolean) {
    this.isLoading = val;
  }
  reverseCountries() {
    const toCountry = this.toCountry;
    this.setToCountry(this.fromCountry);
    this.setFromCountry(toCountry);
  }
  async convert() {
    this.setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.fxratesapi.com/convert?from=${this.fromCountry.code}&to=${this.toCountry.code}&amount=${this.amount}&format=json`,
      );
      const json = await response.json();
      this.setResult({
        value: json.result,
        symbolNative:
          COUNTRIES.find(item => json.query.to === item.code)?.symbolNative ||
          '',
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setIsLoading(false);
    }
  }
}
export default new CalculateStore();
