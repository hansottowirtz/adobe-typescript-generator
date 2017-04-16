/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Preference extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the Preference (a Application, Document, 
			 * XmlStory, Story, TextFrame, TextVariable, EPSText, Polygon, 
			 * GraphicLine, Rectangle, Oval, SplineItem, Group, Button, 
			 * SignatureField, TextBox, RadioButton, ListBox, ComboBox, 
			 * CheckBox, MultiStateObject, FormField, HtmlItem, Sound, 
			 * Movie, MediaItem, ImportedPage, PICT, WMF, PDF, EPS, Image, 
			 * Graphic, PageItem, TextWrapPreference, Page, Link, 
			 * TextDefault, ParagraphStyle, InsertionPoint, TextStyleRange, 
			 * Paragraph, TextColumn, Line, Word, Character, Text, 
			 * FindTextPreference, ChangeTextPreference, 
			 * FindGrepPreference, ChangeGrepPreference, 
			 * FindTransliteratePreference or 
			 * ChangeTransliteratePreference).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}