/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A point on a path */
		class PathPoint extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the position (coordinates) of the anchor point */
			public anchor: any[];
			/** location of the left direction point (in position) */
			public leftDirection: any[];
			/** the type of point: smooth/corner */
			public pointType: Adobe.Illustrator.PointType;
			/** location of the right direction point (out position) */
			public rightDirection: any[];
			/** the path point selected state */
			public selected: Adobe.Illustrator.PathPointSelection;
			/** delete the object */
			public remove(): void;
		}
	}
}