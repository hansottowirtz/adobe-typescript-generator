/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class BitmapData extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public readonly channelCount: number;
			/** This is not a Property Description. */
			public readonly checksum: number;
			/** This is not a Property Description. */
			public readonly colorSpace: number;
			/** This is not a Property Description. */
			public readonly height: number;
			/** This is not a Property Description. */
			public readonly pointer: number;
			/** This is not a Property Description. */
			public readonly rectangle: any[];
			/** This is not a Property Description. */
			public readonly rowBytes: number;
			/** This is not a Property Description. */
			public readonly transparent: boolean;
			/** This is not a Property Description. */
			public readonly width: number;
			/** This is not a Method Description. */
			public constructor();
			/** This is not a Method Description. */
			public clone(): any;
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/** This is not a Method Description. */
			public dispose(): void;
			/**
			 * This is not a Method Description.
			 * @param {File} dest - 
			 * @param {number} options - 
			 */
			public exportTo(dest: File, options: number): void;
			/**
			 * This is not a Method Description.
			 * @param {number} x - 
			 * @param {number} y - 
			 */
			public getPixel(x: number, y: number): number;
			/**
			 * This is not a Method Description.
			 * @param {number} x - 
			 * @param {number} y - 
			 */
			public getPixel32(x: number, y: number): number;
			/**
			 * This is not a Method Description.
			 * @param {number} data - 
			 * @param {number} dataSize
			 */
			public loadFromJpegStream(data: number, dataSize: number): void;
			/**
			 * This is not a Method Description.
			 * @param {number} data - 
			 * @param {number} dataSize
			 */
			public loadFromPngStream(data: number, dataSize: number): void;
			/**
			 * This is not a Method Description.
			 * @param {number} dimension - 
			 * @param {string} resizeQuality - 
			 */
			public resize(dimension: number, resizeQuality: string): void;
			/**
			 * This is not a Method Description.
			 * @param {number} angleInDegrees - 
			 */
			public rotate(angleInDegrees: number): any;
			/**
			 * This is not a Method Description.
			 * @param {number} x - 
			 * @param {number} y - 
			 * @param {any} color - 
			 */
			public setPixel(x: number, y: number, color: any): void;
			/**
			 * This is not a Method Description.
			 * @param {number} x - 
			 * @param {number} y - 
			 * @param {any} color - 
			 */
			public setPixel32(x: number, y: number, color: any): void;
		}
	}
}