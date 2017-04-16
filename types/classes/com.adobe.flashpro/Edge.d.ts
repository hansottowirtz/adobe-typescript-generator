/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Edge object represents an edge of an object on the 
		 * stage.
		 */
		class Edge extends Adobe.Csawlib.CSHostObject {
			/**
			 * An index into the unordered list of cubic segments that the 
			 * edge belongs to
			 * @type {number}
			 * @readonly
			 */
			public readonly cubicSegmentIndex: number;
			/**
			 * a unique identifier for the edge.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * 0 or 1. if 1 the edge is a straight line. In that case the 
			 * middle control point will be the bisector of the line joing 
			 * the 2 endpoints.
			 * @type {number}
			 * @readonly
			 */
			public readonly isLine: number;
			/**
			 * A read/write property which references a stroke object. This 
			 * is similar to the Shape.getCustomStroke() and 
			 * Shape.setCustomStroke(strokeObject) functions.
			 * @type {any}
			 */
			public stroke: any;
			/**
			 * Get a point object set to the location of the specified 
			 * control point of the edge
			 * @param {number} int_i i
			 * @returns {any}
			 */
			public getControl(int_i: number): any;
			/**
			 * Return a halfEdge object
			 * @param {number} index index
			 * @returns {Adobe.Flashpro.HalfEdge}
			 */
			public getHalfEdge(index: number): Adobe.Flashpro.HalfEdge;
			/**
			 * Set the position of the control point of the edge
			 * @param {number} index The first argument specifies which 
			 * argument to set. Use values 0, 1, or 2 for the beginning , 
			 * middle, and end control points respectively.
			 * @param {number} x The second argument specify the x location 
			 * of the control point. The locations are in floating point 
			 * pixel space.
			 * @param {number} y The third arguments specify the y location 
			 * of the control point. The locations are in floating point 
			 * pixel space.
			 * @returns {void}
			 */
			public setControl(index: number, x: number, y: number): void;
			/**
			 * Split the edge into 2 pieces.
			 * @param {number} t parameter value between 0 and 1 indicating 
			 * where to split the edge.
			 * @returns {void}
			 */
			public splitEdge(t: number): void;
		}
	}
}