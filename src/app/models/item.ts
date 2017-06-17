export class Item {
  constructor(
    readonly id: number,
    public name: string,
    public price: number,
    public currency: string,
    public pictures: string[] = []
  ){}
}
