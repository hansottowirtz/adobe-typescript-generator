/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The Adobe Illustrator application */
		class Application extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The active document */
			public activeDocument: Adobe.Illustrator.Document;
			/** is a web browser available? */
			public readonly browserAvailable: boolean;
			/** the build number of the Adobe Illustrator application */
			public readonly buildNumber: string;
			/**
			 * the list of color settings files currently available for use
			 */
			public readonly colorSettingsList: any[];
			/** Coordinate System used by script */
			public coordinateSystem: Adobe.Illustrator.CoordinateSystem;
			/**
			 * the default color settings file for the current application 
			 * locale.
			 */
			public readonly defaultColorSettings: File;
			/** the open documents */
			public readonly documents: Adobe.Illustrator.Documents;
			/**
			 * the list of flattener style names currently available for 
			 * use
			 */
			public readonly flattenerPresetsList: any[];
			/**
			 * the amount of unused memory within the Adobe Illustrator 
			 * partition
			 */
			public readonly freeMemory: number;
			/** the Locale of the Adobe Illustrator application */
			public readonly locale: string;
			/** The application's name */
			public readonly name: string;
			/** Path specification for the application */
			public readonly path: File;
			/** the list of PDF preset names currently available for use */
			public readonly PDFPresetsList: any[];
			/**
			 * the list of PPD files currently available for use. For 
			 * performance reasons, the PPDFile entry only contains the 
			 * model name and file spec of each PPD file.
			 */
			public readonly PPDFileList: any[];
			/** preferences for Illustrator */
			public readonly preferences: Adobe.Illustrator.Preferences;
			/** the list of installed printers */
			public readonly printerList: any[];
			/** the list of print preset names currently available for use */
			public readonly printPresetsList: any[];
			/** the version of the Scripting plugin */
			public readonly scriptingVersion: string;
			/** the selection visible to the user */
			public selection: any;
			/** the list of presets available for creating a new document */
			public readonly startupPresetsList: any[];
			/** installed fonts */
			public readonly textFonts: Adobe.Illustrator.TextFonts;
			/**
			 * the list of tracing preset names currently available for use
			 */
			public readonly tracingPresetsList: any[];
			/**
			 * what level of interaction with the user should be allowed 
			 * when handling script commands
			 */
			public userInteractionLevel: Adobe.Illustrator.UserInteractionLevel;
			/** the version of the Adobe Illustrator application */
			public readonly version: string;
			/** Is the application visible */
			public readonly visible: boolean;
			/**
			 * add the specified to the sequencer
			 * @param {number} sessionIndex the index in the session of the 
			 * top-most sequence for the item to add
			 * @param {number} destinationSequenceID the UID for the owning 
			 * sequence
			 * @param {number} destinationIndex the item UID where to 
			 * insert
			 * @param {string} srcItemIDData the item ID of the item to 
			 * construct
			 * @param {string} _type the source of the item to construct
			 */
			public aATAddItem(sessionIndex: number, destinationSequenceID: number, destinationIndex: number, srcItemIDData: string, _type: string): string;
			/** clear the sequencer */
			public aATClear(): string;
			/**
			 * duplicates the specified item(s) from the sequencer
			 * @param {number} sessionIndex the index in the session of the 
			 * top-most sequence for the item to add
			 * @param {string} item the item UID(s)
			 */
			public aATDuplicateItem(sessionIndex: number, item: string): string;
			/**
			 * opens the specified item from the sequencer in the item 
			 * editor
			 * @param {number} sessionIndex the index in the session of the 
			 * top-most sequence for the item to add
			 * @param {string} item the item UID
			 */
			public aATEditItem(sessionIndex: number, item: string): string;
			/**
			 * retrieves a boolean indicating the presence of errors in the 
			 * last script to execute
			 */
			public aATErrorsExist(): boolean;
			/** executes the active session in the sequencer */
			public aATExecuteSession(): void;
			/**
			 * executes the active session in the sequencer
			 * @param {File} file execute a session file
			 */
			public aATExecuteSessionFromFile(file: File): void;
			/**
			 * switches a files relative token and path
			 * @param {string} path the path relative to the folder 
			 * specified by Relative
			 * @param {string} relative the current relative path token
			 * @param {string} newRelative the new relative path token
			 */
			public aATFileRelativeChanged(path: string, relative: string, newRelative: string): string;
			/**
			 * prompts the user to save a file or choose a file or 
			 * directory and returns a relative path string to the file
			 * @param {string} path the path relative to the folder 
			 * specified by Relative
			 * @param {string} relative the current relative path token
			 * @param {string} _type the type of dialog to show in string 
			 * format
			 */
			public aATFileSaveDialog(path: string, relative: string, _type: string): string;
			/** retrieves a file path to the AAT editor swf */
			public aATGetEditorDialogFile(): File;
			/** retrieves a file path to the AAT error dialog swf */
			public aATGetErrorDialogFile(): File;
			/**
			 * Gets an XML string listing the relative paths and the UI 
			 * strings to display them
			 */
			public aATGetListOfRelativePaths(): string;
			/** get the active session for the sequncer */
			public aATGetSession(): string;
			/** loads a session file as an extension to the editor */
			public aATLoadLibExtension(): string;
			/** loads the aat model to the editor */
			public aATLoadModel(): string;
			/** loads a session into the sequencer */
			public aATLoadSessionFile(): string;
			/** loads a UI description as an extension to the editor */
			public aATLoadUIExtension(): string;
			/**
			 * moves the specified in the sequencer
			 * @param {number} sessionIndex the index in the session of the 
			 * top-most sequence for the item to move
			 * @param {string} moveThisID the UID of the item to replace
			 * @param {number} newSessionIndex the index in the session of 
			 * the destination top-most sequence
			 * @param {string} destinationSequenceID the UID for the owning 
			 * sequence
			 * @param {number} destinationIndex the index where to insert
			 */
			public aATMoveItem(sessionIndex: number, moveThisID: string, newSessionIndex: number, destinationSequenceID: string, destinationIndex: number): string;
			/**
			 * removes the specified item from the sequencer
			 * @param {number} sessionIndex the index in the session of the 
			 * top-most sequence for the item to add
			 * @param {string} item the item UID
			 */
			public aATRemoveItem(sessionIndex: number, item: string): string;
			/**
			 * replaces the specified to the sequencer
			 * @param {number} sessionIndex the index in the session of the 
			 * top-most sequence for the item to add
			 * @param {number} replaceThisID the UID of the item to replace
			 * @param {string} srcItemIDData the item ID of the item to 
			 * construct
			 * @param {string} _type the source of the item to construct
			 */
			public aATReplaceItem(sessionIndex: number, replaceThisID: number, srcItemIDData: string, _type: string): string;
			/** saves the active session in the sequencer to a new file */
			public aATSaveAsSession(): string;
			/** saves the active session in the sequencer to a file */
			public aATSaveSession(): string;
			/**
			 * applies the data used in the item editor to the item
			 * @param {number} sessionIndex the index in the session of the 
			 * top-most sequence for the item to edit
			 * @param {string} item the item UID
			 * @param {string} data the data to apply in XML format
			 */
			public applyDataToItem(sessionIndex: number, item: string, data: string): string;
			/**
			 * applies data to the specified item from the sequencer in the 
			 * item editor
			 * @param {number} sessionIndex the index in the session of the 
			 * top-most sequence for the item to add
			 * @param {string} item the item UID
			 * @param {string} dataID the data to apply in XML format
			 * @param {string} data the data to apply in XML format
			 */
			public applySingleDataPointToItem(sessionIndex: number, item: string, dataID: string, data: string): boolean;
			public beep(): void;
			/**
			 * Concatenate two transformation matrices
			 * @param {Adobe.Illustrator.Matrix} matrix the matrix that is 
			 * to be added to
			 * @param {Adobe.Illustrator.Matrix} secondMatrix second 
			 * transformation matrix
			 */
			public concatenateMatrix(matrix: Adobe.Illustrator.Matrix, secondMatrix: Adobe.Illustrator.Matrix): Adobe.Illustrator.Matrix;
			/**
			 * Concatenate a rotation matrix to a transformation matrix
			 * @param {Adobe.Illustrator.Matrix} matrix the matrix that is 
			 * to be added to
			 * @param {number} angle angle of rotation (in degrees)
			 */
			public concatenateRotationMatrix(matrix: Adobe.Illustrator.Matrix, angle: number): Adobe.Illustrator.Matrix;
			/**
			 * Concatenate a scale matrix to a transformation matrix
			 * @param {Adobe.Illustrator.Matrix} matrix the matrix that is 
			 * to be added to
			 * @param {number} scaleX horizontal scaling factor expressed 
			 * as a percentage (100 = 100%) ( default: 100.0 )
			 * @param {number} scaleY vertical scaling factor expressed as 
			 * a percentage (100 = 100%) ( default: 100.0 )
			 */
			public concatenateScaleMatrix(matrix: Adobe.Illustrator.Matrix, scaleX: number, scaleY: number): Adobe.Illustrator.Matrix;
			/**
			 * Concatenate a translation to a transformation matrix
			 * @param {Adobe.Illustrator.Matrix} matrix the matrix that is 
			 * to be added to
			 * @param {number} deltaX horizontal transformation ( default: 
			 * 0.0 )
			 * @param {number} deltaY vertical transformation ( default: 
			 * 0.0 )
			 */
			public concatenateTranslationMatrix(matrix: Adobe.Illustrator.Matrix, deltaX: number, deltaY: number): Adobe.Illustrator.Matrix;
			/**
			 * Converts a sample-component color from one color space to 
			 * another.
			 * @param {Adobe.Illustrator.ImageColorSpace} sourceColorSpace 
			 * The source color space
			 * @param {any[]} sourceColor The color to convert, an array of 
			 * color components. First location of the array should contain 
			 * alpha if source-has-alpha is true.
			 * @param {Adobe.Illustrator.ImageColorSpace} destColorSpace 
			 * The destination color space
			 * @param {Adobe.Illustrator.ColorConvertPurpose} 
			 * colorConvertPurpose The parameter which passes the purpose 
			 * of conversion
			 * @param {boolean} sourceHasAlpha True if alpha channel is 
			 * present in source color. ( default: false )
			 * @param {boolean} destHasAlpha True if alpha channel is 
			 * present in destination color. ( default: false )
			 */
			public convertSampleColor(sourceColorSpace: Adobe.Illustrator.ImageColorSpace, sourceColor: any[], destColorSpace: Adobe.Illustrator.ImageColorSpace, colorConvertPurpose: Adobe.Illustrator.ColorConvertPurpose, sourceHasAlpha: boolean, destHasAlpha: boolean): any[];
			/** Copy current selection to the clipboard */
			public copy(): void;
			/** Cut current selection to the clipboard */
			public cut(): void;
			/**
			 * Play an action from the Actions Palette
			 * @param {string} action The name of the action to play (note 
			 * that the case of letters in the Action name is important and 
			 * must match the case of the name in the Actions palette)
			 * @param {string} _from the name of the action set containing 
			 * the action being played (note that the case of letters in 
			 * the Action Set name is important and must match the case of 
			 * the name in the Actions palette)
			 * @param {boolean} dialogs are dialog boxes associated with 
			 * the action to be presented? ( default: true )
			 */
			public doScript(action: string, _from: string, dialogs: boolean): void;
			/**
			 * Dump the PGF portion of ai file to txt file
			 * @param {File} file the AI file to be opened
			 * @param {Adobe.Illustrator.DocumentColorSpace} 
			 * documentColorSpace choose color space only for documents 
			 * saved with multiple color models (pre-Illustrator 9)
			 * @param {File} pGFFile Folder to save the output PGF file
			 */
			public dumpPGFFile(file: File, documentColorSpace: Adobe.Illustrator.DocumentColorSpace, pGFFile: File): boolean;
			/**
			 * executes a menu command using the menu shortcut string
			 * @param {string} menuCommandString menu command shortcut
			 */
			public executeMenuCommand(menuCommandString: string): void;
			/**
			 * retrieves a string containing the results of the last script 
			 * to execute
			 */
			public getExecutionOutput(): string;
			/** Returns an identity matrix */
			public getIdentityMatrix(): Adobe.Illustrator.Matrix;
			/**
			 * get detailed info from the specified PPD file
			 * @param {string} name the model name of the PPD file
			 */
			public getPPDFileInfo(name: string): Adobe.Illustrator.PPDFileInfo;
			/**
			 * given a preset type, returns the full path to the 
			 * application's default document profile for the type
			 * @param {Adobe.Illustrator.DocumentPresetType} presetType the 
			 * preset type
			 */
			public getPresetFileOfType(presetType: Adobe.Illustrator.DocumentPresetType): File;
			/**
			 * given a preset name, tries and retrieves the settings from 
			 * the preset template
			 * @param {string} preset the name of the preset
			 */
			public getPresetSettings(preset: string): Adobe.Illustrator.DocumentPreset;
			/**
			 * Returns a rotation transformation matrix
			 * @param {number} angle angle of rotation (in degrees) ( 
			 * default: 0.0 )
			 */
			public getRotationMatrix(angle: number): Adobe.Illustrator.Matrix;
			/**
			 * Returns a scale transformation matrix
			 * @param {number} scaleX horizontal scaling factor expressed 
			 * as a percentage (100 = 100%) ( default: 100.0 )
			 * @param {number} scaleY vertical scaling factor expressed as 
			 * a percentage (100 = 100%) ( default: 100.0 )
			 */
			public getScaleMatrix(scaleX: number, scaleY: number): Adobe.Illustrator.Matrix;
			/**
			 * Get the scriptable help group object that represents the 
			 * search widget in the app bar
			 */
			public getScriptableHelpGroup(): any;
			/**
			 * Returns a translation matrix
			 * @param {number} deltaX horizontal transformation ( default: 
			 * 0.0 )
			 * @param {number} deltaY vertical transformation ( default: 
			 * 0.0 )
			 */
			public getTranslationMatrix(deltaX: number, deltaY: number): Adobe.Illustrator.Matrix;
			/** retrieves a string representing the AAT version */
			public getVersionString(): string;
			/**
			 * Invert a matrix
			 * @param {Adobe.Illustrator.Matrix} matrix the matrix to 
			 * invert
			 */
			public invertMatrix(matrix: Adobe.Illustrator.Matrix): Adobe.Illustrator.Matrix;
			/**
			 * Compares two matrices for equality
			 * @param {Adobe.Illustrator.Matrix} matrix first 
			 * transformation matrix to compare
			 * @param {Adobe.Illustrator.Matrix} secondMatrix second 
			 * transformation matrix
			 */
			public isEqualMatrix(matrix: Adobe.Illustrator.Matrix, secondMatrix: Adobe.Illustrator.Matrix): boolean;
			/**
			 * Tests if a matrix is singular (cannot be inverted)
			 * @param {Adobe.Illustrator.Matrix} matrix the matrix to check
			 */
			public isSingularMatrix(matrix: Adobe.Illustrator.Matrix): boolean;
			/**
			 * Load an action into action palette
			 * @param {File} actionFilePath The path on the system of the 
			 * action file to be loaded
			 */
			public loadAction(actionFilePath: File): void;
			/**
			 * load the color settings from the file. If the file is an 
			 * empty file spec, the color management will be turned off.
			 * @param {File} fileSpec file spec for the color settings
			 */
			public loadColorSettings(fileSpec: File): void;
			/**
			 * Open the specified document file
			 * @param {File} file the file to be opened
			 * @param {Adobe.Illustrator.DocumentColorSpace} 
			 * documentColorSpace choose color space only for documents 
			 * saved with multiple color models (pre-Illustrator 9)
			 * @param {any} options options for opening a particular type 
			 * of file
			 */
			public open(file: File, documentColorSpace: Adobe.Illustrator.DocumentColorSpace, options: any): Adobe.Illustrator.Document;
			/** Paste clipboard into the current document */
			public paste(): void;
			/** Quit the application */
			public quit(): void;
			/** Redo the last transaction */
			public redo(): void;
			/** Force Illustrator to redraw its window(s) */
			public redraw(): void;
			/**
			 * generate Creative Suite ActionScript Wrappers in specified 
			 * directory
			 * @param {File} outputFolder Location for the output files.
			 */
			public reflectCSAW(outputFolder: File): void;
			/**
			 * Runs API Tests from the TestAPI Plug-in
			 * @param {string} testName Arguments for Running Tests - eg. 
			 * Name of Test/Suite
			 */
			public runAPITest(testName: string): void;
			/**
			 * sends the script message to the required plugin
			 * @param {string} pluginName Plugin to which message needs to 
			 * be sent
			 * @param {string} messageSelector Functionality that is to be 
			 * executed
			 * @param {string} inputString Pass any data encoded in a 
			 * string.
			 */
			public sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string;
			/**
			 * get presets from the file
			 * @param {File} fileSpec file spec to import from
			 */
			public showPresets(fileSpec: File): any[];
			/**
			 * translate the placeholder text to regular text. A method to 
			 * enter unicode points in hex values.
			 * @param {string} text the placeholder text to be translated
			 */
			public translatePlaceholderText(text: string): string;
			/**
			 * returns a string translated from the key and source data 
			 * passed in
			 * @param {string} key the string to translate
			 * @param {string} source the plugin name from the source of 
			 * the key
			 */
			public translateString(key: string, source: string): string;
			/** Undo the last transaction */
			public undo(): void;
			/**
			 * unloads an action into action palette
			 * @param {string} setName Name of the set to be unloaded
			 * @param {string} actionName Name of the action to be unloaded
			 */
			public unloadAction(setName: string, actionName: string): void;
		}
	}
}