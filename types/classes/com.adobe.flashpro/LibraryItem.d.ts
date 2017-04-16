/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The LibraryItem object is an abstract base class. Anything 
		 * in the library derives from LibraryItem.
		 */
		class LibraryItem extends Adobe.Csawlib.CSHostObject {
			/**
			 * Type of element. Potential values are: "undefined", 
			 * "component", "movie clip", "graphic", "button", "video", 
			 * "folder", "font", "sound", "bitmap", "video", "compiled 
			 * clip".
			 * @type {string}
			 * @readonly
			 */
			public readonly itemType: string;
			/**
			 * Base class for AS3 library symbols, appears in the linkage 
			 * dialog in the ui (and other dialogs that include the linkage 
			 * dialog controls, like the symbol properties dialog).
			 * 
			 * If the base class is the default for the symbol type (e.g. 
			 * "flash.display.MovieClip" for movie clips, 
			 * "flash.display.SimpleButton" for Buttons) then this will be 
			 * the empty string "", and setting it to the empty string is 
			 * the way to make it the default base class.
			 * 
			 * When setting this, none of the checks performed by the 
			 * linkage dialog are done (checks to make sure that the base 
			 * class can be found in the FLA's classpath, checks to make 
			 * sure class is auto-generated and not defined in the FLA's 
			 * classpath, ensures AS3 is chosed in publish properties and 
			 * symbol is exported).
			 * @type {string}
			 */
			public linkageBaseClass: string;
			/**
			 * The 'linkageClassName' property allows the user to specify 
			 * an ActionScript 2.0 class that will be associated with the 
			 * symbol. 'linkageExportForRS' and/or 'linkageExportForAS' 
			 * must be set to true, 'linkageImportForRS' must be set to 
			 * false.
			 * @type {string}
			 */
			public linkageClassName: string;
			/**
			 * If TRUE the item will be exported for ActionScript, FALSE 
			 * otherwise. User can also set the 'linkageExportForRS' and 
			 * 'linkageExportInFirstFrame' properties to true. 
			 * 'linkageImportForRS' must be set to false, if this is set to 
			 * true.
			 * @type {boolean}
			 */
			public linkageExportForAS: boolean;
			/**
			 * If TRUE the item will be exported for runtime sharing, FALSE 
			 * otherwise. Can only be set to true if 'linkageImportForRS' 
			 * is set to false. Must specify an identifier and URL.
			 * @type {boolean}
			 */
			public linkageExportForRS: boolean;
			/**
			 * If TRUE the item will be exported in the first frame, FALSE 
			 * otherwise. Can only be set to true when either 
			 * 'linkageExportForRS' or 'linkageExportForAS' are set to 
			 * true.
			 * @type {boolean}
			 */
			public linkageExportInFirstFrame: boolean;
			/**
			 * This is the name for the symbol when referencing it via 
			 * ActionScript or for runtime sharing, this is the name Flash 
			 * will use in identifying the asset when linking to the 
			 * destination movie. Must be specified if 'linkageExportForAS' 
			 * or 'linkageExportForRS' are set to true.
			 * @type {string}
			 */
			public linkageIdentifier: string;
			/**
			 * If TRUE the item will be imported for runtime sharing, FALSE 
			 * otherwise. 'linkageExportForRS' and 'linkageExportForAS' 
			 * must be set to false. User must specify an identifier and a 
			 * URL.
			 * @type {boolean}
			 */
			public linkageImportForRS: boolean;
			/**
			 * URL where the SWF file containing the shared asset is 
			 * located. Must be set when 'linkageExportForRS' or 
			 * 'linkageImportForRS' are set to true.
			 * @type {string}
			 */
			public linkageURL: string;
			/**
			 * Name of the library item.
			 * @type {string}
			 */
			public name: string;
			/**
			 * Adds specified data to library item.
			 * @param {string} name name of the data
			 * @param {string} _type this argument defines the type of 
			 * data. allowable types are "integer", "integerArray", 
			 * "double", "doubleArray", "string", and "byteArray".
			 * @param {any} data the value depends on the value of argument 
			 * 2. The logical rules apply.
			 * @returns {void}
			 */
			public addData(name: string, _type: string, data: any): void;
			/**
			 * Returns the value of the specified data. The type returned 
			 * depends on the type of data that was stored.
			 * @param {string} name the name of the data to return.
			 * @returns {any}
			 */
			public getData(name: string): any;
			/**
			 * Returns true if the library item has the named data.
			 * @param {string} name the name of the data to check for.
			 * @returns {boolean}
			 */
			public hasData(name: string): boolean;
			/**
			 * Removes persistent data from the library item.
			 * @param {string} name the name of the data to remove
			 * @returns {void}
			 */
			public removeData(name: string): void;
		}
	}
}