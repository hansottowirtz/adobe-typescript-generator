/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The VideoItem object is a sub class of the Item Object. It 
		 * inherits all the Item properties. It currently does not have 
		 * any of its own unique properties. It was designed this way 
		 * so that one can set the name, etc. Additionally it enables 
		 * us to scale it in future releases.
		 */
		class VideoItem extends Adobe.Flashpro.LibraryItem {
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
			 * Returns the modification date of the video item as a 
			 * hexadecimal value, representing a date and time. This value 
			 * is incremented every time the bitmap item is imported. 
			 * Selecting the Update button from the Video Properties dialog 
			 * will trigger an import, for example.
			 * @type {string}
			 * @readonly
			 */
			public readonly lastModifiedDate: string;
			/**
			 * If true, original file at videoItem.sourceFilePath exists
			 * @type {boolean}
			 * @readonly
			 */
			public readonly sourceFileExists: boolean;
			/**
			 * If true, original file at videoItem.sourceFilePath has not 
			 * been modified since it was last imported.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly sourceFileIsCurrent: boolean;
			/**
			 * Absolute URI for source file.
			 * @type {string}
			 * @readonly
			 */
			public readonly sourceFilePath: string;
			/**
			 * Acceptable values are "embedded video", "video", or "linked 
			 * video"
			 * @type {string}
			 * @readonly
			 */
			public readonly videoType: string;
			/**
			 * Exports a VideoItem in the Library to an FLV file.
			 * @param {string} fileURI Path which defines a location for 
			 * the exported FLV file.
			 * @returns {boolean}
			 */
			public exportToFLV(fileURI: string): boolean;
		}
	}
}