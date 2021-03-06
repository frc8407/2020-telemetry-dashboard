import { Component, h, State } from '@stencil/core';
import io from 'socket.io-client'
import { RobotFrame, robotMockData, PIDSettingsFrame } from '../../data';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() robotFrame: RobotFrame;
  @State() connection: SocketIOClient.Socket
  enableMock = true

  connectToSocket() {
    if (this.enableMock) {
      console.log('mock enabled')
      this.robotFrame = robotMockData
    }
    else {
      console.log('connecting to socket')

      this.connection = io.connect('http://localhost:3008')
      this.connection.on('update', (v) => {
        this.robotFrame = v;
      })
    }
  }

  savePIDSettings(name: string, newSettings: PIDSettingsFrame) {
    this.connection.emit('pid-update', { name, settings: newSettings })
  }

  componentWillLoad() {
    this.connectToSocket()
  }

  render() {
    if (!this.robotFrame) {
      return (
        <div style={{ 'font-size': '24px', color: '#fff', display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
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
            <div id='limelight-pid-tuning' class='card'>
              <pid-controller-tuning
                name="limelight-aim"
                data={this.robotFrame.limelightPID}
                onSave={this.savePIDSettings} />
            </div>
            <div style={{ height: '24px' }} />
          </div>
        </main>
      </div>
    );
  }
}
