import { Component, h, Prop } from '@stencil/core';
import { SparkMAXFrame } from '../../data';


@Component({
  tag: 'spark-max-info-small',
  styleUrl: 'spark-max-info-small.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class SparkMaxInfoSmall {
  @Prop() alignRight: boolean;
  @Prop() name: string;
  @Prop() data: SparkMAXFrame;

  render() {
    return (
      <div class='container' style={{ 'align-items': this.alignRight ? 'flex-end' : 'flex-start' }}>
        <span id='title'>{this.name}</span>
        <div style={{ height: '4px' }} />
        <key-value-text units="rev" value={this.data.position} color="#2374AB" reversed={this.alignRight} />
        <key-value-text units="RPM" value={this.data.velocity} color="#70A9A1" reversed={this.alignRight} />
        <key-value-text units="°C" value={this.data.temperature} reversed={this.alignRight} />
      </div>
    );
  }
}
