/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Application extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The frontmost document. */
			public activeDocument: Adobe.Photoshop.Document;
			/**
			 * The default background color (used to paint, fill, and 
			 * stroke selections).
			 */
			public backgroundColor: Adobe.Photoshop.SolidColor;
			/** The build number. */
			public readonly build: string;
			/** The name of the selected color setting's set. */
			public colorSettings: any;
			/**
			 * The dialog mode for the document, which indicates whether or 
			 * not Photoshop displays dialogs when the script runs.
			 */
			public displayDialogs: Adobe.Photoshop.DialogModes;
			/** The collection of open documents. */
			public readonly documents: Adobe.Photoshop.Documents;
			/** The fonts installed on this system. */
			public readonly fonts: Adobe.Photoshop.TextFonts;
			/**
			 * The default foreground color (used to paint, fill, and 
			 * stroke selections).
			 */
			public foregroundColor: Adobe.Photoshop.SolidColor;
			/** The amount of unused memory available to Photoshop. */
			public readonly freeMemory: number;
			/** The language locale of the application. */
			public readonly locale: string;
			/** A list of the image file types Photoshop can open. */
			public readonly macintoshFileTypes: any[];
			/** The log of measurements taken. */
			public readonly measurementLog: Adobe.Photoshop.MeasurementLog;
			/** The application name. */
			public readonly name: string;
			/**
			 * The notifiers currently configured (in the Scripts Events 
			 * Manager menu in the application).
			 */
			public readonly notifiers: Adobe.Photoshop.Notifiers;
			/** If true, notifiers are enabled. */
			public notifiersEnabled: boolean;
			/**
			 * The full path of the location of the Adobe Photoshop 
			 * application.
			 */
			public readonly path: File;
			/**
			 * The dialog mode for playback mode, which indicates whether 
			 * or not Photoshop displays dialogs in playback mode.
			 */
			public playbackDisplayDialogs: Adobe.Photoshop.DialogModes;
			/**
			 * The playback options, which indicate the speed at which 
			 * Photoshop plays actions.
			 */
			public playbackParameters: Adobe.Photoshop.ActionDescriptor;
			/**
			 * The application preference settings (equivalent to selecting 
			 * Edit > Preferences in the Adobe Photoshop application in 
			 * Windows or Photoshop > Preferences in Mac OS).
			 */
			public readonly preferences: Adobe.Photoshop.Preferences;
			/** The full path to the preferences folder. */
			public readonly preferencesFolder: File;
			/** Files in the Recent Files list. */
			public readonly recentFiles: any[];
			/** The build date of the scripting interface. */
			public readonly scriptingBuildDate: string;
			/** The version of the Scripting interface. */
			public readonly scriptingVersion: string;
			/** The system and applicaiton information. */
			public readonly systemInformation: string;
			/**
			 * The version of Adobe Photoshop application that you are 
			 * running.
			 */
			public readonly version: string;
			/** A list of the image file extensions Photoshop can open. */
			public readonly windowsFileTypes: any[];
			/**
			 * Runs the batch automation routine; analogous to using the 
			 * Batch command in Photoshop.
			 * @param {any} inputFiles - The files to operate on.
			 * @param {string} action - The name of the action to play 
			 * (note that the Action name is case-sensitive and must match 
			 * the name in the Actions palette).
			 * @param {string} _from - The name of the action set 
			 * containing the action being played (note that the Action Set 
			 * name is case-sensitive and must match the name in the 
			 * Actions palette).
			 * @param {Adobe.Photoshop.BatchOptions} options - Options for 
			 * batch automation.
			 */
			public batch(inputFiles: any, action: string, _from: string, options: Adobe.Photoshop.BatchOptions): string;
			/** Alerts the user. */
			public beep(): void;
			/** Makes Photoshop the active application. */
			public bringToFront(): void;
			/**
			 * Converts from a four character code to a runtime ID.
			 * @param {string} charID - The ID to convert.
			 */
			public charIDToTypeID(charID: string): number;
			/**
			 * Plays the specified action from the Actions palette.
			 * @param {string} action - The name of the action to play. 
			 * (Note that the action name is case-sensitive and must match 
			 * the name as it appears in the Actions palette.)
			 * @param {string} _from - The name of the action set 
			 * containing the action being played. (Note that the Action 
			 * Set name is case-sensitive and must match the name as it 
			 * appears in the Actions palette.)
			 */
			public doAction(action: string, _from: string): void;
			/**
			 * Removes the specified user objects from the Photoshop 
			 * registry.
			 * @param {string} key - The unique string ID for user 
			 * object(s) to remove.
			 */
			public eraseCustomOptions(key: string): void;
			/**
			 * Plays an ActionManager event.
			 * @param {number} eventID - The event to play.
			 * @param {Adobe.Photoshop.ActionDescriptor} descriptor - The 
			 * action descriptor to play.
			 * @param {Adobe.Photoshop.DialogModes} displayDialogs - The 
			 * display permissions for dialogs and alert messages.
			 */
			public executeAction(eventID: number, descriptor: Adobe.Photoshop.ActionDescriptor, displayDialogs: Adobe.Photoshop.DialogModes): Adobe.Photoshop.ActionDescriptor;
			/**
			 * Obtains an action descriptor.
			 * @param {Adobe.Photoshop.ActionReference} reference - The 
			 * reference specification of the property.
			 */
			public executeActionGet(reference: Adobe.Photoshop.ActionReference): Adobe.Photoshop.ActionDescriptor;
			/**
			 * If true, the specified feature is enabled.
			 * @param {string} name - The name of the feature.
			 */
			public featureEnabled(name: string): boolean;
			/**
			 * Retrieves user objects from the Photoshop registry for the 
			 * ID with value key.
			 * @param {string} key - The unique string ID for the user 
			 * object.
			 */
			public getCustomOptions(key: string): Adobe.Photoshop.ActionDescriptor;
			/** returns true if Quicktime is installed */
			public isQuicktimeAvailable(): boolean;
			/**
			 * Loads a support document.
			 * @param {Adobe.Flash.Filesystem.File} document - The document 
			 * to load.
			 */
			public load(document: Adobe.Flash.Filesystem.File): void;
			/**
			 * Creates a contact sheet from multiple files.
			 * @param {any} inputFiles - The files to include.
			 * @param {Adobe.Photoshop.ContactSheetOptions} options - 
			 * Options for creating the contact sheet.
			 */
			public makeContactSheet(inputFiles: any, options: Adobe.Photoshop.ContactSheetOptions): string;
			/**
			 * Creates a PDF presentation file.
			 * @param {any} inputFiles - The input files to include in the 
			 * presentation.
			 * @param {Adobe.Flash.Filesystem.File} outputFile - The 
			 * location of the output file.
			 * @param {Adobe.Photoshop.PresentationOptions} options - 
			 * Options for the PDF presentation.
			 */
			public makePDFPresentation(inputFiles: any, outputFile: Adobe.Flash.Filesystem.File, options: Adobe.Photoshop.PresentationOptions): string;
			/**
			 * Deprecated for Adobe Photoshop CS3. Creates a web photo 
			 * gallery.
			 * @param {any} inputFolder - Folder to process or an array of 
			 * files to process.
			 * @param {Adobe.Flash.Filesystem.File} outputFolder - Location 
			 * for output files.
			 * @param {Adobe.Photoshop.GalleryOptions} options - Options 
			 * for the web photo gallery.
			 */
			public makePhotoGallery(inputFolder: any, outputFolder: Adobe.Flash.Filesystem.File, options: Adobe.Photoshop.GalleryOptions): string;
			/**
			 * Deprecated for Adobe Photoshop CS3. Merges multiple files 
			 * into one, user interaction required.
			 * @param {any} inputFiles - List of input files to include.
			 */
			public makePhotomerge(inputFiles: any): string;
			/**
			 * Creates a picture package from multiple files.
			 * @param {any} inputFiles - The files to include.
			 * @param {Adobe.Photoshop.PicturePackageOptions} options - 
			 * Options for creating a Picture Package.
			 */
			public makePicturePackage(inputFiles: any, options: Adobe.Photoshop.PicturePackageOptions): string;
			/**
			 * Opens the specified document file(s).
			 * @param {Adobe.Flash.Filesystem.File} document - The 
			 * document(s) to opend.
			 * @param {any} _as - The document type (The default is to let 
			 * Photoshop deduce the format).
			 * @param {boolean} asSmartObject - Creates a smart object 
			 * around the document. ( default: false )
			 */
			public open(document: Adobe.Flash.Filesystem.File, _as: any, asSmartObject: boolean): Adobe.Photoshop.Document;
			/** Uses the Photoshop open dialog to select files. */
			public openDialog(): any;
			/**
			 * Purges one or more caches.
			 * @param {Adobe.Photoshop.PurgeTarget} target - The caches to 
			 * purge.
			 */
			public purge(target: Adobe.Photoshop.PurgeTarget): void;
			/**
			 * Saves user objects in the Photoshop registry.
			 * @param {string} key - The unique string ID for the user 
			 * object.
			 * @param {Adobe.Photoshop.ActionDescriptor} customObject - The 
			 * user-defined custom object to save in the registry.
			 * @param {boolean} persistent - If true, the object persists 
			 * after the script has finished. ( default: true )
			 */
			public putCustomOptions(key: string, customObject: Adobe.Photoshop.ActionDescriptor, persistent: boolean): void;
			/** Pauses the script until the application refreshes. */
			public refresh(): void;
			/** force the font list to get refreshed */
			public refreshFonts(): void;
			/**
			 * Run a menu item with the given ID. Use this for Insert Menu 
			 * Item.
			 * @param {number} menuID - id of menu to run
			 */
			public runMenuItem(menuID: number): void;
			/**
			 * display color picker dialog. Returns false if dialog is 
			 * cancelled, true otherwise
			 * @param {boolean} pickForeground - if true the foreground 
			 * color is chosen, if false the background color is chosen ( 
			 * default: true )
			 */
			public showColorPicker(pickForeground: boolean): boolean;
			/**
			 * Converts from a string ID to a runtime ID.
			 * @param {string} stringID - The ID to convert.
			 */
			public stringIDToTypeID(stringID: string): number;
			/**
			 * perform a system call
			 * @param {string} callString - system call string
			 */
			public system(callString: string): number;
			/** Toggle palette visibility. */
			public togglePalettes(): void;
			/**
			 * Converts from a runtime ID to a character ID.
			 * @param {number} typeID - The ID to convert.
			 */
			public typeIDToCharID(typeID: number): string;
			/**
			 * Converts from a runtime ID to a string ID.
			 * @param {number} typeID - The ID to convert.
			 */
			public typeIDToStringID(typeID: number): string;
		}
	}
}