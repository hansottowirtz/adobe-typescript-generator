/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Pixels are described by four channels: red, green, blue, and 
		 * an "alpha" channel that represents the opacity of the pixel. 
		 * Each channel stores a number between 0 and 255. For the 
		 * color channels, 0 means an absence of that color and 255 
		 * means the maximum amount of that color. For the alpha 
		 * channel, 0 means the pixel is completely transparent and 255 
		 * means it is completely opaque.This object allows direct 
		 * manipulation of the pixels in memory. They are assumed to be 
		 * stored in row-major order, with consecutive bytes for red, 
		 * green, blue, and alpha channel. Each row may have some 
		 * padding at the end, and the total width of a row, in bytes, 
		 * is represented by rowBytes. The maximum width and maximum 
		 * height of a BitmapData object is 8192 pixels.Create the 
		 * object using the new operator: There are three forms of the 
		 * constructor:new BitmapData (width, height, transparent 
		 * fillColornew BitmapData (file[, preserveColorProfile])new 
		 * BitmapData (width, height, transparent, rowBytes, 
		 * data)Parameters set corresponding properties, or specify the 
		 * source data, directly or indirectly. Specify true for 
		 * preserveColorProfile to preserve the embedded color profile, 
		 * if any. If none is present, or if not supplied, embeds the 
		 * default sRGB profile. Note that ACR cannot be used with a 
		 * preserved embedded profile; it returns all images with an 
		 * sRGB profile which would conflict with the desired color 
		 * profile behavior. If you choose to preserve the embedded 
		 * profile, the standard JPEG or TIFF libraries are used, even 
		 * if the thumbnail preference "Use ACR for JPEG and TIFF" is 
		 * set.
		 */
		class BitmapData extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly channelCount: number;
			/**
			 * A 32-bit Adler checksum of the image data.
			 * @type {number}
			 * @readonly
			 */
			public readonly checksum: number;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly colorSpace: number;
			/**
			 * Image height in pixels.
			 * @type {number}
			 * @readonly
			 */
			public readonly height: number;
			/**
			 * A pointer to the buffer storing the matrix of pixels.
			 * @type {number}
			 * @readonly
			 */
			public readonly pointer: number;
			/**
			 * The rectangle that defines the size of the bitmap image, in 
			 * the format [0, 0, w, h]. Origin is top left.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly rectangle: any[];
			/**
			 * The length in bytes of a row of pixels.
			 * @type {number}
			 * @readonly
			 */
			public readonly rowBytes: number;
			/**
			 * True if the bitmap image supports per-pixel transparency.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly transparent: boolean;
			/**
			 * Image width in pixels.
			 * @type {number}
			 * @readonly
			 */
			public readonly width: number;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Duplicates this object, creating a new object with an exact 
			 * copy of the contained bitmap.
			 * @returns {any}
			 */
			public clone(): any;
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Explicitly frees the memory used to store pixel data for 
			 * this object.
			 * @returns {void}
			 */
			public dispose(): void;
			/**
			 * Writes the image data to a file in JPEG format.
			 * @param {File} dest 
			 * @param {number} options 
			 * @returns {void}
			 */
			public exportTo(dest: File, options: number): void;
			/**
			 * Retrieves the color data for a specific pixel from the 
			 * image.
			 * @param {number} x 
			 * @param {number} y 
			 * @returns {number}
			 */
			public getPixel(x: number, y: number): number;
			/**
			 * Retrieves the color data for a specific pixel from the 
			 * image, including its alpha channel.
			 * @param {number} x 
			 * @param {number} y 
			 * @returns {number}
			 */
			public getPixel32(x: number, y: number): number;
			/**
			 * Loads the JPEG stream at a memory address into this object, 
			 * replacing the previous content.
			 * @param {number} data 
			 * @param {number} dataSize
			 * @returns {void}
			 */
			public loadFromJpegStream(data: number, dataSize: number): void;
			/**
			 * Loads the PNG stream at a memory address into this object, 
			 * replacing the previous content.
			 * @param {number} data 
			 * @param {number} dataSize
			 * @returns {void}
			 */
			public loadFromPngStream(data: number, dataSize: number): void;
			/**
			 * Resizes the bitmap to the specified dimensions.
			 * @param {number} dimension 
			 * @param {string} resizeQuality 
			 * @returns {void}
			 */
			public resize(dimension: number, resizeQuality: string): void;
			/**
			 * Rotates the bitmap by the specified multiple of 90 degrees.
			 * @param {number} angleInDegrees 
			 * @returns {any}
			 */
			public rotate(angleInDegrees: number): any;
			/**
			 * Sets the color data for a specific pixel from the image.
			 * @param {number} x 
			 * @param {number} y 
			 * @param {any} color 
			 * @returns {void}
			 */
			public setPixel(x: number, y: number, color: any): void;
			/**
			 * Sets the color data for a specific pixel from the image, 
			 * including its alpha channel.
			 * @param {number} x 
			 * @param {number} y 
			 * @param {any} color 
			 * @returns {void}
			 */
			public setPixel32(x: number, y: number, color: any): void;
		}
	}
}