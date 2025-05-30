abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  getReelTime(): number {
    return 3;
  }
  //   abstract getSepia(): void;
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
}

const and = new Instagram("test", "test", 4);
and.getReelTime()
