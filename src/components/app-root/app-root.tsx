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
          <div id='drivetrain-telemetry' class='card'>
            <drivetrain-telemetry />
          </div>
          <div style={{ width: '24px' }} />
          <div id='other-telemetry'>
            <div id='shooter-telemetry' class='card'>
              <shooter-telemetry />
            </div>
            <div style={{ height: '24px' }} />
            <div id='intake-telemetry' class='card'>
              <shooter-telemetry />
            </div>
            <div style={{ height: '24px' }} />
            <div id='arm-telemetry' class='card'>
              <shooter-telemetry />
            </div>
            <div style={{ height: '24px' }} />
            <div id='hang-telemetry' class='card'>
              <shooter-telemetry />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
