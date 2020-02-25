import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'key-value-text',
  styleUrl: 'key-value-text.css',
  shadow: true
})
export class KeyValueText {
  @Prop() units: string;
  @Prop() value: any;
  @Prop() color: string = "#fff";
  @Prop() reversed: boolean;

  render() {
    return (
      <div class='container' style={{'flex-direction': this.reversed? 'row-reverse' : 'row'}}>
        <span id='value' style={{color: this.color}}>{this.value}</span>
        <div style={{flex: '1'}} />
        <span id='units'>{this.units}</span>
      </div>
    );
  }
}