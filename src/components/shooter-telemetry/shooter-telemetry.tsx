import { Component, h, Prop } from '@stencil/core';
import { ShooterData } from '../../data';


@Component({
  tag: 'shooter-telemetry',
  styleUrl: 'shooter-telemetry.css',
  shadow: true
})
export class ShooterTelemetry {
  @Prop() shooterFrame: ShooterData;

  generateCircles = () => {
    const meanShooterVelocity =
      (this.shooterFrame.leftMotorFrame.velocity +
        this.shooterFrame.rightMotorFrame.velocity) / 2.0

    let classes = ['circle', 'circle', 'circle', 'circle', 'circle']

    if (meanShooterVelocity > 1000) {
      classes[0] = 'circle green'
    }
    if (meanShooterVelocity > 2000) {
      classes[1] = 'circle green'
    }
    if (meanShooterVelocity > 3000) {
      classes[2] = 'circle green'
    }
    if (meanShooterVelocity > 4000) {
      classes[3] = 'circle green'
    }
    if (meanShooterVelocity > 5000) {
      classes[4] = 'circle green'
    }

    return classes.map((v) => <div class={v}></div>)
  }

  render() {
    return (
      <div class='telemetry-main'>
        <div class='row'>
          <span id='title'>Shooter</span>
          <div style={{ width: '36px' }} />
          {this.generateCircles()}
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