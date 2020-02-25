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
        <span id='title'>Shooter</span>
        <div style={{ height: '12px' }} />
        <div id='row'>
          <div class='image' style={this.getStyle()} />
          <div style={{ width: '24px' }} />
          <spark-max-info-small />
          <div style={{ width: '24px' }} />
          <spark-max-info-small />
        </div>
      </div>
    );
  }
}