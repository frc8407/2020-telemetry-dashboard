import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'key-value-text',
  styleUrl: 'key-value-text.css',
  shadow: true
})
export class KeyValueText {
  @Prop() units: string;
  @Prop() value: any;

  render() {
    return (
      <div class='container'>
        <span id='value'>{this.value}</span>
        <span id='units'>{this.units}</span>
      </div>
    );
  }
}