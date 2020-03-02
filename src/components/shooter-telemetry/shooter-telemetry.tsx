import { Component, h, Prop } from '@stencil/core';
import { ShooterData } from '../../data';


@Component({
  tag: 'shooter-telemetry',
  styleUrl: 'shooter-telemetry.css',
  shadow: true
})
export class ShooterTelemetry {
  @Prop() shooterFrame: ShooterData;

  render() {
    return (
      <div class='telemetry-main'>
        <div class='row'>
          <span id='title'>Shooter</span>
          <div style={{ width: '12px' }} />
          <div class='circle' />
          <div class='circle' />
          <div class='circle' />
          <div class='circle' />
          <div class='circle' />
          <div class='circle' />
          <div class='circle' />
          <div class='circle' />
        </div>
        <div style={{ height: '12px' }} />
        <div class='row'>
          <spark-max-info-small name="leftShooter" data={this.shooterFrame.leftMotorFrame} />
          <div style={{ width: '24px' }} />
          <spark-max-info-small name="rightShooter" data={this.shooterFrame.rightMotorFrame} />
        </div>
      </div>
    );
  }
}