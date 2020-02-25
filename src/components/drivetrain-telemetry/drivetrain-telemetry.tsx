import { Component, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'drivetrain-telemetry',
  styleUrl: 'drivetrain-telemetry.css',
  shadow: true
})
export class DrivetrainTelemetry {
  getStyle(): any {
    return {'background-image': `url(${getAssetPath('./assets/drivetrain-svg.svg')}`}
  }

  render() {
    return (
      <div class='container' style={this.getStyle()}>
        <div class='front-wheels'>
          <spark-max-info-small />
          <spark-max-info-small alignRight />
        </div>
        <div class='middle-wheels'>
          <spark-max-info-small />
          <gyro-info-small />
          <spark-max-info-small alignRight />
        </div>
        <div class='back-wheels'>
          <spark-max-info-small />
          <spark-max-info-small alignRight />
        </div>
      </div>
    );
  }
}