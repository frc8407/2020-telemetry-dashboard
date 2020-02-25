import { Component, h, getAssetPath, Prop } from '@stencil/core';
import { SparkMaxData } from '../spark-max-info-small/spark-max-info-small';


@Component({
  tag: 'shooter-telemetry',
  styleUrl: 'shooter-telemetry.css',
  shadow: true
})
export class ShooterTelemetry {
  @Prop() leftShooterData: SparkMaxData;
  @Prop() rightShooterData: SparkMaxData;

  getStyle(): any {
    return { 'background-image': `url(${getAssetPath('./assets/shooter-icon.svg')}` }
  }

  render() {
    return (
      <div class='telemetry-main'>
        <span id='title'>Shooter</span>
        <div style={{ height: '12px' }} />
        <div id='row'>
          <div class='image' style={this.getStyle()} />
          <div style={{ width: '24px' }} />
          <spark-max-info-small name="leftShooter" data={this.leftShooterData} />
          <div style={{ width: '24px' }} />
          <spark-max-info-small name="rightShooter" data={this.rightShooterData} />
        </div>
      </div>
    );
  }
}