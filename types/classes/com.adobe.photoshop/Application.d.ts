/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The Adobe Photoshop application */
		class Application extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** the frontmost document */
			public activeDocument: Adobe.Photoshop.Document;
			public backgroundColor: Adobe.Photoshop.SolidColor;
			/** the build number of Adobe Photoshop application */
			public readonly build: string;
			/** name of selected color settings' set */
			public colorSettings: any;
			/** controls whether or not Photoshop displays dialogs */
			public displayDialogs: Adobe.Photoshop.DialogModes;
			/** the open documents */
			public readonly documents: Adobe.Photoshop.Documents;
			/** the fonts installed on this system */
			public readonly fonts: Adobe.Photoshop.TextFonts;
			public foregroundColor: Adobe.Photoshop.SolidColor;
			/** the amount of unused memory available to Adobe Photoshop */
			public readonly freeMemory: number;
			/** language locale of application */
			public readonly locale: string;
			/** list of file image types Photoshop can open */
			public readonly macintoshFileTypes: any[];
			/** the log of measurements taken */
			public readonly measurementLog: Adobe.Photoshop.MeasurementLog;
			/** the application's name */
			public readonly name: string;
			/** the notifiers currently installed */
			public readonly notifiers: Adobe.Photoshop.Notifiers;
			/** enable or disable all notifiers */
			public notifiersEnabled: boolean;
			/** the full path of the location of the Photoshop application */
			public readonly path: File;
			public playbackDisplayDialogs: Adobe.Photoshop.DialogModes;
			public playbackParameters: Adobe.Photoshop.ActionDescriptor;
			/** preference settings */
			public readonly preferences: Adobe.Photoshop.Preferences;
			/** full path to the preferences folder */
			public readonly preferencesFolder: File;
			/** files in the recent file list */
			public readonly recentFiles: any[];
			/** the build date of the scripting interface */
			public readonly scriptingBuildDate: string;
			/** the version of the Scripting interface */
			public readonly scriptingVersion: string;
			/** system information of the host application and machine */
			public readonly systemInformation: string;
			/** the version of Adobe Photoshop application */
			public readonly version: string;
			/** list of file image extensions Photoshop can open */
			public readonly windowsFileTypes: any[];
			/**
			 * run the batch automation routine
			 * @param {any[]} inputFiles list of input files to operate on
			 * @param {string} action the name of the action to play (note 
			 * that the case of letters in the Action name is important and 
			 * must match the case of the name in the Actions palette)
			 * @param {string} _from the name of the action set containing 
			 * the action being played (note that the case of letters in 
			 * the Action Set name is important and must match the case of 
			 * the name in the Actions palette)
			 * @param {Adobe.Photoshop.BatchOptions} options options for 
			 * Batch
			 */
			public batch(inputFiles: any[], action: string, _from: string, options: Adobe.Photoshop.BatchOptions): string;
			public beep(): void;
			/** make Photoshop the front most / active application */
			public bringToFront(): void;
			/**
			 * convert from a four character code to a runtime ID
			 * @param {string} charID 
			 */
			public charIDToTypeID(charID: string): number;
			/**
			 * play an action from the Actions Palette
			 * @param {string} action the name of the action to play (note 
			 * that the case of letters in the Action name is important and 
			 * must match the case of the name in the Actions palette)
			 * @param {string} _from the name of the action set containing 
			 * the action being played (note that the case of letters in 
			 * the Action Set name is important and must match the case of 
			 * the name in the Actions palette)
			 */
			public doAction(action: string, _from: string): void;
			/**
			 * remove user objects from the Photoshop registry
			 * @param {string} key unique string ID for user object
			 */
			public eraseCustomOptions(key: string): void;
			/**
			 * play an ActionManager event
			 * @param {number} eventID event to play
			 * @param {Adobe.Photoshop.ActionDescriptor} descriptor the 
			 * action descriptor to play
			 * @param {Adobe.Photoshop.DialogModes} displayDialogs 
			 */
			public executeAction(eventID: number, descriptor: Adobe.Photoshop.ActionDescriptor, displayDialogs: Adobe.Photoshop.DialogModes): Adobe.Photoshop.ActionDescriptor;
			/**
			 * obtain an action descriptor
			 * @param {Adobe.Photoshop.ActionReference} reference reference 
			 * specification of the property
			 */
			public executeActionGet(reference: Adobe.Photoshop.ActionReference): Adobe.Photoshop.ActionDescriptor;
			/**
			 * is the feature with the given name enabled?
			 * @param {string} name name of the feature
			 */
			public featureEnabled(name: string): boolean;
			/**
			 * retrieve user objects from the Photoshop registry as an 
			 * ActionDescriptor
			 * @param {string} key unique string ID for user object
			 */
			public getCustomOptions(key: string): Adobe.Photoshop.ActionDescriptor;
			/** returns true if Quicktime is installed */
			public isQuicktimeAvailable(): boolean;
			/**
			 * load a support document
			 * @param {File} document the document to be opened
			 */
			public load(document: File): void;
			/**
			 * create a contact sheet from multiple files
			 * @param {any[]} inputFiles list of input files to include
			 * @param {Adobe.Photoshop.ContactSheetOptions} options options 
			 * for Contact Sheet
			 */
			public makeContactSheet(inputFiles: any[], options: Adobe.Photoshop.ContactSheetOptions): string;
			/**
			 * create a PDF presentation file
			 * @param {any[]} inputFiles list of input files to include in 
			 * the output
			 * @param {File} outputFile location of the output file
			 * @param {Adobe.Photoshop.PresentationOptions} options options 
			 * for the PDF presentation
			 */
			public makePDFPresentation(inputFiles: any[], outputFile: File, options: Adobe.Photoshop.PresentationOptions): string;
			/**
			 * Creates a web photo gallery
			 * @param {any} inputFolder folder to process or an array of 
			 * files to process
			 * @param {File} outputFolder location for output files
			 * @param {Adobe.Photoshop.GalleryOptions} options options for 
			 * the web photo gallery
			 */
			public makePhotoGallery(inputFolder: any, outputFolder: File, options: Adobe.Photoshop.GalleryOptions): string;
			/**
			 * DEPRECATED. Merges multiple files into one, user interaction 
			 * required.
			 * @param {any[]} inputFiles list of input files to include
			 */
			public makePhotomerge(inputFiles: any[]): string;
			/**
			 * create a picture package from multiple files
			 * @param {any[]} inputFiles list of input files to include
			 * @param {Adobe.Photoshop.PicturePackageOptions} options 
			 * options for Picture Package
			 */
			public makePicturePackage(inputFiles: any[], options: Adobe.Photoshop.PicturePackageOptions): string;
			/**
			 * open the specified document
			 * @param {File} document the document to be opened
			 * @param {any} _as document type (default is to let Photoshop 
			 * deduce the format)
			 * @param {boolean} asSmartObject create a smart object around 
			 * the document being opened ( default: false )
			 */
			public open(document: File, _as: any, asSmartObject: boolean): Adobe.Photoshop.Document;
			/** use the Photoshop open dialog to select files */
			public openDialog(): any[];
			/**
			 * purges one or more caches
			 * @param {Adobe.Photoshop.PurgeTarget} target what to purge
			 */
			public purge(target: Adobe.Photoshop.PurgeTarget): void;
			/**
			 * save user objects in the Photoshop registry
			 * @param {string} key unique string ID for user object
			 * @param {Adobe.Photoshop.ActionDescriptor} customObject the 
			 * user defined custom object as an ActionDescriptor
			 * @param {boolean} persistent should the object persist after 
			 * the script has finished ( default: true )
			 */
			public putCustomOptions(key: string, customObject: Adobe.Photoshop.ActionDescriptor, persistent: boolean): void;
			/**
			 * generate Creative Suite ActionScript Wrappers in specified 
			 * directory
			 * @param {File} outputFolder Location for the output files.
			 */
			public reflectCSAW(outputFolder: File): void;
			/** pause the script until the application refreshes */
			public refresh(): void;
			/** force the font list to get refreshed */
			public refreshFonts(): void;
			/**
			 * run a menu item
			 * @param {number} menuID id of menu to run
			 */
			public runMenuItem(menuID: number): void;
			/**
			 * display color picker dialog. Returns false if dialog is 
			 * cancelled, true otherwise
			 * @param {boolean} pickForeground if true the foreground color 
			 * is chosen, if false the background color is chosen ( 
			 * default: true )
			 */
			public showColorPicker(pickForeground: boolean): boolean;
			/**
			 * convert from a string ID to a runtime ID
			 * @param {string} stringID 
			 */
			public stringIDToTypeID(stringID: string): number;
			/**
			 * perform a system call
			 * @param {string} callString system call string
			 */
			public system(callString: string): number;
			/** toggle palette visibility */
			public togglePalettes(): void;
			/**
			 * convert from a runtime ID to a character ID
			 * @param {number} typeID 
			 */
			public typeIDToCharID(typeID: number): string;
			/**
			 * convert from a runtime ID to a string ID
			 * @param {number} typeID 
			 */
			public typeIDToStringID(typeID: number): string;
		}
	}
}