/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextWrapPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, text wraps on the master spread apply to that 
			 * spread only, and not to any pages the master spread has been 
			 * applied to.
			 */
			public applyToMasterPageOnly: boolean;
			/**
			 * The contour of the text wrap. Valid only when when text wrap 
			 * type is contour.
			 */
			public readonly contourOptions: Adobe.Incopy.ContourOption;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** If true, inverts the text wrap. */
			public inverse: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the TextWrapPreference (a PageItem, FormField, 
			 * MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, 
			 * SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, 
			 * ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, 
			 * Application or Document).
			 */
			public readonly parent: any;
			/** A collection of paths. */
			public readonly paths: Adobe.Incopy.Paths;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The text wrap mode. */
			public textWrapMode: Adobe.Incopy.TextWrapModes;
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
			 */
			public textWrapOffset: any;
			/** Text wrap side options. */
			public textWrapSide: Adobe.Incopy.TextWrapSideOptions;
			/**
			 * If true, the text wrap path has been explicitly modified by 
			 * the user.
			 */
			public readonly userModifiedWrap: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTextWrapPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerTextWrapPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}