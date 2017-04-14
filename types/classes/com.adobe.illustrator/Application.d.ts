/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
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
			/** Add the specified to the sequencer. */
			public aATAddItem(sessionIndex: number, destinationSequenceID: number, destinationIndex: number, srcItemIDData: string, _type: string): string;
			/** Clear the sequencer. */
			public aATClear(): string;
			/** Duplicates the specified item(s) from the sequencer. */
			public aATDuplicateItem(sessionIndex: number, item: string): string;
			/**
			 * Opens the specified item from the sequencer in the item 
			 * editor.
			 */
			public aATEditItem(sessionIndex: number, item: string): string;
			/**
			 * Retrieves a boolean indicating the presence of errors in the 
			 * last script to execute.
			 */
			public aATErrorsExist(): boolean;
			/** Executes the active session in the sequencer. */
			public aATExecuteSession(): void;
			/** Executes the active session in the sequencer. */
			public aATExecuteSessionFromFile(file: File): void;
			/** Switches a files relative token and path. */
			public aATFileRelativeChanged(path: string, relative: string, newRelative: string): string;
			/**
			 * Prompts the user to save a file or choose a file or 
			 * directory and returns a relative path string to the file.
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
			/** Moves the specified in the sequencer. */
			public aATMoveItem(sessionIndex: number, moveThisID: string, newSessionIndex: number, destinationSequenceID: string, destinationIndex: number): string;
			/** Removes the specified item from the sequencer. */
			public aATRemoveItem(sessionIndex: number, item: string): string;
			/** Replaces the specified to the sequencer. */
			public aATReplaceItem(sessionIndex: number, replaceThisID: number, srcItemIDData: string, _type: string): string;
			/** Saves the active session in the sequencer to a new file. */
			public aATSaveAsSession(): string;
			/** Saves the active session in the sequencer to a file. */
			public aATSaveSession(): string;
			/** Applies the data used in the item editor to the item. */
			public applyDataToItem(sessionIndex: number, item: string, data: string): string;
			/**
			 * Applies data to the specified item from the sequencer in the 
			 * item editor.
			 */
			public applySingleDataPointToItem(sessionIndex: number, item: string, dataID: string, data: string): boolean;
			public beep(): void;
			/** Concatenate two transformation matrices. */
			public concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Adobe.Illustrator.Matrix;
			/** Concatenate a rotation matrix to a transformation matrix. */
			public concatenateRotationMatrix(matrix: Matrix, angle: number): Adobe.Illustrator.Matrix;
			/** Concatenate a scale matrix to a transformation matrix. */
			public concatenateScaleMatrix(matrix: Matrix, scaleX: number, scaleY: number): Adobe.Illustrator.Matrix;
			/** Concatenate a translation to a transformation matrix. */
			public concatenateTranslationMatrix(matrix: Matrix, deltaX: number, deltaY: number): Adobe.Illustrator.Matrix;
			/**
			 * Converts a sample-component color from one color space to 
			 * another.
			 */
			public convertSampleColor(sourceColorSpace: ImageColorSpace, sourceColor: any, destColorSpace: ImageColorSpace, colorConvertPurpose: ColorConvertPurpose, sourceHasAlpha: boolean, destHasAlpha: boolean): any;
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
			/** Get detailed info from the specified PPD file. */
			public getPPDFileInfo(name: string): Adobe.Illustrator.PPDFileInfo;
			/**
			 * Given a preset type, returns the full path to the 
			 * application's default document profile for the type.
			 */
			public getPresetFileOfType(presetType: DocumentPresetType): File;
			/**
			 * Given a preset name, tries and retrieves the settings from 
			 * the preset template.
			 */
			public getPresetSettings(preset: string): Adobe.Illustrator.DocumentPreset;
			/** Returns a rotation transformation matrix. */
			public getRotationMatrix(angle: number): Adobe.Illustrator.Matrix;
			/** Returns a scale transformation matrix. */
			public getScaleMatrix(scaleX: number, scaleY: number): Adobe.Illustrator.Matrix;
			/**
			 * Get the scriptable help group object that represents the 
			 * search widget in the app bar.
			 */
			public getScriptableHelpGroup(): any;
			/** Returns a translation matrix. */
			public getTranslationMatrix(deltaX: number, deltaY: number): Adobe.Illustrator.Matrix;
			/** Retrieves a string representing the AAT version. */
			public getVersionString(): string;
			/** Invert a matrix. */
			public invertMatrix(matrix: Matrix): Adobe.Illustrator.Matrix;
			/** Compares two matrices for equality. */
			public isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean;
			/** Tests if a matrix is singular (cannot be inverted) */
			public isSingularMatrix(matrix: Matrix): boolean;
			/**
			 * Load the color settings from the file. If the file is an 
			 * empty file spec, the color management will be turned off.
			 */
			public loadColorSettings(fileSpec: File): void;
			/** Open the specified document file. */
			public open(file: File, documentColorSpace: DocumentColorSpace, options: any): Adobe.Illustrator.Document;
			/** Paste clipboard into the current document. */
			public paste(): void;
			/** Quit the application. */
			public quit(): void;
			/** Redo the last transaction. */
			public redo(): void;
			/** Force Illustrator to redraw its window(s) */
			public redraw(): void;
			/** Runs API Tests from the TestAPI Plug-in */
			public runAPITest(testName: string): void;
			/** Get presets from the file. */
			public showPresets(fileSpec: File): any;
			/**
			 * Translate the placeholder text to regular text. A method to 
			 * enter unicode points in hex values.
			 */
			public translatePlaceholderText(text: string): string;
			/**
			 * Returns a string translated from the key and source data 
			 * passed in.
			 */
			public translateString(key: string, source: string): string;
			/** Undo the last transaction. */
			public undo(): void;
		}
	}
}