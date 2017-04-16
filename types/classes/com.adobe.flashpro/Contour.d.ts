/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * A contour represents a closed path of half edges on the 
		 * boundary of a shape.
		 */
		class Contour extends Adobe.Csawlib.CSHostObject {
			/**
			 * A read/write property which references a fill object. This 
			 * is similar to the Shape.getCustomFill() and 
			 * Shape.setCustomFill(fillObject) functions.
			 * @type {any}
			 */
			public fill: any;
			/**
			 * Returns true if the contour encloses an area, false 
			 * otherwise.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly interior: boolean;
			/**
			 * An integer indicating the orientation of the contour. -1 for 
			 * counterclockwise, 1 for clockwise, and 0 for a contour with 
			 * no area.
			 * @type {number}
			 * @readonly
			 */
			public readonly orientation: number;
			/**
			 * returns a halfEdge object on the contour.
			 * @returns {Adobe.Flashpro.HalfEdge}
			 */
			public getHalfEdge(): Adobe.Flashpro.HalfEdge;
		}
	}
}