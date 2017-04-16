/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ArticleMember extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the ArticleMember. */
			public readonly id: number;
			/**
			 * The index of the ArticleMember within its containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The underlying page item */
			public readonly itemRef: Adobe.Indesign.PageItem;
			/** The parent of the ArticleMember (a Article). */
			public readonly parent: Adobe.Indesign.Article;
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
			public addEventListenerArticleMember(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Moves the ArticleMember to the specified location.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the containing object.
			 * @param {ArticleMember} referenceParam The reference object. 
			 * Note: Required when the to value specifies before or after. 
			 * (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: ArticleMember): Adobe.Indesign.ArticleMember;
			/** Deletes the ArticleMember. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerArticleMember(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}