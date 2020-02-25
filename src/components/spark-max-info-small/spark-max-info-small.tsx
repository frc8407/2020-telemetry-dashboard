import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'spark-max-info-small',
  styleUrl: 'spark-max-info-small.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class SparkMaxInfoSmall {
  @Prop() alignRight: boolean;
  render() {
    return (
      <div class='container' style={{ 'align-items': this.alignRight ? 'flex-end' : 'flex-start' }}>
        <span id='title'>frontLeftWheel</span>
        <div style={{ height: '4px' }} />
        <key-value-text units="rev" value="550" color="#2374AB" reversed={this.alignRight} />
        <key-value-text units="RPM" value="12000" color="#70A9A1" reversed={this.alignRight} />
        <key-value-text units="°C" value="25" reversed={this.alignRight} />
      </div>
    );
  }
}

export interface SparkMaxInfo {
  name: string,
  temperature: number,
  velocity: number,
  position: number
}