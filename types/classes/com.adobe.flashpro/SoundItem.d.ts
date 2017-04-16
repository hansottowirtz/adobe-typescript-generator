/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Sound Item object is a subclass of the Item Object. In 
		 * addition to the Item properties, the folowing properties are 
		 * available:
		 */
		class SoundItem extends Adobe.Flashpro.LibraryItem {
			/**
			 * Acceptable values are "8kbps", "16kbps", "20kbps", "24kbps", 
			 * "32kbps", "48kbps", "56kbps", "64kbps", "80kbps", "112kbps", 
			 * "128kbps", "160kbps". Only available for the "MP3" 
			 * compression type.  Undefined for other compression types.
			 * @type {string}
			 */
			public bitRate: string;
			/**
			 * Acceptable values are "2 bit", "3 bit", "4 bit", "5 bit" 
			 * when the type of compression is "ADPCM".
			 * @type {string}
			 */
			public bits: string;
			/**
			 * Acceptable values are "Default", "ADPCM", "MP3", "Raw", 
			 * "Speech"
			 * @type {string}
			 */
			public compressionType: string;
			/**
			 * Setting this to TRUE converts a stereo sound to mono, FALSE 
			 * leaves it as stereo. Only availalbe for "MP3" and "Raw" 
			 * compression types. For MP3 compression type, if the bitRate 
			 * is less than 20kbps, this property is ignored and forced to 
			 * true.
			 * @type {boolean}
			 */
			public convertStereoToMono: boolean;
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
			 * Returns the modification date of the sound item as a 
			 * hexadecimal value, representing a date and time. This value 
			 * is incremented every time the bitmap item is imported. 
			 * Selecting the Update button from the Sound Properties dialog 
			 * will trigger an import, for example.
			 * @type {string}
			 * @readonly
			 */
			public readonly lastModifiedDate: string;
			/**
			 * Compression type for the original imported sound file. Value 
			 * is 'RAW' or 'MP3' depending on wheter the original imported 
			 * sound was an MP3 or not.
			 * @type {string}
			 * @readonly
			 */
			public readonly originalCompressionType: string;
			/**
			 * Acceptable values are "Fast", "Medium", "Best". Only 
			 * available for MP3 compression type.
			 * @type {string}
			 */
			public quality: string;
			/**
			 * Acceptable values are "5 kHz", "11 kHz", "22 kHz", "44 kHz". 
			 * Only available for "ADPCM", "Raw" and "Speech" compression 
			 * types.
			 * @type {string}
			 */
			public sampleRate: string;
			/**
			 * Original file at sourceFilePath exists
			 * @type {boolean}
			 * @readonly
			 */
			public readonly sourceFileExists: boolean;
			/**
			 * Original file at sourceFilePath has not been modified since 
			 * it was last imported
			 * @type {boolean}
			 * @readonly
			 */
			public readonly sourceFileIsCurrent: boolean;
			/**
			 * File URI of sound file that was originally imported
			 * @type {string}
			 * @readonly
			 */
			public readonly sourceFilePath: string;
			/**
			 * If TRUE, MP3 sounds are downsampled to 8kHz before 
			 * publishing.
			 * @type {boolean}
			 */
			public use8kSampleRate: boolean;
			/**
			 * If TRUE, all other properties are ignored and the imported 
			 * MP3 quality is used.
			 * @type {boolean}
			 */
			public useImportedMP3Quality: boolean;
			/**
			 * Exports SoundItem in Library to sound file specified in the 
			 * fileURI parameter. The file extension in the URI determines 
			 * the file format of the output file (either MP3 or WAV). When 
			 * exporting sound items, you should check if the 
			 * "soundItem.originalCompressionType" property is equal 
			 * to"RAW." If this check is false, you can only export the 
			 * file as MP3. (Optionally, you can try exporting as a WAV 
			 * file, and if the function returns false, then try to export 
			 * to MP3.)
			 * @param {string} fileURI File URI for the exported sound 
			 * file.
			 * @returns {boolean}
			 */
			public exportToFile(fileURI: string): boolean;
		}
	}
}