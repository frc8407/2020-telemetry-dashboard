import { Component, h, getAssetPath, Prop } from '@stencil/core';
import { VictorSPXData } from '../victor-spx-info-small/victor-spx-info-small';


@Component({
  tag: 'intake-telemetry',
  styleUrl: 'intake-telemetry.css',
  shadow: true
})
export class IntakeTelemetry {
  @Prop() innerIntakeData: VictorSPXData;
  @Prop() outerIntakeData: VictorSPXData;
  @Prop() indexerData: VictorSPXData;

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
          <victor-spx-info-small name="innerIntake" data={this.innerIntakeData} />
          <div style={{ width: '24px' }} />
          <victor-spx-info-small name="outerIntake" data={this.outerIntakeData} />
          <div style={{ width: '24px' }} />
          <victor-spx-info-small name="indexer" data={this.indexerData} />
        </div>
      </div>
    );
  }
}