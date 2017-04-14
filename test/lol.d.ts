export declare class BitmapData extends CSHostObject {
        public readonly channelCount: Number;
        public readonly checksum: Number;
        public readonly colorSpace: Number;
        public readonly height: Number;
        public readonly pointer: Number;
        public readonly rectangle: Number;
        public readonly rowBytes: Number;
        public readonly transparent: Number;
        public readonly width: Number;
        public BitmapData(file: File= null, preserveColorProfile: Boolean= false): void;
        public clone(): Object;
        protected createWithArgs(args: Array): void;
        public dispose(): void;
        public exportTo(dest: File, options: Number): void;
        public getPixel(x: Number, y: Number): Number;
        public getPixel32(x: Number, y: Number): Number;
        public loadFromJpegStream(data: Number, dataSize: Number): void;
        public loadFromPngStream(data: Number, dataSize: Number): void;
        public resize(dimension: Number, resizeQuality: String): void;
        public rotate(angleInDegrees: Number): Object;
        public setPixel(x: Number, y: Number, color: Object): void;
        public setPixel32(x: Number, y: Number, color: Object): void;
}
