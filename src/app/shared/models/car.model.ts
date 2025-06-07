export class Car {
  private _color: string;
  private _wheelsType: 'summer' | 'winter';
  private _position: { x: number; y: number };
  public readonly id: number;

  constructor(id: number, color: string, wheelsType: 'summer' | 'winter', position: { x: number; y: number }) {
    this.id = id;
    this._color = color;
    this._wheelsType = wheelsType;
    this._position = position;
  }

  public get color(): string {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }

  public get wheelsType(): 'summer' | 'winter' {
    return this._wheelsType;
  }

  public set wheelsType(value: 'summer' | 'winter') {
    this._wheelsType = value;
  }

  public get position(): { x: number; y: number } {
    return this._position;
  }

  public move(x: number, y: number): void {
    this._position.x += x;
    this._position.y += y;
  }
}
