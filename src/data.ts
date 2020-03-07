export interface SparkMAXFrame {
  temperature: number;
  velocity: number;
  position: number;
  voltage: number;
  current: number;
  output: number;
  openLoopRampRate: number;
  closedLoopRampRate: number;
  isInverted: boolean;
}

export interface VictorSPXFrame {
  voltage: number;
  outputVoltage: number;
  outputPercentage: number;
  temperature: number;
  isInverted: boolean;
}

export interface DrivetrainData {
  leftMotor1Frame: SparkMAXFrame;
  leftMotor2Frame: SparkMAXFrame;
  rightMotor1Frame: SparkMAXFrame;
  rightMotor2Frame: SparkMAXFrame;
}

export interface IntakeData {
  intakeMotorFrame: SparkMAXFrame;
  indexerMotorFrame: SparkMAXFrame;
}

export interface ShooterData {
  leftMotorFrame: SparkMAXFrame;
  rightMotorFrame: SparkMAXFrame;
}

export interface GyroData {
  yaw: number;
}

export interface BatteryData {
  voltage: number;
}

export interface RobotFrame {
  drivetrain: DrivetrainData;
  intake: IntakeData;
  shooter: ShooterData;
  gyro: GyroData;
  battery: BatteryData;
  limelightPID: PIDSettingsFrame;
}

export interface PIDSettingsFrame {
  p: number;
  i: number;
  d: number;
  ff: number;
}

export const sparkMaxMockData: SparkMAXFrame = {
  closedLoopRampRate: 0.1,
  current: 2.0,
  isInverted: false,
  openLoopRampRate: 0.0,
  output: 1.0,
  position: 233.0,
  temperature: 36.0,
  velocity: 3000.0,
  voltage: 12.0,
}
export const victorSpxMockData: VictorSPXFrame = {
  isInverted: false,
  outputPercentage: 0.54,
  outputVoltage: 12.0,
  temperature: 36.0,
  voltage: 12.0,
}
export const pidMockData: PIDSettingsFrame = {
  p: 1.0,
  i: 0.9,
  d: 0.8,
  ff: 0.5
}
export const robotMockData: RobotFrame = {
  drivetrain: {
    leftMotor1Frame: sparkMaxMockData,
    leftMotor2Frame: sparkMaxMockData,
    rightMotor1Frame: sparkMaxMockData,
    rightMotor2Frame: sparkMaxMockData,
  },
  battery: {
    voltage: 12.0,
  },
  gyro: {
    yaw: 123.5,
  },
  intake: {
    indexerMotorFrame: sparkMaxMockData,
    intakeMotorFrame: sparkMaxMockData,
  },
  shooter: {
    leftMotorFrame: sparkMaxMockData,
    rightMotorFrame: sparkMaxMockData,
  },
  limelightPID: pidMockData,
}