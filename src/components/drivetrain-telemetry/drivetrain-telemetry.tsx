import { Component, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'drivetrain-telemetry',
  styleUrl: 'drivetrain-telemetry.css',
  shadow: true
})
export class DrivetrainTelemetry {
  render() {
    return (
      <div class='container'>
        <img src={getAssetPath('./assets/drivetrain-svg.svg')} width="700" height="700" />
      </div>
    );
  }
}