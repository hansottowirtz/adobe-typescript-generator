/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An artwork path item */
		class PathItem extends Adobe.Illustrator.PageItem {
			/**
			 * the area of this path in square points
			 * @type {number}
			 * @readonly
			 */
			public readonly area: number;
			/**
			 * should this be used as a clipping path?
			 * @type {boolean}
			 */
			public clipping: boolean;
			/**
			 * is this path closed?
			 * @type {boolean}
			 */
			public closed: boolean;
			/**
			 * should the even-odd rule be used to determine insideness?
			 * @type {boolean}
			 */
			public evenodd: boolean;
			/**
			 * fill color
			 * @type {Adobe.Illustrator.Color}
			 */
			public fillColor: Adobe.Illustrator.Color;
			/**
			 * should the path be filled?
			 * @type {boolean}
			 */
			public filled: boolean;
			/**
			 * will art beneath a filled object be overprinted?
			 * @type {boolean}
			 */
			public fillOverprint: boolean;
			/**
			 * is this path a guide object?
			 * @type {boolean}
			 */
			public guides: boolean;
			/**
			 * the length of this path in points
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * @type {Adobe.Illustrator.PathPoints}
			 * @readonly
			 */
			public readonly pathPoints: Adobe.Illustrator.PathPoints;
			/**
			 * the polarity the path
			 * @type {Adobe.Illustrator.PolarityValues}
			 */
			public polarity: Adobe.Illustrator.PolarityValues;
			/**
			 * The resolution of the path
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * all the selected points in the path
			 * @type {any[]}
			 * @readonly
			 */
			public readonly selectedPathPoints: any[];
			/**
			 * type of line capping
			 * @type {Adobe.Illustrator.StrokeCap}
			 */
			public strokeCap: Adobe.Illustrator.StrokeCap;
			/**
			 * stroke color
			 * @type {Adobe.Illustrator.Color}
			 */
			public strokeColor: Adobe.Illustrator.Color;
			/**
			 * should the path be stroked?
			 * @type {boolean}
			 */
			public stroked: boolean;
			/**
			 * dash lengths (set to {} for a solid line)
			 * @type {any[]}
			 */
			public strokeDashes: any[];
			/**
			 * the default distance into the dash pattern at which the 
			 * pattern should be started
			 * @type {number}
			 */
			public strokeDashOffset: number;
			/**
			 * type of joints
			 * @type {Adobe.Illustrator.StrokeJoin}
			 */
			public strokeJoin: Adobe.Illustrator.StrokeJoin;
			/**
			 * whether a join is mitered (pointed) or beveled (squared-off)
			 * @type {number}
			 */
			public strokeMiterLimit: number;
			/**
			 * will art beneath a stroked object be overprinted?
			 * @type {boolean}
			 */
			public strokeOverprint: boolean;
			/**
			 * width of stroke
			 * @type {number}
			 */
			public strokeWidth: number;
			/**
			 * Set the path using the provided array of path point (x, y) 
			 * coordinate pairs
			 * @param {any[]} pathPoints Array of (x, y) coordinate pairs 
			 * for the path points
			 * @returns {void}
			 */
			public setEntirePath(pathPoints: any[]): void;
		}
	}
}