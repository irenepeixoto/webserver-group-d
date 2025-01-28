class Address {
  constructor(
    readonly postalCode: string,
    readonly line: string,
    readonly municipality: string,
    readonly state: string,
  ) { }

  public fullAddress(): string {
    return `${this.line}, ${this.municipality}, ${this.state}`;
  }
}

export default Address;
