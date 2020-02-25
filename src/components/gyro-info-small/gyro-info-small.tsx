import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'gyro-info-small',
  styleUrl: 'gyro-info-small.css',
  shadow: true
})
export class GyroInfoSmall {
  @Prop() data: { yaw: number }
  render() {
    return (
      <div class='container'>
        <span id='title'>Gyro</span>
        <key-value-text units="deg" value={this.data.yaw} />
      </div>
    );
  }
}
