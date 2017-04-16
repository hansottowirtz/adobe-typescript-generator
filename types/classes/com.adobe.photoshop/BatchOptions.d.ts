/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** options for the Batch command */
		class BatchOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * final destination of processed files ( default: 
			 * BatchDestinationType.NODESTINATION )
			 * @type {Adobe.Photoshop.BatchDestinationType}
			 */
			public destination: Adobe.Photoshop.BatchDestinationType;
			/**
			 * folder location when using destination to a folder
			 * @type {File}
			 */
			public destinationFolder: File;
			/**
			 * file to log errors encountered, leave this blank to stop for 
			 * errors
			 * @type {File}
			 */
			public errorFile: File;
			/**
			 * list of file naming options 6 max.
			 * @type {any[]}
			 */
			public fileNaming: any[];
			/**
			 * make final file name Macintosh compatible ( default: true )
			 * @type {boolean}
			 */
			public macintoshCompatible: boolean;
			/**
			 * override action open commands ( default: false )
			 * @type {boolean}
			 */
			public overrideOpen: boolean;
			/**
			 * override save as action steps with destination specified 
			 * here ( default: false )
			 * @type {boolean}
			 */
			public overrideSave: boolean;
			/**
			 * starting serial number to use ( default: 1 )
			 * @type {number}
			 */
			public startingSerial: number;
			/**
			 * suppress file open options dialogs ( default: false )
			 * @type {boolean}
			 */
			public suppressOpen: boolean;
			/**
			 * suppress color profile warnings ( default: false )
			 * @type {boolean}
			 */
			public suppressProfile: boolean;
			/**
			 * make final file name Unix compatible ( default: true )
			 * @type {boolean}
			 */
			public unixCompatible: boolean;
			/**
			 * make final file name Windows compatible ( default: true )
			 * @type {boolean}
			 */
			public windowsCompatible: boolean;
		}
	}
}