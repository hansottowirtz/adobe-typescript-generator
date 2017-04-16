/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Symbol Item object is a subclass of the Item object. In 
		 * addition to the Item properties, the folowing properties are 
		 * available:
		 */
		class SymbolItem extends Adobe.Flashpro.LibraryItem {
			/**
			 * A flag that forces the symbol item's XML file to be re-saved 
			 * to the parent document.
			 * @type {boolean}
			 */
			public isDirty: boolean;
			/**
			 * Returns the modification date of the symbol as a hexadecimal 
			 * value, representing a date and time. This value is 
			 * incremented every time a symbol's timeline is edited.
			 * @type {string}
			 * @readonly
			 */
			public readonly lastModifiedDate: string;
			/**
			 * enable/disable slice guides for the symbol item
			 * @type {boolean}
			 */
			public scalingGrid: boolean;
			/**
			 * A rectangle which describes the locations of the four 
			 * slice-9 guides.
			 * @type {any}
			 */
			public scalingGridRect: any;
			/**
			 * If TRUE, the item will be updated when published, FALSE 
			 * otherwise.
			 * @type {boolean}
			 */
			public sourceAutoUpdate: boolean;
			/**
			 * Path for source fla file. Must be absolute path, not 
			 * relative.
			 * @type {string}
			 */
			public sourceFilePath: string;
			/**
			 * Name of the item in the source file to use.
			 * @type {string}
			 */
			public sourceLibraryName: string;
			/**
			 * Acceptable values are "movie clip", "button", "graphic".
			 * @type {string}
			 */
			public symbolType: string;
			/**
			 * The timeline object. also see the timeline object.
			 * @type {Adobe.Flashpro.Timeline}
			 * @readonly
			 */
			public readonly timeline: Adobe.Flashpro.Timeline;
			/**
			 * Converts the symbol (item in Library) to a compiled clip 
			 * (SWF symbol)
			 * @returns {void}
			 */
			public convertToCompiledClip(): void;
			/**
			 * Export the symbol to a SWC file.  The output SWC file is 
			 * specified using a URI.
			 * @param {string} outputURI URI to export the SWC to.  This 
			 * URI should reference a local file.  Example: 
			 * file:///c|/tests/my.swc
			 * @returns {void}
			 */
			public exportSWC(outputURI: string): void;
			/**
			 * Exports the symbol item to a SWF file specified by a URI
			 * @param {string} outputURI The URI to export the SWF to.  
			 * This URI must reference a local file.  Example: 
			 * file:///c|/tests/my.swf
			 * @returns {void}
			 */
			public exportSWF(outputURI: string): void;
			/**
			 * Export an selected Instance of movie clip, graphic symbol or 
			 * button on stage to a bitmap in Library
			 * @param {number} frameNumber the frame to be exported
			 * @param {string} bitmapName the name of the bitmap to be 
			 * added in Library
			 * @returns {void}
			 */
			public exportToLibrary(frameNumber: number, bitmapName: string): void;
			/**
			 * Export an symbol item (movie clip, graphic symbol or button) 
			 * in Symbol Library to a series of PNG files
			 * @param {string} outputURI The URI to export the PNG Sequence 
			 * files to. This URI must reference a local file. Example: 
			 * file:///c|/tests/mytest.png  (with written permission)
			 * @param {number} startFramNum start frame number which will 
			 * be exported. The default number is 1
			 * @param {number} endFrameNum end frame number which will be 
			 * exported. The default number is 99999
			 * @param {mathObject} jsMatrix User can add additional matrix 
			 * to generate PNG sequence
			 * @returns {void}
			 */
			public exportToPNGSequence(outputURI: string, startFramNum: number, endFrameNum: number, jsMatrix: mathObject): void;
		}
	}
}