/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A text path item */
		class TextPath extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the area of this path in square points */
			public readonly area: number;
			/** the mode used when compositing an object */
			public blendingMode: Adobe.Illustrator.BlendModes;
			/** should this be used as a clipping path? */
			public clipping: boolean;
			/** is this path closed? */
			public closed: boolean;
			/** can the text path be modified */
			public readonly editable: boolean;
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
			/** the height of the text path ( 0.0 - 16348.0 ) */
			public height: number;
			/** the left position of the text path */
			public left: number;
			/** Note assigned to the path */
			public note: string;
			/**
			 * the object's opacity (between 0.0 and 100.0) ( 0.0 - 100.0 )
			 */
			public opacity: number;
			public readonly pathPoints: Adobe.Illustrator.PathPoints;
			/** the polarity the path */
			public polarity: Adobe.Illustrator.PolarityValues;
			/** the position of the top left corner of the text path */
			public position: any[];
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
			/** the top position of the text path */
			public top: number;
			/** the width of the text path ( 0.0 - 16348.0 ) */
			public width: number;
			/**
			 * Set the path using the provided array of anchor points
			 * @param {any[]} pathPoints Array of anchor values for the 
			 * path points
			 */
			public setEntirePath(pathPoints: any[]): void;
		}
	}
}