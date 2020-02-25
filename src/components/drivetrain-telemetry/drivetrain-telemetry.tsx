import { Component, h, getAssetPath, Prop } from '@stencil/core';
import { SparkMaxData } from '../spark-max-info-small/spark-max-info-small';


@Component({
  tag: 'drivetrain-telemetry',
  styleUrl: 'drivetrain-telemetry.css',
  shadow: true
})
export class DrivetrainTelemetry {
  @Prop() frontLeftControllerData: SparkMaxData;
  @Prop() frontRightControllerData: SparkMaxData;
  @Prop() backLeftControllerData: SparkMaxData;
  @Prop() backRightControllerData: SparkMaxData;
  @Prop() leftControllerData: SparkMaxData;
  @Prop() rightControllerData: SparkMaxData;
  @Prop() gyroData: { yaw: number };

  getStyle(): any {
    return { 'background-image': `url(${getAssetPath('./assets/drivetrain-icon.svg')}` }
  }

  render() {
    return (
      <div class='telemetry-main'>
        <p id='title'>Drivetrain</p>
        <div class='container' style={this.getStyle()}>
          <div class='front-wheels'>
            <spark-max-info-small name="frontLeft" data={this.frontLeftControllerData} />
            <spark-max-info-small name="frontRight" data={this.frontRightControllerData} alignRight />
          </div>
          <div class='middle-wheels'>
            <spark-max-info-small name="left" data={this.leftControllerData} />
            <gyro-info-small data={this.gyroData} />
            <spark-max-info-small name="right" data={this.rightControllerData} alignRight />
          </div>
          <div class='back-wheels'>
            <spark-max-info-small name="backLeft" data={this.backLeftControllerData} />
            <spark-max-info-small name="backRight" data={this.backRightControllerData} alignRight />
          </div>
        </div>
      </div>
    );
  }
}