class Address {
  constructor(
    readonly postalCode: string,
    readonly line: string,
    readonly municipality: string,
    readonly state: string,
    readonly latitude: number = 0,
    readonly longitude: number = 0,
  ) { }

  public fullAddress(): string {
    return `${this.line}, ${this.municipality}, ${this.state}`;
  }
}

export default Address;
