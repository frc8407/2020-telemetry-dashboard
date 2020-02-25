import { Component, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'shooter-telemetry',
  styleUrl: 'shooter-telemetry.css',
  shadow: true
})
export class ShooterTelemetry {
  getStyle(): any {
    return { 'background-image': `url(${getAssetPath('./assets/shooter-icon.svg')}` }
  }

  render() {
    return (
      <div class='telemetry-main'>
        <p id='title'>Shooter</p>
        <div id='row'>
          
        </div>
      </div>
    );
  }
}