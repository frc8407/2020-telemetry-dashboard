import { Component, h, getAssetPath, Prop } from '@stencil/core';


@Component({
  tag: 'battery-telemetry',
  styleUrl: 'battery-telemetry.css',
  shadow: true
})
export class BatteryTelemetry {
  @Prop() data: { voltage: number };
  getStyle(): any {
    return { 'background-image': `url(${getAssetPath('./assets/battery-icon.svg')}` }
  }

  render() {
    return (
      <div class='telemetry-main'>
        <span id='title'>Battery</span>
        <div style={{ height: '12px' }} />
        <div id='row'>
          <div class='image' style={this.getStyle()} />
          <div style={{ width: '24px' }} />
          <span id='voltage'>{this.data.voltage.toFixed(2)}</span>
          <span id='units'>v</span>
        </div>
      </div>
    );
  }
}