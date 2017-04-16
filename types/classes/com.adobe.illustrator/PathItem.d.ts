/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An artwork path item */
		class PathItem extends Adobe.Illustrator.PageItem {
			/** the area of this path in square points */
			public readonly area: number;
			/** should this be used as a clipping path? */
			public clipping: boolean;
			/** is this path closed? */
			public closed: boolean;
			/** should the even-odd rule be used to determine insideness? */
			public evenodd: boolean;
			/** fill color */
			public fillColor: Adobe.Illustrator.Color;
			/** should the path be filled? */
			public filled: boolean;
			/** will art beneath a filled object be overprinted? */
			public fillOverprint: boolean;
			/** is this path a guide object? */
			public guides: boolean;
			/** the length of this path in points */
			public readonly length: number;
			public readonly pathPoints: Adobe.Illustrator.PathPoints;
			/** the polarity the path */
			public polarity: Adobe.Illustrator.PolarityValues;
			/** The resolution of the path */
			public resolution: number;
			/** all the selected points in the path */
			public readonly selectedPathPoints: any[];
			/** type of line capping */
			public strokeCap: Adobe.Illustrator.StrokeCap;
			/** stroke color */
			public strokeColor: Adobe.Illustrator.Color;
			/** should the path be stroked? */
			public stroked: boolean;
			/** dash lengths (set to {} for a solid line) */
			public strokeDashes: any[];
			/**
			 * the default distance into the dash pattern at which the 
			 * pattern should be started
			 */
			public strokeDashOffset: number;
			/** type of joints */
			public strokeJoin: Adobe.Illustrator.StrokeJoin;
			/**
			 * whether a join is mitered (pointed) or beveled (squared-off)
			 */
			public strokeMiterLimit: number;
			/** will art beneath a stroked object be overprinted? */
			public strokeOverprint: boolean;
			/** width of stroke */
			public strokeWidth: number;
			/**
			 * Set the path using the provided array of path point (x, y) 
			 * coordinate pairs
			 * @param {any[]} pathPoints Array of (x, y) coordinate pairs 
			 * for the path points
			 */
			public setEntirePath(pathPoints: any[]): void;
		}
	}
}