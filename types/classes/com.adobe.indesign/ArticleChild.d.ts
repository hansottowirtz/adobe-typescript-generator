/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ArticleChild extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the ArticleChild. */
			public readonly id: number;
			/** The index of the ArticleChild within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The underlying page item */
			public readonly itemRef: Adobe.Indesign.PageItem;
			/** The parent of the ArticleChild (a Group). */
			public readonly parent: Adobe.Indesign.Group;
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
			public addEventListenerArticleChild(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Moves the ArticleChild to the specified location.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the containing object.
			 * @param {ArticleChild} referenceParam The reference object. 
			 * Note: Required when the to value specifies before or after. 
			 * (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: ArticleChild): Adobe.Indesign.ArticleChild;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerArticleChild(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}