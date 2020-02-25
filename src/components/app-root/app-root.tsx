import { Component, h, State } from '@stencil/core';
import io from 'socket.io-client'
import { SparkMaxData } from '../spark-max-info-small/spark-max-info-small';
import { VictorSPXData } from '../victor-spx-info-small/victor-spx-info-small';

interface RobotData {
  drivetrainFrontLeft: SparkMaxData;
  drivetrainFrontRight: SparkMaxData;
  drivetrainBackLeft: SparkMaxData;
  drivetrainBackRight: SparkMaxData;
  drivetrainLeft: SparkMaxData;
  drivetrainRight: SparkMaxData;

  outerIntake: VictorSPXData;
  innerIntake: VictorSPXData;
  indexer: VictorSPXData;

  leftShooter: SparkMaxData;
  rightShooter: SparkMaxData;

  gyro: { yaw: number };
  battery: { voltage: number };
}

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() currentRobotData: RobotData;

  connectToSocket() {
    console.log('connecting to socket')
    const connection = io.connect('http://localhost:3008')
    connection.on('update', (v) => {
      this.currentRobotData = v;
    })
  }

  componentWillLoad() {
    this.connectToSocket()
  }

  render() {
    if (!this.currentRobotData) {
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
              frontLeftControllerData={this.currentRobotData.drivetrainFrontLeft}
              frontRightControllerData={this.currentRobotData.drivetrainFrontRight}
              backLeftControllerData={this.currentRobotData.drivetrainBackLeft}
              backRightControllerData={this.currentRobotData.drivetrainBackRight}
              leftControllerData={this.currentRobotData.drivetrainLeft}
              rightControllerData={this.currentRobotData.drivetrainRight}
              gyroData={this.currentRobotData.gyro} />
          </div>
          <div style={{ width: '24px' }} />
          <div id='other-telemetry'>
            <div id='battery-telemetry' class='card'>
              <battery-telemetry data={this.currentRobotData.battery} />
            </div>
            <div style={{ height: '24px' }} />
            <div id='shooter-telemetry' class='card'>
              <shooter-telemetry
                leftShooterData={this.currentRobotData.leftShooter}
                rightShooterData={this.currentRobotData.rightShooter} />
            </div>
            <div style={{ height: '24px' }} />
            <div id='intake-telemetry' class='card'>
              <intake-telemetry
                outerIntakeData={this.currentRobotData.outerIntake}
                innerIntakeData={this.currentRobotData.innerIntake}
                indexerData={this.currentRobotData.indexer} />
            </div>
            <div style={{ height: '24px' }} />
          </div>
        </main>
      </div>
    );
  }
}
