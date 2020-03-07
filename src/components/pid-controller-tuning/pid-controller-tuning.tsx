import { Component, h, Prop, State } from '@stencil/core';
import { PIDSettingsFrame } from '../../data';

@Component({
  tag: 'pid-controller-tuning',
  styleUrl: 'pid-controller-tuning.css',
  shadow: true
})
export class PIDControllerTuning {
  @Prop() name: string;
  @Prop() data: PIDSettingsFrame;
  @Prop() onSave: (name: string, newData: PIDSettingsFrame) => void;

  @State() newData: PIDSettingsFrame;
  @State() updated: boolean;

  componentWillLoad() {
    this.newData = this.data;
    this.updated = false;
  }

  handleChange(data, event) {
    data = event.target.value
    this.updated = true
  }

  save() {
    this.onSave(this.name, this.newData)
    this.updated = false
  }

  render() {
    return (
      <div class='pid-main'>
        <span class='title-small'>{`${this.name} ${(this.updated) ? '*' : ''}`}</span>
        <div style={{ height: '16px' }} />
        <div class='row'>
          <span class='title'>P</span>
          <input class='input-black' value={this.newData.p} onInput={(e) => this.handleChange(this.newData.p, e)} />
        </div>
        <div style={{ height: '16px' }} />
        <div class='row'>
          <span class='title'>I</span>
          <input class='input-black' value={this.newData.i} onInput={(e) => this.handleChange(this.newData.i, e)} />
        </div>
        <div style={{ height: '16px' }} />
        <div class='row'>
          <span class='title'>D</span>
          <input class='input-black' value={this.newData.d} onInput={(e) => this.handleChange(this.newData.d, e)} />
        </div>
        <div style={{ height: '16px' }} />
        <div class='row'>
          <span class='title'>FF</span>
          <input class='input-black' value={this.newData.ff} onInput={(e) => this.handleChange(this.newData.ff, e)} />
        </div>
        <div style={{ height: '16px' }} />
        <div class='row title-small' style={{ display: this.updated ? 'block' : 'none' }}>
          <span>old: {this.data.p} ; {this.data.i} ; {this.data.d} ; {this.data.ff}</span>
        </div>
        <div style={{ height: '16px' }} />
        <div class='row'>
          <button class='input-black' onClick={() => this.save()}>Save</button>
        </div>
      </div>
    );
  }
}