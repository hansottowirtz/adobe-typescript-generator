/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class LinkedPageItemOption extends Adobe.Indesign.Preference {
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
			 * The parent of the LinkedPageItemOption (a Application, 
			 * Document, PageItem, HtmlItem, FormField, SignatureField, 
			 * TextBox, RadioButton, ListBox, ComboBox, CheckBox, 
			 * MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, 
			 * SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, 
			 * ImportedPage, PICT, WMF, PDF, EPS, Image, Group or 
			 * TextFrame).
			 */
			public readonly parent: any;
			/** If true, appearance edits will be preserved during update. */
			public preserveAppearance: boolean;
			/**
			 * If true, frame content edits will be preserved during 
			 * update.
			 */
			public preserveFrameContent: boolean;
			/**
			 * If true, interactivity edits will be preserved during 
			 * update.
			 */
			public preserveInteractivity: boolean;
			/**
			 * If true, text wrap, hyperLinks, text frame options, object 
			 * export settings will be preserved during update.
			 */
			public preserveOthers: boolean;
			/**
			 * If true, size and shape edits will be preserved during 
			 * update.
			 */
			public preserveSizeAndShape: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, the linked Page Item will be updated while saving. */
			public updateLinkWhileSaving: boolean;
			/**
			 * If true, a warning will be shown if the update link 
			 * operation will override local edits.
			 */
			public warnOnUpdateOfEditedPageItem: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerLinkedPageItemOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerLinkedPageItemOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}