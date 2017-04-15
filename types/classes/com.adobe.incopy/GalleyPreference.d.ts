/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class GalleyPreference extends Adobe.Incopy.Preference {
			/**
			 * The type of text anti-aliasing to use in story and galley 
			 * views.
			 */
			public antiAliasType: Adobe.Incopy.AntiAliasType;
			/**
			 * The background color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as an InCopy UI color. . Can return: Array 
			 * of 3 Reals (0 - 255) or InCopyUIColors enumerator.
			 */
			public backgroundColor: any;
			/** If true, the cursor blinks. */
			public blinkCursor: boolean;
			/** The cursor type for galley and story views. */
			public cursorType: Adobe.Incopy.CursorTypes;
			/** Font family name to use for text display. */
			public displayFont: string;
			/** Size to use for text display. */
			public displayFontSize: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** Info column width. */
			public infoColumnWidth: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** Amount of spacing between lines. */
			public lineSpacingValue: Adobe.Incopy.LineSpacingType;
			/** The name of the preview font. */
			public overridePreviewFont: string;
			/**
			 * The parent of the GalleyPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, displays the depth ruler. */
			public showDepthRuler: boolean;
			/** If true, displays footnotes in story and galley views. */
			public showFootnotes: boolean;
			/** If true, display the Info column. */
			public showInfoColumn: boolean;
			/** If true, show line numbers. */
			public showLineNumbers: boolean;
			/** If true, show paragraph break marks. */
			public showParagraphBreakMarks: boolean;
			/** If true, show paragraph style names. */
			public showParagraphStyleNames: boolean;
			/** If true, galley text is anti-aliased. */
			public smoothText: boolean;
			/**
			 * The text color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as an InCopy UI color. Can return: Array of 
			 * 3 Reals (0 - 255) or InCopyUIColors enumerator.
			 */
			public textColor: any;
			/** If true, uses the override preview font. */
			public useOverridePreviewFont: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGalleyPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerGalleyPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}