import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'spark-max-info-small',
  styleUrl: 'spark-max-info-small.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class SparkMaxInfoSmall {
  @Prop() alignRight: boolean;
  @Prop() name: string;
  @Prop() data: SparkMaxData;

  render() {
    return (
      <div class='container' style={{ 'align-items': this.alignRight ? 'flex-end' : 'flex-start' }}>
        <span id='title'>{name}</span>
        <div style={{ height: '4px' }} />
        <key-value-text units="rev" value={this.data.position} color="#2374AB" reversed={this.alignRight} />
        <key-value-text units="RPM" value={this.data.velocity} color="#70A9A1" reversed={this.alignRight} />
        <key-value-text units="°C" value={this.data.temperature} reversed={this.alignRight} />
      </div>
    );
  }
}

export interface SparkMaxData {
  temperature: number;
  velocity: number;
  position: number;
  voltage: number;
  current: number;
  output: number;
  openLoopRampRate: number;
  closedLoopRampRate: number;
  isInverted: boolean;
}