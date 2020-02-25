import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <main id='main'>
          <div id='drivetrain-telemetry'> 
            <drivetrain-telemetry />
          </div>
          <div id='shooter-telemetry'></div>
          <div id='intake-telemetry'></div>
          <div id='arm-telemetry'></div>
          <div id='hang-telemetry'></div>
        </main>
      </div>
    );
  }
}
