export class TV {
  on() {
    console.log('TV on');
  }

  off() {
    console.log('TV off');
  }

  setInputChannel(channelNumber: number) {
    console.log(`Channel: ${channelNumber}`);

  }

  setVolume(volume: number) {
    console.log(`Volume: ${volume}`);
  }
}
