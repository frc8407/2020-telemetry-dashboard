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
      <div class='container' style={{'align-items': this.alignRight? 'flex-end' : 'flex-start'}}>
        <span id='title'>frontLeftWheel</span>
        <div style={{height: '4px'}} />
        <key-value-text units="rev" value="550" />
        <key-value-text units="RPM" value="12000" />
        <key-value-text units="°C" value="25" />
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