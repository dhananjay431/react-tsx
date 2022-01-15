export default class Appdata {
  change(d: any, i: any) {
    d[i] = d[i] * d[i];
    return d;
  }
}
