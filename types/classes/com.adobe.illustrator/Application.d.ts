/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The Adobe Illustrator application. */
		class Application extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The active document. */
			public activeDocument: Adobe.Illustrator.Document;
			/** Is a web browser available? */
			public readonly browserAvailable: boolean;
			/** The build number of the Adobe Illustrator application. */
			public readonly buildNumber: string;
			/**
			 * The list of color settings files currently available for 
			 * use.
			 */
			public readonly colorSettingsList: any;
			/** Coordinate System used by script */
			public coordinateSystem: Adobe.Illustrator.CoordinateSystem;
			/**
			 * The default color settings file for the current application 
			 * locale.
			 */
			public readonly defaultColorSettings: File;
			/** The open documents. */
			public readonly documents: Adobe.Illustrator.Documents;
			/**
			 * The list of flattener style names currently available for 
			 * use.
			 */
			public readonly flattenerPresetsList: any;
			/**
			 * The amount of unused memory within the Adobe Illustrator 
			 * partition.
			 */
			public readonly freeMemory: number;
			/** The Locale of the Adobe Illustrator application. */
			public readonly locale: string;
			/** The application's name. */
			public readonly name: string;
			/** Path specification for the application. */
			public readonly path: File;
			/** The list of PDF preset names currently available for use. */
			public readonly PDFPresetsList: any;
			/**
			 * The list of PPD files currently available for use. For 
			 * performance reasons, the PPDFile entry only contains the 
			 * model name and file spec of each PPD file.
			 */
			public readonly PPDFileList: any;
			/** Preferences for Illustrator. */
			public readonly preferences: Adobe.Illustrator.Preferences;
			/** The list of installed printers. */
			public readonly printerList: any;
			/** The list of print preset names currently available for use. */
			public readonly printPresetsList: any;
			/** The version of the Scripting plugin. */
			public readonly scriptingVersion: string;
			/** The selection visible to the user. */
			public selection: any;
			/** The list of presets available for creating a new document. */
			public readonly startupPresetsList: any;
			/** Installed fonts. */
			public readonly textFonts: Adobe.Illustrator.TextFonts;
			/**
			 * The list of tracing preset names currently available for 
			 * use.
			 */
			public readonly tracingPresetsList: any;
			/**
			 * What level of interaction with the user should be allowed 
			 * when handling script commands.
			 */
			public userInteractionLevel: Adobe.Illustrator.UserInteractionLevel;
			/** The version of the Adobe Illustrator application. */
			public readonly version: string;
			/** Is the application visible. */
			public readonly visible: boolean;
			/**
			 * Add the specified to the sequencer.
			 * @param {number} sessionIndex - The index in the session of 
			 * the top-most sequence for the item to add.
			 * @param {number} destinationSequenceID - The UID for the 
			 * owning sequence.
			 * @param {number} destinationIndex - The item UID where to 
			 * insert.
			 * @param {string} srcItemIDData - The item ID of the item to 
			 * construct.
			 * @param {string} _type - The source of the item to construct.
			 */
			public aATAddItem(sessionIndex: number, destinationSequenceID: number, destinationIndex: number, srcItemIDData: string, _type: string): string;
			/** Clear the sequencer. */
			public aATClear(): string;
			/**
			 * Duplicates the specified item(s) from the sequencer.
			 * @param {number} sessionIndex - The index in the session of 
			 * the top-most sequence for the item to add.
			 * @param {string} item - The item UID(s)
			 */
			public aATDuplicateItem(sessionIndex: number, item: string): string;
			/**
			 * Opens the specified item from the sequencer in the item 
			 * editor.
			 * @param {number} sessionIndex - The index in the session of 
			 * the top-most sequence for the item to add.
			 * @param {string} item - The item UID.
			 */
			public aATEditItem(sessionIndex: number, item: string): string;
			/**
			 * Retrieves a boolean indicating the presence of errors in the 
			 * last script to execute.
			 */
			public aATErrorsExist(): boolean;
			/** Executes the active session in the sequencer. */
			public aATExecuteSession(): void;
			/**
			 * Executes the active session in the sequencer.
			 * @param {Adobe.Flash.Filesystem.File} file - Execute a 
			 * session file.
			 */
			public aATExecuteSessionFromFile(file: Adobe.Flash.Filesystem.File): void;
			/**
			 * Switches a files relative token and path.
			 * @param {string} path - The path relative to the folder 
			 * specified by Relative.
			 * @param {string} relative - The current relative path token.
			 * @param {string} newRelative - The new relative path token.
			 */
			public aATFileRelativeChanged(path: string, relative: string, newRelative: string): string;
			/**
			 * Prompts the user to save a file or choose a file or 
			 * directory and returns a relative path string to the file.
			 * @param {string} path - The path relative to the folder 
			 * specified by Relative.
			 * @param {string} relative - The current relative path token.
			 * @param {string} _type - The type of dialog to show in string 
			 * format.
			 */
			public aATFileSaveDialog(path: string, relative: string, _type: string): string;
			/** Retrieves a file path to the AAT editor swf. */
			public aATGetEditorDialogFile(): File;
			/** Retrieves a file path to the AAT error dialog swf. */
			public aATGetErrorDialogFile(): File;
			/**
			 * Gets an XML string listing the relative paths and the UI 
			 * strings to display them.
			 */
			public aATGetListOfRelativePaths(): string;
			/** Get the active session for the sequncer. */
			public aATGetSession(): string;
			/** Loads a session file as an extension to the editor. */
			public aATLoadLibExtension(): string;
			/** Loads the aat model to the editor. */
			public aATLoadModel(): string;
			/** Loads a session into the sequencer. */
			public aATLoadSessionFile(): string;
			/** Loads a UI description as an extension to the editor. */
			public aATLoadUIExtension(): string;
			/**
			 * Moves the specified in the sequencer.
			 * @param {number} sessionIndex - The index in the session of 
			 * the top-most sequence for the item to move.
			 * @param {string} moveThisID - The UID of the item to replace.
			 * @param {number} newSessionIndex - The index in the session 
			 * of the destination top-most sequence.
			 * @param {string} destinationSequenceID - The UID for the 
			 * owning sequence.
			 * @param {number} destinationIndex - The index where to 
			 * insert.
			 */
			public aATMoveItem(sessionIndex: number, moveThisID: string, newSessionIndex: number, destinationSequenceID: string, destinationIndex: number): string;
			/**
			 * Removes the specified item from the sequencer.
			 * @param {number} sessionIndex - The index in the session of 
			 * the top-most sequence for the item to add.
			 * @param {string} item - The item UID.
			 */
			public aATRemoveItem(sessionIndex: number, item: string): string;
			/**
			 * Replaces the specified to the sequencer.
			 * @param {number} sessionIndex - The index in the session of 
			 * the top-most sequence for the item to add.
			 * @param {number} replaceThisID - The UID of the item to 
			 * replace.
			 * @param {string} srcItemIDData - The item ID of the item to 
			 * construct.
			 * @param {string} _type - The source of the item to construct.
			 */
			public aATReplaceItem(sessionIndex: number, replaceThisID: number, srcItemIDData: string, _type: string): string;
			/** Saves the active session in the sequencer to a new file. */
			public aATSaveAsSession(): string;
			/** Saves the active session in the sequencer to a file. */
			public aATSaveSession(): string;
			/**
			 * Applies the data used in the item editor to the item.
			 * @param {number} sessionIndex - The index in the session of 
			 * the top-most sequence for the item to edit.
			 * @param {string} item - The item UID.
			 * @param {string} data - The data to apply in XML format.
			 */
			public applyDataToItem(sessionIndex: number, item: string, data: string): string;
			/**
			 * Applies data to the specified item from the sequencer in the 
			 * item editor.
			 * @param {number} sessionIndex - The index in the session of 
			 * the top-most sequence for the item to add.
			 * @param {string} item - The item UID.
			 * @param {string} dataID - The data to apply in XML format.
			 * @param {string} data - The data to apply in XML format.
			 */
			public applySingleDataPointToItem(sessionIndex: number, item: string, dataID: string, data: string): boolean;
			public beep(): void;
			/**
			 * Concatenate two transformation matrices.
			 * @param {Adobe.Illustrator.Matrix} matrix - The matrix that 
			 * is to be added to.
			 * @param {Adobe.Illustrator.Matrix} secondMatrix - Second 
			 * transformation matrix.
			 */
			public concatenateMatrix(matrix: Adobe.Illustrator.Matrix, secondMatrix: Adobe.Illustrator.Matrix): Adobe.Illustrator.Matrix;
			/**
			 * Concatenate a rotation matrix to a transformation matrix.
			 * @param {Adobe.Illustrator.Matrix} matrix - The matrix that 
			 * is to be added to.
			 * @param {number} angle - Angle of rotation (in degrees)
			 */
			public concatenateRotationMatrix(matrix: Adobe.Illustrator.Matrix, angle: number): Adobe.Illustrator.Matrix;
			/**
			 * Concatenate a scale matrix to a transformation matrix.
			 * @param {Adobe.Illustrator.Matrix} matrix - The matrix that 
			 * is to be added to.
			 * @param {number} scaleX - Horizontal scaling factor expressed 
			 * as a percentage (100 = 100%) ( default: 100.0 )
			 * @param {number} scaleY - Vertical scaling factor expressed 
			 * as a percentage (100 = 100%) ( default: 100.0 )
			 */
			public concatenateScaleMatrix(matrix: Adobe.Illustrator.Matrix, scaleX: number, scaleY: number): Adobe.Illustrator.Matrix;
			/**
			 * Concatenate a translation to a transformation matrix.
			 * @param {Adobe.Illustrator.Matrix} matrix - The matrix that 
			 * is to be added to.
			 * @param {number} deltaX - Horizontal transformation. ( 
			 * default: 0.0 )
			 * @param {number} deltaY - Vertical transformation. ( default: 
			 * 0.0 )
			 */
			public concatenateTranslationMatrix(matrix: Adobe.Illustrator.Matrix, deltaX: number, deltaY: number): Adobe.Illustrator.Matrix;
			/**
			 * Converts a sample-component color from one color space to 
			 * another.
			 * @param {Adobe.Illustrator.ImageColorSpace} sourceColorSpace 
			 * - The source color space.
			 * @param {any} sourceColor - The color to convert, an array of 
			 * color components. First location of the array should contain 
			 * alpha if source-has-alpha is true.
			 * @param {Adobe.Illustrator.ImageColorSpace} destColorSpace - 
			 * The destination color space.
			 * @param {Adobe.Illustrator.ColorConvertPurpose} 
			 * colorConvertPurpose - The parameter which passes the purpose 
			 * of conversion.
			 * @param {boolean} sourceHasAlpha - True if alpha channel is 
			 * present in source color. ( default: false )
			 * @param {boolean} destHasAlpha - True if alpha channel is 
			 * present in destination color. ( default: false )
			 */
			public convertSampleColor(sourceColorSpace: Adobe.Illustrator.ImageColorSpace, sourceColor: any, destColorSpace: Adobe.Illustrator.ImageColorSpace, colorConvertPurpose: Adobe.Illustrator.ColorConvertPurpose, sourceHasAlpha: boolean, destHasAlpha: boolean): any;
			/** Copy current selection to the clipboard. */
			public copy(): void;
			/** Cut current selection to the clipboard. */
			public cut(): void;
			/**
			 * Retrieves a string containing the results of the last script 
			 * to execute.
			 */
			public getExecutionOutput(): string;
			/** Returns an identity matrix. */
			public getIdentityMatrix(): Adobe.Illustrator.Matrix;
			/**
			 * Get detailed info from the specified PPD file.
			 * @param {string} name - The model name of the PPD file.
			 */
			public getPPDFileInfo(name: string): Adobe.Illustrator.PPDFileInfo;
			/**
			 * Given a preset type, returns the full path to the 
			 * application's default document profile for the type.
			 * @param {Adobe.Illustrator.DocumentPresetType} presetType - 
			 * The preset type.
			 */
			public getPresetFileOfType(presetType: Adobe.Illustrator.DocumentPresetType): File;
			/**
			 * Given a preset name, tries and retrieves the settings from 
			 * the preset template.
			 * @param {string} preset - The name of the preset.
			 */
			public getPresetSettings(preset: string): Adobe.Illustrator.DocumentPreset;
			/**
			 * Returns a rotation transformation matrix.
			 * @param {number} angle - Angle of rotation (in degrees) ( 
			 * default: 0.0 )
			 */
			public getRotationMatrix(angle: number): Adobe.Illustrator.Matrix;
			/**
			 * Returns a scale transformation matrix.
			 * @param {number} scaleX - Horizontal scaling factor expressed 
			 * as a percentage (100 = 100%) ( default: 100.0 )
			 * @param {number} scaleY - Vertical scaling factor expressed 
			 * as a percentage (100 = 100%) ( default: 100.0 )
			 */
			public getScaleMatrix(scaleX: number, scaleY: number): Adobe.Illustrator.Matrix;
			/**
			 * Get the scriptable help group object that represents the 
			 * search widget in the app bar.
			 */
			public getScriptableHelpGroup(): any;
			/**
			 * Returns a translation matrix.
			 * @param {number} deltaX - Horizontal transformation. ( 
			 * default: 0.0 )
			 * @param {number} deltaY - Vertical transformation. ( default: 
			 * 0.0 )
			 */
			public getTranslationMatrix(deltaX: number, deltaY: number): Adobe.Illustrator.Matrix;
			/** Retrieves a string representing the AAT version. */
			public getVersionString(): string;
			/**
			 * Invert a matrix.
			 * @param {Adobe.Illustrator.Matrix} matrix - The matrix to 
			 * invert.
			 */
			public invertMatrix(matrix: Adobe.Illustrator.Matrix): Adobe.Illustrator.Matrix;
			/**
			 * Compares two matrices for equality.
			 * @param {Adobe.Illustrator.Matrix} matrix - First 
			 * transformation matrix to compare.
			 * @param {Adobe.Illustrator.Matrix} secondMatrix - Second 
			 * transformation matrix.
			 */
			public isEqualMatrix(matrix: Adobe.Illustrator.Matrix, secondMatrix: Adobe.Illustrator.Matrix): boolean;
			/**
			 * Tests if a matrix is singular (cannot be inverted)
			 * @param {Adobe.Illustrator.Matrix} matrix - The matrix to 
			 * check.
			 */
			public isSingularMatrix(matrix: Adobe.Illustrator.Matrix): boolean;
			/**
			 * Load the color settings from the file. If the file is an 
			 * empty file spec, the color management will be turned off.
			 * @param {Adobe.Flash.Filesystem.File} fileSpec - File spec 
			 * for the color settings.
			 */
			public loadColorSettings(fileSpec: Adobe.Flash.Filesystem.File): void;
			/**
			 * Open the specified document file.
			 * @param {Adobe.Flash.Filesystem.File} file - The file to be 
			 * opened.
			 * @param {Adobe.Illustrator.DocumentColorSpace} 
			 * documentColorSpace - Choose color space only for documents 
			 * saved with multiple color models (pre-Illustrator 9)
			 * @param {any} options - Options for opening a particular type 
			 * of file.
			 */
			public open(file: Adobe.Flash.Filesystem.File, documentColorSpace: Adobe.Illustrator.DocumentColorSpace, options: any): Adobe.Illustrator.Document;
			/** Paste clipboard into the current document. */
			public paste(): void;
			/** Quit the application. */
			public quit(): void;
			/** Redo the last transaction. */
			public redo(): void;
			/** Force Illustrator to redraw its window(s) */
			public redraw(): void;
			/**
			 * Runs API Tests from the TestAPI Plug-in
			 * @param {string} testName - Arguments for Running Tests - eg. 
			 * Name of Test/Suite
			 */
			public runAPITest(testName: string): void;
			/**
			 * Get presets from the file.
			 * @param {Adobe.Flash.Filesystem.File} fileSpec - File spec to 
			 * import from.
			 */
			public showPresets(fileSpec: Adobe.Flash.Filesystem.File): any;
			/**
			 * Translate the placeholder text to regular text. A method to 
			 * enter unicode points in hex values.
			 * @param {string} text - The placeholder text to be 
			 * translated.
			 */
			public translatePlaceholderText(text: string): string;
			/**
			 * Returns a string translated from the key and source data 
			 * passed in.
			 * @param {string} key - The string to translate.
			 * @param {string} source - The plugin name from the source of 
			 * the key.
			 */
			public translateString(key: string, source: string): string;
			/** Undo the last transaction. */
			public undo(): void;
		}
	}
}