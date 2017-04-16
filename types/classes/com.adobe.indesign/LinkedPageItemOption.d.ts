/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class LinkedPageItemOption extends Adobe.Indesign.Preference {
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
			 * The parent of the LinkedPageItemOption (a Application, 
			 * Document, PageItem, HtmlItem, FormField, SignatureField, 
			 * TextBox, RadioButton, ListBox, ComboBox, CheckBox, 
			 * MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, 
			 * SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, 
			 * ImportedPage, PICT, WMF, PDF, EPS, Image, Group or 
			 * TextFrame).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, appearance edits will be preserved during update.
			 * @type {boolean}
			 */
			public preserveAppearance: boolean;
			/**
			 * If true, frame content edits will be preserved during 
			 * update.
			 * @type {boolean}
			 */
			public preserveFrameContent: boolean;
			/**
			 * If true, interactivity edits will be preserved during 
			 * update.
			 * @type {boolean}
			 */
			public preserveInteractivity: boolean;
			/**
			 * If true, text wrap, hyperLinks, text frame options, object 
			 * export settings will be preserved during update.
			 * @type {boolean}
			 */
			public preserveOthers: boolean;
			/**
			 * If true, size and shape edits will be preserved during 
			 * update.
			 * @type {boolean}
			 */
			public preserveSizeAndShape: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, the linked Page Item will be updated while saving.
			 * @type {boolean}
			 */
			public updateLinkWhileSaving: boolean;
			/**
			 * If true, a warning will be shown if the update link 
			 * operation will override local edits.
			 * @type {boolean}
			 */
			public warnOnUpdateOfEditedPageItem: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerLinkedPageItemOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerLinkedPageItemOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}