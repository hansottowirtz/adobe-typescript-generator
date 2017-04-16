/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class GalleyPreference extends Adobe.Incopy.Preference {
			/**
			 * The type of text anti-aliasing to use in story and galley 
			 * views.
			 * @type {Adobe.Incopy.AntiAliasType}
			 */
			public antiAliasType: Adobe.Incopy.AntiAliasType;
			/**
			 * The background color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as an InCopy UI color. . Can return: Array 
			 * of 3 Reals (0 - 255) or InCopyUIColors enumerator.
			 * @type {any}
			 */
			public backgroundColor: any;
			/**
			 * If true, the cursor blinks.
			 * @type {boolean}
			 */
			public blinkCursor: boolean;
			/**
			 * The cursor type for galley and story views.
			 * @type {Adobe.Incopy.CursorTypes}
			 */
			public cursorType: Adobe.Incopy.CursorTypes;
			/**
			 * Font family name to use for text display.
			 * @type {string}
			 */
			public displayFont: string;
			/**
			 * Size to use for text display.
			 * @type {any}
			 */
			public displayFontSize: any;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Info column width.
			 * @type {any}
			 */
			public infoColumnWidth: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * Amount of spacing between lines.
			 * @type {Adobe.Incopy.LineSpacingType}
			 */
			public lineSpacingValue: Adobe.Incopy.LineSpacingType;
			/**
			 * The name of the preview font.
			 * @type {string}
			 */
			public overridePreviewFont: string;
			/**
			 * The parent of the GalleyPreference (a Application or 
			 * Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, displays the depth ruler.
			 * @type {boolean}
			 */
			public showDepthRuler: boolean;
			/**
			 * If true, displays footnotes in story and galley views.
			 * @type {boolean}
			 */
			public showFootnotes: boolean;
			/**
			 * If true, display the Info column.
			 * @type {boolean}
			 */
			public showInfoColumn: boolean;
			/**
			 * If true, show line numbers.
			 * @type {boolean}
			 */
			public showLineNumbers: boolean;
			/**
			 * If true, show paragraph break marks.
			 * @type {boolean}
			 */
			public showParagraphBreakMarks: boolean;
			/**
			 * If true, show paragraph style names.
			 * @type {boolean}
			 */
			public showParagraphStyleNames: boolean;
			/**
			 * If true, galley text is anti-aliased.
			 * @type {boolean}
			 */
			public smoothText: boolean;
			/**
			 * The text color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as an InCopy UI color. Can return: Array of 
			 * 3 Reals (0 - 255) or InCopyUIColors enumerator.
			 * @type {any}
			 */
			public textColor: any;
			/**
			 * If true, uses the override preview font.
			 * @type {boolean}
			 */
			public useOverridePreviewFont: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerGalleyPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerGalleyPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}