import { Component, h, Prop } from '@stencil/core';
import { BatteryData } from '../../data';


@Component({
  tag: 'battery-telemetry',
  styleUrl: 'battery-telemetry.css',
  shadow: true
})
export class BatteryTelemetry {
  @Prop() batteryFrame: BatteryData;

  render() {
    return (
      <div class='telemetry-main'>
        <span id='title'>Battery</span>
        <div style={{ height: '12px' }} />
        <div class='container'>
          <span id='voltage'>{this.batteryFrame.voltage.toFixed(2)}</span>
          <span id='units'>v</span>
        </div>
      </div>
    );
  }
}