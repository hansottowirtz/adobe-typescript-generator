/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Preference extends Adobe.Csawlib.CSHostObject {
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the Preference (a Application, Document, Book, 
			 * DataMerge, XmlStory, Spread, FindChangeTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeFillTransparencySetting, 
			 * FindChangeContentTransparencySetting, HtmlItem, 
			 * SignatureField, TextBox, RadioButton, ListBox, ComboBox, 
			 * CheckBox, MultiStateObject, Button, FormField, Sound, Movie, 
			 * MediaItem, EPSText, Polygon, GraphicLine, Rectangle, Oval, 
			 * SplineItem, ImportedPage, PICT, WMF, PDF, EPS, Image, 
			 * Graphic, Group, TextFrame, PageItem, PageItemDefault, 
			 * TransparencySetting, StrokeTransparencySetting, 
			 * FillTransparencySetting, ContentTransparencySetting, 
			 * FindObjectPreference, ChangeObjectPreference, Story, 
			 * TextVariable, TextWrapPreference, Page, Link, ObjectStyle, 
			 * MasterSpread, NamedGrid, TextDefault, ParagraphStyle, 
			 * InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, 
			 * Word, Character, Text, FindTextPreference, 
			 * ChangeTextPreference, FindGrepPreference, 
			 * ChangeGrepPreference, FindTransliteratePreference or 
			 * ChangeTransliteratePreference).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}