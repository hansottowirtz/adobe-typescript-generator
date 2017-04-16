/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Bitmap Item object is a subclass of the Item Object. In 
		 * addition to the Item properties, the folowing properties are 
		 * available:
		 */
		class BitmapItem extends Adobe.Flashpro.LibraryItem {
			/**
			 * TRUE to allow smoothing. FALSE otherwise
			 * @type {boolean}
			 */
			public allowSmoothing: boolean;
			/**
			 * Values accepted: "photo" or "lossless".
			 * "photo" corresponds to JPEG using a quality from 0 to 100 
			 * (if 'useImportedJPEGQuality' is false) or the default 
			 * document quality (if 'useImportedJPEGQuality' is true).
			 * "lossless" corresponds to GIF/PNG.
			 * @type {string}
			 */
			public compressionType: string;
			/**
			 * Similar to FLfile.getModificationDate(), this property 
			 * returns a string containing a hexadecimal number that 
			 * represents the number of seconds that have elapsed between 
			 * January 1, 1970, and the last modified date of the original 
			 * file when the file was imported to the library, or 
			 * '00000000' if the file doesn't exist.
			 * @type {string}
			 * @readonly
			 */
			public readonly fileLastModifiedDate: string;
			/**
			 * A way to determine if a bitmap in the library has a 
			 * valid/useful alpha channel. This flag will help the scripter 
			 * decide if they should export the bitmap item as a PNG 
			 * instead of a JPEG using the bitmapItem.exportToFile() 
			 * function.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly hasValidAlphaLayer: boolean;
			/**
			 * The width of the bitmap in pixels.
			 * @type {number}
			 * @readonly
			 */
			public readonly hPixels: number;
			/**
			 * Returns the modification date of the bitmap item as a 
			 * hexadecimal value, representing a date and time. This value 
			 * is incremented every time the bitmap item is imported. 
			 * Selecting the Update button from the Bitmap Properties 
			 * dialog will trigger an import, for example.
			 * @type {string}
			 * @readonly
			 */
			public readonly lastModifiedDate: string;
			/**
			 * Compression type for the original imported bitmap. Value is 
			 * 'photo' or 'lossless' depending on wheter the original 
			 * imported bitmap was a JPEG or not.
			 * @type {string}
			 * @readonly
			 */
			public readonly originalCompressionType: string;
			/**
			 * To use the default document quality, specify -1, otherwise a 
			 * value from 0 to 100. Only available for JPEG compression.
			 * @type {number}
			 */
			public quality: number;
			/**
			 * Original file at sourceFilePath exists. False if file is not 
			 * found.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly sourceFileExists: boolean;
			/**
			 * Original file at sourceFilePath has not been modified since 
			 * it was last imported.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly sourceFileIsCurrent_: boolean;
			/**
			 * File URI of image file that was originally imported. If Item 
			 * is not a Bitmap returns empty string.
			 * @type {string}
			 * @readonly
			 */
			public readonly sourceFilePath: string;
			/**
			 * Flag indicates if deblocking is enabled or not.
			 * @type {boolean}
			 */
			public useDeblocking: boolean;
			/**
			 * To use the default imported JPEG quality, specify true, 
			 * otherwise specify false. Only available for JPEG 
			 * compression.
			 * @type {boolean}
			 */
			public useImportedJPEGQuality: boolean;
			/**
			 * the height of the bitmap in pixels.
			 * @type {number}
			 * @readonly
			 */
			public readonly vPixels: number;
			/**
			 * This method exports a PNG or JPEG file.
			 * @param {string} fileURI The target location of the exported 
			 * file.
			 * @param {number} quality This determines the quality of the 
			 * exported image file. It's a number from 0-100.
			 * @returns {boolean}
			 */
			public exportToFile(fileURI: string, quality: number): boolean;
		}
	}
}