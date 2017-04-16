/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PathPoint extends Adobe.Csawlib.CSHostObject {
			/**
			 * The location of the path point on the page, in the format 
			 * [x, y].
			 * @type {any}
			 */
			public anchor: any;
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
			 * The index of the PathPoint within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The left-direction point, which controls the curve of the 
			 * line segment preceding the path point on the path, in the 
			 * format [x, y].
			 * @type {any}
			 */
			public leftDirection: any;
			/**
			 * The parent of the PathPoint (a Path).
			 * @type {Adobe.Indesign.Path}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Path;
			/**
			 * The path point type.
			 * @type {Adobe.Indesign.PointType}
			 */
			public pointType: Adobe.Indesign.PointType;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The right-direction point, which controls the curve of the 
			 * line segment following the path point on the path, in the 
			 * format [x, y].
			 * @type {any}
			 */
			public rightDirection: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPathPoint(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Join this path point to another path point. The two points 
			 * must be end points and their paths combined into a single 
			 * path on a single page item.
			 * @param {PathPoint} referenceParam The reference object. The 
			 * path point to join to
			 * @param {JoinOptions} givenParam The join option to use. 
			 * (Optional)
			 * @returns {void}
			 */
			public join(referenceParam: PathPoint, givenParam: JoinOptions): void;
			/**
			 * Deletes the PathPoint.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerPathPoint(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}