/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** options for the Batch command */
		class BatchOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * final destination of processed files ( default: 
			 * BatchDestinationType.NODESTINATION )
			 */
			public destination: Adobe.Photoshop.BatchDestinationType;
			/** folder location when using destination to a folder */
			public destinationFolder: File;
			/**
			 * file to log errors encountered, leave this blank to stop for 
			 * errors
			 */
			public errorFile: File;
			/** list of file naming options 6 max. */
			public fileNaming: any[];
			/** make final file name Macintosh compatible ( default: true ) */
			public macintoshCompatible: boolean;
			/** override action open commands ( default: false ) */
			public overrideOpen: boolean;
			/**
			 * override save as action steps with destination specified 
			 * here ( default: false )
			 */
			public overrideSave: boolean;
			/** starting serial number to use ( default: 1 ) */
			public startingSerial: number;
			/** suppress file open options dialogs ( default: false ) */
			public suppressOpen: boolean;
			/** suppress color profile warnings ( default: false ) */
			public suppressProfile: boolean;
			/** make final file name Unix compatible ( default: true ) */
			public unixCompatible: boolean;
			/** make final file name Windows compatible ( default: true ) */
			public windowsCompatible: boolean;
		}
	}
}