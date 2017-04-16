/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MasterSpread extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the MasterSpread. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the MasterSpread. */
			public readonly allPageItems: any;
			/**
			 * The master spread applied to the MasterSpread. Can also 
			 * accept: NothingEnum enumerator.
			 */
			public readonly appliedMaster: Adobe.Incopy.MasterSpread;
			/** The name of the master spread. */
			public readonly baseName: string;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Incopy.Buttons;
			/** A collection of checkboxes. */
			public readonly checkBoxes: Adobe.Incopy.CheckBoxes;
			/** A collection of comboboxes. */
			public readonly comboBoxes: Adobe.Incopy.ComboBoxes;
			/** EPSTexts */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** A collection of form fields. */
			public readonly formFields: Adobe.Incopy.FormFields;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/** A collection of groups. */
			public readonly groups: Adobe.Incopy.Groups;
			/** A collection of guides. */
			public readonly guides: Adobe.Incopy.Guides;
			/** The unique ID of the MasterSpread. */
			public readonly id: number;
			/** The IDML component name of the MasterSpread. */
			public idmlComponentName: string;
			/** The index of the MasterSpread within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** A collection of listboxes. */
			public readonly listBoxes: Adobe.Incopy.ListBoxes;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/** The name of the MasterSpread. */
			public readonly name: string;
			/** The prefix of the master spread name. */
			public readonly namePrefix: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/** A collection of pages. */
			public readonly pages: Adobe.Incopy.Pages;
			/** The parent of the MasterSpread (a Document). */
			public readonly parent: Adobe.Incopy.Document;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Incopy.Polygons;
			/**
			 * The primary text frame through which text flows on the 
			 * MasterSpread. Must be a text frame or a type on a path 
			 * spline. Can also accept: NothingEnum enumerator.
			 */
			public readonly primaryTextFrame: Adobe.Incopy.PageItem;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of radio buttons. */
			public readonly radioButtons: Adobe.Incopy.RadioButtons;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/** A collection of signature fields. */
			public readonly signatureFields: Adobe.Incopy.SignatureFields;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/** A collection of text boxes. */
			public readonly textBoxes: Adobe.Incopy.TextBoxes;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerMasterSpread(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerMasterSpread(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}