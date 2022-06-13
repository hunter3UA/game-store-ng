export class ElementsOnPageModel {
  static getElements(): Array<{ label: string; value: number }> {
    return [
      { label: '10', value: 10 },
      { label: '20', value: 20 },
      { label: '50', value: 50 },
      { label: '100', value: 100 },
    ];
  }
}
