/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A point on a path */
		class PathPoint extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the position (coordinates) of the anchor point
			 * @type {any[]}
			 */
			public anchor: any[];
			/**
			 * location of the left direction point (in position)
			 * @type {any[]}
			 */
			public leftDirection: any[];
			/**
			 * the type of point: smooth/corner
			 * @type {Adobe.Illustrator.PointType}
			 */
			public pointType: Adobe.Illustrator.PointType;
			/**
			 * location of the right direction point (out position)
			 * @type {any[]}
			 */
			public rightDirection: any[];
			/**
			 * the path point selected state
			 * @type {Adobe.Illustrator.PathPointSelection}
			 */
			public selected: Adobe.Illustrator.PathPointSelection;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}