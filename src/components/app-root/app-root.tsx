import { Component, h, State } from '@stencil/core';
import io from 'socket.io-client'
import { RobotFrame, SparkMAXFrame, robotMockData } from '../../data';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() robotFrame: RobotFrame;
  enableMock = true

  connectToSocket() {
    if (this.enableMock) {
      console.log('mock enabled')
      this.robotFrame = robotMockData
    }
    else {
      console.log('connecting to socket')
      const connection = io.connect('http://localhost:3008')
      connection.on('update', (v) => {
        this.robotFrame = v;
      })
    }
  }

  componentWillLoad() {
    this.connectToSocket()
  }

  render() {
    if (!this.robotFrame) {
      return (
        <div style={{ 'font-size': '24px', color: '#fff' }}>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <main id='main'>
          <div id='drivetrain-telemetry' class='card'>
            <drivetrain-telemetry
              drivetrainFrame={this.robotFrame.drivetrain}
              gyroFrame={this.robotFrame.gyro} />
          </div>
          <div style={{ width: '24px' }} />
          <div id='other-telemetry'>
            <div id='battery-telemetry' class='card'>
              <battery-telemetry batteryFrame={this.robotFrame.battery} />
            </div>
            <div style={{ height: '24px' }} />
            <div id='shooter-telemetry' class='card'>
              <shooter-telemetry
                shooterFrame={this.robotFrame.shooter} />
            </div>
            <div style={{ height: '24px' }} />
            <div id='intake-telemetry' class='card'>
              <intake-telemetry
                intakeFrame={this.robotFrame.intake} />
            </div>
            <div style={{ height: '24px' }} />
          </div>
        </main>
      </div>
    );
  }
}
