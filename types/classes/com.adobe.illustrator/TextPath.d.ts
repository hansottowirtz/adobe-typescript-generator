/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A text path item */
		class TextPath extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the area of this path in square points
			 * @type {number}
			 * @readonly
			 */
			public readonly area: number;
			/**
			 * the mode used when compositing an object
			 * @type {Adobe.Illustrator.BlendModes}
			 */
			public blendingMode: Adobe.Illustrator.BlendModes;
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
			 * can the text path be modified
			 * @type {boolean}
			 * @readonly
			 */
			public readonly editable: boolean;
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
			 * the height of the text path ( 0.0 - 16348.0 )
			 * @type {number}
			 */
			public height: number;
			/**
			 * the left position of the text path
			 * @type {number}
			 */
			public left: number;
			/**
			 * Note assigned to the path
			 * @type {string}
			 */
			public note: string;
			/**
			 * the object's opacity (between 0.0 and 100.0) ( 0.0 - 100.0 )
			 * @type {number}
			 */
			public opacity: number;
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
			 * the position of the top left corner of the text path
			 * @type {any[]}
			 */
			public position: any[];
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
			 * the top position of the text path
			 * @type {number}
			 */
			public top: number;
			/**
			 * the width of the text path ( 0.0 - 16348.0 )
			 * @type {number}
			 */
			public width: number;
			/**
			 * Set the path using the provided array of anchor points
			 * @param {any[]} pathPoints Array of anchor values for the 
			 * path points
			 * @returns {void}
			 */
			public setEntirePath(pathPoints: any[]): void;
		}
	}
}