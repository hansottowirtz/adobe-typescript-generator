/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * A instance of a path object can be returned from the flash 
		 * object. path = fl.drawingLayer.newPath(); The path object is 
		 * used to define a sequence of straight line and/or curved 
		 * line segments. Typically used only when creating extensible 
		 * tools.
		 */
		class Path extends Adobe.Csawlib.CSHostObject {
			/**
			 * Returns an integer representing the number of points in the 
			 * path.
			 */
			public readonly nPts: number;
			/**
			 * Appends a cubic Bezier curve segment to the path. Typically 
			 * used only when creating extensible tools.
			 * @param {number} xAnchor x position of the first control 
			 * point.
			 * @param {number} yAnchor y position of the first control 
			 * point.
			 * @param {number} x1 
			 * @param {number} y1 y position of the second control point.
			 * @param {number} x2 
			 * @param {number} y y position of the third control point.
			 * @param {number} x4 x position of the fourth control point.
			 * @param {number} y4 y position of the fourth control point.
			 */
			public addCubicCurve(xAnchor: number, yAnchor: number, x1: number, y1: number, x2: number, y: number, x4: number, y4: number): void;
			/**
			 * Appends a quadratic Bezier segment to the path. Typically 
			 * used only when creating extensible tools.
			 * @param {number} xAnchor0 x position of the first control 
			 * point.
			 * @param {number} yAnchor0 y position of the first control 
			 * point.
			 * @param {number} xCtrl x position of the second control 
			 * point.
			 * @param {number} yCtrl y position of the second control 
			 * point.
			 * @param {number} xAnchor1 x position of the third control 
			 * point.
			 * @param {number} yAnchor1 y position of the third control 
			 * point.
			 */
			public addCurve(xAnchor0: number, yAnchor0: number, xCtrl: number, yCtrl: number, xAnchor1: number, yAnchor1: number): void;
			/**
			 * Adds a point to the path object. Typically used only when 
			 * creating extensible tools.
			 * @param {number} x x position of the point.
			 * @param {number} y y position of the point.
			 */
			public addPoint(x: number, y: number): void;
			/**
			 * Removes all points from the path. Typically used only when 
			 * creating extensible tools.
			 */
			public clear(): void;
			/**
			 * Appends a point at the location of the first point of the 
			 * path. If the path has no points no points are added. 
			 * Typically used only when creating extensible tools.
			 */
			public close(): void;
			/**
			 * Creates a shape on the Stage using the current stroke and 
			 * fill settings. The path is cleared after creating the shape. 
			 * makeShape has 2 optional Boolean arguments to supress the 
			 * fill and or stroke of the resulting shape object. If the 
			 * parameters are omitted, or set to false, the current values 
			 * for fill and stroke are used. Typically used only when 
			 * creating extensible tools.
			 * @param {boolean} bSupressFill if true the shape is not 
			 * filled.
			 * @param {boolean} bSupressStroke if true no stroke is applied 
			 * to the shape.
			 * @param {boolean} recalcFill 
			 * @param {boolean} recalcStroke 
			 * @param {boolean} forceFillForCompoundPath 
			 * @param {boolean} useEvenOddFillMode 
			 * @param {any} jsFrame jsFrame is the destination/parent of 
			 * the shape
			 */
			public makeShape(bSupressFill: boolean, bSupressStroke: boolean, recalcFill: boolean, recalcStroke: boolean, forceFillForCompoundPath: boolean, useEvenOddFillMode: boolean, jsFrame: any): void;
			/** Starts a new contour in the path. */
			public newContour(): void;
		}
	}
}