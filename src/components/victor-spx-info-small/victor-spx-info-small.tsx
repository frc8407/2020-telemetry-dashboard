import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'victor-spx-info-small',
  styleUrl: 'victor-spx-info-small.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class VictorSPXInfoSmall {
  @Prop() alignRight: boolean;
  render() {
    return (
      <div class='container' style={{ 'align-items': this.alignRight ? 'flex-end' : 'flex-start' }}>
        <span id='title'>frontLeftWheel</span>
        <div style={{ height: '4px' }} />
        <key-value-text units="%" value="80%" color="#2374AB" reversed={this.alignRight} />
        <key-value-text units="V" value="12" color="#70A9A1" reversed={this.alignRight} />
      </div>
    );
  }
}

export interface VictorSPXInfo {
  name: string,
  temperature: number,
  velocity: number,
  position: number
}