/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The Adobe Photoshop application */
		class Application extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the frontmost document
			 * @type {Adobe.Photoshop.Document}
			 */
			public activeDocument: Adobe.Photoshop.Document;
			/**
			 * @type {Adobe.Photoshop.SolidColor}
			 */
			public backgroundColor: Adobe.Photoshop.SolidColor;
			/**
			 * the build number of Adobe Photoshop application
			 * @type {string}
			 * @readonly
			 */
			public readonly build: string;
			/**
			 * name of selected color settings' set
			 * @type {any}
			 */
			public colorSettings: any;
			/**
			 * controls whether or not Photoshop displays dialogs
			 * @type {Adobe.Photoshop.DialogModes}
			 */
			public displayDialogs: Adobe.Photoshop.DialogModes;
			/**
			 * the open documents
			 * @type {Adobe.Photoshop.Documents}
			 * @readonly
			 */
			public readonly documents: Adobe.Photoshop.Documents;
			/**
			 * the fonts installed on this system
			 * @type {Adobe.Photoshop.TextFonts}
			 * @readonly
			 */
			public readonly fonts: Adobe.Photoshop.TextFonts;
			/**
			 * @type {Adobe.Photoshop.SolidColor}
			 */
			public foregroundColor: Adobe.Photoshop.SolidColor;
			/**
			 * the amount of unused memory available to Adobe Photoshop
			 * @type {number}
			 * @readonly
			 */
			public readonly freeMemory: number;
			/**
			 * language locale of application
			 * @type {string}
			 * @readonly
			 */
			public readonly locale: string;
			/**
			 * list of file image types Photoshop can open
			 * @type {any[]}
			 * @readonly
			 */
			public readonly macintoshFileTypes: any[];
			/**
			 * the log of measurements taken
			 * @type {Adobe.Photoshop.MeasurementLog}
			 * @readonly
			 */
			public readonly measurementLog: Adobe.Photoshop.MeasurementLog;
			/**
			 * the application's name
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * the notifiers currently installed
			 * @type {Adobe.Photoshop.Notifiers}
			 * @readonly
			 */
			public readonly notifiers: Adobe.Photoshop.Notifiers;
			/**
			 * enable or disable all notifiers
			 * @type {boolean}
			 */
			public notifiersEnabled: boolean;
			/**
			 * the full path of the location of the Photoshop application
			 * @type {File}
			 * @readonly
			 */
			public readonly path: File;
			/**
			 * @type {Adobe.Photoshop.DialogModes}
			 */
			public playbackDisplayDialogs: Adobe.Photoshop.DialogModes;
			/**
			 * @type {Adobe.Photoshop.ActionDescriptor}
			 */
			public playbackParameters: Adobe.Photoshop.ActionDescriptor;
			/**
			 * preference settings
			 * @type {Adobe.Photoshop.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Photoshop.Preferences;
			/**
			 * full path to the preferences folder
			 * @type {File}
			 * @readonly
			 */
			public readonly preferencesFolder: File;
			/**
			 * files in the recent file list
			 * @type {any[]}
			 * @readonly
			 */
			public readonly recentFiles: any[];
			/**
			 * the build date of the scripting interface
			 * @type {string}
			 * @readonly
			 */
			public readonly scriptingBuildDate: string;
			/**
			 * the version of the Scripting interface
			 * @type {string}
			 * @readonly
			 */
			public readonly scriptingVersion: string;
			/**
			 * system information of the host application and machine
			 * @type {string}
			 * @readonly
			 */
			public readonly systemInformation: string;
			/**
			 * the version of Adobe Photoshop application
			 * @type {string}
			 * @readonly
			 */
			public readonly version: string;
			/**
			 * list of file image extensions Photoshop can open
			 * @type {any[]}
			 * @readonly
			 */
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
			 * @returns {string}
			 */
			public batch(inputFiles: any[], action: string, _from: string, options: Adobe.Photoshop.BatchOptions): string;
			/**
			 * @returns {void}
			 */
			public beep(): void;
			/**
			 * make Photoshop the front most / active application
			 * @returns {void}
			 */
			public bringToFront(): void;
			/**
			 * convert from a four character code to a runtime ID
			 * @param {string} charID 
			 * @returns {number}
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
			 * @returns {void}
			 */
			public doAction(action: string, _from: string): void;
			/**
			 * remove user objects from the Photoshop registry
			 * @param {string} key unique string ID for user object
			 * @returns {void}
			 */
			public eraseCustomOptions(key: string): void;
			/**
			 * play an ActionManager event
			 * @param {number} eventID event to play
			 * @param {Adobe.Photoshop.ActionDescriptor} descriptor the 
			 * action descriptor to play
			 * @param {Adobe.Photoshop.DialogModes} displayDialogs 
			 * @returns {Adobe.Photoshop.ActionDescriptor}
			 */
			public executeAction(eventID: number, descriptor: Adobe.Photoshop.ActionDescriptor, displayDialogs: Adobe.Photoshop.DialogModes): Adobe.Photoshop.ActionDescriptor;
			/**
			 * obtain an action descriptor
			 * @param {Adobe.Photoshop.ActionReference} reference reference 
			 * specification of the property
			 * @returns {Adobe.Photoshop.ActionDescriptor}
			 */
			public executeActionGet(reference: Adobe.Photoshop.ActionReference): Adobe.Photoshop.ActionDescriptor;
			/**
			 * is the feature with the given name enabled?
			 * @param {string} name name of the feature
			 * @returns {boolean}
			 */
			public featureEnabled(name: string): boolean;
			/**
			 * retrieve user objects from the Photoshop registry as an 
			 * ActionDescriptor
			 * @param {string} key unique string ID for user object
			 * @returns {Adobe.Photoshop.ActionDescriptor}
			 */
			public getCustomOptions(key: string): Adobe.Photoshop.ActionDescriptor;
			/**
			 * returns true if Quicktime is installed
			 * @returns {boolean}
			 */
			public isQuicktimeAvailable(): boolean;
			/**
			 * load a support document
			 * @param {File} document the document to be opened
			 * @returns {void}
			 */
			public load(document: File): void;
			/**
			 * create a contact sheet from multiple files
			 * @param {any[]} inputFiles list of input files to include
			 * @param {Adobe.Photoshop.ContactSheetOptions} options options 
			 * for Contact Sheet
			 * @returns {string}
			 */
			public makeContactSheet(inputFiles: any[], options: Adobe.Photoshop.ContactSheetOptions): string;
			/**
			 * create a PDF presentation file
			 * @param {any[]} inputFiles list of input files to include in 
			 * the output
			 * @param {File} outputFile location of the output file
			 * @param {Adobe.Photoshop.PresentationOptions} options options 
			 * for the PDF presentation
			 * @returns {string}
			 */
			public makePDFPresentation(inputFiles: any[], outputFile: File, options: Adobe.Photoshop.PresentationOptions): string;
			/**
			 * Creates a web photo gallery
			 * @param {any} inputFolder folder to process or an array of 
			 * files to process
			 * @param {File} outputFolder location for output files
			 * @param {Adobe.Photoshop.GalleryOptions} options options for 
			 * the web photo gallery
			 * @returns {string}
			 */
			public makePhotoGallery(inputFolder: any, outputFolder: File, options: Adobe.Photoshop.GalleryOptions): string;
			/**
			 * DEPRECATED. Merges multiple files into one, user interaction 
			 * required.
			 * @param {any[]} inputFiles list of input files to include
			 * @returns {string}
			 */
			public makePhotomerge(inputFiles: any[]): string;
			/**
			 * create a picture package from multiple files
			 * @param {any[]} inputFiles list of input files to include
			 * @param {Adobe.Photoshop.PicturePackageOptions} options 
			 * options for Picture Package
			 * @returns {string}
			 */
			public makePicturePackage(inputFiles: any[], options: Adobe.Photoshop.PicturePackageOptions): string;
			/**
			 * open the specified document
			 * @param {File} document the document to be opened
			 * @param {any} _as document type (default is to let Photoshop 
			 * deduce the format)
			 * @param {boolean} asSmartObject create a smart object around 
			 * the document being opened ( default: false )
			 * @returns {Adobe.Photoshop.Document}
			 */
			public open(document: File, _as: any, asSmartObject: boolean): Adobe.Photoshop.Document;
			/**
			 * use the Photoshop open dialog to select files
			 * @returns {any[]}
			 */
			public openDialog(): any[];
			/**
			 * purges one or more caches
			 * @param {Adobe.Photoshop.PurgeTarget} target what to purge
			 * @returns {void}
			 */
			public purge(target: Adobe.Photoshop.PurgeTarget): void;
			/**
			 * save user objects in the Photoshop registry
			 * @param {string} key unique string ID for user object
			 * @param {Adobe.Photoshop.ActionDescriptor} customObject the 
			 * user defined custom object as an ActionDescriptor
			 * @param {boolean} persistent should the object persist after 
			 * the script has finished ( default: true )
			 * @returns {void}
			 */
			public putCustomOptions(key: string, customObject: Adobe.Photoshop.ActionDescriptor, persistent: boolean): void;
			/**
			 * generate Creative Suite ActionScript Wrappers in specified 
			 * directory
			 * @param {File} outputFolder Location for the output files.
			 * @returns {void}
			 */
			public reflectCSAW(outputFolder: File): void;
			/**
			 * pause the script until the application refreshes
			 * @returns {void}
			 */
			public refresh(): void;
			/**
			 * force the font list to get refreshed
			 * @returns {void}
			 */
			public refreshFonts(): void;
			/**
			 * run a menu item
			 * @param {number} menuID id of menu to run
			 * @returns {void}
			 */
			public runMenuItem(menuID: number): void;
			/**
			 * display color picker dialog. Returns false if dialog is 
			 * cancelled, true otherwise
			 * @param {boolean} pickForeground if true the foreground color 
			 * is chosen, if false the background color is chosen ( 
			 * default: true )
			 * @returns {boolean}
			 */
			public showColorPicker(pickForeground: boolean): boolean;
			/**
			 * convert from a string ID to a runtime ID
			 * @param {string} stringID 
			 * @returns {number}
			 */
			public stringIDToTypeID(stringID: string): number;
			/**
			 * perform a system call
			 * @param {string} callString system call string
			 * @returns {number}
			 */
			public system(callString: string): number;
			/**
			 * toggle palette visibility
			 * @returns {void}
			 */
			public togglePalettes(): void;
			/**
			 * convert from a runtime ID to a character ID
			 * @param {number} typeID 
			 * @returns {string}
			 */
			public typeIDToCharID(typeID: number): string;
			/**
			 * convert from a runtime ID to a string ID
			 * @param {number} typeID 
			 * @returns {string}
			 */
			public typeIDToStringID(typeID: number): string;
		}
	}
}