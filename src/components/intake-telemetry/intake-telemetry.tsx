import { Component, h, Prop } from '@stencil/core';
import { IntakeData } from '../../data';


@Component({
  tag: 'intake-telemetry',
  styleUrl: 'intake-telemetry.css',
  shadow: true
})
export class IntakeTelemetry {
  @Prop() intakeFrame: IntakeData;
  render() {
    return (
      <div class='telemetry-main'>
        <span id='title'>Intake</span>
        <div style={{ height: '12px' }} />
        <div id='row'>
          <spark-max-info-small name="intake" data={this.intakeFrame.intakeMotorFrame} />
          <div style={{ width: '24px' }} />
          <spark-max-info-small name="indexer" data={this.intakeFrame.indexerMotorFrame} />
        </div>
      </div>
    );
  }
}