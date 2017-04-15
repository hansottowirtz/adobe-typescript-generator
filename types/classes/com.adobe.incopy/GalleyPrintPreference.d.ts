/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class GalleyPrintPreference extends Adobe.Incopy.Preference {
			/** The name of the font. */
			public appliedFont: string;
			/** If true, collate printed copies. */
			public collating: boolean;
			/**
			 * The number of copies to print. Note: Not valid when printer 
			 * is PostScript File.
			 */
			public copies: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The name of the font style. */
			public fontStyle: string;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The default amount of space as a percentage to include 
			 * between two lines of text. (Range: 100 to 300)
			 */
			public leading: number;
			/**
			 * The range of lines to print. Can return: LineRange 
			 * enumerator or String.
			 */
			public lineRange: any;
			/**
			 * The paper height. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 */
			public paperHeight: any;
			/**
			 * The paper size, specified as either a string or an 
			 * enumeration. For information on paper size names, see paper 
			 * size list. Can return: PaperSizes enumerator or String.
			 */
			public paperSize: any;
			/** A list of the available paper sizes. */
			public readonly paperSizeList: any;
			/**
			 * The paper width. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 */
			public paperWidth: any;
			/** The parent of the GalleyPrintPreference (a Application). */
			public readonly parent: any;
			/** The default text size (in points). (Range: 4 to 72). */
			public pointSize: any;
			/**
			 * If true, prints line endings as they appear in the story. 
			 * Note: Valid only when use galley settings is false.
			 */
			public printAccurateLineEndings: boolean;
			/**
			 * If true, prints all stories. If false, prints only the 
			 * current story.
			 */
			public printAllStories: boolean;
			/**
			 * The current printer. Can return: Printer enumerator or 
			 * String.
			 */
			public printer: any;
			/** Available printers. */
			public readonly printerList: any;
			/**
			 * The inline notes to print. Note: Valid only when use galley 
			 * settings is false.
			 */
			public printInlineNotes: Adobe.Incopy.VisibilityModes;
			/**
			 * If true, prints the line numbers column. Note: Valid only 
			 * when print accurate line endings is true.
			 */
			public printLineNumbers: boolean;
			/**
			 * If true, prints inline notes in the colors assigned to the 
			 * individuals who authored the notes. Note: Valid only when 
			 * print inline notes is true.
			 */
			public printNotesBackground: boolean;
			/**
			 * If true, prints the filename, page number, current date and 
			 * time, and color separation name.
			 */
			public printPageInfo: boolean;
			/** The orientation of the printed page. */
			public printPageOrientation: Adobe.Incopy.PrintPageOrientation;
			/**
			 * If true, prints the paragraph style column. Note: Valid only 
			 * when use galley settings is false.
			 */
			public printParagraphStyles: boolean;
			/**
			 * If true, prints the story name(s). Note: Valid only when use 
			 * galley settings is false.
			 */
			public printStoryInfo: boolean;
			/**
			 * The tracked changes to print. Note: Valid only when use 
			 * galley settings is false.
			 */
			public printTrackedChanges: Adobe.Incopy.VisibilityModes;
			/**
			 * If true, prints tracked changes in the colors assigned to 
			 * each person who made changes. Note: Valid only when print 
			 * tracked changes is true.
			 */
			public printTrackedChangesBackground: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, prints pages in reverse order. */
			public reverseOrder: boolean;
			/**
			 * The columns width in inches. Note: Valid only when use 
			 * multiple columns is true.
			 */
			public textColumnWidth: number;
			/**
			 * If true, uses the current galley settings. If false, allows 
			 * overrides of current galley settings.
			 */
			public useGalleySettings: boolean;
			/**
			 * If true, uses multiple columns to fill the page. Note: Valid 
			 * only when print accurate line endings is true.
			 */
			public useMultipleColumns: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGalleyPrintPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerGalleyPrintPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}