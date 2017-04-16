/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Path extends Adobe.Csawlib.CSHostObject {
			/**
			 * A list of the coordinates of all of the path points on the 
			 * path, including anchor points and left- and right-direction 
			 * points. When creating a path using this property, supply 
			 * either a list of anchor point coordinates ([[x1, y1], [x2, 
			 * y2], ...]) or a list of anchor point, left-direction point, 
			 * and right-direction point coordinates ([[[x1, y1], [x2, y2], 
			 * [x3, y3]], [[x4, y4], [x5, y5], [x6, y6]], ...]). Note: 
			 * Providing only anchor points results in a path on which all 
			 * of the path points are connected with straight line 
			 * segments; supplying the positions of left- and 
			 * right-direction points specifies curved line segments. Can 
			 * return: Array of Arrays of 2 Units.
			 * @type {any}
			 * @readonly
			 */
			public readonly entirePath: any;
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
			 * The index of the Path within its containing object.
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
			 * The parent of the Path (a SplineItem, Polygon, GraphicLine, 
			 * Rectangle, Oval, TextFrame, MediaItem, Sound, Movie, Button, 
			 * MultiStateObject, ClippingPathSettings or 
			 * TextWrapPreference).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of path points.
			 * @type {Adobe.Incopy.PathPoints}
			 * @readonly
			 */
			public readonly pathPoints: Adobe.Incopy.PathPoints;
			/**
			 * The path type.
			 * @type {Adobe.Incopy.PathType}
			 * @readonly
			 */
			public readonly pathType: Adobe.Incopy.PathType;
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
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerPath(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerPath(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}