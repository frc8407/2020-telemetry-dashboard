import { Component, h, Prop } from '@stencil/core';
import { VictorSPXFrame } from '../../data';


@Component({
  tag: 'victor-spx-info-small',
  styleUrl: 'victor-spx-info-small.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class VictorSPXInfoSmall {
  @Prop() alignRight: boolean;
  @Prop() name: string;
  @Prop() data: VictorSPXFrame;

  render() {
    return (
      <div class='container' style={{ 'align-items': this.alignRight ? 'flex-end' : 'flex-start' }}>
        <span id='title'>{name}</span>
        <div style={{ height: '4px' }} />
        <key-value-text units="%" value={this.data.outputPercentage} color="#2374AB" reversed={this.alignRight} />
        <key-value-text units="V" value={this.data.outputVoltage} color="#70A9A1" reversed={this.alignRight} />
      </div>
    );
  }
}
