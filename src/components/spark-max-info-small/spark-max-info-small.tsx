import { Component, h } from '@stencil/core';


@Component({
  tag: 'spark-max-info-small',
  styleUrl: 'spark-max-info-small.css',
  shadow: true
})
export class SparkMaxInfoSmall {
  render() {
    return (
      <div class='container'>
        A
      </div>
    );
  }
}

export interface SparkMaxInfo {
  temperature: number,
  velocity: number,
  position: number
}