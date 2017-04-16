/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PathPoint extends Adobe.Csawlib.CSHostObject {
			/**
			 * The location of the path point on the page, in the format 
			 * [x, y].
			 * @type {any}
			 * @readonly
			 */
			public readonly anchor: any;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
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
			 * @readonly
			 */
			public readonly leftDirection: any;
			/**
			 * The parent of the PathPoint (a Path).
			 * @type {Adobe.Incopy.Path}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.Path;
			/**
			 * The path point type.
			 * @type {Adobe.Incopy.PointType}
			 * @readonly
			 */
			public readonly pointType: Adobe.Incopy.PointType;
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
			 * @readonly
			 */
			public readonly rightDirection: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerPathPoint(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerPathPoint(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}