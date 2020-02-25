import { Component, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'intake-telemetry',
  styleUrl: 'intake-telemetry.css',
  shadow: true
})
export class IntakeTelemetry {
  getStyle(): any {
    return { 'background-image': `url(${getAssetPath('./assets/intake-icon.svg')}` }
  }

  render() {
    return (
      <div class='telemetry-main'>
        <span id='title'>Intake</span>
        <div style={{ height: '12px' }} />
        <div id='row'>
          <div class='image' style={this.getStyle()} />
          <div style={{ width: '24px' }} />
          <victor-spx-info-small />
          <div style={{ width: '24px' }} />
          <victor-spx-info-small />
          <div style={{ width: '24px' }} />
          <victor-spx-info-small />
        </div>
      </div>
    );
  }
}