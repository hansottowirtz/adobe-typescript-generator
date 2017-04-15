/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PathItem extends Adobe.Illustrator.PageItem {
			/** The area of this path in square points. */
			public readonly area: number;
			/** Should this be used as a clipping path? */
			public clipping: boolean;
			/** Is this path closed? */
			public closed: boolean;
			/** Should the even-odd rule be used to determine insideness? */
			public evenodd: boolean;
			/** Fill color. */
			public fillColor: Adobe.Illustrator.Color;
			/** Should the path be filled? */
			public filled: boolean;
			/** Will art beneath a filled object be overprinted? */
			public fillOverprint: boolean;
			/** Is this path a guide object? */
			public guides: boolean;
			/** The length of this path in points. */
			public readonly length: number;
			public readonly pathPoints: Adobe.Illustrator.PathPoints;
			/** The polarity the path. */
			public polarity: Adobe.Illustrator.PolarityValues;
			/** The resolution of the path. */
			public resolution: number;
			/** All the selected points in the path. */
			public readonly selectedPathPoints: any[];
			/** Type of line capping. */
			public strokeCap: Adobe.Illustrator.StrokeCap;
			/** Stroke color. */
			public strokeColor: Adobe.Illustrator.Color;
			/** Should the path be stroked? */
			public stroked: boolean;
			/** Dash lengths (set to {} for a solid line) */
			public strokeDashes: any[];
			/**
			 * The default distance into the dash pattern at which the 
			 * pattern should be started.
			 */
			public strokeDashOffset: number;
			/** Type of joints. */
			public strokeJoin: Adobe.Illustrator.StrokeJoin;
			/**
			 * Whether a join is mitered (pointed) or beveled (squared-off)
			 */
			public strokeMiterLimit: number;
			/** Will art beneath a stroked object be overprinted? */
			public strokeOverprint: boolean;
			/** Width of stroke. */
			public strokeWidth: number;
			/**
			 * Set the path using the provided array of path point (x, y) 
			 * coordinate pairs.
			 * @param {any} pathPoints - Array of (x, y) coordinate pairs 
			 * for the path points.
			 */
			public setEntirePath(pathPoints: any): void;
		}
	}
}