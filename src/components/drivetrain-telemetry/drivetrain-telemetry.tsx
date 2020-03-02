import { Component, h, Prop } from '@stencil/core';
import { GyroData, DrivetrainData } from '../../data';


@Component({
  tag: 'drivetrain-telemetry',
  styleUrl: 'drivetrain-telemetry.css',
  shadow: true
})
export class DrivetrainTelemetry {
  @Prop() drivetrainFrame: DrivetrainData;
  @Prop() gyroFrame: GyroData;

  render() {
    return (
      <div class='telemetry-main'>
        <p id='title'>Drivetrain</p>
        <div class='container'>
          <div class='front-wheels'>
            <spark-max-info-small name="frontLeft" data={this.drivetrainFrame.leftMotor1Frame} />
            <spark-max-info-small name="frontRight" data={this.drivetrainFrame.leftMotor2Frame} alignRight />
          </div>
          <div class='middle'>
            <gyro-info-small data={this.gyroFrame} />
          </div>
          <div class='back-wheels'>
            <spark-max-info-small name="backLeft" data={this.drivetrainFrame.rightMotor1Frame} />
            <spark-max-info-small name="backRight" data={this.drivetrainFrame.rightMotor2Frame} alignRight />
          </div>
        </div>
      </div>
    );
  }
}