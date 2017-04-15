/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Preference extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the Preference (a Application, Document, 
			 * XmlStory, Spread, FindChangeTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeFillTransparencySetting, 
			 * FindChangeContentTransparencySetting, MultiStateObject, 
			 * Button, FormField, Sound, Movie, MediaItem, EPSText, 
			 * Polygon, GraphicLine, Rectangle, Oval, SplineItem, 
			 * ImportedPage, PICT, WMF, PDF, EPS, Image, Graphic, Group, 
			 * TextFrame, PageItem, PageItemDefault, TransparencySetting, 
			 * StrokeTransparencySetting, FillTransparencySetting, 
			 * ContentTransparencySetting, FindObjectPreference, 
			 * ChangeObjectPreference, Story, TextVariable, 
			 * TextWrapPreference, Page, Book, Link, ObjectStyle, 
			 * MasterSpread, NamedGrid, TextDefault, ParagraphStyle, 
			 * InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, 
			 * Word, Character, Text, FindTextPreference, 
			 * ChangeTextPreference, FindGrepPreference, 
			 * ChangeGrepPreference, FindTransliteratePreference, 
			 * ChangeTransliteratePreference or DataMerge).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}