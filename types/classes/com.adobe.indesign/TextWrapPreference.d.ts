/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class TextWrapPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, text wraps on the master spread apply to that 
			 * spread only, and not to any pages the master spread has been 
			 * applied to.
			 * @type {boolean}
			 */
			public applyToMasterPageOnly: boolean;
			/**
			 * The contour of the text wrap. Valid only when when text wrap 
			 * type is contour.
			 * @type {Adobe.Indesign.ContourOption}
			 * @readonly
			 */
			public readonly contourOptions: Adobe.Indesign.ContourOption;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, inverts the text wrap.
			 * @type {boolean}
			 */
			public inverse: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the TextWrapPreference (a PageItem, HtmlItem, 
			 * FormField, SignatureField, TextBox, RadioButton, ListBox, 
			 * ComboBox, CheckBox, MultiStateObject, Button, MediaItem, 
			 * Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, 
			 * Rectangle, Oval, Graphic, ImportedPage, PICT, WMF, PDF, EPS, 
			 * Image, Group, TextFrame, Application, Document or 
			 * ObjectStyle).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of paths.
			 * @type {Adobe.Indesign.Paths}
			 * @readonly
			 */
			public readonly paths: Adobe.Indesign.Paths;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The text wrap mode.
			 * @type {Adobe.Indesign.TextWrapModes}
			 */
			public textWrapMode: Adobe.Indesign.TextWrapModes;
			/**
			 * The minimum space between text and the edges of the wrapped 
			 * object. The format for defining text wrap offset values 
			 * depends on the text wrap type. If text wrap type is jump 
			 * object text wrap, specify 2 values in the format [top, 
			 * bottom]. If text wrap type is next column text wrap or 
			 * contour, specify a single value. For bounding box text wrap, 
			 * specify 4 values in the format in the format [top, left, 
			 * bottom, right]. . Can return: Unit, Array of Units or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public textWrapOffset: any;
			/**
			 * Text wrap side options.
			 * @type {Adobe.Indesign.TextWrapSideOptions}
			 */
			public textWrapSide: Adobe.Indesign.TextWrapSideOptions;
			/**
			 * If true, the text wrap path has been explicitly modified by 
			 * the user.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly userModifiedWrap: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerTextWrapPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerTextWrapPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}