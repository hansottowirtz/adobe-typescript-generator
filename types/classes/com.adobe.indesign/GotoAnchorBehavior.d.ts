/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Behavior */
		class GotoAnchorBehavior extends Adobe.Indesign.Behavior {
			/**
			 * The anchor item, specified as a bookmark or a hyperlink text 
			 * or page destination. Can return: Bookmark, 
			 * HyperlinkTextDestination or HyperlinkPageDestination.
			 */
			public anchorItem: any;
			/** The anchor name. */
			public readonly anchorName: string;
			/** The event which triggers the behavior. */
			public behaviorEvent: Adobe.Indesign.BehaviorEvents;
			/** If true, the behavior is enabled. */
			public enableBehavior: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The file path (colon delimited on the Mac OS). Can also 
			 * accept: File.
			 */
			public filePath: string;
			/** The unique ID of the GotoAnchorBehavior. */
			public readonly id: number;
			/**
			 * The index of the GotoAnchorBehavior within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the GotoAnchorBehavior. */
			public readonly name: string;
			/**
			 * The parent of the GotoAnchorBehavior (a Button, CheckBox, 
			 * ComboBox, ListBox, RadioButton, TextBox or SignatureField).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The zoom setting. */
			public zoomSetting: Adobe.Indesign.GoToZoomOptions;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGotoAnchorBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			/** Deletes the GotoAnchorBehavior. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerGotoAnchorBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}