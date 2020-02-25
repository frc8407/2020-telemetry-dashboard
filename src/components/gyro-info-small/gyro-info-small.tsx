import { Component, h } from '@stencil/core';


@Component({
  tag: 'gyro-info-small',
  styleUrl: 'gyro-info-small.css',
  shadow: true
})
export class GyroInfoSmall {
  render() {
    return (
      <div class='container'>
        <span id='title'>Gyro</span>
        <key-value-text units="deg" value="125" />
      </div>
    );
  }
}
